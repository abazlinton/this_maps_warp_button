var MapWrapper = function(container, coords, zoom, name, handler){
  this.googleMap = new google.maps.Map(container, {
    center: coords,
    zoom: zoom
  });
  this.name = name;
  this.handler = handler;
}

MapWrapper.prototype = {
  addMarker: function(coords){
    var marker = new google.maps.Marker({
      position: coords,
      map: this.googleMap
    });
  },

  addClickEvent: function(){
    google.maps.event.addListener(this.googleMap, 'click', function(event){
      var position = { lat: event.latLng.lat(), lng: event.latLng.lng() }  
      this.addMarker(position);
    }.bind(this));
  },

  setWarpButton: function(button){
    console.log(this)
    button.onclick = this.warp.bind(this);
  },

  warp: function(){
    this.handler(this.name);
  }


}