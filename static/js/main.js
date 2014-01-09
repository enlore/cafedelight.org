function mapInit() {
    var lat_lng = [36.52855210000001, -87.3528402]

    var mapOpts = {
            center: new google.maps.LatLng(lat_lng[0], lat_lng[1]),
            zoom: 14
        }
    var map = new google.maps.Map(document.getElementById("gmap"), mapOpts)

    var markerOpts = {
        position: new google.maps.LatLng(lat_lng[0], lat_lng[1]),
        map: map
    }
    var marker = new google.maps.Marker(markerOpts)
}



google.maps.event.addDomListener(window, 'load', mapInit)
