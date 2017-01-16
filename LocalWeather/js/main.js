$(document).ready(function($) {

    if (!navigator.geolocation){
      $(".temp").html("Geolocation is not supported by your browser");
    }

    navigator.geolocation.getCurrentPosition(success, error);

    function success(position) {
      var fun = '9e5412cce29bbe85';
      $.ajax({
        url : "http://api.wunderground.com/api/" + fun + "/conditions/q/" + position.coords.latitude +
        "," + position.coords.longitude + ".json",
        dataType : "jsonp",
        success : function(parsed_json) {
          //---  Variable ---//
          var location = parsed_json['current_observation']['display_location']['full'];
          var temp_f = parsed_json['current_observation']['temp_f'];
          var temp_c = parsed_json['current_observation']['temp_c'];
          var icon = parsed_json['current_observation']['icon'];
          //---  temperature ---//
          // with toggle jQuery
          $(".temp").html('<h1>' + temp_c + '&deg;С</h1>');
          $(".temp").append('<h1 style="display: none">' + temp_f + '&deg;F</h1>');
          $(".temp").click(function() {
            $('.temp h1').toggle();
          });
          // with something
          /*$(document).on('click', '.temp', function() {
            $(this).html('<h1>' + temp_f + '&deg;F</h1>');
            $(this).addClass("active");
          });
          $(document).on('click', '.temp.active', function() {
            $(this).html('<h1>' + temp_c + '&deg;C</h1>');
            $(this).removeClass("active");
          });*/
          //--- Image and Location ---//
          $(".img").html('<img width="150px" height="auto" src="' + 'http://icons.wxug.com/i/c/c/' + icon + '.gif' + '" alt="" />');
          $(".location").html('<h1>' + location + '</h1>');
        }
      });
    }

    function error() {
      $(".temp").html("Unable to retrieve your location." + "<br>" + " You must allow to use your current position.");
    };
})
