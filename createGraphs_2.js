$(document).ready(function () {

    var limit = prompt("Please enter how many values: ", 20);

    $("#make400").click(function () {
        console.log("400!");
        limit = 400;
        redraw();
    });

    $("#make100").click(function () {
        console.log("100!");
        limit = 100;
        redraw();
    });
	
	$("#make200").click(function ()	{
		console.log("200!");
		limit = 200;
		redraw();
	});
	
	/*$("download").click(function ()	{
		function download(filename, text) {
		var pom = document.createElement('a');
		pom.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
		pom.setAttribute('download', '#container1');
		pom.click();
	}});*/
}
		


function redraw() {
    var url = "http://ec2-54-187-18-145.us-west-2.compute.amazonaws.com/api/v1/datapoint/?limit=" + limit;
    var dylos1 = [];
	var dylos2 = [];
	var dylos3 = [];
	var dylos4 = [];
	var as1 = [];
	var as2 = [];
	var as3 = [];
	var as4 = [];
	var as5 = [];
	var as6 = [];
	var as7 = [];
	var as8 = [];

    function logger(index, value) {
        //console.log(index + ": " + value.temperature);
        dylos1.push(value.dylos_bin_1);
		dylos2.push(value.dylos_bin_2);
		dylos3.push(value.dylos_bin_3);
		dylos4.push(value.dylos_bin_4);
		as1.push(value.alphasense_1);
		as2.push(value.alphasense_2);
 		as3.push(value.alphasense_3);
		as4.push(value.alphasense_4);
		as5.push(value.alphasense_5);
		as6.push(value.alphasense_6);
		as7.push(value.alphasense_7);
		as8.push(value.alphasense_8);
   }


    function processJSON(data) {
        $.each(data.objects, logger);
        $('#container1').highcharts({
            chart: {
                type: 'line'
            },
            title: {
                text: 'Particulate Matter'
            },

            yAxis: {
                title: {
                    text: 'PM (ug/m^3)'
                }
            },
            series: [{
				name: 'PM-2.5',
				data: dylos1
            },{
				name: 'PM-10',
				data: dylos3
			}]
        });
        $('#container2').highcharts({
            chart: {
                type: 'line'
            },
            title: {
                text: 'Ozone'
            },

            yAxis: {
                title: {
                    text: 'O3 levels (Dobson units)'
                }
            },
            series: [{
				name: 'O3',
				data: as1
            }]
				});
       $('#container3').highcharts({
            chart: {
                type: 'line'
            },
            title: {
                text: 'Nitrogen Dioxide'
            },

            yAxis: {
                title: {
                    text: 'NO2 (ppb)'
                }
            },
            series: [{
				name: 'NO2',
				data: as3
            }]    
        });  
       $('#container4').highcharts({
            chart: {
                type: 'line'
            },
            title: {
                text: 'Nitrogen Oxide'
            },

            yAxis: {
                title: {
                    text: 'NO (ppb)'
                }
            },
            series: [{
				name: 'NO',
				data: as5
            }]    
        });
       $('#container5').highcharts({
            chart: {
                type: 'line'
            },
            title: {
                text: 'Carbon Monoxide'
            },

            yAxis: {
                title: {
                    text: 'CO (ppb)'
                }
            },
            series: [{
				name: 'CO',
				data: as7
            }]    
        });		}

    // get the data
    $.getJSON(url, processJSON);
}

//initial 
redraw();


});
//OLD CODE
// var url = "http://ec2-54-201-87-182.us-west-2.compute.amazonaws.com/api/v1/datapoint/?limit=3";
// $.getJSON(url, function (data) {
// 	$.each(data.objects, function( index, value ) {
//   	console.log( index + ": " + value.temperature );
// 	});
// });