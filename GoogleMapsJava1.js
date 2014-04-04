$(document).ready(function(){
	var sWBound = L.latLng(42.365901,-71.079440);
	var nEBound = L.latLng(42.350901,-71.107550);
	var map = new L.Map('map', {minZoom: 14, maxBounds:[sWBound,nEBound], zoomControl: false });
	map.setView([42.359200, -71.091950], 16);
	var googleLayer = new L.Google('ROADMAP');
	map.addLayer(googleLayer);
	var zoomBar = L.control.zoom({ position: 'topleft' }).addTo(map);

});



