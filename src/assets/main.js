$(function() {
    $.ajax({
    url: 'https://www.codeschool.com/users/Gavelock.json',
    dataType: 'jsonp',
    success: function(response) {
      for (var i=0; i<response.courses.completed.length; i++) {
         var current = response.courses.completed[i];
         console.log(current);
         $('#badges').append('<div></div>')
         $('#badges > div').last().append('<h3>' + current.title + '</h3>');
         $('#badges > div').last().append('<img src="' + current.badge + '"/>');
         $('#badges > div').last().append('<a href="' + current.url + '" target="_blank" class="btn btn-primary"></a>');
         
      }
      $('#badges > div').addClass('course');
    }
  });
});
