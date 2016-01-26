var animate = window.requestAnimationFrame ||
	window.webkitRequestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  function(callback) { window.setTimeout(callback, 1000/60) };
  
var canvas = document.getElementById("blockcanvas");
var width = 800;
var height = 500;
canvas.width = 800;
canvas.height = 500;


var context = canvas.getContext('2d');
blockwidth = document.getElementById('boxresolution').value;
blockheight = document.getElementById('boxresolution').value;
off = document.getElementById('offcolor').value;
on = document.getElementById('oncolor').value;
start = document.getElementById('start').value;

var can1 = document.getElementById("can1");
can1.width = 90;
can1.height = 60;

var can2 = document.getElementById("can2");
can2.width = 90;
can2.height = 60;

var can3 = document.getElementById("can3");
can3.width = 90;
can3.height = 60;

var can4 = document.getElementById("can4");
can4.width = 90;
can4.height = 60;

var can5 = document.getElementById("can5");
can5.width = 90;
can5.height = 60;

var can6 = document.getElementById("can6");
can6.width = 90;
can6.height = 60;

var can7 = document.getElementById("can7");
can7.width = 90;
can7.height = 60;

var can8 = document.getElementById("can8");
can8.width = 90;
can8.height = 60;


can1p = can1.getContext('2d');
can2p = can2.getContext('2d');
can3p = can3.getContext('2d');
can4p = can4.getContext('2d');
can5p = can5.getContext('2d');
can6p = can6.getContext('2d');
can7p = can7.getContext('2d');
can8p = can8.getContext('2d');

can1p.fillStyle = off;
can1p.fillRect(0, 0, 90, 60);
can1p.fillStyle = "silver";
can1p.fillRect(0, 30, 30, 30);
can1p.fillRect(60, 30, 30, 30);

can2p.fillStyle = off;
can2p.fillRect(0, 0, 90, 60);
can2p.fillStyle = "silver";
can2p.fillRect(0, 30, 30, 30);
can2p.fillRect(60, 30, 30, 30);

can3p.fillStyle = off;
can3p.fillRect(0, 0, 90, 60);
can3p.fillStyle = "silver";
can3p.fillRect(0, 30, 30, 30);
can3p.fillRect(60, 30, 30, 30);

can4p.fillStyle = off;
can4p.fillRect(0, 0, 90, 60);
can4p.fillStyle = "silver";
can4p.fillRect(0, 30, 30, 30);
can4p.fillRect(60, 30, 30, 30);

can5p.fillStyle = off;
can5p.fillRect(0, 0, 90, 60);
can5p.fillStyle = "silver";
can5p.fillRect(0, 30, 30, 30);
can5p.fillRect(60, 30, 30, 30);

can6p.fillStyle = off;
can6p.fillRect(0, 0, 90, 60);
can6p.fillStyle = "silver";
can6p.fillRect(0, 30, 30, 30);
can6p.fillRect(60, 30, 30, 30);

can7p.fillStyle = off;
can7p.fillRect(0, 0, 90, 60);
can7p.fillStyle = "silver";
can7p.fillRect(0, 30, 30, 30);
can7p.fillRect(60, 30, 30, 30);

can8p.fillStyle = off;
can8p.fillRect(0, 0, 90, 60);
can8p.fillStyle = "silver";
can8p.fillRect(0, 30, 30, 30);
can8p.fillRect(60, 30, 30, 30);


can1p.fillStyle = on;
can1p.fillRect(0, 0, 30, 30);
can1p.fillRect(30, 0, 30, 30);
can1p.fillRect(60, 0, 30, 30);
if (document.getElementById('switch1').checked)
{	can1p.fillRect(30, 30, 30, 30);}
else
{	can1p.fillStyle = off;
	can1p.fillRect(30, 30, 30, 30);}

can2p.fillStyle = on;
can2p.fillRect(0, 0, 30, 30);
can2p.fillRect(30, 0, 30, 30);
if (document.getElementById('switch2').checked)
{	can2p.fillRect(30, 30, 30, 30);}
else
{	can2p.fillStyle = off;
	can2p.fillRect(30, 30, 30, 30);}

can3p.fillStyle = on;
can3p.fillRect(0, 0, 30, 30);
can3p.fillRect(60, 0, 30, 30);
if (document.getElementById('switch3').checked)
{	can3p.fillRect(30, 30, 30, 30);}
else
{	can3p.fillStyle = off;
	can3p.fillRect(30, 30, 30, 30);}

