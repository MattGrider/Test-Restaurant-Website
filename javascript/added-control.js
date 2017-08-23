// JavaScript Document

(function (){
	"use strict";
	$(document).ready(function($) {
		
		
	if(screen.width < 500)
	{
		var menuwords = document.getElementsByClassName('img-overlay-caro');
		menuwords[0].classname = '.img-overlay-caro-mobile';
		
		var locationwords = document.getElementsByClassName('text-overlay-location');
		locationwords[0].className = '.text-overlay-mobile';
		
	}
  	$('#menu-container').click(function() {
		//var menu = document.getElementById('menu-display');
		var collapseBackground = document.getElementsByClassName('cutting-background');
    	if(collapseBackground[0].style.backgroundimage === 'url(img/cuttingboardmobile.png)' || collapseBackground[0].style.backgroundimage === 'url(img/cuttingboard2.png)')
		{
			collapseBackground[0].style.backgroundColor = "white";
			collapseBackground[0].style.backgroundImage = "url('')";
		}
		else
		{
			if (screen.width < 500) {
    			collapseBackground[0].style.backgroundImage = 'url(img/cuttingboardmobile.png)';
			}
			else
			{
				collapseBackground[0].style.backgroundImage = 'url(img/cuttingboard2.png)';
			}
			
		}
  	});
  });
 })();