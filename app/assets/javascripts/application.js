// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

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