
console.log("hook it upppp")

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');



var rect = function(){
	for(i=0; i<50; i++){
		ctx.beginPath();
		ctx.rect(100, 100, 200, 200);
		var cordx = Math.random()*600;
		var cordy = Math.random()*600;
		if(ctx.isPointInPath(cordx, cordy)){
				ctx.beginPath()
				ctx.arc(cordx, cordy, 10, 0, Math.PI * 2, true);
				ctx.fillStyle = "green"
				ctx.fill();
		} else {
				ctx.beginPath()
				ctx.arc(cordx, cordy, 10, 0, Math.PI * 2, true);
				ctx.fillStyle = "blue"
				ctx.fill();
		}

	}
}

var binny = function(){
	console.log("yahah")
}

var bunny = function(){
	for(i=0; i<50; i++) {
		ctx.beginPath();
		ctx.arc(195, 380, 60, 0, Math.PI*2, true);
		ctx.beginPath();
		ctx.ellipse(290, 340, 100, 120, 40 * Math.PI/150, 0, 2 * Math.PI)
		ctx.beginPath();
		ctx.ellipse(370, 240, 85, 55, 45 * Math.PI/150, 0, 2 * Math.PI)
		ctx.beginPath();
		ctx.ellipse(330, 150, 95, 30, 45 * Math.PI/105, 0, 2 * Math.PI)
		ctx.beginPath();
		ctx.ellipse(310, 155, 92, 28, 45 * Math.PI/170, 0, 2 * Math.PI)
		ctx.beginPath();
		var cordx = Math.random()*600;
		var cordy = Math.random()*600;
		if(ctx.isPointInPath(cordx, cordy)){
				ctx.beginPath()
				ctx.arc(cordx, cordy, 10, 0, Math.PI * 2, true);
				ctx.fillStyle = "green"
				ctx.fill();
		} else {
				ctx.beginPath()
				ctx.arc(cordx, cordy, 10, 0, Math.PI * 2, true);
				ctx.fillStyle = "blue"
				ctx.fill();
		}

	}
}
//
//
//
//
//
// 		{
// 			for(i=0; i<100; i++){
// 			ctx.beginPath()
// 			ctx.arc(cordx, cordy, 5, 0, Math.PI * 2, true);
// 			ctx.fillStyle = "green"
// 		} else {
// 		drawCircles = function(){
// 				for(i=0; i<100; i++){
// 				ctx.beginPath()
// 				ctx.arc(cordx, cordy, 5, 0, Math.PI * 2, true);
// 				ctx.fillStyle = "blue"
// 				}
// 			}
// 		}
// }
// }
// 	var drawCircles = function(){
// 		for(i=0; i<100; i++){
//
// 			ctx.beginPath()
// 			ctx.arc(cordx, cordy, 5, 0, Math.PI * 2, true);
// 		}
// 	}
// 	ctx.fillStyle = "green"
// 	ctx.fill();
// }
// var drawCircles = function(){
// 	for(i=0; i<100; i++){
// 		var cordx = Math.random()*600;
// 		var cordy = Math.random()*600;
// 		ctx.beginPath()
// 		ctx.arc(cordx, cordy, 5, 0, Math.PI * 2, true);
// 		ctx.fillStyle = "green"
// 		ctx.fill();
// 		var rect = function(){
		// 	ctx.rect(100, 100, 100, 100);
		// 	ctx.stroke();
		// 	if(ctx.isPointInPath(cordx, cordy)){
		// 		ctx.fillStyle = "red"
		// 	} else {ctx.fillStyle = "green"
		// 	}
		// 	ctx.fill();
		//
		// }
