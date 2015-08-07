
function geocode_search()

{ var url = 'https://en.wikipedia.org/w/api.php?action=query&prop=info&format=json&inprop=url&titles=';
geocoder.on('found', function(data)
{
	console.log(data);
});

geocoder.on('select', function(data) {

	console.log(data);
	map.removeLayer(marker);

	var lon = data['feature']['center'][0];
	var lat = data['feature']['center'][1];
	var place = data['feature']['text'];
		marker = new L.Marker([lat, lon]).addTo(map);
		marker.on('click', function()
			{
				$.getJSON("http://en.wikipedia.org/w/api.php?action=query&prop=revisions&rvprop=content&format=json&callback=?&titles="+place, 
					function(data) {
	         	console.log(data);

	     });
	});
	});

}