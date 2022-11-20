import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import * as topoJson from 'topojson-client';
import PropTypes from 'prop-types';

export const Globe = (props) => {
  const { sensitivity, onClick } = props;
  const svgRef = useRef(null);

  useEffect(() => {
    const width = svgRef.current.parentElement.clientWidth;
    const height = svgRef.current.parentElement.clientHeight - 50;
    // the main svg
    const svg = d3.select(svgRef.current)
      .attr('width', width)
      .attr('height', height);

    // remove old element before rebuild
    svg.selectAll('*').remove();

    // projection - orthographic
    const projection = d3.geoOrthographic()
      .scale(Math.min(width, height) / 2.5)
      .rotate([0, 0])
      .center([0, 0])
      .translate([width / 2, height / 2]);

    const initialScale = projection.scale();
    let path = d3.geoPath(projection);

    // globe outline
    const globe = svg.append("circle")
      .attr("fill", "none")
      .attr("stroke", "#000")
      .attr("stroke-width", "0.2")
      .attr("cx", width / 2)
      .attr("cy", height / 2)
      .attr("r", initialScale)


    // graticule lines
    const graticule = d3.geoGraticule()
      .step([10, 10]);

    svg.append('g')
      .attr("class", "graticules")
      .append("path")
      .datum(graticule)
      .attr("class", "graticule")
      .attr("d", path)
      .style("fill", "none")
      .style("stroke", "#ccc")
      .attr('stroke-width', '0.5px');

    // drag rotate
    const drag = d3.drag().on('drag', (event, d) => {
      const rotate = projection.rotate();
      const k = sensitivity / projection.scale();
      projection.rotate([
        rotate[0] + event.dx * k,
        rotate[1] - event.dy * k
      ]);
      path = d3.geoPath().projection(projection);
      svg.selectAll("path").attr("d", path);
    });
    // zoom
    const zoom = d3.zoom().on('zoom', (event, d) => {
      if (event.transform.k <= 0.3) {
        event.transform.k = 0.3
        return;
      }
      projection.scale(initialScale * event.transform.k);
      path = d3.geoPath().projection(projection);
      svg.selectAll("path").attr("d", path);
      globe.attr("r", projection.scale());
    });

    svg.call(drag).call(zoom);

    // Optional auto rotate
    // d3.timer(function (elapsed) {
    //   const rotate = projection.rotate()
    //   const k = sensitivity / projection.scale()
    //   projection.rotate([
    //     rotate[0] - 1 * k,
    //     rotate[1]
    //   ])
    //   path = d3.geoPath().projection(projection)
    //   svg.selectAll("path").attr("d", path)
    // }, 200);

    // const sequentialColorScale = d3.scaleSequential(d3.interpolateGreens).domain([0, 1]);
    const interpolator = d3.interpolateGreens;

    // add color scale legend
    svg.append('g')
      .attr("class", "scale")
      .attr("transform", `translate(${width / 2 - 250}, ${height - 30})`)
      .selectAll('rect')
      .data(d3.range(0, 1, 0.1))
      .join('rect')
      .attr("class", "scale-bin")
      .attr('x', function (d) {
        return d3.scaleLinear().range([0, 500])(d);
      })
      .attr('width', 51)
      .attr('height', 20)
      .style('fill', function (d) {
        return interpolator(d);
      });

    // draw countries
    (async () => {
      const json = await d3.json("/countries-110m.json");
      const { countries, land } = json.objects;
      const feature = topoJson.feature(json, countries);
      svg.append('g')
        .attr("class", "countries")
        .selectAll('path')
        .data(feature.features)
        .enter().append('path')
        .attr("class", "country")
        .attr("d", path)
        .style('fill', (d, i) => interpolator(Math.random()))
        .style('stroke', '#121212')
        .style('stroke-width', 0.3)
        .style("opacity", 0.8)
        .on("mouseover", function (e) {
          if (d3.select(this).classed("clicked")) {
            return;
          }
          d3.select(this)
            .style("stroke", "red")
            .style('stroke-width', 2);
        })
        .on("mouseout", function (e) {
          if (d3.select(this).classed("clicked")) {
            return;
          }
          d3.select(this)
            .style("stroke", "#121212")
            .style('stroke-width', 0.3);
        })
        .on("click", function (e, d) {
          // if not yet selected
          if (!d3.select(this).classed("clicked")) {
            // cancel select other countries
            d3.selectAll(".clicked")
              .classed("clicked", false)
              .style("stroke", "#121212")
              .style('stroke-width', 0.3);
            // select this country
            d3.select(this)
              .classed("clicked", true)
              .style("stroke", "red")
              .style('stroke-width', 2);
            const country = d.properties.name;
            onClick(country);

            // center selected country
            d3.select(this).transition()
              .duration(750)
              .tween("rotate", () => (t) => {
                let p = d3.geoCentroid(d);
                let r = d3.interpolate(projection.rotate(), [-p[0], -p[1]]);
                projection.rotate(r(t));
                svg.selectAll("path").attr("d", path);
              });
          } else {
            // cancel select all countries
            d3.selectAll(".clicked").classed("clicked", false).style("fill", "#e7e7e7");
          }
        });

    })();
  }, []);

  return (
      <svg ref={svgRef} />
  )
}

Globe.propType = {
  sensitivity: PropTypes.number,
}