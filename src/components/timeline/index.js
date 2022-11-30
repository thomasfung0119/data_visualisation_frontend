import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

export const Timeline = (props) => {
  const { country, confirmedCaseData } = props;
  const svgRef = useRef(null);

  useEffect(() => {
    if (!confirmedCaseData) return;
    const width = svgRef.current.parentElement.clientWidth;
    const height = svgRef.current.parentElement.clientHeight*.3;
    // the main svg
    var div = d3.select("body").append("div")
     .attr("class", "tooltip")
     .style("opacity", 0);
    const svg = d3.select(svgRef.current)
      .attr('width', width)
      .attr('height', height);

    // remove old element before rebuild
    svg.selectAll('*').remove();

    //draw timeline
    (async () => {
      const margin = { left: width*.07, top: height*.1, right: width*.07, bottom: height*.2 };

      const dates = [];
      let minNo = Infinity;
      let maxNo = -Infinity;
      confirmedCaseData.forEach(([dateString, caseNo], i) => {
        let date = new Date(dateString);
        confirmedCaseData[i][0] = date;
        dates.push(date);
        if (caseNo < minNo) minNo = caseNo;
        if (caseNo > maxNo) maxNo = caseNo;
      });

      const linearScale = d3.scaleLinear()
        .range([0.4, 1])
        .domain([minNo, maxNo])

      const xScale = d3.scaleTime()
        .range([margin.left, width - margin.right])
        .domain(d3.extent(dates));

      // add axis
      const xAxis = d3.axisBottom(xScale)
        .tickValues(dates)
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

      var div = d3.select("body").append("div")
     .attr("class", "tooltip")
     .style("opacity", 0);
      // add time line bubbles
      svg.append('g')
        .attr("class", "time-line")
        .selectAll("circle")
        .data(confirmedCaseData)
        .enter().append("circle")
        .attr("class", "time-line-bubble")
        .style("fill", "#75e2faa0")
        .attr('cx', (d) => xScale(d[0]))
        .attr('cy', height*.5)
        .attr('r', (d) => country ? Math.floor(linearScale(d[1]) * height*.2) : 0)

    })();
  }, [confirmedCaseData]);

  return (
    <svg ref={svgRef} />
  )
}
