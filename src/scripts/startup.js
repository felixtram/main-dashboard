/***** jspm packages *****/
import jquery from 'jquery';
import bootstrap from 'bootstrap-sass';

/***** local packages *****/
import {getInsightsData} from 'model';
import Checkboxes from 'checkboxes';
import groupedBarChart from 'groupedBar';
import groupedBarController from 'groupedBarController';
import tableChart from 'table';
import donutChart from 'donut';
import * as d3 from "d3";

// console.log(getInsightsData("sig_credit"));
// console.log(getInsightsData("sig_debit", "All Issuers"));

/***************** Grouped Bar Chart ****************/

//get data from controller
var groupedBarData = groupedBarController();

//chart parameters
var width = 500;
var height = 100;
var margin = {top: 20, right: 20, bottom: 0, left: 0};
width = width - margin.right - margin.left;
height = height - margin.top - margin.bottom;

//create svg
var svg = d3.select("div#chartid")
  .append("div")
  .classed("svg-container", true)
  .append("svg")
  .attr("preserveAspectRatio", "xMinYMin meet")     
  .attr("viewBox","0 0 " + width + " " + height)
  //class to make it responsive
  .classed("svg-content-responsive", true)
;

var classMapFunction = function (d){
  return classMap[ d.name ];
}

var classMap =  {"Department Store": "fill-blue", "Grocery": "fill-red",
"Family Clothing": "fill-gray-light", "Fast Food": "fill-orange-yellow",
"Pharmacies": "fill-teal", "Total": "fill-gray-dark" };

//formatting for y axis
var formatPercent = function(d){ return d + "%"};

//define function to define range for a group
var groupRangeFunction = function(d) {return "translate(" + x0(d.Issuer) + ",0)"; };

//create scales
var x0 = d3.scaleBand()
  .rangeRound([0, width])
  .domain(groupedBarData.map(function(d) { return d.Issuer; }))
;
console.log( groupedBarData)

var jsonGroupNames = groupedBarData.columns;

var x1 = d3.scaleBand()
  .paddingOuter(1)
  .domain(jsonGroupNames)
  .rangeRound([0, x0.bandwidth()])
; 
var y = d3.scaleLinear()
  .range([height, 0])
  .domain([0, d3.max(groupedBarData, function(d) { return d3.max(d.groups, function(d) { return d.value; }); })]);
;

//create axes
var xAxis = d3.axisBottom()
  .scale(x0)
  .tickSizeInner(-height)
  .tickSizeOuter(0)
  .tickPadding(10)
;
var yAxis = d3.axisLeft()
  .scale(y)
  .tickFormat(formatPercent)
  .ticks(5)
  .tickSizeInner(-width)
  .tickSizeOuter(0)
  .tickPadding(10)
;
  
//draw axes
svg.append("g")
  .attr("class", "x axis")
  .attr("transform", "translate(0," + height + ")")
  .call(xAxis)
;
svg.append("g")
  .attr("class", "y axis")
  .call(yAxis)
  //.append("text")
  //.attr("transform", "rotate(-90)")
  //.attr("y", 6)
  //.attr("dy", ".71em")
  //.style("text-anchor", "end")
  //.text("percentage")
;

//chart config
var test = groupedBarChart()
  .width(width)
  .height(height)
  .classMap(classMap)
  .classMapFunction(classMapFunction)
  .x0( x0 )
  .x1( x1 )
  .y( y )
  .groupRangeFunction(groupRangeFunction)
;

window.test=test;

test(svg, groupedBarData);


/***************** TABLE ****************/
//Create basic table with class of table for bootstrap
var table = d3.select("#drawtable")
    .append("table")
    .attr("class", "table");


 table.append("thead");
 table.append("tbody");

//add import function to variable for use
var drawTable = tableChart();

//call data and then return table with data inside
d3.csv("scripts/charts/table/table-data-sample.csv", function (error, data) {
  drawTable(d3.select("#drawtable"), data);
});


 /***************** DONUT SIGNATURE DEBIT INTERRCHANGE FEES ****************/


 /***** USED FOR ALL DONUTS *****/