can4p.fillStyle = on;
can4p.fillRect(0, 0, 30, 30);
if (document.getElementById('switch4').checked)
{	can4p.fillRect(30, 30, 30, 30);}
else
{	can4p.fillStyle = off;
	can4p.fillRect(30, 30, 30, 30);}

can5p.fillStyle = on;
can5p.fillRect(30, 0, 30, 30);
can5p.fillRect(60, 0, 30, 30);
if (document.getElementById('switch5').checked)
{	can5p.fillRect(30, 30, 30, 30);}
else
{	can5p.fillStyle = off;
	can5p.fillRect(30, 30, 30, 30);}

can6p.fillStyle = on;
can6p.fillRect(30, 0, 30, 30);
if (document.getElementById('switch6').checked)
{	can6p.fillRect(30, 30, 30, 30);}
else
{	can6p.fillStyle = off;
	can6p.fillRect(30, 30, 30, 30);}

can7p.fillStyle = on;
can7p.fillRect(60, 0, 30, 30);
if (document.getElementById('switch7').checked)
{	can7p.fillRect(30, 30, 30, 30);}
else
{	can7p.fillStyle = off;
	can7p.fillRect(30, 30, 30, 30);}

can8p.fillStyle = on;
if (document.getElementById('switch8').checked)
{	can8p.fillRect(30, 30, 30, 30);}
else
{	can8p.fillStyle = off;
	can8p.fillRect(30, 30, 30, 30);}



window.onload = function() {
  document.body.appendChild(canvas);
  
  };

function generate(){
  //animate(step);
  render();
}	

function topcanvas(){

off = document.getElementById('offcolor').value;
on = document.getElementById('oncolor').value;

can1p.fillStyle = off;
can1p.fillRect(0, 0, 90, 60);
can1p.fillStyle = "silver";
can1p.fillRect(0, 30, 30, 30);
can1p.fillRect(60, 30, 30, 30);

can2p.fillStyle = off;
can2p.fillRect(0, 0, 90, 60);
can2p.fillStyle = "silver";
can2p.fillRect(0, 30, 30, 30);
can2p.fillRect(60, 30, 30, 30);

can3p.fillStyle = off;
can3p.fillRect(0, 0, 90, 60);
can3p.fillStyle = "silver";
can3p.fillRect(0, 30, 30, 30);
can3p.fillRect(60, 30, 30, 30);

can4p.fillStyle = off;
can4p.fillRect(0, 0, 90, 60);
can4p.fillStyle = "silver";
can4p.fillRect(0, 30, 30, 30);
can4p.fillRect(60, 30, 30, 30);

can5p.fillStyle = off;
can5p.fillRect(0, 0, 90, 60);
can5p.fillStyle = "silver";
can5p.fillRect(0, 30, 30, 30);
can5p.fillRect(60, 30, 30, 30);

can6p.fillStyle = off;
can6p.fillRect(0, 0, 90, 60);
can6p.fillStyle = "silver";
can6p.fillRect(0, 30, 30, 30);
can6p.fillRect(60, 30, 30, 30);

can7p.fillStyle = off;
can7p.fillRect(0, 0, 90, 60);
can7p.fillStyle = "silver";
can7p.fillRect(0, 30, 30, 30);
can7p.fillRect(60, 30, 30, 30);

can8p.fillStyle = off;
can8p.fillRect(0, 0, 90, 60);
can8p.fillStyle = "silver";
can8p.fillRect(0, 30, 30, 30);
can8p.fillRect(60, 30, 30, 30);


can1p.fillStyle = on;
can1p.fillRect(0, 0, 30, 30);
can1p.fillRect(30, 0, 30, 30);
can1p.fillRect(60, 0, 30, 30);
if (document.getElementById('switch1').checked)
{	can1p.fillRect(30, 30, 30, 30);}
else
{	can1p.fillStyle = off;
	can1p.fillRect(30, 30, 30, 30);}

can2p.fillStyle = on;
can2p.fillRect(0, 0, 30, 30);
can2p.fillRect(30, 0, 30, 30);
if (document.getElementById('switch2').checked)
{	can2p.fillRect(30, 30, 30, 30);}
else
{	can2p.fillStyle = off;
	can2p.fillRect(30, 30, 30, 30);}

can3p.fillStyle = on;
can3p.fillRect(0, 0, 30, 30);
can3p.fillRect(60, 0, 30, 30);
if (document.getElementById('switch3').checked)
{	can3p.fillRect(30, 30, 30, 30);}
else
{	can3p.fillStyle = off;
	can3p.fillRect(30, 30, 30, 30);}

can4p.fillStyle = on;
can4p.fillRect(0, 0, 30, 30);
if (document.getElementById('switch4').checked)
{	can4p.fillRect(30, 30, 30, 30);}
else
{	can4p.fillStyle = off;
	can4p.fillRect(30, 30, 30, 30);}

can5p.fillStyle = on;
can5p.fillRect(30, 0, 30, 30);
can5p.fillRect(60, 0, 30, 30);
if (document.getElementById('switch5').checked)
{	can5p.fillRect(30, 30, 30, 30);}
else
{	can5p.fillStyle = off;
	can5p.fillRect(30, 30, 30, 30);}

can6p.fillStyle = on;
can6p.fillRect(30, 0, 30, 30);
if (document.getElementById('switch6').checked)
{	can6p.fillRect(30, 30, 30, 30);}
else
{	can6p.fillStyle = off;
	can6p.fillRect(30, 30, 30, 30);}

can7p.fillStyle = on;
can7p.fillRect(60, 0, 30, 30);
if (document.getElementById('switch7').checked)
{	can7p.fillRect(30, 30, 30, 30);}
else
{	can7p.fillStyle = off;
	can7p.fillRect(30, 30, 30, 30);}

can8p.fillStyle = on;
if (document.getElementById('switch8').checked)
{	can8p.fillRect(30, 30, 30, 30);}
else
{	can8p.fillStyle = off;
	can8p.fillRect(30, 30, 30, 30);}

	
}

