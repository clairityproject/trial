
function sensor(lat,lon,location) {
	this.lat = lat;
	this.lon = lon;
	this.location = location;
}
$(document).ready(function(){

var sensors = [];
sensors.push(new sensor(42.359765,-71.091843,"Lobby 10"));
sensors.push(new sensor(42.359133,-71.093201,"Lobby 7"));
var nodeLat = [42.359765, 42.359133];
var nodeLong = [-71.091843, -71.093201];

    //Leaflet Map
    var sWBound = L.latLng(42.365901,-71.079440);
    var nEBound = L.latLng(42.350901,-71.107550);
	var map = L.map("map", {minZoom: 14, maxBounds:[sWBound,nEBound] });
	map.setView([42.359200, -71.091950], 16);
	L.tileLayer('http://tile.cloudmade.com/440e7bdbfe0444b18cca210e9cb056c5/997/256/{z}/{x}/{y}.png', { attribution: 'Map data &copy CloudMade',
	}).addTo(map);
<<<<<<< HEAD

=======
	
>>>>>>> 76bdea0a8e6b6fe031088a4545dd40144165ee3f
	//Nodes
	for(var i=0; i<sensors.length; i++){
		sensors[i].circ = L.circle([sensors[i].lat,sensors[i].lon], 16, {
    		color: 'red',
    		fillColor: '#f03',
    		fillOpacity: 0.5
		}).addTo(map);

		sensors[i].circ.bindPopup(sensors[i].location, {closeButton: false});
		function locationHover(evt){
			evt.target.openPopup();
		};
		sensors[i].circ.on('mouseover', locationHover);
		sensors[i].circ.on('mouseout', function(evt){
			evt.target.closePopup();
		});

	};

});