//get data for donuts
var myFinancialInstitution = getInsightsData("sig_debit", "My Financial Institution");

//remove total from data
myFinancialInstitution.splice(5, 1);

var constancyFunction = function(d){
  return d.mcc_name;
}

var classMapFunction = function(d){
  return classMap[d.data.mcc_name];
}

var classMap = {"Department Store": "fill-blue", "Grocery": "fill-red",
 "Family Clothing": "fill-gray-light", "Fast Food": "fill-orange-yellow",
  "Pharmacies": "fill-teal"};


// Donut 1 (AVG INTERCHANGE)
var svg = d3.select("div#donutid")
  .classed("svg-container", true)
  .append("svg")
  .attr("viewBox", "0 0 " + 500 + " " + 500)
  //class for responsivenesss
  .classed("svg-content-responsive-pie", true)
  .attr("width", 500)
  .attr("height", 500)
  .append("g")
  .attr("id", "donutchart")
  .attr("transform", "translate(" + 500 / 2 + "," + 500 / 2 + ")")
;

var valueFunction = function(d){
  return d.avg_fee;
}


var innerNumber = 0;
myFinancialInstitution.forEach(function(d,j){
  innerNumber += d.avg_fee;
});


innerNumber = innerNumber / myFinancialInstitution.length;

var test = donutChart()
  .classMap(classMap)
  .valueFunction(valueFunction)
  .constancyFunction(constancyFunction)
  .classMapFunction(classMapFunction)
  .innerRad(90)
  .innerNumber(innerNumber)
  .innerText("AVG INTERCHANGE")
  .padAngle(0.03)
;

test(svg, myFinancialInstitution);



// Donut 2 (TOTAL SALES)

var svgTwo = d3.select("div#donuttwo")
  .classed("svg-container", true)
  .append("svg")
  .attr("viewBox", "0 0 " + 500 + " " + 500)
  //class for responsivenesss
  .classed("svg-content-responsive-pie", true)
  .attr("width", 500)
  .attr("height", 500)
  .append("g")
  .attr("id", "donutchart")
  .attr("transform", "translate(" + 500 / 2 + "," + 500 / 2 + ")")
;

var valueFunctionTwo = function(d){
  return d.amt_sale;
}

var innerNumberTwo = 0;
myFinancialInstitution.forEach(function(d,j){
  innerNumberTwo += d.amt_sale;
});

var testTwo = donutChart()
  .classMap(classMap)
  .valueFunction(valueFunctionTwo)
  .constancyFunction(constancyFunction)
  .classMapFunction(classMapFunction)
  .innerRad(90)
  .innerNumber(innerNumberTwo)
  .innerText("TOTAL SALES")
  .padAngle(0.03)
;

testTwo(svgTwo, myFinancialInstitution)

//Donut 3 (TOTAL TRANS)
var svgThree = d3.select("div#donutthree")
  .classed("svg-container", true)
  .append("svg")
  .attr("viewBox", "0 0 " + 500 + " " + 500)
  //class for responsivenesss
  .classed("svg-content-responsive-pie", true)
  .attr("width", 500)
  .attr("height", 500)
  .append("g")
  .attr("id", "donutchart")
  .attr("transform", "translate(" + 500 / 2 + "," + 500 / 2 + ")")
;

var valueFunctionThree = function(d){
  return d.n_trans;
}

var innerNumberThree = 0;
myFinancialInstitution.forEach(function(d,j){
  innerNumberThree += d.n_trans;
});

var testThree = donutChart()
  .classMap(classMap)
  .valueFunction(valueFunctionThree)
  .constancyFunction(constancyFunction)
  .classMapFunction(classMapFunction)
  .innerRad(90)
  .innerNumber(innerNumberThree)
  .innerText("TOTAL TRANS")
  .padAngle(0.03)
;

testThree(svgThree, myFinancialInstitution)