// Smooth Scroll

$('#view-work').on('click', function(){
  const images = $('#images').position().top;

  $('html, body').animate({
    scrollTop: images
  }, 1000);
});


// Credits-box

$('#showCredits').on('click', function(){
  $('.credits-box').toggleClass('show-box');
});

$('#close').on('click', function(){
  $('.credits-box').removeClass('show-box');
})
