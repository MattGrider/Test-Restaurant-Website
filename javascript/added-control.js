// JavaScript Document

(function (){
	"use strict";
	$(document).ready(function($) {
  	$('#menu-container').click(function() {
		var menu = document.getElementById('main-menu');
    	if(menu.style.visibility === 'hidden')
		{
			menu.style.visibility = 'visible';
		}
		else
		{
			menu.style.visibility = 'hidden';
		}
  	});
  });
 })();