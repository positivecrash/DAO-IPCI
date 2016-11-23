document.addEventListener('readystatechange', function() {
    if (document.readyState === "complete") {
      	var canvas = document.getElementById("canvasDots"),
    	ctx = canvas.getContext('2d');

		var 
			width = canvas.width = window.innerWidth,
			height = canvas.height = 52,
			colorDots = "#804732",
			colorConnects = "#804732";

		var stars = [], // Array that contains the stars
		    FPS = 80, // Frames per second
		    x = width/24, // Number of stars
		    mouse = {
		      x: 0,
		      y: 0
		    };  // mouse location

		// Push stars to array

		for (var i = 0; i < x; i++) {
		  stars.push({
		    x: Math.random() * width,
		    y: Math.random() * height,
		    radius: Math.random() * 5 + 2,
		    vx: Math.floor(Math.random() * 100) - 50,
		    vy: Math.floor(Math.random() * 100) - 50
		  });
		}

		// Draw the scene

		function draw() {
		  ctx.clearRect(0,0,width,height);
		  
		  for (var i = 0, x = stars.length; i < x; i++) {
		    var s = stars[i];
		  
		    ctx.fillStyle = colorDots;
		    ctx.beginPath();
		    ctx.arc(s.x, s.y, s.radius, 0, 2 * Math.PI);
		    ctx.fill();
		    ctx.fillStyle = 'black';
		  }
		  
		  ctx.beginPath();
		  for (var i = 0, x = stars.length; i < x; i++) {
		    var starI = stars[i];
		    ctx.moveTo(starI.x,starI.y); 
		    for (var j = 0, x = stars.length; j < x; j++) {
		      var starII = stars[j];
		      if(distance(starI, starII) < 100 ){
		        ctx.lineTo(starII.x,starII.y);
		      }
		      
		    }
		  }
		  ctx.lineWidth = 0.1;
		  ctx.strokeStyle = colorConnects;
		  ctx.stroke();
		}

		function distance( point1, point2 ){
		  var xs = 0;
		  var ys = 0;
		 
		  xs = point2.x - point1.x;
		  xs = xs * xs;
		 
		  ys = point2.y - point1.y;
		  ys = ys * ys;
		 
		  return Math.sqrt( xs + ys );
		}

		// Update star locations

		function update() {
		  for (var i = 0, x = stars.length; i < x; i++) {
		    var s = stars[i];
		  
		    s.x += s.vx / FPS;
		    s.y += s.vy / FPS;
		    
		    if (s.x < 0 || s.x > width) s.vx = -s.vx;
		    if (s.y < 0 || s.y > height) s.vy = -s.vy;
		  }
		}

		canvas.addEventListener('mousemove', function(e){
		  mouse.x = e.clientX;
		  mouse.y = e.clientY;
		});

		// Update and draw

		function tick() {
	  		draw();
		  	update();
		  	requestAnimationFrame(tick);
		}

		tick();
		addEventListener('resize', resize, false);

		function resize() {

		  	width = canvas.width = window.innerWidth;
			stars.length = 0;
			x = width/24;

			for (var i = 0; i < x; i++) {
			  stars.push({
			    x: Math.random() * width,
			    y: Math.random() * height,
			    radius: Math.random() * 5 + 2,
			    vx: Math.floor(Math.random() * 100) - 50,
			    vy: Math.floor(Math.random() * 100) - 50
			  });
			}
		}
    }
});