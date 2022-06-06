let map;

window.onload = function () {
	map = new ol.Map({
        target: 'map',
        layers: [
          new ol.layer.Tile({
            source: new ol.source.OSM()
          })
        ],
        view: new ol.View({
          center: ol.proj.fromLonLat([37.41, 8.82]),
          zoom: 4
        })
      });
  
	  const localmap = new ol.Map({
        layers: [
            new ol.layer.Tile({
                source: new ol.source.OSM()
            })
        ],
        target: 'map',
        view: new ol.View({
            center: [0, 0],
            zoom: 2
        })
});



console.log(btc);

var markers = new ol.layer.Vector({
  source: new ol.source.Vector(),
  style: new ol.style.Style({
    image: new ol.style.Icon({
      anchor: [0.5, 1],
      src: 'marker.png'
    })
  })
});
map.addLayer(markers);


//this marker is what creates

let venue = btc.venues;

for (let v in venue){
	var marker = document.createElement("div");
  marker = new ol.Feature(new ol.geom.Point(ol.proj.fromLonLat([venue[v].lon, venue[v].lat])));
	
	
  //console.log(marker.id);
marker.onmouseover = function() {markerClick(venue[v].id); };
  
 marker.id = "marker" + v;
  
  
//  marker.onclick =  function() {markerClick(venue[v].id); };
  
   markers.getSource().addFeature(marker);

	
}

 var x = setInterval(function() {

  localmap.on('singleclick', function (evt) {
      console.log(evt.coordinate);

      // convert coordinate to EPSG-4326
      console.log(ol.proj.transform(evt.coordinate, 'EPSG:3857', 'EPSG:4326'));
  });
  

  
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js');
}

}, 10);
  
};

function markerClick(id){
	console.log("this id is " + id);
}

