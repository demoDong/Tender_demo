//创建循环定时器
var stopBjRed = setInterval(animateBjRed,1);
var stopRed = setInterval(animateRed, 1);
var stopOrange = setInterval(animateOrange, 1); 
var stopGreen = setInterval(animateGreen, 1); 
var stopPurple = setInterval(animatePurple, 1); 
var stopBlue = setInterval(animateBlue, 1); 
clearInterval( stopRed);
clearInterval( stopOrange);
clearInterval( stopGreen);
clearInterval( stopPurple);
clearInterval( stopBlue);
clearInterval( stopBjRed);

//创建延时定时器
var delayRed = setTimeout(fadeRed,2000); 
var delayOrange = setTimeout(fadeOrange,2000); 
var delayGreen = setTimeout(fadeGreen,2000); 
var delayPurple = setTimeout(fadePurple,2000); 
var delayBlue = setTimeout(fadeBlue,2000); 
clearTimeout(fadeRed);
clearTimeout(fadeOrange);
clearTimeout(fadeGreen);
clearTimeout(fadePurple);
clearTimeout(fadeBlue);



var i=0;
var b=0;			
var c1x = 0;
var c1y = 0;
var c2x = 0;
var c2y = 0;
var tx = 0;
var ty = 0;
function curve(p1x,p1y,cx,cy,p2x,p2y,i) {
	var p1x = p1x;
	var p1y = p1y;
	var cx = cx;
	var cy = cy;
	var p2x = p2x;
	var p2y = p2y;
	var i=i;
	 c1x = p1x + (cx - p1x) * i/550;
     c1y = p1y + (cy - p1y) * i/550;
     c2x = cx + (p2x - cx) * i/550;
     c2y = cy + (p2y - cy) * i/550;
     tx = c1x + (c2x - c1x) * i/550;
     ty = c1y + (c2y - c1y) * i/550;
	 return c1x,c1y,c2x,c2y,tx,ty;
}		


//创建北京红色线条 
function animateBjRed() {
   	var paper = new Raphael(document.getElementById('canvas_container'), 1800, 900);
    var bjRed1 = paper.path('M427,517 Q427,517,427,517 ').attr({'arrow-end' : 'block' ,'stroke':'#DB4E5F','stroke-width':'3','opacity':'0','stroke-dasharray':'.'});
	var bjRed2 = paper.path('M524,513 Q524,513,524,513').attr({'arrow-end' : 'block' ,'stroke':'#DB4E5F','stroke-width':'3','opacity':'0','stroke-dasharray':'.'});
	var bjRed3 = paper.path('M478,556 Q478,556,478,556').attr({'arrow-end' : 'block' ,'stroke':'#DB4E5F','stroke-width':'3','opacity':'0','stroke-dasharray':'.'});
	var bjRed4 = paper.path('M427,517 Q427,517,427,517 ').attr({'arrow-end' : 'block' ,'stroke':'#DB4E5F','stroke-width':'3','opacity':'0','stroke-dasharray':'.'});
	var bjRed5 = paper.path('M524,513 Q524,513,524,513').attr({'arrow-end' : 'block' ,'stroke':'#DB4E5F','stroke-width':'3','opacity':'0','stroke-dasharray':'.'});
	var bjRed6 = paper.path('M478,556 Q478,556,478,556').attr({'arrow-end' : 'block' ,'stroke':'#DB4E5F','stroke-width':'3','opacity':'0','stroke-dasharray':'.'});
	if(i>550){
		clearInterval(stopBjRed); 
	}
	i=i+15;		
	curve(427,517,620,540,680,750,i);	
	bjRed1.animate({
		path:'M427,517 Q'+c1x+','+c1y+','+tx+','+ty+'',
		opacity:i/300
		}, 1);
	curve(524,513,620,550,680,750,i);
	bjRed2.animate({
		path:'M524,513 Q'+c1x+','+c1y+','+tx+','+ty+'',
		opacity:i/550
		}, 1);
	curve(478,556,620,580,680,750,i);
	bjRed3.animate({
		path:'M478,556 Q'+c1x+','+c1y+','+tx+','+ty+'',
		opacity:i/300
		}, 1);
	curve(427,517,620,400,865,445,i);	
	bjRed4.animate({
		path:'M427,517 Q'+c1x+','+c1y+','+tx+','+ty+'',
		opacity:i/300
		}, 1);
	curve(524,513,620,450,865,445,i);
	bjRed5.animate({
		path:'M524,513 Q'+c1x+','+c1y+','+tx+','+ty+'',
		opacity:i/550
		}, 1);
	curve(478,556,620,460,865,445,i);
	bjRed6.animate({
		path:'M478,556 Q'+c1x+','+c1y+','+tx+','+ty+'',
		opacity:i/300
		}, 1);	
}



