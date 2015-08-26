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

//Instagram hover
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

//Sweetener Products modals
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