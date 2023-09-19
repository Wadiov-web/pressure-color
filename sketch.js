let p;
let w;

function setup(){
	createCanvas(800, 500);
	
	
	background(0);
	//pixelDensity(1);

}

function draw(){
	
	//background(0);
	//w.step();
	//w.display();
	
	//p.display();
	//noLoop();

	//pressureColor(mouseX, 0, 1000)
	noisePressure()
}




















function pressureColor(pressure, scaleMin, scaleMax){
	
	let v = map(pressure, scaleMin, scaleMax, 1, 5);
	loadPixels();
	for(let x = 0; x < width; x++){
		for(let y = 0; y < height; y++){
			let index  = (x + y * width) * 4;
			if(v == 1){
				pixels[index+0] = 0
				pixels[index+1] = 0
				pixels[index+2] = 255
				pixels[index+3] = 255;
			}
			if(v > 1 & v <= 2){
				let variant =  map(v, 1, 2, 0, 255);
				pixels[index+0] = 0
				pixels[index+1] = variant
				pixels[index+2] = 255
				pixels[index+3] = 255;
			}
			if(v > 2 & v <= 3){
				let variant =  map(v, 2, 3, 255, 0);
				pixels[index+0] = 0
				pixels[index+1] = 255
				pixels[index+2] = variant
				pixels[index+3] = 255;
			}
			if(v > 3 & v <= 4){
				let variant =  map(v, 3, 4, 0, 255);
				pixels[index+0] = variant
				pixels[index+1] = 255
				pixels[index+2] = 0
				pixels[index+3] = 255;
			}
			if(v > 4 & v <= 5){
				let variant =  map(v, 4, 5, 255, 0);
				pixels[index+0] = 255
				pixels[index+1] = variant
				pixels[index+2] = 0
				pixels[index+3] = 255;
			}
				
		}
	}
	updatePixels();
}

function noisePressure(){
	loadPixels();
	let xoff = 0.01;
	for(let x = 0; x < width; x++){
		//let v = map(pressure, scaleMin, scaleMax, 1, 5);
			let yoff = 0.01;
			for(let y = 0; y < height; y++){
				let index  = (x + y * width) * 4;
				let v = map(noise(xoff, yoff),0,1,1,5);

				if(v == 1){
					pixels[index+0] = 0
					pixels[index+1] = 0
					pixels[index+2] = 255
					pixels[index+3] = 255;
				}
				if(v > 1 & v <= 2){
					let variant =  map(v, 1, 2, 0, 255);
					pixels[index+0] = 0
					pixels[index+1] = variant
					pixels[index+2] = 255
					pixels[index+3] = 255;
				}
				if(v > 2 & v <= 3){
					let variant =  map(v, 2, 3, 255, 0);
					pixels[index+0] = 0
					pixels[index+1] = 255
					pixels[index+2] = variant
					pixels[index+3] = 255;
				}
				if(v > 3 & v <= 4){
					let variant =  map(v, 3, 4, 0, 255);
					pixels[index+0] = variant
					pixels[index+1] = 255
					pixels[index+2] = 0
					pixels[index+3] = 255;
				}
				if(v > 4 & v <= 5){
					let variant =  map(v, 4, 5, 255, 0);
					pixels[index+0] = 255
					pixels[index+1] = variant
					pixels[index+2] = 0
					pixels[index+3] = 255;
				}
				yoff += 0.001;
			}
		xoff += 0.001;
	}
	updatePixels();
}








function rainbow(){
	loadPixels();
	for(let x = 0; x < width; x++){
		if(x < width/4){
			for(let y = 0; y < height; y++){
				let index  = (x + y * width) * 4;
				let variant =  map(x, 0, width/4, 0, 255);
				pixels[index+0] = 0
				pixels[index+1] = variant
				pixels[index+2] = 255
				pixels[index+3] = mouseX +100
			}
		}
		if(x >= width/4 && x < width/2){
			for(let y = 0; y < height; y++){
				let index  = (x + y * width) * 4;
				let variant =  map(x, width/4, width/2, 0, 255);
				pixels[index+0] = 0
				pixels[index+1] = 255
				pixels[index+2] = 255 - variant
				pixels[index+3] = mouseX +100
			}
		}
		if(x >= width/2 && x < width - width/4){
			for(let y = 0; y < height; y++){
				let index  = (x + y * width) * 4;
				let variant =  map(x, width/2, width - width/4, 0, 255);
				pixels[index+0] = variant
				pixels[index+1] = 255 
				pixels[index+2] = 0
				pixels[index+3] = mouseX +100
			}
		}
		if(x >= width - width/4 && x < width){
			for(let y = 0; y < height; y++){
				let index  = (x + y * width) * 4;
				let variant =  map(x, width - width/4, width, 0, 255);
				pixels[index+0] = 255 
				pixels[index+1] = 255 - variant
				pixels[index+2] = 0
				pixels[index+3] = mouseX +100
			}
		}
	}
	updatePixels();
}




function perlinNoise(){
	loadPixels();
	let xoff = 0.0;
	for(let x = 0; x < width; x++){
		let yoff = 0.0;
		for(let y = 0; y < height; y++){
			let index  = (x + y * width) * 4;
			let b = map(noise(xoff, yoff),0,1,0,255);
			//let b = map(random(xoff, yoff),0,5,0,255);

			pixels[index+0] = b
			pixels[index+1] = b
			pixels[index+2] = b
			pixels[index+3] = 255;
			yoff += 0.01;
			//b += 1
		}
		xoff += 0.01;
	}
	updatePixels();
}










