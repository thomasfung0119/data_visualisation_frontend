import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

export const Timeline = (country) => {
  const svgRef = useRef(null);

  useEffect((country) => {
    const width = 600;
    const height = 45;
    // the main svg
    const svg = d3.select(svgRef.current)
      .attr('width', width)
      .attr('height', height);

    // remove old element before rebuild
    svg.selectAll('*').remove();

    //draw timeline
    (async () => {
      const margin = { left: 30, top: 10, right: 10, bottom: 20 };

      const xScale = d3.scaleTime()
        .range([margin.left, width - margin.right])
        .domain([new Date("2021-08"), new Date("2022-06")]);
      
      svg.append('g')
        .call(d3.axisBottom(xScale))
        .attr('transform', `translate(0,${height - margin.bottom})`);
      
      svg.append('circle')
        .style("fill", "Aqua")
        .attr('cx', xScale(new Date("2021-8")))
        .attr('cy', 20)
        .attr('r', Math.floor(Math.random(5)*6)+5)  
      svg.append('circle')
        .style("fill", "Aqua")
        .attr('cx', xScale(new Date("2021-9")))
        .attr('cy', 20)
        .attr('r', Math.floor(Math.random(5)*6)+5) 
      svg.append('circle')
        .style("fill", "Aqua")
        .attr('cx', xScale(new Date("2021-10")))
        .attr('cy', 20)
        .attr('r', Math.floor(Math.random(5)*6)+5) 
      svg.append('circle')
        .style("fill", "Aqua")
        .attr('cx', xScale(new Date("2021-11")))
        .attr('cy', 20)
        .attr('r', Math.floor(Math.random(5)*6)+5) 
      svg.append('circle')
        .style("fill", "Aqua")
        .attr('cx', xScale(new Date("2021-12")))
        .attr('cy', 20)
        .attr('r', Math.floor(Math.random(5)*6)+5) 
      svg.append('circle')
        .style("fill", "Aqua")
        .attr('cx', xScale(new Date("2022-1")))
        .attr('cy', 20)
        .attr('r', Math.floor(Math.random(5)*6)+5) 
      svg.append('circle')
        .style("fill", "Aqua")
        .attr('cx', xScale(new Date("2022-2")))
        .attr('cy', 20)
        .attr('r', Math.floor(Math.random(5)*6)+5) 
      svg.append('circle')
        .style("fill", "Aqua")
        .attr('cx', xScale(new Date("2022-3")))
        .attr('cy', 20)
        .attr('r', Math.floor(Math.random(5)*6)+5) 
      svg.append('circle')
        .style("fill", "Aqua")
        .attr('cx', xScale(new Date("2022-4")))
        .attr('cy', 20)
        .attr('r', Math.floor(Math.random(5)*6)+5)
      svg.append('circle')
        .style("fill", "Aqua")
        .attr('cx', xScale(new Date("2022-5")))
        .attr('cy', 20)
        .attr('r', Math.floor(Math.random(5)*6)+5)
      svg.append('circle')
        .style("fill", "Aqua")
        .attr('cx', xScale(new Date("2022-6")))
        .attr('cy', 20)
        .attr('r', Math.floor(Math.random(5)*6)+5)
      svg.append('circle')
        .style("fill", "Aqua")
        .attr('cx', xScale(new Date("2022-7")))
        .attr('cy', 20)
        .attr('r', Math.floor(Math.random(5)*6)+5)
      svg.append('circle')
        .style("fill", "Aqua")
        .attr('cx', xScale(new Date("2022-8")))
        .attr('cy', 20)
        .attr('r', Math.floor(Math.random(5)*6)+5)
    })();
  }, []);

  return (
    <svg ref={svgRef} />
  )
}
