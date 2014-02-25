function sensor(lat,lon,location) {
	this.lat = lat;
	this.lon = lon;
	this.location = location;
}

var sensors = [];
sensors.push(new sensor(42.359765,-71.091843,"Lobby 10"));
sensors.push(new sensor(42.359133,-71.093201,"Lobby 7"));
var nodeLat = [42.359765, 42.359133];
var nodeLong = [-71.091843, -71.093201];

/*$(document).ready(function(){
	$.getJSON("http://ec2-54-201-87-182.us-west-2.compute.amazonaws.com/api/v1/node/",function(data){
	console.log(data);
	});*/
	
    //Leaflet Map
    var sWBound = L.latLng(42.365901,-71.079440);
    var nEBound = L.latLng(42.350901,-71.107550);
	var map = L.map("map", {minZoom: 14, maxBounds:[sWBound,nEBound] });
	map.setView([42.359200, -71.091950], 16);
	L.tileLayer('http://tile.cloudmade.com/440e7bdbfe0444b18cca210e9cb056c5/123038/256/{z}/{x}/{y}.png', { attribution: 'Map data &copy CloudMade',
	}).addTo(map);
	//Nodes
	for(var i=0; i<sensors.length; i++){
		sensors[i].circ = L.circle([sensors[i].lat,sensors[i].lon], 16, {
    		color: 'red',
    		fillColor: '#f03',
    		fillOpacity: 0.5
		}).addTo(map);
	};
	sensors[0].circ.bindPopup(sensors[0].location, {closeButton: false});
	function locationHover(evt){
		evt.target.openPopup();
	};
	sensors[0].circ.on('mouseover', locationHover);
	sensors[0].circ.on('mouseout', function(evt){
		evt.target.closePopup();
	});
});