//创建全部红色线条
function animateRed() {
	var paper = new Raphael(document.getElementById('canvas_container'), 1800, 900);
	var bjRed1 = paper.path('M427,517 Q427,517,427,517 ').attr({'arrow-end' : 'block' ,'stroke':'#DB4E5F','stroke-width':'3','opacity':'0','stroke-dasharray':'.'});
	var bjRed2 = paper.path('M524,513 Q524,513,524,513').attr({'arrow-end' : 'block' ,'stroke':'#DB4E5F','stroke-width':'3','opacity':'0','stroke-dasharray':'.'});
	var bjRed3 = paper.path('M478,556 Q478,556,478,556').attr({'arrow-end' : 'block' ,'stroke':'#DB4E5F','stroke-width':'3','opacity':'0','stroke-dasharray':'.'});
	var bjRed4 = paper.path('M1413,528 Q1413,528,1413,528').attr({'arrow-end' : 'block' ,'stroke':'#DB4E5F','stroke-width':'3','opacity':'0','stroke-dasharray':'.'});
	var bjRed5 = paper.path('M1447,501 Q1447,501,1447,501').attr({'arrow-end' : 'block' ,'stroke':'#DB4E5F','stroke-width':'3','opacity':'0','stroke-dasharray':'.'});
	var sxxbRed = paper.path('M1530,370 Q1530,370,1530,370').attr({'arrow-end' : 'block' ,'stroke':'#DB4E5F','stroke-width':'3','opacity':'0','stroke-dasharray':'.'});
	var shtwRed = paper.path('M1622,482 Q1622,482,1622,482').attr({'arrow-end' : 'block' ,'stroke':'#DB4E5F','stroke-width':'3','opacity':'0','stroke-dasharray':'.'});
	var sydrRed = paper.path('M1634,356 Q1634,356,1634,356').attr({'arrow-end' : 'block' ,'stroke':'#DB4E5F','stroke-width':'3','opacity':'0','stroke-dasharray':'.'});
	var jstmRed = paper.path('M1596,472 Q1596,472,1596,472').attr({'arrow-end' : 'block' ,'stroke':'#DB4E5F','stroke-width':'3','opacity':'0','stroke-dasharray':'.'});
	var jxmnRed = paper.path('M1559,549 Q1559,549,1559,549').attr({'arrow-end' : 'block' ,'stroke':'#DB4E5F','stroke-width':'3','opacity':'0','stroke-dasharray':'.'});
	var sdxqRed = paper.path('M1588,424 Q1588,424,1588,424').attr({'arrow-end' : 'block' ,'stroke':'#DB4E5F','stroke-width':'3','opacity':'0','stroke-dasharray':'.'});
	var gdlbRed = paper.path('M1542,575 Q1542,575,1542,575').attr({'arrow-end' : 'block' ,'stroke':'#DB4E5F','stroke-width':'3','opacity':'0','stroke-dasharray':'.'});             	
	if(i>550){
		clearInterval(stopRed);
	    delayRed = setTimeout(fadeRed,2000);  
	}
	i=i+15;	
	curve(427,517,620,540,680,750,i);	
	bjRed1.animate({
		path:'M427,517 Q'+c1x+','+c1y+','+tx+','+ty+'',
		opacity:i/300
		}, 1);
	curve(524,513,620,550,680,750,i);
	bjRed2.animate({
		path:'M524,513 Q'+c1x+','+c1y+','+tx+','+ty+'',
		opacity:i/550
		}, 1);
	curve(478,556,620,580,680,750,i);
	bjRed3.animate({
		path:'M478,556 Q'+c1x+','+c1y+','+tx+','+ty+'',
		opacity:i/300
		}, 1);
	curve(1530,370,920,450,710,750,i);				
	sxxbRed.animate({
		path:'M1530,370 Q'+c1x+','+c1y+','+tx+','+ty+'',
		opacity:i/300
		}, 1);	
	curve(1634,356,920,420,710,750,i);				
	sydrRed.animate({
		path:'M1634,356 Q'+c1x+','+c1y+','+tx+','+ty+'',
		opacity:i/300
		}, 1);	
	curve(1596,472,920,470,710,750,i);				
	jstmRed.animate({
		path:'M1596,472 Q'+c1x+','+c1y+','+tx+','+ty+'',
		opacity:i/300
		}, 1);	
	curve(1559,549,920,600,710,750,i);		
	jxmnRed.animate({
		path:'M1559,549 Q'+c1x+','+c1y+','+tx+','+ty+'',
		opacity:i/300
		}, 1);	
	curve(1622,482,950,480,710,750,i);		
	shtwRed.animate({
		path:'M1622,482 Q'+c1x+','+c1y+','+tx+','+ty+'',
		opacity:i/300
		}, 1);	
	curve(1588,424,920,460,710,750,i);		
	sdxqRed.animate({
		path:'M1588,424 Q'+c1x+','+c1y+','+tx+','+ty+'',
		opacity:i/300
		}, 1);	
	curve(1542,572,920,620,710,750,i);		
	gdlbRed.animate({
		path:'M1542,575 Q'+c1x+','+c1y+','+tx+','+ty+'',
		opacity:i/300
		}, 1);				
	curve(1413,528,920,560, 710,750,i);
	bjRed4.animate({
		path:'M1413,528 Q'+c1x+','+c1y+','+tx+','+ty+'',
		opacity:i/300
		}, 1);
	curve(1447,501,920,530, 710,750,i);
	bjRed5.animate({
		path:'M1447,501 Q'+c1x+','+c1y+','+tx+','+ty+'',
		opacity:i/300
		}, 1);
}

