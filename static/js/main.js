$(document).ready(function () {
    // It's a G(maps) Thing
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


    // Skrollr, stahp!
    if ($(window).width() > 768) {
        s = skrollr.init({forceHeight: false})
    }

    $(window).resize(function () {
      if ($(this).width() <= 768) {
        s.destroy()
      } else if ($(this).width() > 768) {
        s = skrollr.init()
        s.refresh()
      }
    })

    console.log(s)

    $('#about-us-link').click(function (e) {
            s.animateTo($('#about-us').offset().top - 65)
    })
    $('#location-link').click(function (e) {
            s.animateTo($('#location').offset().top - 65)
    })
    $('#hours-link').click(function (e) {
            s.animateTo($('#stuff').offset().top - 95)
    })
    //s.animateTo(1000, {duration: 550, easing: 'linear', done: function () { console.log('animated to!') } })
})
