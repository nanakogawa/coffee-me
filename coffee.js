$('.carousel').carousel({
  interval: 4500
});

$('#top-nav').affix({
});

$('#top-nav').on( 'affixed.bs.affix', function () {
  $('.navbar-brand').toggleClass('in');
});

$('#top-nav').on( 'affix-top.bs.affix', function () {
  $('.navbar-brand').toggleClass('in');
});