//隐藏全部红色线条
function fadeRed(){
	i=0;
	clearInterval( stopRed);
	clearInterval( stopOrange);
	clearInterval( stopGreen);
	clearInterval( stopPurple);
	clearInterval( stopBlue);
	clearInterval( stopBjRed);              
	$(".redBg").css("visibility","hidden");
    stopOrange = setInterval(animateOrange, 1); 
    $(".orangeBg").css("visibility","visible");     
}
           
  
         
//创建全部橙色线条
function animateOrange() {
    var paper = new Raphael(document.getElementById('canvas_container'), 1800, 900);
    var bjOrange1 = paper.path('M477,495 Q477,495,477,495').attr({'arrow-end' : 'block' ,'stroke':'#F28A55','stroke-width':'3','opacity':'0','stroke-dasharray':'.'});
    var bjOrange2 = paper.path('M510,550 Q510,550,510,550').attr({'arrow-end' : 'block' ,'stroke':'#F28A55','stroke-width':'3','opacity':'0','stroke-dasharray':'.'});
    var cdjxOrange = paper.path('M1459,490 Q1459,490,1459,490').attr({'arrow-end' : 'block' ,'stroke':'#F28A55','stroke-width':'3','opacity':'0','stroke-dasharray':'.'});
    var sdjyOrange = paper.path('M1587,416 Q1587,416,1587,416').attr({'arrow-end' : 'block' ,'stroke':'#F28A55','stroke-width':'3','opacity':'0','stroke-dasharray':'.'});
    var glyyOrange = paper.path('M1565,377  Q1565,377 ,1565,377 ').attr({'arrow-end' : 'block' ,'stroke':'#F28A55','stroke-width':'3','opacity':'0','stroke-dasharray':'.'});
    var tjhlOrange = paper.path('M1584,389 Q1584,389,1584,389 ').attr({'arrow-end' : 'block' ,'stroke':'#F28A55','stroke-width':'3','opacity':'0','stroke-dasharray':'.'});
    var szktOrange = paper.path('M1550,589 Q1550,589,1550,589').attr({'arrow-end' : 'block' ,'stroke':'#F28A55','stroke-width':'3','opacity':'0','stroke-dasharray':'.'});
    var hnjlOrange = paper.path('M1516,619 Q1516,619,1516,619').attr({'arrow-end' : 'block' ,'stroke':'#F28A55','stroke-width':'3','opacity':'0','stroke-dasharray':'.'});
    var gstsOrange = paper.path('M1475,443 Q1475,443,1475,443').attr({'arrow-end' : 'block' ,'stroke':'#F28A55','stroke-width':'3','opacity':'0','stroke-dasharray':'.'});
	var hbcsOrange = paper.path('M1555,400 Q1555,400,1555,400').attr({'arrow-end' : 'block' ,'stroke':'#F28A55','stroke-width':'3','opacity':'0','stroke-dasharray':'.'});
    var bhxsOrange = paper.path('M1534,497 Q1534,497,1534,497').attr({'arrow-end' : 'block' ,'stroke':'#F28A55','stroke-width':'3','opacity':'0','stroke-dasharray':'.'});   
	if(i>550){         
		 clearInterval( stopOrange);
		 delayOrange = setTimeout(fadeOrange,2000);   
		}
	i=i+15;	
    curve(477,495,702,530,815,782,i);				
	bjOrange1.animate({
		path:'M477,495 Q'+c1x+','+c1y+','+tx+','+ty+'',
		opacity:i/300
		}, 1);
	    curve(510,550,702,570,815,782,i);				
	bjOrange2.animate({
		path:'M510,550 Q'+c1x+','+c1y+','+tx+','+ty+'',
		opacity:i/300
		}, 1);
		curve(1459,490,1152,520,865,778,i);				
	cdjxOrange.animate({
		path:'M1459,490 Q'+c1x+','+c1y+','+tx+','+ty+'',
		opacity:i/300
		}, 1);
		curve(1587,416,1152,450,865,778,i);				
	sdjyOrange.animate({
		path:'M1587,416 Q'+c1x+','+c1y+','+tx+','+ty+'',
		opacity:i/300
		}, 1);
		curve(1565,377,1152,420,865,778,i);				
	glyyOrange.animate({
		path:'M1565,377 Q'+c1x+','+c1y+','+tx+','+ty+'',
		opacity:i/300
		}, 1);
		curve(1584,389 ,1152,430,865,778,i);				
	tjhlOrange.animate({
		path:'M1584,389 Q'+c1x+','+c1y+','+tx+','+ty+'',
		opacity:i/300
		}, 1);
		curve(1550,589,1100,590,865,778,i);				
	szktOrange.animate({
		path:'M1550,589 Q'+c1x+','+c1y+','+tx+','+ty+'',
		opacity:i/300
		}, 1);
		curve(1516,619,1100,600,865,778,i);				
	hnjlOrange.animate({
		path:'M1516,619 Q'+c1x+','+c1y+','+tx+','+ty+'',
		opacity:i/300
		}, 1);
		curve(1475,443,1152,480,865,778,i);				
	gstsOrange.animate({
		path:'M1475,443 Q'+c1x+','+c1y+','+tx+','+ty+'',
		opacity:i/300
		}, 1);
		curve(1555,400,1152,450,865,778,i);				
	hbcsOrange.animate({
		path:'M1555,400 Q'+c1x+','+c1y+','+tx+','+ty+'',
		opacity:i/300
		}, 1);
		curve(1534,497,1152,520,865,778,i);				
	bhxsOrange.animate({
		path:'M1534,497 Q'+c1x+','+c1y+','+tx+','+ty+'',
		opacity:i/300
		}, 1);
}

