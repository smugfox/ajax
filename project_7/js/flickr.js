$(document).ready(function(){
  $('button').click(function() {
    $('button').removeClass("selected");
    $(this).addClass("selected");
    
    // ?jsoncallback=? is what JSONP uses to bypass restrictions
    var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    
    //this refers to the button that the user just clicked
    //text() gets all the text inside the html element aka cat, dog, moose
    var animal = $(this).text();
    
    var flickrOptions = {
      tags: animal,
      format: "json"
    };
    
    function displayPhotos(data) {
      var photoHTML = '<ul>';
      $.each(data.items, function(i, photo) {
        photoHTML += '<li class= "grid-25 tablet-grid-50">';
        photoHTML += '<a href="' + photo.link + '" class="image">';
        photoHTML += '<img src="' + photo.media.m + '"></a></li>';
      });
      photoHTML += '</ul>'
      $('#photos').html(photoHTML);
    }
    
    $.getJSON(flickerAPI, flickrOptions, displayPhotos);
    
  });
});//End of ready