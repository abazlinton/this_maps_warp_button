var initialize = function(){
  var mapDiv = document.getElementById('main-map');

  var center = { lat: 40.712784, lng: -74.005941 };

  var mainMap = new MapWrapper(mapDiv, center, 10, "test", function(name){console.log("name: ",name)});
  mainMap.addMarker(center);
  mainMap.addClickEvent();

  var warpButton = document.getElementById('warp');
  mainMap.setWarpButton(warpButton);
  // mainMap.warp.bind(mainMap);

}

window.addEventListener('load', initialize);
