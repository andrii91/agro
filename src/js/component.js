$(document).ready(function () {
  $(window).scroll(function () {
    return $('nav').toggleClass("fixed", $(window).scrollTop() > 0);
  });
  $('.scroll').click(function (e) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;

    $('body,html').animate({
      scrollTop: top - 80
    }, 1500);

  });

  if ($(window).width() > 1200) {
    $(document).scroll(function () {
      y = $(this).scrollTop();
      //      console.log(y);
      var translateXHeader = y * 10;
      var scaleHeader = y / 10;
      var opacityHeader = 1 - y / 50;

      if (scaleHeader < 1) {
        scaleHeader = 1;
      }
      $('.head-item .logo, .scrollAnimation .header-info').css({
        'transform': 'scale(' + scaleHeader + ')',
        'opacity': opacityHeader,
        'transition': '0.5s',

      });
      $('.logo-large-before').css({
        'opacity': opacityHeader,
        'transition': '0.5s',

      });

      $('.scrollAnimation .registration-btn').css({
        'transform': 'translateX(' + translateXHeader + '%)',
        'transition': '0.2s',

      })
      $('.head-item .date, .line-bottom').css({
        'transform': 'translateX(' + translateXHeader + '%)',
        'transition': '0.5s',

      })
      $('.head-item .location, .line-top').css({
        'transform': 'translateX(' + '-' + translateXHeader + '%)',
        'transition': '0.5s',

      })

      if (y > 50) {
        $('.logo-large').css({
          //          'bacground': 'url("images/logo-large.svg") no-repeat center',
          'transition': '0.5s',

        });

        $('.scrollAnimation').css({
          'position': 'absolute',
          'top': '0',
          'left': '0',
          'right': '0',
          'width': '100%',
          'z-index': '0',
          'transition': '1s',
          'transform': 'scale(2)',
          'opacity': '0'
        })
        $('nav').css({
          'opacity': '1'
        })

        $('main').css({
          'margin-top': '100px',
        })


      } else {
        $('.scrollAnimation').css({
          'position': 'static',
          'top': '0',
          'left': '0',
          'right': '0',
          'width': '100%',
          'z-index': '555',
          'transition': '1s',
          'transform': 'scale(1)',
          'opacity': '1'

        })
        $('nav').css({
          'opacity': '0'
        })
        $('main').css({
          'margin-top': '0',
        })
      }

    });
  }



  $('.programs-tab li a').click(function (e) {
    e.preventDefault();
    $('.programs-tab li a').removeClass('active');
    $('.programs-items').removeClass('active');

    $(this).addClass('active');

    $($(this).attr('href')).addClass('active');
  })


  function initMap() {
    var element = document.getElementById('map');
    var options = {
      zoom: 16,
      center: {
        lat: 49.4387994,
        lng: 32.0124971
      },
    };

    var myMap = new google.maps.Map(element, options);

    var markers = [{
      coordinates: {
        lat: 49.4401699,
        lng: 32.0208546
      }

    }];


    for (var i = 0; i < markers.length; i++) {
      addMarker(markers[i]);
    }

    function addMarker(properties) {
      var marker = new google.maps.Marker({
        position: properties.coordinates,
        //        icon: 'svg/logo_dec_map.svg',
        map: myMap
      });

      if (properties.image) {
        marker.setIcon(properties.image);
      }

      if (properties.info) {
        var InfoWindow = new google.maps.InfoWindow({
          content: properties.info
        });

        marker.addListener('click', function () {
          InfoWindow.open(myMap, marker);
        });
      }


      function jump_to_marker(markerPosition) {
        myMap.panTo(markerPosition);
        myMap.setZoom(17);
        marker.setAnimation(google.maps.Animation.DROP);
      }

     

    }

  }
  if ($('div').hasClass('map')) {
    initMap();
  }


});
