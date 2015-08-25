// carousel
$('.carousel').carousel({
  interval: 4500
});

// navbar
$('#top-nav').affix({
});

$('#top-nav').on( 'affixed.bs.affix', function () {
  $('.navbar-brand').toggleClass('in');
});

$('#top-nav').on( 'affix-top.bs.affix', function () {
  $('.navbar-brand').toggleClass('in');
});

// 'Get 15' modal
$('#get-15').modal('show');

// 'Log In' modal
$('#myModal-log-in').click(function() {
  $('#log-in').modal('show');
});

// 'Forgot Password' modal
$('#myModal-forgot-p').click(function() {
  $('#forgot-p').modal('show');
});

// 'Sign Up' modal
$('.myModal-sign-up').click(function() {
  $('#sign-up').modal('show');
});

// Instagram hover
//$('.pic1').on('mouseover', function() {
//  ('.igpic1').toggle();
//});
//
//$('.pic2').on('mouseover', function() {
//  $('.igpic2').toggle();
//});
//
//$('.pic3').on('mouseover', function() {
//  $('.igpic3').toggle();
//});
//
//$('.pic4').on('mouseover', function() {
//  $('.igpic4').toggle();
//});
//
//$('.pic5').on('mouseover', function() {
//  $('.igpic5').toggle();
//});


