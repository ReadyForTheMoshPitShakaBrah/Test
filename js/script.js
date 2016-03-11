function include(url) {
  var script = document.createElement('script');
  script.src = url;
  document.getElementsByTagName('head')[0].appendChild(script);
}
include ("jquery-2.2.1.min.js");

$(document).ready(function() {
  $(".bottom").hide();
  var getfromjson = function(jsonurl, page, pageEnd) {
    $.getJSON(jsonurl, function(data) {
      var jsonstring = '<table>';
      for (var num = page; num < pageEnd; num++) {
        jsonstring+='<tr>'+'<th>'+data[num].id+'</th>'+'<th>'+data[num].name+'</th>'+'</tr>';
      };
      jsonstring += '</table>';
      $(".content").html(jsonstring);
    })
  };
  $('#b1').on("click", function() {
    $(".bottom").hide();
    $(".content").html("<div> HElloWorld! </div>");
  });

  $('#b2').on("click", function() {
    $(".bottom").hide();
    getfromjson('JSON/data.json', 0, 4);
  });

  $('#b3').on("click", function() {
    $(".bottom").hide();
    getfromjson('JSON/data3.json', 0, 18);
  });

  $('#b4').on("click", function() {
  page = 0;
  pageEnd = page + 5;
    $(".bottom").show();
	  $.getJSON('JSON/data3.json', processData);
    function processData(data) {
		lastPage = data.length % 5;
		numLastPage = data.length - lastPage;
	}
		page = 0 ;
		pageEnd = 5;
    getfromjson('JSON/data3.json',page, pageEnd);
      $('.bottom').show();

  $('#Next').on("click", function() {
		if(pageEnd <= numLastPage) {
			if(pageEnd == numLastPage) {
		      page += 5;
		      pageEnd += 5;
		      empty = ' ';
		      getfromjson('JSON/data3.json', page, numLastPage+lastPage);
		  }
		  else{
        page = pageEnd;
        pageEnd += 5;
        getfromjson('JSON/data3.json', page, pageEnd);
	    };
    };
  });

	$('#Prvs').on("click", function(){
		if (page > 4){
      if (page == numLastPage) pageEnd -= lastPage
      else pageEnd -= 5;
      page -= 5;
      getfromjson('JSON/data3.json', page, pageEnd);
	   }
  });

  $('#First').on("click", function() {
    page = 0;
    pageEnd = 5;
    getfromjson('JSON/data3.json', page, pageEnd);
  });

  $('#Last').on("click", function() {
    page = numLastPage;
    pageEnd = page + lastPage;
    getfromjson('JSON/data3.json', numLastPage, numLastPage+lastPage);
  })
  });
});