//隐藏全部橙色线条
function fadeOrange(){
	i=0;
	clearInterval( stopRed);
	clearInterval( stopOrange);
	clearInterval( stopGreen);
	clearInterval( stopPurple);
	clearInterval( stopBlue);
	clearInterval( stopBjRed);               
	$(".orangeBg").css("visibility","hidden");                 
    stopGreen = setInterval(animateGreen, 1);     
    $(".greenBg").css("visibility","visible");         
}


//创建全部绿色线条
function animateGreen() {
   	var paper = new Raphael(document.getElementById('canvas_container'), 1800, 900);
	var bjGreen1 = paper.path('M510,542  Q510,542 ,510,542').attr({'arrow-end' : 'block' ,'stroke':' #A6E265','stroke-width':'3','opacity':'0','stroke-dasharray':'.'});
	var bjGreen2 = paper.path('M445,530 Q445,530,445,530').attr({'arrow-end' : 'block' ,'stroke':' #A6E265','stroke-width':'3','opacity':'0','stroke-dasharray':'.'});
	var sxzdGreen = paper.path('M1544,376 Q1544,376,1544,376').attr({'arrow-end' : 'block' ,'stroke':' #A6E265','stroke-width':'3','opacity':'0','stroke-dasharray':'.'});
	var wlhtGreen = paper.path('M1618,303 Q1618,304,1618,304').attr({'arrow-end' : 'block' ,'stroke':' #A6E265','stroke-width':'3','opacity':'0','stroke-dasharray':'.'});
	var bdzyGreen = paper.path('M1622,300 Q1622,300,1622,300').attr({'arrow-end' : 'block' ,'stroke':' #A6E265','stroke-width':'3','opacity':'0','stroke-dasharray':'.'});
	var lndfGreen = paper.path('M1639,359 Q1639,359,1639,359').attr({'arrow-end' : 'block' ,'stroke':' #A6E265','stroke-width':'3','opacity':'0','stroke-dasharray':'.'});
	var hljthGreen = paper.path('M1665,306 Q1665,306 ,1665,306').attr({'arrow-end' : 'block' ,'stroke':' #A6E265','stroke-width':'3','opacity':'0','stroke-dasharray':'.'});
	var shshGreen = paper.path('M1616,486 Q1616,486 ,1616,486').attr({'arrow-end' : 'block' ,'stroke':' #A6E265','stroke-width':'3','opacity':'0','stroke-dasharray':'.'});
	var jsszGreen = paper.path('M1606,468 Q1606,468 ,1606,468').attr({'arrow-end' : 'block' ,'stroke':' #A6E265','stroke-width':'3','opacity':'0','stroke-dasharray':'.'});
	var ahjfGreen = paper.path('M1566,452 Q1566,452 ,1566,452').attr({'arrow-end' : 'block' ,'stroke':' #A6E265','stroke-width':'3','opacity':'0','stroke-dasharray':'.'});
	var fjszGreen = paper.path('M1599,547 Q1599,547 ,1599,547').attr({'arrow-end' : 'block' ,'stroke':' #A6E265','stroke-width':'3','opacity':'0','stroke-dasharray':'.'});
	var hnkhGreen = paper.path('M1539,439 Q1539,439 ,1539,439').attr({'arrow-end' : 'block' ,'stroke':' #A6E265','stroke-width':'3','opacity':'0','stroke-dasharray':'.'});
	var tjtsGreen = paper.path('M1579,387 Q1579,387,1579,387').attr({'arrow-end' : 'block' ,'stroke':' #A6E265','stroke-width':'3','opacity':'0','stroke-dasharray':'.'});
	if(i>550){
		 clearInterval( stopGreen);
		 delayGreen = setTimeout(fadeGreen,2000);   
		}
	i=i+15;							
	curve(510,542,770,580,942,830,i);				
	bjGreen1.animate({
		path:'M510,542 Q'+c1x+','+c1y+','+tx+','+ty+'',
		opacity:i/300
		}, 1);
    curve(445,530,770,550,942,830,i);				
	bjGreen2.animate({
		path:'M445,530 Q'+c1x+','+c1y+','+tx+','+ty+'',
		opacity:i/300
		}, 1);
	curve(1544,376,1182,470,985,822,i);				
	sxzdGreen.animate({
		path:'M1544,376 Q'+c1x+','+c1y+','+tx+','+ty+'',
		opacity:i/300
		}, 1);
	curve(1618,303,1182,440,985,822,i);				
	wlhtGreen.animate({
		path:'1618,303 Q'+c1x+','+c1y+','+tx+','+ty+'',
		opacity:i/300
		}, 1);
	curve(1622,300,1182,440,985,822,i);				
	bdzyGreen.animate({
		path:'M1622,300 Q'+c1x+','+c1y+','+tx+','+ty+'',
		opacity:i/300
		}, 1);
	curve(1639,359,1182,440,985,822,i);				
	lndfGreen.animate({
		path:'M1639,359 Q'+c1x+','+c1y+','+tx+','+ty+'',
		opacity:i/300
		}, 1);
	curve(1665,306,1182,440,985,822,i);				
	hljthGreen.animate({
		path:'M1665,306 Q'+c1x+','+c1y+','+tx+','+ty+'',
		opacity:i/300
		}, 1);
    curve(1616,486,1182,440,985,822,i);				
	shshGreen.animate({
		path:'M1616,486 Q'+c1x+','+c1y+','+tx+','+ty+'',
		opacity:i/300
		}, 1);
	curve(1606,468,1182,440,985,822,i);				
	jsszGreen.animate({
		path:'M1606,468 Q'+c1x+','+c1y+','+tx+','+ty+'',
		opacity:i/300
		}, 1);
	curve(1566,452,1182,440,985,822,i);				
	ahjfGreen.animate({
		path:'M1566,452 Q'+c1x+','+c1y+','+tx+','+ty+'',
		opacity:i/300
		}, 1);
	curve(1599,547,1182,440,985,822,i);				
	fjszGreen.animate({
		path:'M1599,547 Q'+c1x+','+c1y+','+tx+','+ty+'',
		opacity:i/300
		}, 1);
	curve(1539,439,1182,440,985,822,i);				
	hnkhGreen.animate({
		path:'M1539,439 Q'+c1x+','+c1y+','+tx+','+ty+'',
		opacity:i/300
		}, 1);
	curve(1579,387,1182,440,985,822,i);				
	tjtsGreen.animate({
		path:'M1579,387 Q'+c1x+','+c1y+','+tx+','+ty+'',
		opacity:i/300
		}, 1);
}

