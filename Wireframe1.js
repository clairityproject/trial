$(document).ready(function(){
    $('#header').click(function(){
    	$(this).fadeTo('fast',0);
    });
	var map = L.map("map");
	map.setView([42.359200, -71.091950], 16);
	L.tileLayer('http://tile.cloudmade.com/440e7bdbfe0444b18cca210e9cb056c5/997/256/{z}/{x}/{y}.png', {
			attribution: 'Map data &copy CloudMade',
	}).addTo(map);
	var circle = L.circle([42.359200,-71.091950], 10, {
    	color: 'red',
    	fillColor: '#f03',
    	fillOpacity: 0.5
	}).addTo(map);
});