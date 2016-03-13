function include(url) {
  var script = document.createElement('script');
  script.src = url;
  document.getElementsByTagName('head')[0].appendChild(script);
}
include ("jquery-2.2.1.min.js");

$(document).ready(function() {
  $(".bottom").hide();
  var lastPage;
  var numLastPage;
  var page = 0;
  var pageEnd = 0;
  var jsonstring;
  var numpage = function(page) {
    $('#First').show();
    $('#Prvs').show();
    $('#Current').show();
    $('#Next').show();
    $('#Last').show();
    $('#First').html("First: 1");
    $('#Prvs').html("Previos: " + page/5);
    $('#Current').html("Current: " +(page/5+1));
    $('#Next').html("Next: "+ (page/5+2));
    $('#Last').html("Last: " + (numLastPage/5+1));
    if (page==0) {
      $('#First').hide();
      $('#Prvs').hide();
    }
    if (page + 5 > numLastPage) {
      $('#Next').hide();
      $('#Last').hide();
    }
  };
  function getfromjson(jsonurl, page, pageEnd) {
    startid = page;
    lastid = pageEnd;
    $.getJSON(jsonurl, function(data) {
      jsonstring = '<table>';
      for (var num = startid; num < lastid; num++) {
        jsonstring+='<tr>'+'<th>'+data[num].id+'</th>'+'<th>'+data[num].name+'</th>'+'</tr>';
      };
      jsonstring += '</table>';
      $(".content").html(jsonstring);
    })
  };
  $.getJSON('JSON/data3.json', processData);
  function processData(data) {
  lastPage = data.length % 5;
  numLastPage = data.length - lastPage;
  }
  $('#b1').on("click", function() {
    $(".bottom").hide();
    $(".content").html("<div> HElloWorld! </div>");
  });

  $('#b2').on("click", function() {
    $(".bottom").hide();
    page = 0;
    pageEnd = 4;
    getfromjson('JSON/data.json', page, pageEnd);
  });

  $('#b3').on("click", function() {
    $(".bottom").hide();
    page = 0;
    pageEnd = 18;
    getfromjson('JSON/data3.json', page, pageEnd);
  });

  $('#b4').on("click", function() {
    $(".bottom").show();
    page = 0;
    pageEnd = 5;
    getfromjson('JSON/data3.json', page, pageEnd)
    numpage(page);
  });

  $('#Next').on("click", function() {
    if (pageEnd + 5 >= numLastPage + lastPage) {
      page = numLastPage;
      pageEnd = page + lastPage;
    }
    else {
      page = pageEnd;
      pageEnd += 5;
    }
    numpage(page);
    getfromjson('JSON/data3.json', page, pageEnd);
  });

	$('#Prvs').on("click", function(){
		if (page > 4){
      if (page == numLastPage) pageEnd -= lastPage;
      else pageEnd = page;
      page -= 5;
      numpage(page);
      getfromjson('JSON/data3.json', page, pageEnd);
	   }
  });

  $('#First').on("click", function() {
    page = 0;
    pageEnd = 5;
    numpage(page);
    getfromjson('JSON/data3.json', page, pageEnd);
  });

  $('#Last').on("click", function() {
    page = numLastPage;
    pageEnd = page + lastPage;
    numpage(page);
    getfromjson('JSON/data3.json', page, pageEnd);
  })
});
