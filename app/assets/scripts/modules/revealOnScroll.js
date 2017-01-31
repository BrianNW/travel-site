import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {
  constructor(els, offset) {
    this.itemsToReveal = els;  //1.
    this.offsetPercentage = offset; //5. initiate second function
    this.hideInitially();  //4. initiate first function
    this.createWaypoints();
  }

  hideInitially() { //2.
    this.itemsToReveal.addClass("reveal-item");
  }

  createWaypoints() {  //3.
    var that = this;
    this.itemsToReveal.each(function() {
      var currentItem = this;
      new Waypoint({
        element: currentItem,  //dom element we want to watch for as we scroll down page
        handler: function() {  //what we want to happen when it's scrolled to
          $(currentItem).addClass("reveal-item--is-visible");
        },
        offset: that.offsetPercentage  //Will allow this waypoint to trigger earlier
      });
    });

  }

}

export default RevealOnScroll;


// need to install npm install waypoints --save to allow reveal scroll to work
// new RevealOnScroll($(".feature-item"), "85%"); & new RevealOnScroll($(".testimonial"), "85%"); in App.js
