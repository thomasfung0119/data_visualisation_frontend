import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

export const Timeline = (country) => {
  const svgRef = useRef(null);

  useEffect(() => {
    const width = svgRef.current.parentElement.clientWidth;
    const height = svgRef.current.parentElement.clientHeight;
    // the main svg
    const svg = d3.select(svgRef.current)
      .attr('width', width)
      .attr('height', height);

    // remove old element before rebuild
    svg.selectAll('*').remove();

    //draw timeline
    (async () => {
      const margin = { left: 30, top: 10, right: 10, bottom: 20 };

      const xScale = d3.scaleLinear()
        .range([margin.left, width - margin.right])
        .domain([0, 40]);
      
      svg.append('g')
        .call(d3.axisBottom(xScale))
        .attr('transform', `translate(0,${height - margin.bottom})`);
      
      // Add circles to svg, more explanation in the cell below
      svg.selectAll('circle')
        .data([10, 20, 30, 40])
        .enter()
        .append('circle')
          .attr('cx', d => xScale(d))
          .attr('cy', 20)
          .attr('r', 10)
          .attr('fill', 'SteelBlue')

    })();
  }, []);

  return (
    <svg ref={svgRef} />
  )
}
