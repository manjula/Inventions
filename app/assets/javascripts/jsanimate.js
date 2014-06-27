

var myman = null;
var animate ;
function init(){
   myman = document.getElementById('man');
   myman.style.position= 'relative'; 
   myman.style.left = '0px'; 
}
function moveRight(){
   myman.style.left = parseInt(myman.style.left) + 1 + 'px';
   animate = setTimeout(moveRight); 
}
function stop(){
   clearTimeout(animate);
   myman.style.position= 'relative';
}
function moveLeft(){
   myman.style.position= 'relative'; 
   myman.style.left = '0px'; 
}
window.onload =init;