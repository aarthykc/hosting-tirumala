
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
	var place = data['feature']['place_name'];
	marker = new L.Marker([lat, lon]).addTo(map);
	marker.on('click', function(place)
		{ 
			url = "https://en.wikipedia.org/w/api.php?action=query&prop=info&format=json&inprop=url&titles="+place;
			$.ajax({
				url: url,
			}).done(function (data) {
				console.log(data);}); 

	});
});
}