//隐藏全部绿色线条
function fadeGreen(){
	i=0;
	clearInterval( stopRed);
	clearInterval( stopOrange);
	clearInterval( stopGreen);
	clearInterval( stopPurple);
	clearInterval( stopBlue);
	clearInterval( stopBjRed);                
	$(".greenBg").css("visibility","hidden"); 
    stopPurple = setInterval(animatePurple, 1);
    $(".PurpleBg").css("visibility","visible");                                  
}
		

//创建全部紫线线条
function animatePurple() {
   	var paper = new Raphael(document.getElementById('canvas_container'), 1800, 900);
	var bjPurple1 = paper.path('M470,515 Q470,515,470,515').attr({'arrow-end' : 'block' ,'stroke':' #B473ED','stroke-width':'3','opacity':'0','stroke-dasharray':'.'});
	var bjPurple2 = paper.path('M470,530 Q470,530,470,530').attr({'arrow-end' : 'block' ,'stroke':' #B473ED','stroke-width':'3','opacity':'0','stroke-dasharray':'.'});
	var chbtPurple = paper.path('M1653,331 Q1653,331,1653,331').attr({'arrow-end' : 'block' ,'stroke':' #B473ED','stroke-width':'3','opacity':'0','stroke-dasharray':'.'});
	var shdhPurple = paper.path('M1618,479 Q1618,479,1618,479').attr({'arrow-end' : 'block' ,'stroke':' #B473ED','stroke-width':'3','opacity':'0','stroke-dasharray':'.'});
	var czasPurple = paper.path('M1605,476 Q1605,476,1605,476').attr({'arrow-end' : 'block' ,'stroke':' #B473ED','stroke-width':'3','opacity':'0','stroke-dasharray':'.'});
	var nbyxPurple = paper.path('M1620,500 Q1620,500,1620,500').attr({'arrow-end' : 'block' ,'stroke':' #B473ED','stroke-width':'3','opacity':'0','stroke-dasharray':'.'});
	var fjhcPurple = paper.path('M1596,552 Q1596,552,1596,552').attr({'arrow-end' : 'block' ,'stroke':' #B473ED','stroke-width':'3','opacity':'0','stroke-dasharray':'.'});
	var sdzbPurple = paper.path('M1650,330 Q1650,330,1650,330').attr({'arrow-end' : 'block' ,'stroke':' #B473ED','stroke-width':'3','opacity':'0','stroke-dasharray':'.'});
	var hnkdPurple = paper.path('M1531,532 Q1531,532,1531,532').attr({'arrow-end' : 'block' ,'stroke':' #B473ED','stroke-width':'3','opacity':'0','stroke-dasharray':'.'});
	var lzwhPurple = paper.path('M1460,420 Q1460,420,1460,420').attr({'arrow-end' : 'block' ,'stroke':' #B473ED','stroke-width':'3','opacity':'0','stroke-dasharray':'.'});
	var gyxwPurple = paper.path('M1484,535  Q1484,535 ,1484,535 ').attr({'arrow-end' : 'block' ,'stroke':' #B473ED','stroke-width':'3','opacity':'0','stroke-dasharray':'.'});
	var glzhPurple = paper.path('M1516,550 Q1516,550,1516,550').attr({'arrow-end' : 'block' ,'stroke':' #B473ED','stroke-width':'3','opacity':'0','stroke-dasharray':'.'});
	var tjmdPurple = paper.path('M1576,385 Q1576,385,1576,385').attr({'arrow-end' : 'block' ,'stroke':' #B473ED','stroke-width':'3','opacity':'0','stroke-dasharray':'.'});
	if(i>550){
		 clearInterval( stopPurple);
		 delayPurple = setTimeout(fadePurple,2000);  
		}
	i=i+15;		
  	curve(470,515,780,445,1080,585,i);				
	bjPurple1.animate({
		path:'M470,515 Q'+c1x+','+c1y+','+tx+','+ty+'',
		opacity:i/300
		}, 1);
  	curve(470,530,780,455,1080,585,i);				
	bjPurple2.animate({
		path:'M470,530 Q'+c1x+','+c1y+','+tx+','+ty+'',
		opacity:i/300
		}, 1);
	curve(1653,331,1040,515,1228,838,i);				
	chbtPurple.animate({
		path:'1653,331 Q'+c1x+','+c1y+','+tx+','+ty+'',
		opacity:i/300
		}, 1);
	curve(1618,479,1340,455,1130,585,i);				
	shdhPurple.animate({
		path:'M1618,479 Q'+c1x+','+c1y+','+tx+','+ty+'',
		opacity:i/300
		}, 1);
  	curve(1605,476,1340,455,1130,585,i);				
	czasPurple.animate({
		path:'M1605,476 Q'+c1x+','+c1y+','+tx+','+ty+'',
		opacity:i/300
		}, 1);
  	curve(1620,500,1340,455,1130,585,i);				
	nbyxPurple.animate({
		path:'M1620,500 Q'+c1x+','+c1y+','+tx+','+ty+'',
		opacity:i/300
		}, 1);
	curve(1596,552,1340,505,1130,585,i);				
	fjhcPurple.animate({
		path:'M1596,552 Q'+c1x+','+c1y+','+tx+','+ty+'',
		opacity:i/300
		}, 1);
	curve(1650,330,1340,385,1130,585,i);				
	sdzbPurple.animate({
		path:'M1650,330 Q'+c1x+','+c1y+','+tx+','+ty+'',
		opacity:i/300
		}, 1);
  	curve(1531,532,1340,495,1130,585,i);				
	hnkdPurple.animate({
		path:'M1531,532 Q'+c1x+','+c1y+','+tx+','+ty+'',
		opacity:i/300
		}, 1);
  	curve(1460,420,1340,435,1130,585,i);				
	lzwhPurple.animate({
		path:'M1460,420 Q'+c1x+','+c1y+','+tx+','+ty+'',
		opacity:i/300
		}, 1);
	curve(1484,535,1340,515,1130,585,i);				
	gyxwPurple.animate({
		path:'M1484,535 Q'+c1x+','+c1y+','+tx+','+ty+'',
		opacity:i/300
		}, 1);
	curve(1516,550,1340,515,1130,585,i);				
	glzhPurple.animate({
		path:'M1516,550 Q'+c1x+','+c1y+','+tx+','+ty+'',
		opacity:i/300
		}, 1);
	curve(1576,385,1340,405,1130,585,i);				
	tjmdPurple.animate({
		path:'M1576,385 Q'+c1x+','+c1y+','+tx+','+ty+'',
		opacity:i/300
		}, 1);
}

