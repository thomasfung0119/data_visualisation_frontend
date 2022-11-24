import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

export const Timeline = (props) => {
  const { country } = props;
  const svgRef = useRef(null);

  useEffect(() => {
    const width = svgRef.current.parentElement.clientWidth;
    const height = 40;
    // the main svg
    const svg = d3.select(svgRef.current)
      .attr('width', width)
      .attr('height', height);

    // remove old element before rebuild
    svg.selectAll('*').remove();

    //draw timeline
    (async () => {
      const margin = { left: 30, top: 10, right: 10, bottom: 20 };

      const data = [
        new Date("2021-08"),
        new Date("2021-09"),
        new Date("2021-10"),
        new Date("2021-11"),
        new Date("2021-12"),
        new Date("2022-01"),
        new Date("2022-02"),
        new Date("2022-03"),
        new Date("2022-04"),
        new Date("2022-05"),
        new Date("2022-06"),
      ];

      const xScale = d3.scaleTime()
        .range([margin.left, width - margin.right])
        .domain(d3.extent(data));

      // add axis
      const xAxis = d3.axisBottom(xScale)
        .tickFormat(d3.timeFormat('%Y-%m'));

      svg.append('g')
        .call(xAxis)
        .attr("class", "x-axis")
        .attr('transform', `translate(0,${height - margin.bottom})`);

      // style axis
      svg.select(".domain")
        .style("stroke", "white");
      svg.selectAll(".tick")
        .style("color", "white")
        .style("stroke-width", 0.3);

      // add time line bubbles
      svg.append('g')
        .attr("class", "time-line")
        .selectAll("circle")
        .data(data)
        .enter().append("circle")
        .attr("class", "time-line-bubble")
        .style("fill", "#75e2faa0")
        .attr('cx', (d) => xScale(d))
        .attr('cy', 20)
        .attr('r', (d) => country ? Math.floor(Math.random() * 6) + 5 : 0)
    })();
  }, [country]);

  return (
    <svg ref={svgRef} />
  )
}
