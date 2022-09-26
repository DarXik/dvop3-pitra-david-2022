"use strict";

var myArray = ["Lodash", "React", "Next", "Strapi", "Axios", "Typescript"];
myArray.forEach(function (element) {
  console.log(element);
});
myArray.forEach(function (element) {
  console.log(myArray.reverse());
});
myArray.forEach(function (element) {
  console.log(myArray.sort());
});
var car = {
  Brand: "Tesla",
  Model: "Y",
  Year: "2022"
};
var paramBrand = console.log(car.Brand);
var paramModel = console.log(car.Model);
var paramYear = console.log(car.Year);
var randomNo = Math.random() * 555;
console.log("Náhodné číslo je ${randomNo}");