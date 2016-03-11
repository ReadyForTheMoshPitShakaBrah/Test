function include(url) {
  var script = document.createElement('script');
  script.src = url;
  document.getElementsByTagName('head')[0].appendChild(script);
}
include ("jquery-2.2.1.min.js");

$(document).ready(function() {
  var getfromjson = function(jsonurl, page, pageEnd) {
    $.getJSON(jsonurl, function(data) {
      var jsonstring = '';
      for (var num = page; num <= pageEnd; num++) {
        jsonstring+='<div>'+data[num].id+': '+data[num].name+'<br>'+'</div>';
      }
      $(".content").html(jsonstring);
    })
  };
  $('#b1').on("click", function() {
    $(".content").html("<div> HElloWorld! </div>");
  });

  $('#b2').on("click", function() {
    getfromjson('JSON/data.json', 0, 4);
  });

  $('#b3').on("click", function() {
    getfromjson('JSON/data2.json', 0, 17);
  });

  $('#b4').on("click", function() {
  });
})
