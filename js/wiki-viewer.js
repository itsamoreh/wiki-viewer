$(document).ready(function() {
  $(".searchString").keydown(function(e) {
    // if enter is pressed in the search input
    if(e.keyCode === 13) {
      e.preventDefault();
      search();
    }
  });
});

function search () {
  var searchString = ($(".searchString").val());
  $.ajax( {
    url: "//en.wikipedia.org/w/api.php?action=opensearch&format=json&search=" + searchString + "&limit=20",
    dataType: "jsonp",
    success: function(data) {
      $(".resultsBox").html("");
      for (var x = 0; x < data[0].length; x++) {
        $(".resultsBox").append(  '<div class="large-12 columns result"><div class="callout"><h2 class="resultTitle"><a href=' +
                                  data[3][x] +
                                  ' class="resultLink" target="_blank">' +
                                  data[1][x] +
                                  '</a></h2>' +
                                  '<p class="resultPreview">' +
                                  data[2][x] +
                                  '</p></div></div>'
                               );
      }
    }
  });
}
