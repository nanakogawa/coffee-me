$('.carousel').carousel({
  interval: 3000
});

$('#top-nav').affix({
});

/* $('#top-nav').on( 'affixed.bs.affix', function () {
  $('.navbar-brand').toggleClass('in');
}); */

$('#top-nav').on( 'affixed.bs.affix', function () {
  $('.navbar-brand').toggleClass('in');
});