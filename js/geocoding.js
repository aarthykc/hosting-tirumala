
function geocode_search()
{geocoder.on('found', function(data)
    {
      console.log(data);
    });

 geocoder.on('select', function(data) {

  console.log(data);
  map.removeLayer(marker);

  var lon = data['feature']['center'][0];
  var lat = data['feature']['center'][1];
  var place = data['feature']['geometry']['place_name'];
  
  marker = new L.Marker([lat, lon]).addTo(map);
});
}