//隐藏全部紫色线条
function fadePurple(){
    i=0;
   	clearInterval( stopRed);
	clearInterval( stopOrange);
	clearInterval( stopGreen);
	clearInterval( stopPurple);
	clearInterval( stopBlue);
	clearInterval( stopBjRed);  
	$(".PurpleBg").css("visibility","hidden"); 
	stopBlue = setInterval(animateBlue, 1); 
	$(".blueBg").css("visibility","visible");                            
}


//创建全部蓝线线条
function animateBlue() {
	var paper = new Raphael(document.getElementById('canvas_container'), 1800, 900);
	var bjBlue1 = paper.path('M543,390 Q543,390,543,390').attr({'arrow-end' : 'block' ,'stroke':' #85F1FA','stroke-width':'3','opacity':'0','stroke-dasharray':'.'});
	var bjBlue2 = paper.path('M543,467 Q543,467,543,467').attr({'arrow-end' : 'block' ,'stroke':' #85F1FA','stroke-width':'3','opacity':'0','stroke-dasharray':'.'});
	var bjBlue3 = paper.path('M445,505 Q445,505,445,505').attr({'arrow-end' : 'block' ,'stroke':' #85F1FA','stroke-width':'3','opacity':'0','stroke-dasharray':'.'});
	var ytxhBlue= paper.path('M1616,407 Q1616,407,1616,407').attr({'arrow-end' : 'block' ,'stroke':' #85F1FA','stroke-width':'3','opacity':'0','stroke-dasharray':'.'});
	var xzhqBlue = paper.path('M1571,378 Q1571,378,1571,378').attr({'arrow-end' : 'block' ,'stroke':' #85F1FA','stroke-width':'3','opacity':'0','stroke-dasharray':'.'});
	var sdwgBlue= paper.path('M1623,409 Q1623,409,1623,409').attr({'arrow-end' : 'block' ,'stroke':' #85F1FA','stroke-width':'3','opacity':'0','stroke-dasharray':'.'});
	var whjrBlue = paper.path('M1623,409 Q1623,409,1623,409').attr({'arrow-end' : 'block' ,'stroke':' #85F1FA','stroke-width':'3','opacity':'0','stroke-dasharray':'.'});
	var rzsqBlue= paper.path('M1600,432 Q1600,432,1600,432').attr({'arrow-end' : 'block' ,'stroke':' #85F1FA','stroke-width':'3','opacity':'0','stroke-dasharray':'.'});
	var hnsgBlue = paper.path('M1549,456 Q1549,456,1549,456').attr({'arrow-end' : 'block' ,'stroke':' #85F1FA','stroke-width':'3','opacity':'0','stroke-dasharray':'.'});
	var xxhxBlue= paper.path('M1557,434 Q1557,434,1557,434').attr({'arrow-end' : 'block' ,'stroke':' #85F1FA','stroke-width':'3','opacity':'0','stroke-dasharray':'.'});
	var zmdBlue = paper.path('M1550,463 Q1550,463,1550,463').attr({'arrow-end' : 'block' ,'stroke':' #85F1FA','stroke-width':'3','opacity':'0','stroke-dasharray':'.'});
	var whzxBlue= paper.path('M1552,490 Q1552,490,1552,490').attr({'arrow-end' : 'block' ,'stroke':' #85F1FA','stroke-width':'3','opacity':'0','stroke-dasharray':'.'});
	var hswsBlue = paper.path('M1560,496 Q1560,496,1560,496').attr({'arrow-end' : 'block' ,'stroke':' #85F1FA','stroke-width':'3','opacity':'0','stroke-dasharray':'.'});
	var zbhrBlue= paper.path('M1587,419 Q1587,419,1587,419').attr({'arrow-end' : 'block' ,'stroke':' #85F1FA','stroke-width':'3','opacity':'0','stroke-dasharray':'.'});
	var zbxhBlue = paper.path('M1586,416 Q1586,416,1586,416').attr({'arrow-end' : 'block' ,'stroke':' #85F1FA','stroke-width':'3','opacity':'0','stroke-dasharray':'.'});
	if(i>550){
		 clearInterval( stopBlue);
		 delayBlue = setTimeout(fadeBlue,2000); 
		}
	i=i+15;	
	curve(543,390,901,453,1214,835,i);				
	bjBlue1.animate({
		path:'M543,390 Q'+c1x+','+c1y+','+tx+','+ty+'',
		opacity:i/300
		}, 1);
    curve(543,467,901,493,1214,835,i);				
	bjBlue2.animate({
		path:'M543,467 Q'+c1x+','+c1y+','+tx+','+ty+'',
		opacity:i/300
		}, 1);
    curve(445,505,901,523,1214,835,i);				
	bjBlue3.animate({
		path:'M445,505 Q'+c1x+','+c1y+','+tx+','+ty+'',
		opacity:i/300
		}, 1);
    curve(1616,407,1381,483,1264,835,i);				
	ytxhBlue.animate({
		path:'M1616,407 Q'+c1x+','+c1y+','+tx+','+ty+'',
		opacity:i/300
		}, 1);
    curve(1623,409,1381,483,1264,835,i);				
	sdwgBlue.animate({
		path:'M1623,409 Q'+c1x+','+c1y+','+tx+','+ty+'',
		opacity:i/300
		}, 1);
    curve(1623,409,1381,483,1264,835,i);				
	whjrBlue.animate({
		path:'M1623,409 Q'+c1x+','+c1y+','+tx+','+ty+'',
		opacity:i/300
		}, 1);
    curve(1600,432,1381,483,1264,835,i);				
	rzsqBlue.animate({
		path:'M1600,432 Q'+c1x+','+c1y+','+tx+','+ty+'',
		opacity:i/300
		}, 1);
    curve(1549,456,1381,483,1264,835,i);				
	hnsgBlue.animate({
		path:'M1549,456 Q'+c1x+','+c1y+','+tx+','+ty+'',
		opacity:i/300
		}, 1);
    curve(1557,434,1381,483,1264,835,i);				
	xxhxBlue.animate({
		path:'M1557,434 Q'+c1x+','+c1y+','+tx+','+ty+'',
		opacity:i/300
		}, 1);
    curve(1550,463,1381,483,1264,835,i);				
	zmdBlue.animate({
		path:'M1550,463 Q'+c1x+','+c1y+','+tx+','+ty+'',
		opacity:i/300
		}, 1);
    curve(1552,490,1381,483,1264,835,i);				
	whzxBlue.animate({
		path:'M1552,490 Q'+c1x+','+c1y+','+tx+','+ty+'',
		opacity:i/300
		}, 1);
    curve(1560,496,1381,483,1264,835,i);				
	hswsBlue.animate({
		path:'M1560,496 Q'+c1x+','+c1y+','+tx+','+ty+'',
		opacity:i/300
		}, 1);
    curve(1587,419,1381,483,1264,835,i);				
	zbhrBlue.animate({
		path:'M1587,419 Q'+c1x+','+c1y+','+tx+','+ty+'',
		opacity:i/300
		}, 1);
    curve(1586,416,1381,483,1264,835,i);				
	zbxhBlue.animate({
		path:'M1586,416 Q'+c1x+','+c1y+','+tx+','+ty+'',
		opacity:i/300
		}, 1);									
}

