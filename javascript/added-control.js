// JavaScript Document

(function (){
	"use strict";
	$(document).ready(function($) {
  	$('#menu-container').click(function() {
		var menu = document.getElementById('menu-display');
		var collapseBackground = document.getElementsByClassName('cutting-background');
    	if(menu.style.visibility === 'hidden')
		{
			menu.style.visibility = 'visible';
			collapseBackground[0].style.backgroundColor = "white";
			collapseBackground[0].style.backgroundImage = "url('')";
		}
		else
		{
			collapseBackground[0].style.backgroundImage = 'url(img/cuttingboard2.png)';
			menu.style.visibility = 'hidden';
		}
  	});
  });
 })();