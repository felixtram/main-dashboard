/**
 * @module groupedBar
 * @description Grouped bar chart module 
 * @requires d3
 * @exports groupedBarChart
 */

import * as d3 from "d3";

/**
 * @function groupedBarChart
 * @description Creates and configures the charting function 
 * @returns {function} chart - Charting function that takes an svg selection and data
 */
export default function groupedBarChart(){

  var width = 500;
  var height = 100;
  var classMap =  {};
  var x0 = null;
  var x1 = null;
  var y = null;
  var classMapFunction = function (d){
    return classMap[ d.name ];
  }
  //used for formatting y axis
  var column;
  var groupRangeFunction;

  function chart(svg, data){

    var groupRangeFunction = function(d) { return "translate(" + x0(d.Issuer) + ",0)"; };

    x0 = d3.scaleBand()
      .rangeRound([0, width])
      .domain(data.map(function(d) { return d.Issuer; }))
      .paddingInner(0.1)
      .paddingOuter(0)
    ;

     x1 = d3.scaleBand()
      .paddingOuter(0.05)        
      .domain(data.columns)
      .paddingInner(0.05)
      .rangeRound([0, x0.bandwidth()])
    ;   
    
    y = d3.scaleLinear()
        .range([height, 0])
        .domain([0, d3.max(data, function(d) { return d3.max(d.groups, function(d) { return d.value; }); })]);
    ;

    var tickFormatFunc;
    if ( column == "n_trans" || column == "amt_sale" || column == "amt_fee" || column== "n_card"){
      tickFormatFunc = function(d){
        var t = d/1000000;
        return t+"m" }
    }
    //else if ( column == "int_rate"){
      //tickFormatFunc = d3.format(',.3f')      
    //}
    //else{
      //tickFormatFunc = d3.format(',.2f');
    //}

    //create axes
    var xAxis = d3.axisBottom()
        .scale(x0)
        .tickSize(0)
        .tickPadding(10)
    ;
    var yAxis = d3.axisLeft()
        .scale(y)
        .tickFormat(tickFormatFunc)
        //.ticks(5)
        .tickSizeInner(-width)
    ;

    if (svg.selectAll(".x.axis")._groups[0].length < 1){
      svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis)
      ;  
    }

    if (svg.selectAll(".y.axis")._groups[0].length < 1){
      svg.append("g")
        .attr("class", "y axis")
        .call(yAxis)
      ;  
    }
    else{
      //update y axis
      var t =  svg.transition().duration(1000);
      t.selectAll(".y.axis").call(yAxis);
    }

    // group of bars
    var issuer = svg.selectAll(".issuer")
      .data(data);

    var enterAndUpdate = 
      issuer.enter().append("g")
      .merge(issuer)
      .attr("class", "issuer")
      .attr("transform", groupRangeFunction)
    ;

    //each bar
    var sel = enterAndUpdate.selectAll("rect")
      .data(function(d) { return d.groups; }, (d)=> d.name);
      
    sel
      .enter().append("rect")
        .attr("class", classMapFunction)
      .merge(sel)
        .attr("title", function(d){return d.name + ": " + d.value;})
        .transition()
        .duration(1000)
          .attr("width", x1.bandwidth())
          .attr("x", function(d) {  return x1(d.name); })
        .transition()
        .duration(1000)  
          .attr("y", function(d) { return y(d.value); })
          .attr("height", function(d) { return height - y( d.value); })
    ;

    sel.exit()
      .transition()
      .duration(1000)
        .attr("height", 0)
        .attr("y", function(d) {return height})
      //.remove() 
    ;
  }

  chart.width = function(value){
    if (!arguments.length) return width;
    width = value;
    return chart;
  }
  chart.height = function(value){
    if (!arguments.length) return height;
    height = value;
    return chart; 
  }
  chart.classMap = function(value){
    if (!arguments.length) return classMap;
    classMap = value;
    return chart;
  }
  chart.classMapFunction = function(value){
    if(!arguments.length) return classMapFunction;
    classMapFunction = value;
    return chart;
  }
  chart.x0 = function(value){
    if (!arguments.length) return x0;
    x0 = value;
    return chart;
  }
  chart.x1 = function(value){
    if (!arguments.length) return x1;
    x1 = value;
    return chart;
  }

  chart.y = function(value){
    if (!arguments.length) return y;
    y = value;
    return chart;
  }

  chart.column = function(value){
    if (!arguments.length) return column;
    column = value;
    return chart;
  }

  chart.groupRangeFunction = function(value){
    if (!arguments.length) return groupRangeFunction;
    groupRangeFunction = value;
    return chart;
  }

  return chart;
}

d3.selection.prototype.moveToBack = function() {  
    return this.each(function() { 
        var firstChild = this.parentNode.firstChild; 
        if (firstChild) { 
            this.parentNode.insertBefore(this, firstChild); 
        } 
    });
};
