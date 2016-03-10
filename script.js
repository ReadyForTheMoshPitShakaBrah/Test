function include(url) {
  var script = document.createElement('script');
  script.src = url;
  document.getElementsByTagName('head')[0].appendChild(script);
}
include ("jquery-2.2.1.min.js");

$(document).ready(function() {
  $('#d1').hide();
  $('#d2').hide();
  $('#d3').hide();
  $('#d4').hide();
  
  $('#b1').on("click", function() {
    $('#d1').show();
    $('#d2').hide();
    $('#d3').hide();
    $('#d4').hide();
  });

  $('#b2').on("click", function() {
    $('#d1').hide();
    $('#d2').show();
    $('#d3').hide();
    $('#d4').hide();
  });

  $('#b3').on("click", function() {
    $('#d1').hide();
    $('#d2').hide();
    $('#d3').show();
    $('#d4').hide();
  });

  $('#b4').on("click", function() {
    $('#d1').hide();
    $('#d2').hide();
    $('#d3').hide();
    $('#d4').show();
  });
})
