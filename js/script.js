function include(url) {
  var script = document.createElement('script');
  script.src = url;
  document.getElementsByTagName('head')[0].appendChild(script);
}
include ("jquery-2.2.1.min.js");

$(document).ready(function() {

  $('#b1').on("click", function() {
    $(".content").html("<div> HElloWorld! </div>");
  });

  $('#b2').on("click", function() {
    $(".content").html(getfromjson('data.json', 1, 4));
  });

  $('#b3').on("click", function() {
    $('.content').html(getfromjson('data2.json', 1, 4));
  });

  $('#b4').on("click", function() {
  });

  var getfromjson = function(jsonurl, page = 0, pageEnd = 1) {
    $.getJSON(jsonurl, processData);
    function processData(data) {
      var jsonstring = '';
      for( var num = page; num < pageEnd; num++) {
        jsonstring+='<div>'+data[num].mytitle+': '+data[num].myarticle+'<br>'+'</div>';
      };
      return jsonstring;
    };
  };
});
