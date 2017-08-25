// JavaScript Document

(function (){
	"use strict";	
	
	$(window).load(function() {
		// Animate loader off screen
		//$(".loading").hide();
	});
	
	$(document).ready(function($) {
	setTimeout(function() {
	$('.loading').hide();
	$('#mainpage').show();	
		
	$('#loction-side').css('opacity', '0');
	$('#location-heading').css('opacity', '0');
	$('#about-us').css('opacity', '0');
	$('#catering').css('opacity', '0');
	$('#logoload').css('opacity', '0');
	$('#navbarload').css('opacity', '0');
	$('#social').css('opacity', '0');
	$('#menu-container').css('opacity', '0');
		
	
		
	$('#logoload').addClass('slideInDown');
	$('#social').addClass('fadeIn');
	$('#navbarload').addClass('slideInLeft');
	$('#menu-container').addClass('zoomIn');
	$('#logoload').css('opacity', '1');
	$('#navbarload').css('opacity', '1');
	$('#social').css('opacity', '1');
	$('#menu-container').css('opacity', '1');
		
  	$('#menu-container').click(function() {
		
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
			
	var waypoint = new Waypoint({
  		element: document.getElementById('loction-side'),
  		handler: function() {
				$('#loction-side').addClass('animated zoomIn');
				$('#location-heading').addClass('animated zoomIn');
				$('#loction-side').css('opacity', '1');
				$('#location-heading').css('opacity', '1');
  		},
		offset: '90%'
	});
		
	var waypoint1 = new Waypoint({
  		element: document.getElementById('about-us'),
  		handler: function() {
				$('#about-us').addClass('animated swing');
				$('#about-us').css('opacity', '1');
  		},
		offset: '90%'
	});
	
	var waypoint2 = new Waypoint({
  		element: document.getElementById('catering'),
  		handler: function() {
				$('#catering').addClass('animated zoomIn');
				$('#catering').css('opacity', '1');
  		},
		offset: '90%'
	});
	}, 500);
  });
 })();