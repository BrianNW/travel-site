function Person(fullName, favColor) {
  this.name = fullName;
  this.favoriteColor = favColor;
  this.greet = function() {
    console.log("Hello, my name is " + this.name + " and my favorite color is " + this.favoriteColor + ".");
  }
}

exports.exampleProperty = "Super magical example";
exports.exampleFunction = function() {
  alert("Example!!!");
}
