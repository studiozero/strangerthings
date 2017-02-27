// set the date we're counting down to
var target_date = new Date("Oct 31, 2017").getTime();
 
// variables for time units
var days, hours, minutes, seconds, countdown;

var increment = function(){

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
}

var timer = setInterval(increment, 1000)

var prev = null;

AFRAME.registerComponent('countdown', {

	init: function(){
		prev = countdown;

		var scene = document.querySelector('a-scene');
		
		scene.addEventListener('enter-vr', function(){
			ga('send', {
				hitType: 'event',
				eventCategory: 'Action',
				eventAction: 'Entered VR',
			});
		})
	
	},
	
	tick: function () {

		if(prev != countdown){
			prev = countdown;			
			this.el.setAttribute('text', 'text:'+countdown+';font:#thingsFont;');
		}

		twitter_button.setAttribute('href', 'https://twitter.com/home?status='+ days +'%20days%20to%20go%20until%20%40Stranger_Things%20returns%20to%20%40netflix.%0A%0Astrangerthingscountdown.com%20%20%23strangerthingscountdown%20%23StrangerThings');

	}
})

