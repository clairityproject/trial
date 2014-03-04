//Question: How do I get them to appear when the site loads? - split into multiple threads
//Redrawing Circles

var serverNodesURL = "http://ec2-54-201-87-182.us-west-2.compute.amazonaws.com/api/v1/node/";
var serverDataURL = "http://ec2-54-201-87-182.us-west-2.compute.amazonaws.com/api/v1/datapoint/";

function sensor(lat,lon,location) {
	this.lat = lat;
	this.lon = lon;
	this.location = location;
}

var sensors = [];
var new_sensor;
var nodesDrawn = false;

function RequestNodes() {
	$.getJSON(serverNodesURL, function (data) {
		for(i=0; i<data["objects"].length; i++){
			new_sensor = new sensor(data["objects"][i]["location"]["latitude"],data["objects"][i]["location"]["longitude"],data["objects"][i]["location"]["name"]);
    		sensors.push(new_sensor);
    		nodesDrawn = true;
		}
	});
}

function RequestDatapoints() {
	if(nodesDrawn){
		$.getJSON(serverDataURL, function (data) {
			for(i=0; i<data["objects"].length; i++){
				alpha1 = data["objects"][i]["alphasense_1"];
				sensors[i].alpha1 = alpha1;
			}
		});
	}
}

function displayHover(i){
	$("#locationheader").html(String(sensors[i].alpha1));
};

$(document).ready(function(){

	RequestNodes();

    //Leaflet Map
    var sWBound = L.latLng(42.365901,-71.079440);
    var nEBound = L.latLng(42.350901,-71.107550);
	var map = L.map("map", {minZoom: 14, maxBounds:[sWBound,nEBound] });
	map.setView([42.359200, -71.091950], 16);
	L.tileLayer('http://tile.cloudmade.com/440e7bdbfe0444b18cca210e9cb056c5/997/256/{z}/{x}/{y}.png', { attribution: 'Map data &copy CloudMade',
	}).addTo(map);

	//Nodes
	function drawNodes(){
		RequestDatapoints();
		for(var i=0; i<sensors.length; i++){
			sensors[i].circ = L.circle([sensors[i].lat,sensors[i].lon], 16, {
	    		color: 'red',
	    		fillColor: '#f03',
	    		fillOpacity: 0.5
			}).addTo(map);

			sensors[i].circ.number = i;
	
			sensors[i].circ.bindPopup(sensors[i].location, {closeButton: false});
			sensors[i].circ.on('mouseover', function(evt) {
				evt.target.openPopup();
				displayHover(this.number);
			});
			sensors[i].circ.on('mouseout', function(evt){
				evt.target.closePopup();
			});

		};
	}

	drawNodes();

	var reset = setInterval(function() {drawNodes()}, 5000);


});