const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

const w = "500";
const h = "150";

const body = d3.select("body");

const container = body.selectAll("div").data(dataset).enter().append("div");
const svg = body.append("svg");

container.attr("class", "bar").style("height", (d) => d * 10 + "px");
svg.attr("class", "svg").style("width", w).style("height", h);

//create the bar charts
svg
  .selectAll("rect")
  .data(dataset)
  .enter()
  .append("rect")
  .attr("x", (d, i) => i * 30 - 5)
  .attr("y", (d, i) => h - 3 * d)
  .attr("width", 25)
  .attr("height", (d, i) => d * 3)
  .attr("fill", "navy")
  .attr("class", "bar_hover");

//add label to bars
//note: to add label, we select all text, bind that dataset
// we need x and y coord to precisely place the text on their
//corresponding bars
//to make text appear 3unit higher the bar, we need to  add 3 to y coord
svg
  .selectAll("text")
  .data(dataset)
  .enter()
  .append("text")
  .attr("x", (d, i) => i * 30)
  .attr("y", (d, i) => h - (3 * d + 3))
  .text((d) => d)
  .style("font-size", "20px")
  .style("fill", "red")
  .attr("class", "label")
  .append("title")
  .text((d) => d);

//tooltip give more info about the data
// append('titl').text(d => d)