function canvas1click(){
if (document.getElementById('switch1').checked)
{
		document.getElementById("switch1").checked = false;
}
else
{
		document.getElementById("switch1").checked = true;
}
topcanvas();
}

function canvas2click(){
if (document.getElementById('switch2').checked)
{
		document.getElementById("switch2").checked = false;
}
else
{
		document.getElementById("switch2").checked = true;
}
topcanvas();
}


function canvas3click(){
if (document.getElementById('switch3').checked)
{
		document.getElementById("switch3").checked = false;
}
else
{
		document.getElementById("switch3").checked = true;
}
topcanvas();
}


function canvas4click(){
if (document.getElementById('switch4').checked)
{
		document.getElementById("switch4").checked = false;
}
else
{
		document.getElementById("switch4").checked = true;
}
topcanvas();
}


function canvas5click(){
if (document.getElementById('switch5').checked)
{
		document.getElementById("switch5").checked = false;
}
else
{
		document.getElementById("switch5").checked = true;
}
topcanvas();
}


function canvas6click(){
if (document.getElementById('switch6').checked)
{
		document.getElementById("switch6").checked = false;
}
else
{
		document.getElementById("switch6").checked = true;
}
topcanvas();
}


function canvas7click(){
if (document.getElementById('switch7').checked)
{
		document.getElementById("switch7").checked = false;
}
else
{
		document.getElementById("switch7").checked = true;
}
topcanvas();
}


function canvas8click(){
if (document.getElementById('switch8').checked)
{
		document.getElementById("switch8").checked = false;
}
else
{
		document.getElementById("switch8").checked = true;
}
topcanvas();
}



