/*******
 * Written by Nate Titterton, 
 * with code borrowed from:
 *   Image Cross Fade Redux
 *   Version 1.0
 *   Last revision: 02.15.2006
 *   steve@slayeroffice.com
 */

/** To use:
   include this js file 
      <script
   make an img tag in your file, with id="SlideshowPict"
   add a bunch more image sources with javascript add_image
     (the first should be the initial source of the file)
	 (you can have each image have a different delay)
   optionally make javascript calls to 
     set_fade_time,  set_default_delay
   call slideshow_start()

   ... something like ...

   <script src="script/slideshow.js" language="javascript"></script>
   <script language="javascript" type="text/javascript">
   <!-- 
   window.onload = function() {
	  add_image("src-1");
	  add_image("src-2");
	  //optional calls here
	  slideshow_start();
   }
   //-->
   </script>

 **/


// ----- Public functions here ---------------

// use to add an image
//    arg1: src of image, 
//    arg2: (optional) delay in seconds before fade starts 
function add_image(src, delaySeconds) {
	array_push(imgsrcs, src);
	if (typeof delaySeconds == 'undefined' ) {
		delaySeconds = 'default';
	}
	array_push(delays, delaySeconds);
}


// start the show, baby
function slideshow_start() {

	var imageTo = document.getElementById(imageId);
	if (imgsrcs[0]) {
		imageTo.src = imgsrcs[0];
	};

	var imageFrom = imageTo.cloneNode(false);
	imageTo.parentNode.appendChild(imageFrom);

	imageTo.id = "somethingelse";
	imageTo.style.zIndex = 99;  // top
	imageFrom.style.zIndex = 0;  // bottom

	imageTo.xOpacity =  0;
	setOpacity(imageTo);

	if (imgsrcs.length == 0) {
		return false;
	} else if (imgsrcs.length == 1) {
		imageFrom.src = imgsrcs[0];
		return false;
	} else {
		fadeTimeInc = fadeTime / fadeSteps;
		fadeOpacityInc = 1.0 / fadeSteps;
		imageFrom.src = imgsrcs[0];
		setTimeout(function() {doit(imageFrom, imageTo, 0);},
		           get_delay(delays[0]));
	}
}


// set time to fade from one image to another in milliseconds.
//   1000 milliseconds = 1 second.
//   most browsers can't do this too fast, ya know.  You could shrink the number of fade steps, though.
// default if not set it 1 second.
function set_fade_time(milliseconds) {
	fadeTime = milliseconds;
}


// default is 20, change it here
function set_fade_steps(numSteps) {
	fadeSteps = numSteps;
}


// used for images for which no delay was passed
// 3 seconds is used if not set here
function set_default_delay(seconds) {
	defaultDelay = seconds * 1000;
}



// Use this to change the id attribute of the image tag you want to place the slideshow.
function set_image_id(id) {
	imageId = id;
}




// ----- Private stuff below here  --------

var defaultDelay = 3000;  // 3 seconds
var fadeTime = 1000;  // 1 second
var fadeSteps = 20;
var imageId = "SlideshowPicture";  // default id for img tag

var fadeTimeInc;
var fadeOpacityInc;
var imgsrcs = new Array();
var delays = new Array();     // delays in seconds, corresponding to imgsrcs indicies


function doit(imageFrom, imageTo, curindex) {
	
	nextindex = get_next(curindex);

	if (nextindex != null) {
		//imageFrom.src = imgsrcs[curindex];
		imageTo.src = imgsrcs[nextindex];

		xfade(imageFrom, imageTo, imageTo.xOpacity);
		setTimeout(function() {doit(imageFrom, imageTo, nextindex);}, get_delay(delays[nextindex]));
	}
}



function xfade(imageFrom, imageTo, toOpacity) {
	// From starts in back, shown; imageTo starts front, transparent. 
	// This function fades imageTo to visible (covering imageFrom),
	// makes the back image source the fron image, and then hides the front image. 

	toOpacity += fadeOpacityInc;
	
	imageTo.xOpacity = toOpacity;
	
	setOpacity(imageTo);
	
	if(toOpacity >= .99) {
		imageFrom.src = imageTo.src;
		imageTo.xOpacity = 0;
		setOpacity(imageTo);
		return;
	} else {
		setTimeout(function() {xfade(imageFrom, imageTo, toOpacity);},
			       fadeTimeInc);
	}
	
}

function setOpacity(obj) {
	if(obj.xOpacity > .99) {
		obj.xOpacity = .99;
		return;
	}
	obj.style.opacity = obj.xOpacity;
	obj.style.MozOpacity = obj.xOpacity;
	obj.style.filter = "alpha(opacity=" + (obj.xOpacity*100) + ")";
}


function get_delay(seconds) {
	return ((seconds=='default') ? defaultDelay : (1000 * seconds));
}

// return null to stop the slideshow.  (doesn't do it right now!)
function get_next(index) {
	return (imgsrcs[index+1]?index+1:0);  //so... pretty.
}


function array_push ( array ) {
    // http://kevin.vanzonneveld.net
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // *     example 1: array_push(['kevin','van'], 'zonneveld');
    // *     returns 1: 3
 
    var i, argv = arguments, argc = argv.length;
 
    for (i=1; i < argc; i++){
        array[array.length++] = argv[i];
    }
 
    return array.length;
}
