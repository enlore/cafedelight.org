function mapInit() {
var mapOpts = {
    center: new google.maps.LatLng(36.5290495, -87.35296590000002),
    zoom: 14
}

var map = new google.maps.Map(document.getElementById("gmap"),
    mapOpts)
}

google.maps.event.addDomListener(window, 'load', mapInit)
