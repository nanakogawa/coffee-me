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

// 'Thank You' modal
$('.thank-you-button').click(function() {
  $('#thank-you').modal('show');
});

$('.thank-you-button').click(function() {
  $('#thank-you').modal('show');
});

// Instagram hover
$('.special.cards .image').dimmer({
  on: 'hover'
});

// Create Your Coffee toggle
$('#start-button').click(function() {
  $('.step-1').toggleClass('show');
});

$('#start-button').click(function() {
  $('.step-1-parallax').toggleClass('show');
});

$('#light-button').click(function() {
  $('.light-info').toggleClass('show');
});

$('#roast1').click(function() {
  $('.step-2-light').toggleClass('show');
});

$('#medium-button').click(function() {
  $('.medium-info').toggleClass('show');
});

$('#roast2').click(function() {
  $('.step-2-medium').toggleClass('show');
});

$('#dark-button').click(function() {
  $('.dark-info').toggleClass('show');
});

$('#roast3').click(function() {
  $('.step-2-dark').toggleClass('show');
});

$('.step-2-check').click(function() {
  $('.step-3').css('display', 'block');
});

$('.step-2-check').click(function() {
  $('.step-3-parallax').css('display', 'block');
});

$('.step-3-check').click(function() {
  $('.step-4').css('display', 'block');
});

$('.step-3-check').click(function() {
  $('.step-4-parallax').css('display', 'block');
});

$('.step-4-check').click(function() {
  $('.step-5').css('display', 'block');
});

$('.step-5-check').click(function() {
  $('.step-6').css('display', 'block');
});

$('.step-5-check').click(function() {
  $('.footer-create').css('display', 'block');
});

// Products modal
$('.add-button').on('click', function() {
  $('#add-button-modal').modal('show');
  var product = $(this).attr('product-name');
  $('#product-title').text(product);
});

// Coffee Products toggles
$('#ey-button').click(function() {
  $('.ey-info').toggleClass('show');
});

$('#crt-button').click(function() {
  $('.crt-info').toggleClass('show');
});

$('#mha-button').click(function() {
  $('.mha-info').toggleClass('show');
});

$('#bfc-button').click(function() {
  $('.bfc-info').toggleClass('show');
});

$('#nmm-button').click(function() {
  $('.nmm-info').toggleClass('show');
});

$('#rdk-button').click(function() {
  $('.rdk-info').toggleClass('show');
});

$('#tm-button').click(function() {
  $('.tm-info').toggleClass('show');
});

$('#byc-button').click(function() {
  $('.byc-info').toggleClass('show');
});

$('#essm-button').click(function() {
  $('.essm-info').toggleClass('show');
});

$('#glv-button').click(function() {
  $('.glv-info').toggleClass('show');
});

$('#es-button').click(function() {
  $('.es-info').toggleClass('show');
});

$('#bb-button').click(function() {
  $('.bb-info').toggleClass('show');
});

$('#mc-button').click(function() {
  $('.mc-info').toggleClass('show');
});

$('#co-button').click(function() {
  $('.co-info').toggleClass('show');
});

$('#crtu-button').click(function() {
  $('.crtu-info').toggleClass('show');
});

$('#ek-button').click(function() {
  $('.ek-info').toggleClass('show');
});

$('#hsv-button').click(function() {
  $('.hsv-info').toggleClass('show');
});

$('#uk-button').click(function() {
  $('.uk-info').toggleClass('show');
});

$('#rg-button').click(function() {
  $('.rg-info').toggleClass('show');
});

$('#bba-button').click(function() {
  $('.bba-info').toggleClass('show');
});

//Sweetener Products toggles
$('#cs-button').click(function() {
  $('.cs-info').toggleClass('show');
});

$('#hnh-button').click(function() {
  $('.hnh-info').toggleClass('show');
});

$('#dbs-button').click(function() {
  $('.dbs-info').toggleClass('show');
});

$('#lbs-button').click(function() {
  $('.lbs-info').toggleClass('show');
});

$('#rh-button').click(function() {
  $('.rh-info').toggleClass('show');
});

$('#sc-button').click(function() {
  $('.sc-info').toggleClass('show');
});