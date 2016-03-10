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
    $(".content").html("<div> HElloWorld! </div>");
  });

  $('#b2').on("click", function() {
    $.getJSON('JSON/data.json', processData);
    function processData(data) {
      var empty='';
      for (var num = 0; num <= 3; num++) {
        empty+='<p>'+data[num].mytitle+'<br>'+data[num].myarticle+'</p>';
      }
      $(".content").html(empty);
    }
  });

  $('#b3').on("click", function() {
    $.getJSON('JSON/data2.json', processData);
    function processData(data) {
      var bla='';
      $.each(data,function(mainobj, obj){
        bla+='<p>'+obj.mytitle+'<br>'+obj.myarticle+'</p>';
      });
      $(".content").html(bla);
    }
  });

  $('#b4').on("click", function() {
    $('#d1').hide();
    $('#d2').hide();
    $('#d3').hide();
    $('#d4').show();
  });
})
