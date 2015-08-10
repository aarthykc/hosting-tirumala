
function set_marker_from_json()

{  
  var geojson =
  {
  "type": "FeatureCollection",
  "generator": "overpass-turbo",
  "copyright": "The data included in this document is from www.openstreetmap.org. The data is made available under ODbL.",
  "timestamp": "2015-08-04T11:21:02Z",
  "features": [
  {
    "type": "Feature",
    "id": "node/335877330",
    "properties": {
      "@id": "node/335877330",
      "name": "Tirumala",
      "name:kn": "ತಿರುಮಲ",
      "name:te": "తిరుమల",
      "place": "town",
      "population": "1000",
      "postal_code": "517504",

    },
    "geometry": {
      "type": "Point",
      "coordinates": [
      79.3497522,
      13.6795235
      ]
    }
  },
  {
    "type": "Feature",
    "id": "node/395733223",
    "properties": {
      "@id": "node/395733223",
      "is_in": "Tirumala",
      "name": "Anjanadri Nagar",
      "place": "neighbourhood"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
      79.3497166,
      13.6761277
      ]
    }
  },
  {
    "type": "Feature",
    "id": "node/405392360",
    "properties": {
      "@id": "node/405392360",
      "is_in": "Tirumala",
      "name": "Madhava Nagar",
      "name:kn": "ಮಾಧವ ನಗರ",
      "place": "neighbourhood"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
      79.3545019,
      13.6795026
      ]
    }
  },
  {
    "type": "Feature",
    "id": "node/3672842252",
    "properties": {
      "@id": "node/3672842252",
      "name": "Srivari Temple",
      "name:kn": "ಶ್ರೀವಾರಿ ದೇವಾಲಯ",
      "place": "neighbourhood"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
      79.3483969,
      13.6832618
      ]
    }
  }
  ]
}

var myLayer = L.mapbox.featureLayer().addTo(map);
map.featureLayer.setGeoJSON(geojson);
myLayer.setGeoJSON(geojson);


myLayer.on('mouseover', function(e) {
  e.layer.openPopup();
});
myLayer.on('mouseout', function(e) {
  e.layer.closePopup();
});
}