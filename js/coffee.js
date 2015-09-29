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

$('#get-15').modal('show');

$('#myModal-log-in').click(function() {
  $('#log-in').modal('show');
});

$('#myModal-forgot-p').click(function() {
  $('#forgot-p').modal('show');
});

$('.myModal-sign-up').click(function() {
  $('#sign-up').modal('show');
});

$('.thank-you-button').click(function() {
  $('#thank-you').modal('show');
});

$('.add-button').on('click', function() {
  $('#add-button-modal').modal('show');
  var product = $(this).attr('product-name');
  $('#product-title').text(product);
});

// Instagram hover
$('.special.cards .image').dimmer({
  on: 'hover'
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
