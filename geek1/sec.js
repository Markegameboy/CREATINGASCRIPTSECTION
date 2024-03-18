
var boxOne = document.getElementsByClassName('box')[0];
var running = false;

var toggleTransition = function() {
  if(!running) 
  { 
    boxOne.classList.add('horizTranslate');
  } else {
    boxOne.classList.remove('horizTranslate'); 
  }  

  running = !running;
}

/* <!-- exmaple 2 --> */

var boxOne2 = document.getElementsByClassName('box2')[0];
var running2 = false;

var toggleTransition2 = function() {
  if(!running2) 
  { 
    boxOne2.classList.add('horizTranslate2');
  } else {
    boxOne2.classList.remove('horizTranslate2'); 
  }  

  running2 = !running2;
}
