var searchTerm = "";
var startYear = 0;
var endYear = 0;
var numRecords = 0;
$(document).ready(function() {


var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
  'api-key': "b9f91d369ff59547cd47b931d8cbc56b:0:74623931"
});

// start button
$('#startBtn').on('click', function(){
  searchTerm = $('#searchTerm').val().trim();
  numRecords = $('#numRecords').val();
  startYear = $('#startYear').val();
  endYear = $('#endYear').val();
});

// clear button reloads DOM
$('clearBtn').on('click', function(){
  location.reload();
});

$.ajax({
  url: url,
  method: "GET",
  })
  .done(function (result) {
    console.log(result);
    console.log(result.response.docs[0].headline);
    })
    .fail(function(err) {
      throw err;
    });
});
