


// set the date we're counting down to
var target_date = new Date("Oct 31, 2017").getTime();
 
// variables for time units
var days, hours, minutes, seconds;

AFRAME.registerComponent('countdown', {
	
  tick: function (oldData) {
    var data = this.data;
    var el = this.el;

    var current_date = new Date().getTime();
    var seconds_left = (target_date - current_date) / 1000;
 
    // do some time calculations
    days = parseInt(seconds_left / 86400);
    seconds_left = seconds_left % 86400;
     
    hours = parseInt(seconds_left / 3600);
    seconds_left = seconds_left % 3600;
     
    minutes = parseInt(seconds_left / 60);
    seconds = parseInt(seconds_left % 60);
     
    // format countdown string + set tag value
    countdown = days + " : " + hours + " : " + minutes + " : " + seconds;

    el.setAttribute('text', 'text:'+countdown+';font:#thingsFont;');

  }
})