function preset(){
	if(document.getElementById('preset').value === "0")
	{
		document.getElementById("switch1").checked = false;
		document.getElementById("switch2").checked = false;
		document.getElementById("switch3").checked = false;
		document.getElementById("switch4").checked = false;
		document.getElementById("switch5").checked = false;
		document.getElementById("switch6").checked = false;
		document.getElementById("switch7").checked = false;
		document.getElementById("switch8").checked = false;
		document.getElementById("start").selectedIndex = 0;
	}
	if(document.getElementById('preset').value === "1")
	{
		document.getElementById("switch1").checked = false;
		document.getElementById("switch2").checked = false;
		document.getElementById("switch3").checked = false;
		document.getElementById("switch4").checked = true;
		document.getElementById("switch5").checked = true;
		document.getElementById("switch6").checked = true;
		document.getElementById("switch7").checked = true;
		document.getElementById("switch8").checked = false;
		document.getElementById("start").selectedIndex = 0;
	}
	if(document.getElementById('preset').value === "2")
	{
		document.getElementById("switch1").checked = false;
		document.getElementById("switch2").checked = true;
		document.getElementById("switch3").checked = false;
		document.getElementById("switch4").checked = true;
		document.getElementById("switch5").checked = true;
		document.getElementById("switch6").checked = false;
		document.getElementById("switch7").checked = true;
		document.getElementById("switch8").checked = false;
		document.getElementById("start").selectedIndex = 0;
	}
	if(document.getElementById('preset').value === "3")
	{
		document.getElementById("switch1").checked = false;
		document.getElementById("switch2").checked = true;
		document.getElementById("switch3").checked = false;
		document.getElementById("switch4").checked = true;
		document.getElementById("switch5").checked = true;
		document.getElementById("switch6").checked = false;
		document.getElementById("switch7").checked = true;
		document.getElementById("switch8").checked = false;
		document.getElementById("start").selectedIndex = 4;
	}
	if(document.getElementById('preset').value === "4")
	{
		document.getElementById("switch1").checked = false;
		document.getElementById("switch2").checked = true;
		document.getElementById("switch3").checked = true;
		document.getElementById("switch4").checked = false;
		document.getElementById("switch5").checked = true;
		document.getElementById("switch6").checked = true;
		document.getElementById("switch7").checked = true;
		document.getElementById("switch8").checked = false;
		document.getElementById("start").selectedIndex = 0;
	}
	if(document.getElementById('preset').value === "5")
	{
		document.getElementById("switch1").checked = false;
		document.getElementById("switch2").checked = true;
		document.getElementById("switch3").checked = true;
		document.getElementById("switch4").checked = false;
		document.getElementById("switch5").checked = true;
		document.getElementById("switch6").checked = true;
		document.getElementById("switch7").checked = true;
		document.getElementById("switch8").checked = false;
		document.getElementById("start").selectedIndex = 4;
	}
	if(document.getElementById('preset').value === "6")
	{
		document.getElementById("switch1").checked = true;
		document.getElementById("switch2").checked = false;
		document.getElementById("switch3").checked = true;
		document.getElementById("switch4").checked = true;
		document.getElementById("switch5").checked = true;
		document.getElementById("switch6").checked = false;
		document.getElementById("switch7").checked = false;
		document.getElementById("switch8").checked = false;
		document.getElementById("start").selectedIndex = 4;
	}
	if(document.getElementById('preset').value === "7")
	{
		document.getElementById("switch1").checked = true;
		document.getElementById("switch2").checked = false;
		document.getElementById("switch3").checked = true;
		document.getElementById("switch4").checked = true;
		document.getElementById("switch5").checked = true;
		document.getElementById("switch6").checked = false;
		document.getElementById("switch7").checked = false;
		document.getElementById("switch8").checked = false;
		document.getElementById("start").selectedIndex = 5;
	}
	if(document.getElementById('preset').value === "8")
	{
		document.getElementById("switch1").checked = true;
		document.getElementById("switch2").checked = false;
		document.getElementById("switch3").checked = true;
		document.getElementById("switch4").checked = true;
		document.getElementById("switch5").checked = true;
		document.getElementById("switch6").checked = false;
		document.getElementById("switch7").checked = false;
		document.getElementById("switch8").checked = false;
		document.getElementById("start").selectedIndex = 6;
	}
  topcanvas();
  render();
	
}


var render = function() {

  context.fillStyle = on;
  context.fillRect(0, 0, width, height);
  blockwidth = document.getElementById('boxresolution').value;
  blockheight = document.getElementById('boxresolution').value;
  off = document.getElementById('offcolor').value;
  on = document.getElementById('oncolor').value;;
  start = document.getElementById('start').value;
  var rules = rulespopulate();
  var cells = cellpopulate(rules);
  render2(cells);
	
};

function render2(cells){
	for(h = 0; h < blockwidth; h++){
		for (i = 0; i < blockheight; i++) { 
		  context.fillStyle = cells[h][i];
		  context.fillRect(i*width/blockwidth, h*height/blockheight, width/blockwidth, height/blockheight);
		}
	}
}

var step = function() {
  update();
  render();
  animate(step);
}

var update = function() {
};

function rulespopulate(){

	var rules = new Array(8);

	if (document.getElementById('switch1').checked) {
		rules[0] = 1;
	} else {
		rules[0] = 0;
	}

	if (document.getElementById('switch2').checked) {
		rules[1] = 1;
	} else {
		rules[1] = 0;
	}

	if (document.getElementById('switch3').checked) {
		rules[2] = 1;
	} else {
		rules[2] = 0;
	}

	if (document.getElementById('switch4').checked) {
		rules[3] = 1;
	} else {
		rules[3] = 0;
	}

	if (document.getElementById('switch5').checked) {
		rules[4] = 1;
	} else {
		rules[4] = 0;
	}

	if (document.getElementById('switch6').checked) {
		rules[5] = 1;
	} else {
		rules[5] = 0;
	}

	if (document.getElementById('switch7').checked) {
		rules[6] = 1;
	} else {
		rules[6] = 0;
	}

	if (document.getElementById('switch8').checked) {
		rules[7] = 1;
	} else {
		rules[7] = 0;
	}

	return rules;

}

