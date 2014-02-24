var nodes = [];

$(document).ready(function(){

    //Leaflet Map
    var sWBound = L.latLng(42.365901,-71.079440);
    var nEBound = L.latLng(42.350901,-71.107550);
	var map = L.map("map", {minZoom: 14, maxBounds:[sWBound,nEBound] });
	map.setView([42.359200, -71.091950], 16);
	L.tileLayer('http://tile.cloudmade.com/440e7bdbfe0444b18cca210e9cb056c5/997/256/{z}/{x}/{y}.png', { attribution: 'Map data &copy CloudMade',
	}).addTo(map);
	//Nodes
	for(var i=0; i<25; i++){
		nodes[i] = L.circle([42.359765+i/1000,-71.091843], 16, {
    		color: 'red',
    		fillColor: '#f03',
    		fillOpacity: 0.5
		}).addTo(map);
	};
	nodes[0].bindPopup("Lobby 10", {closeButton: false});
	function locationHover(evt){
		evt.target.openPopup();
	};
	nodes[0].on('mouseover', locationHover);
	nodes[0].on('mouseout', function(evt){
		evt.target.closePopup();
	});
});