//隐藏全部蓝色线条
function fadeBlue(){
	i=0;
	clearInterval( stopRed);
	clearInterval( stopOrange);
	clearInterval( stopGreen);
	clearInterval( stopPurple);
	clearInterval( stopBlue);
	clearInterval( stopBjRed); 
	$(".blueBg").css("visibility","hidden");           
    stopRed = setInterval(animateRed, 1); 
    $(".redBg").css("visibility","visible");                           
}




$(function () {
	//默认开启创建全部线条
    stopRed = setInterval(animateRed, 1);
    $(".redBg").css("visibility","visible")

    //切换创建北京红色线条
	$("#cenLeftBtn").click(function(){
		$(this).addClass('clickClass'); 
	    $('#cenRightBtn').removeClass('clickClass'); 
		i=0;
		clearInterval( stopRed);
		clearInterval( stopOrange);
		clearInterval( stopGreen);
		clearInterval( stopPurple);
		clearInterval( stopBlue);
		clearInterval( stopBjRed);
		clearTimeout(fadeRed);
		clearTimeout(fadeOrange);
		clearTimeout(fadeGreen);
		clearTimeout(fadePurple);
		clearTimeout(fadeBlue);
        stopBjRed = setInterval(animateBjRed,1);
        $(".orangeBg").css("visibility","hidden"); 
        $(".greenBg").css("visibility","hidden"); 
        $(".PurpleBg").css("visibility","hidden"); 
        $(".blueBg").css("visibility","hidden"); 
        $(".redBg").css("visibility","visible")
	})

	//切换创建全部线条
	$("#cenRightBtn").click(function(){
        $(this).addClass('clickClass'); 
	    $('#cenLeftBtn').removeClass('clickClass'); 
	    i=0;
	    clearInterval( stopRed);
		clearInterval( stopOrange);
		clearInterval( stopGreen);
		clearInterval( stopPurple);
		clearInterval( stopBlue);
	    clearInterval( stopBjRed);
	    stopRed = setInterval(animateRed, 1);

	})


//滚动暂停与继续
var j=1;
$("#marDetail").click(function(){
	if(j%2 == 0){
		this.start();
	}else{
        this.stop();
	}
	j++;
})

});