function cellpopulate(rules){
	var cells = new Array(blockwidth);

	for (var i = 0; i < blockwidth; i++) {
		cells[i] = new Array(blockheight);
	}
	
	for(h = 0; h < blockwidth; h++)
	{
		for (i = 0; i < blockheight; i++) 
		{ 
			cells[h][i] = off;
		}
	}
	
	if(start == "center")
		{
			cells[0][Math.floor((blockwidth - 1) / 2)] = on;
		}
	if(start == "left")
		{
			cells[0][0] = on;			
		}
	if(start == "right")
		{
			cells[0][blockwidth - 1] = on;			
		}
	if(start == "all")
		{
		for (i = 0; i < blockwidth; i++) 
		{ 
			cells[0][i] = on;
		}
		}
	if(start == "even")
		{
		for (i = 0; i < blockwidth; i += 2) 
		{ 
			cells[0][i] = on;
		}
		}
	if(start == "random")
		{
		for (i = 0; i < blockwidth; i++) 
		{ 
			if(Math.random() >= .5)
			{cells[0][i] = on;}
		}
		}
	if(start == "randoml")
		{
		for (i = 0; i < blockwidth; i++) 
		{ 
			if(Math.random() >= .75)
			{cells[0][i] = on;}
		}
		}
	if(start == "randomh")
		{
		for (i = 0; i < blockwidth; i++) 
		{ 
			if(Math.random() >= .25)
			{cells[0][i] = on;}
		}
		}
	if(start == "on")
		{
		for (i = 0; i < blockwidth; i++) 
		{ 
			cells[0][i] = on;
		}
		}


		
	for(h = 1; h < blockwidth; h++){
		for (i = 1; i < blockheight-1; i++) { 

			if((cells[h-1][i-1] === on)&&(cells[h-1][i] === on)&&((cells[h-1][i+1] === on)))
			{
				if(rules[0] === 0)
				{
					cells[h][i] = off;
				}
				else if(rules[0] === 1)
				{
					cells[h][i] = on;
				}
			}

			if((cells[h-1][i-1] === on)&&(cells[h-1][i] === on)&&((cells[h-1][i+1] === off)))
			{
				if(rules[1] === 0)
				{
					cells[h][i] = off;
				}
				else if(rules[1] === 1)
				{
					cells[h][i] = on;
				}
			}

			if((cells[h-1][i-1] === on)&&(cells[h-1][i] === off)&&((cells[h-1][i+1] === on)))
			{
				if(rules[2] === 0)
				{
					cells[h][i] = off;
				}
				else if(rules[2] === 1)
				{
					cells[h][i] = on;
				}
			}

			if((cells[h-1][i-1] === on)&&(cells[h-1][i] === off)&&((cells[h-1][i+1] === off)))
			{
				if(rules[3] === 0)
				{
					cells[h][i] = off;
				}
				else if(rules[3] === 1)
				{
					cells[h][i] = on;
				}
			}

			if((cells[h-1][i-1] === off)&&(cells[h-1][i] === on)&&((cells[h-1][i+1] === on)))
			{
				if(rules[4] === 0)
				{
					cells[h][i] = off;
				}
				else if(rules[4] === 1)
				{
					cells[h][i] = on;
				}
			}

			if((cells[h-1][i-1] === off)&&(cells[h-1][i] === on)&&((cells[h-1][i+1] === off)))
			{
				if(rules[5] === 0)
				{
					cells[h][i] = off;
				}
				else if(rules[5] === 1)
				{
					cells[h][i] = on;
				}
			}

			if((cells[h-1][i-1] === off)&&(cells[h-1][i] === off)&&((cells[h-1][i+1] === on)))
			{
				if(rules[6] === 0)
				{
					cells[h][i] = off;
				}
				else if(rules[6] === 1)
				{
					cells[h][i] = on;
				}
			}

			if((cells[h-1][i-1] === off)&&(cells[h-1][i] === off)&&((cells[h-1][i+1] === off)))
			{
				if(rules[7] === 0)
				{
					cells[h][i] = off;
				}
				else if(rules[7] === 1)
				{
					cells[h][i] = on;
				}
			}
			

			
		}
	}

	
	return cells;
	
}