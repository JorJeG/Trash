/*$('#search').keyup(function() {
  var searchField = $('#search').val();
  console.log(searchField);
  if (searchField.length === 0) {
    $('.searchresult').remove();
  } else {
      $.getJSON("https://en.wikipedia.org//w/api.php?action=query&format=json&prop=pageimages%7Cextracts&generator=prefixsearch&redirects=1&formatversion=2&piprop=thumbnail&pilimit=max&exsentences=1&exlimit=max&exintro=1&explaintext=1&gpssearch=" + searchField, function(data) {
        var output = '<ul class="searchresult">';
        $.each(data.query.pages, function(key, val) {
          output += '<a target="_blank" href="https://en.wikipedia.org/w/index.php?curid=' + val.pageid + '" >';
          output += '<li>';
          output += '<h2>' + val.title + '</h2>';
          output += '<p>' + val.extract + '</p>';
          output += '</li>';
          output += '</a>';
        });
        output += '</ul>';
        $('#update').html(output);
      });
    }
});*/

$(document).ready(function() {
  $('#search').keyup(function() {
    var searchField = $('#search').val();
    console.log(searchField);
    if (searchField.length === 0) {
      $('.searchresult').remove();
    } else getSearch(searchField)
  })
});
function getSearch(val) {
  $.ajax({
    url: "https://en.wikipedia.org//w/api.php?action=query&format=json&origin=*&prop=pageimages%7Cextracts&generator=prefixsearch&redirects=1&formatversion=2&piprop=thumbnail&pilimit=max&exsentences=1&exlimit=max&exintro=1&explaintext=1&gpssearch=" + val,
    success: function(data) {
      var output = '<ul class="searchresult">';
      $.each(data.query.pages, function(key, val) {
        output += '<a target="_blank" href="https://en.wikipedia.org/w/index.php?curid=' + val.pageid + '" >';
        output += '<li>';
        output += '<h2>' + val.title + '</h2>';
        output += '<p>' + val.extract + '</p>';
        output += '</li>';
        output += '</a>';
      });
      output += '</ul>';
      $('#update').html(output);
    },
    cache: false
  });
}
