$(document).ready(function(){
    $('#header').click(function(){
    	$(this).fadeTo('fast',0);
    });
	var map = L.map("map")
	map.setView([51.505, -0.09], 18);
	L.tileLayer('http://{s}.tile.cloudmade.com/API-key/997/256/{z}/{x}/{y}.png', {
    	attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
	}).addTo(map);
});