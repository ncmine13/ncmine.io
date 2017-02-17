// console.log("hooked upp")
//
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var picture = {
	rectangle: function(){
		ctx.fillStyle = "#DCE9E9"
		ctx.fillRect(100, 100, 300, 300)
	},
	circle: function(){
		ctx.arc(400, 200, 150, 0, Math.PI*2, true);
		ctx.fillStyle = "#DCE9E9"
		ctx.fill()
		ctx.beginPath()
	}

}
//
// var rectangle = function(){
// 	ctx.fillStyle = "#DCE9E9"
// 	ctx.fillRect(100, 100, 300, 300)
// }
// //
// var drawCircles = function(){
// 	for(i=0; i<50; i++){
// 		var cordx = Math.random()*800;
// 		var cordy = Math.random()*600;
// 		ctx.arc(cordx, cordy, 10, 0, Math.PI * 2, true);
// 		ctx.fillStyle = "green"
// 		ctx.fill();
// 		ctx.beginPath();
// 	}
// 	rectangle()
// 	//circle()
// }
//
// //I want at least 5 or 6 images to construct and i need about 10 questions per picture
// //store in objects to organize code
//
// //next step: figure out how to draw more complicated things in canvas
// //list: bunny,
//
//
// //have a function for each of these shapes/pictures, and give it a background-color that is the same as the canvas's background color. Embed this function in the draw circles function
