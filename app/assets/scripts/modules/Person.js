function Person(fullName, favColor) {
  this.name = fullName;
  this.favoriteColor = favColor;
  this.greet = function() {
    console.log("Hello, my name is " + this.name + "and my fav color is " + this.favColor;)
  }
}

module.exports = Person;
