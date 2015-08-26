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

//Products modal
//$('.add-button1').click(function() {
//  $('#add-button-modal').modal('show');
//  $('#product-title1').css("display", "block");
//  $('#product-title2').css("display", "none");
//  $('#product-title3').css("display", "none");
//  $('#product-title4').css("display", "none");
//  $('#product-title5').css("display", "none");
//  $('#product-title6').css("display", "none");
//  $('#product-title7').css("display", "none");
//  $('#product-title8').css("display", "none");
//  $('#product-title9').css("display", "none");
//  $('#product-title10').css("display", "none");
//  $('#product-title11').css("display", "none");
//  $('#product-title12').css("display", "none");
//  $('#product-title13').css("display", "none");
//  $('#product-title14').css("display", "none");
//  $('#product-title15').css("display", "none");
//  $('#product-title16').css("display", "none");
//  $('#product-title17').css("display", "none");
//  $('#product-title18').css("display", "none");
//  $('#product-title19').css("display", "none");
//  $('#product-title20').css("display", "none");
//});
//
//$('.add-button2').click(function() {
//  $('#add-button-modal').modal('show');
//  $('#product-title1').css("display", "none");
//  $('#product-title2').css("display", "block");
//  $('#product-title3').css("display", "none");
//  $('#product-title4').css("display", "none");
//  $('#product-title5').css("display", "none");
//  $('#product-title6').css("display", "none");
//  $('#product-title7').css("display", "none");
//  $('#product-title8').css("display", "none");
//  $('#product-title9').css("display", "none");
//  $('#product-title10').css("display", "none");
//  $('#product-title11').css("display", "none");
//  $('#product-title12').css("display", "none");
//  $('#product-title13').css("display", "none");
//  $('#product-title14').css("display", "none");
//  $('#product-title15').css("display", "none");
//  $('#product-title16').css("display", "none");
//  $('#product-title17').css("display", "none");
//  $('#product-title18').css("display", "none");
//  $('#product-title19').css("display", "none");
//  $('#product-title20').css("display", "none");
//});
//
//$('.add-button3').click(function() {
//  $('#add-button-modal').modal('show');
//  $('#product-title1').css("display", "none");
//  $('#product-title2').css("display", "none");
//  $('#product-title3').css("display", "block");
//  $('#product-title4').css("display", "none");
//  $('#product-title5').css("display", "none");
//  $('#product-title6').css("display", "none");
//  $('#product-title7').css("display", "none");
//  $('#product-title8').css("display", "none");
//  $('#product-title9').css("display", "none");
//  $('#product-title10').css("display", "none");
//  $('#product-title11').css("display", "none");
//  $('#product-title12').css("display", "none");
//  $('#product-title13').css("display", "none");
//  $('#product-title14').css("display", "none");
//  $('#product-title15').css("display", "none");
//  $('#product-title16').css("display", "none");
//  $('#product-title17').css("display", "none");
//  $('#product-title18').css("display", "none");
//  $('#product-title19').css("display", "none");
//  $('#product-title20').css("display", "none");
//});
//
//$('.add-button4').click(function() {
//  $('#add-button-modal').modal('show');
//  $('#product-title1').css("display", "none");
//  $('#product-title2').css("display", "none");
//  $('#product-title3').css("display", "none");
//  $('#product-title4').css("display", "block");
//  $('#product-title5').css("display", "none");
//  $('#product-title6').css("display", "none");
//  $('#product-title7').css("display", "none");
//  $('#product-title8').css("display", "none");
//  $('#product-title9').css("display", "none");
//  $('#product-title10').css("display", "none");
//  $('#product-title11').css("display", "none");
//  $('#product-title12').css("display", "none");
//  $('#product-title13').css("display", "none");
//  $('#product-title14').css("display", "none");
//  $('#product-title15').css("display", "none");
//  $('#product-title16').css("display", "none");
//  $('#product-title17').css("display", "none");
//  $('#product-title18').css("display", "none");
//  $('#product-title19').css("display", "none");
//  $('#product-title20').css("display", "none");
//});
//
//$('.add-button5').click(function() {
//  $('#add-button-modal').modal('show');
//  $('#product-title1').css("display", "none");
//  $('#product-title2').css("display", "none");
//  $('#product-title3').css("display", "none");
//  $('#product-title4').css("display", "none");
//  $('#product-title5').css("display", "block");
//  $('#product-title6').css("display", "none");
//  $('#product-title7').css("display", "none");
//  $('#product-title8').css("display", "none");
//  $('#product-title9').css("display", "none");
//  $('#product-title10').css("display", "none");
//  $('#product-title11').css("display", "none");
//  $('#product-title12').css("display", "none");
//  $('#product-title13').css("display", "none");
//  $('#product-title14').css("display", "none");
//  $('#product-title15').css("display", "none");
//  $('#product-title16').css("display", "none");
//  $('#product-title17').css("display", "none");
//  $('#product-title18').css("display", "none");
//  $('#product-title19').css("display", "none");
//  $('#product-title20').css("display", "none");
//});
//
//$('.add-button6').click(function() {
//  $('#add-button-modal').modal('show');
//  $('#product-title1').css("display", "none");
//  $('#product-title2').css("display", "none");
//  $('#product-title3').css("display", "none");
//  $('#product-title4').css("display", "none");
//  $('#product-title5').css("display", "none");
//  $('#product-title6').css("display", "block");
//  $('#product-title7').css("display", "none");
//  $('#product-title8').css("display", "none");
//  $('#product-title9').css("display", "none");
//  $('#product-title10').css("display", "none");
//  $('#product-title11').css("display", "none");
//  $('#product-title12').css("display", "none");
//  $('#product-title13').css("display", "none");
//  $('#product-title14').css("display", "none");
//  $('#product-title15').css("display", "none");
//  $('#product-title16').css("display", "none");
//  $('#product-title17').css("display", "none");
//  $('#product-title18').css("display", "none");
//  $('#product-title19').css("display", "none");
//  $('#product-title20').css("display", "none");
//});
//
//$('.add-button7').click(function() {
//  $('#add-button-modal').modal('show');
//  $('#product-title1').css("display", "none");
//  $('#product-title2').css("display", "none");
//  $('#product-title3').css("display", "none");
//  $('#product-title4').css("display", "none");
//  $('#product-title5').css("display", "none");
//  $('#product-title6').css("display", "none");
//  $('#product-title7').css("display", "block");
//  $('#product-title8').css("display", "none");
//  $('#product-title9').css("display", "none");
//  $('#product-title10').css("display", "none");
//  $('#product-title11').css("display", "none");
//  $('#product-title12').css("display", "none");
//  $('#product-title13').css("display", "none");
//  $('#product-title14').css("display", "none");
//  $('#product-title15').css("display", "none");
//  $('#product-title16').css("display", "none");
//  $('#product-title17').css("display", "none");
//  $('#product-title18').css("display", "none");
//  $('#product-title19').css("display", "none");
//  $('#product-title20').css("display", "none");
//});
//
//$('.add-button8').click(function() {
//  $('#add-button-modal').modal('show');
//  $('#product-title1').css("display", "none");
//  $('#product-title2').css("display", "none");
//  $('#product-title3').css("display", "none");
//  $('#product-title4').css("display", "none");
//  $('#product-title5').css("display", "none");
//  $('#product-title6').css("display", "none");
//  $('#product-title7').css("display", "none");
//  $('#product-title8').css("display", "block");
//  $('#product-title9').css("display", "none");
//  $('#product-title10').css("display", "none");
//  $('#product-title11').css("display", "none");
//  $('#product-title12').css("display", "none");
//  $('#product-title13').css("display", "none");
//  $('#product-title14').css("display", "none");
//  $('#product-title15').css("display", "none");
//  $('#product-title16').css("display", "none");
//  $('#product-title17').css("display", "none");
//  $('#product-title18').css("display", "none");
//  $('#product-title19').css("display", "none");
//  $('#product-title20').css("display", "none");
//});
//
//$('.add-button9').click(function() {
//  $('#add-button-modal').modal('show');
//  $('#product-title1').css("display", "none");
//  $('#product-title2').css("display", "none");
//  $('#product-title3').css("display", "none");
//  $('#product-title4').css("display", "none");
//  $('#product-title5').css("display", "none");
//  $('#product-title6').css("display", "none");
//  $('#product-title7').css("display", "none");
//  $('#product-title8').css("display", "none");
//  $('#product-title9').css("display", "block");
//  $('#product-title10').css("display", "none");
//  $('#product-title11').css("display", "none");
//  $('#product-title12').css("display", "none");
//  $('#product-title13').css("display", "none");
//  $('#product-title14').css("display", "none");
//  $('#product-title15').css("display", "none");
//  $('#product-title16').css("display", "none");
//  $('#product-title17').css("display", "none");
//  $('#product-title18').css("display", "none");
//  $('#product-title19').css("display", "none");
//  $('#product-title20').css("display", "none");
//});
//
//$('.add-button10').click(function() {
//  $('#add-button-modal').modal('show');
//  $('#product-title1').css("display", "none");
//  $('#product-title2').css("display", "none");
//  $('#product-title3').css("display", "none");
//  $('#product-title4').css("display", "none");
//  $('#product-title5').css("display", "none");
//  $('#product-title6').css("display", "none");
//  $('#product-title7').css("display", "none");
//  $('#product-title8').css("display", "none");
//  $('#product-title9').css("display", "none");
//  $('#product-title10').css("display", "block");
//  $('#product-title11').css("display", "none");
//  $('#product-title12').css("display", "none");
//  $('#product-title13').css("display", "none");
//  $('#product-title14').css("display", "none");
//  $('#product-title15').css("display", "none");
//  $('#product-title16').css("display", "none");
//  $('#product-title17').css("display", "none");
//  $('#product-title18').css("display", "none");
//  $('#product-title19').css("display", "none");
//  $('#product-title20').css("display", "none");
//});
//
//$('.add-button11').click(function() {
//  $('#add-button-modal').modal('show');
//  $('#product-title1').css("display", "none");
//  $('#product-title2').css("display", "none");
//  $('#product-title3').css("display", "none");
//  $('#product-title4').css("display", "none");
//  $('#product-title5').css("display", "none");
//  $('#product-title6').css("display", "none");
//  $('#product-title7').css("display", "none");
//  $('#product-title8').css("display", "none");
//  $('#product-title9').css("display", "none");
//  $('#product-title10').css("display", "none");
//  $('#product-title11').css("display", "block");
//  $('#product-title12').css("display", "none");
//  $('#product-title13').css("display", "none");
//  $('#product-title14').css("display", "none");
//  $('#product-title15').css("display", "none");
//  $('#product-title16').css("display", "none");
//  $('#product-title17').css("display", "none");
//  $('#product-title18').css("display", "none");
//  $('#product-title19').css("display", "none");
//  $('#product-title20').css("display", "none");
//});
//
//$('.add-button12').click(function() {
//  $('#add-button-modal').modal('show');
//  $('#product-title1').css("display", "none");
//  $('#product-title2').css("display", "none");
//  $('#product-title3').css("display", "none");
//  $('#product-title4').css("display", "none");
//  $('#product-title5').css("display", "none");
//  $('#product-title6').css("display", "none");
//  $('#product-title7').css("display", "none");
//  $('#product-title8').css("display", "none");
//  $('#product-title9').css("display", "none");
//  $('#product-title10').css("display", "none");
//  $('#product-title11').css("display", "none");
//  $('#product-title12').css("display", "block");
//  $('#product-title13').css("display", "none");
//  $('#product-title14').css("display", "none");
//  $('#product-title15').css("display", "none");
//  $('#product-title16').css("display", "none");
//  $('#product-title17').css("display", "none");
//  $('#product-title18').css("display", "none");
//  $('#product-title19').css("display", "none");
//  $('#product-title20').css("display", "none");
//});
//
//$('.add-button13').click(function() {
//  $('#add-button-modal').modal('show');
//  $('#product-title1').css("display", "none");
//  $('#product-title2').css("display", "none");
//  $('#product-title3').css("display", "none");
//  $('#product-title4').css("display", "none");
//  $('#product-title5').css("display", "none");
//  $('#product-title6').css("display", "none");
//  $('#product-title7').css("display", "none");
//  $('#product-title8').css("display", "none");
//  $('#product-title9').css("display", "none");
//  $('#product-title10').css("display", "none");
//  $('#product-title11').css("display", "none");
//  $('#product-title12').css("display", "none");
//  $('#product-title13').css("display", "block");
//  $('#product-title14').css("display", "none");
//  $('#product-title15').css("display", "none");
//  $('#product-title16').css("display", "none");
//  $('#product-title17').css("display", "none");
//  $('#product-title18').css("display", "none");
//  $('#product-title19').css("display", "none");
//  $('#product-title20').css("display", "none");
//});
//
//$('.add-button14').click(function() {
//  $('#add-button-modal').modal('show');
//  $('#product-title1').css("display", "none");
//  $('#product-title2').css("display", "none");
//  $('#product-title3').css("display", "none");
//  $('#product-title4').css("display", "none");
//  $('#product-title5').css("display", "none");
//  $('#product-title6').css("display", "none");
//  $('#product-title7').css("display", "none");
//  $('#product-title8').css("display", "none");
//  $('#product-title9').css("display", "none");
//  $('#product-title10').css("display", "none");
//  $('#product-title11').css("display", "none");
//  $('#product-title12').css("display", "none");
//  $('#product-title13').css("display", "none");
//  $('#product-title14').css("display", "block");
//  $('#product-title15').css("display", "none");
//  $('#product-title16').css("display", "none");
//  $('#product-title17').css("display", "none");
//  $('#product-title18').css("display", "none");
//  $('#product-title19').css("display", "none");
//  $('#product-title20').css("display", "none");
//});
//
//$('.add-button15').click(function() {
//  $('#add-button-modal').modal('show');
//  $('#product-title1').css("display", "none");
//  $('#product-title2').css("display", "none");
//  $('#product-title3').css("display", "none");
//  $('#product-title4').css("display", "none");
//  $('#product-title5').css("display", "none");
//  $('#product-title6').css("display", "none");
//  $('#product-title7').css("display", "none");
//  $('#product-title8').css("display", "none");
//  $('#product-title9').css("display", "none");
//  $('#product-title10').css("display", "none");
//  $('#product-title11').css("display", "none");
//  $('#product-title12').css("display", "none");
//  $('#product-title13').css("display", "none");
//  $('#product-title14').css("display", "none");
//  $('#product-title15').css("display", "block");
//  $('#product-title16').css("display", "none");
//  $('#product-title17').css("display", "none");
//  $('#product-title18').css("display", "none");
//  $('#product-title19').css("display", "none");
//  $('#product-title20').css("display", "none");
//});
//
//$('.add-button16').click(function() {
//  $('#add-button-modal').modal('show');
//  $('#product-title1').css("display", "none");
//  $('#product-title2').css("display", "none");
//  $('#product-title3').css("display", "none");
//  $('#product-title4').css("display", "none");
//  $('#product-title5').css("display", "none");
//  $('#product-title6').css("display", "none");
//  $('#product-title7').css("display", "none");
//  $('#product-title8').css("display", "none");
//  $('#product-title9').css("display", "none");
//  $('#product-title10').css("display", "none");
//  $('#product-title11').css("display", "none");
//  $('#product-title12').css("display", "none");
//  $('#product-title13').css("display", "none");
//  $('#product-title14').css("display", "none");
//  $('#product-title15').css("display", "none");
//  $('#product-title16').css("display", "block");
//  $('#product-title17').css("display", "none");
//  $('#product-title18').css("display", "none");
//  $('#product-title19').css("display", "none");
//  $('#product-title20').css("display", "none");
//});
//
//$('.add-button17').click(function() {
//  $('#add-button-modal').modal('show');
//  $('#product-title1').css("display", "none");
//  $('#product-title2').css("display", "none");
//  $('#product-title3').css("display", "none");
//  $('#product-title4').css("display", "none");
//  $('#product-title5').css("display", "none");
//  $('#product-title6').css("display", "none");
//  $('#product-title7').css("display", "none");
//  $('#product-title8').css("display", "none");
//  $('#product-title9').css("display", "none");
//  $('#product-title10').css("display", "none");
//  $('#product-title11').css("display", "none");
//  $('#product-title12').css("display", "none");
//  $('#product-title13').css("display", "none");
//  $('#product-title14').css("display", "none");
//  $('#product-title15').css("display", "none");
//  $('#product-title16').css("display", "none");
//  $('#product-title17').css("display", "block");
//  $('#product-title18').css("display", "none");
//  $('#product-title19').css("display", "none");
//  $('#product-title20').css("display", "none");
//});
//
//$('.add-button18').click(function() {
//  $('#add-button-modal').modal('show');
//  $('#product-title1').css("display", "none");
//  $('#product-title2').css("display", "none");
//  $('#product-title3').css("display", "none");
//  $('#product-title4').css("display", "none");
//  $('#product-title5').css("display", "none");
//  $('#product-title6').css("display", "none");
//  $('#product-title7').css("display", "none");
//  $('#product-title8').css("display", "none");
//  $('#product-title9').css("display", "none");
//  $('#product-title10').css("display", "none");
//  $('#product-title11').css("display", "none");
//  $('#product-title12').css("display", "none");
//  $('#product-title13').css("display", "none");
//  $('#product-title14').css("display", "none");
//  $('#product-title15').css("display", "none");
//  $('#product-title16').css("display", "none");
//  $('#product-title17').css("display", "none");
//  $('#product-title18').css("display", "block");
//  $('#product-title19').css("display", "none");
//  $('#product-title20').css("display", "none");
//});
//
//$('.add-button19').click(function() {
//  $('#add-button-modal').modal('show');
//  $('#product-title1').css("display", "none");
//  $('#product-title2').css("display", "none");
//  $('#product-title3').css("display", "none");
//  $('#product-title4').css("display", "none");
//  $('#product-title5').css("display", "none");
//  $('#product-title6').css("display", "none");
//  $('#product-title7').css("display", "none");
//  $('#product-title8').css("display", "none");
//  $('#product-title9').css("display", "none");
//  $('#product-title10').css("display", "none");
//  $('#product-title11').css("display", "none");
//  $('#product-title12').css("display", "none");
//  $('#product-title13').css("display", "none");
//  $('#product-title14').css("display", "none");
//  $('#product-title15').css("display", "none");
//  $('#product-title16').css("display", "none");
//  $('#product-title17').css("display", "none");
//  $('#product-title18').css("display", "none");
//  $('#product-title19').css("display", "block");
//  $('#product-title20').css("display", "none");
//});
//
//$('.add-button20').click(function() {
//  $('#add-button-modal').modal('show');
//  $('#product-title1').css("display", "none");
//  $('#product-title2').css("display", "none");
//  $('#product-title3').css("display", "none");
//  $('#product-title4').css("display", "none");
//  $('#product-title5').css("display", "none");
//  $('#product-title6').css("display", "none");
//  $('#product-title7').css("display", "none");
//  $('#product-title8').css("display", "none");
//  $('#product-title9').css("display", "none");
//  $('#product-title10').css("display", "none");
//  $('#product-title11').css("display", "none");
//  $('#product-title12').css("display", "none");
//  $('#product-title13').css("display", "none");
//  $('#product-title14').css("display", "none");
//  $('#product-title15').css("display", "none");
//  $('#product-title16').css("display", "none");
//  $('#product-title17').css("display", "none");
//  $('#product-title18').css("display", "none");
//  $('#product-title19').css("display", "none");
//  $('#product-title20').css("display", "block");
//});

//var product1 = {
//  name: 'ERTHOPIAN YIRCHEFFE'
//}
//var elName = document.getElementById('product-title1');
//elName.textContent = product1.name;
//
//var product2 = {
//  name: 'COSTA RICAN TARRAZY LA PASTORA'
//}
//var elName = document.getElementById('product-title2');
//elName.textContent = product2.name;
//
//var product3 = {
//  name: 'MEXICAN HUATUSCO ALTURA'
//}
//var elName = document.getElementById('product-title3');
//elName.textContent = product3.name;
//
//var product4 = {
//  name: 'BRAZIL FAZENDA CALIFORNIA'
//}
//var elName = document.getElementById('product-title4');
//elName.textContent = product4.name;
//
//var product5 = {
//  name: 'NICARAGUA MAMA MINA'
//}
//var elName = document.getElementById('product-title5');
//elName.textContent = product5.name;
//
//var product6 = {
//  name: 'RWANDA DUKUNDE KAWA'
//}
//var elName = document.getElementById('product-title6');
//elName.textContent = product6.name;
//
//var product7 = {
//  name: 'TANZANIA MBOZI'
//}
//var elName = document.getElementById('product-title7');
//elName.textContent = product7.name;
//
//var product8 = {
//  name: 'BRAZIL YELLOW CATUAI'
//}
//var elName = document.getElementById('product-title8');
//elName.textContent = product8.name;
//
//var product9 = {
//  name: 'EL SALVADOR SANTA MARIA'
//}
//var elName = document.getElementById('product-title9');
//elName.textContent = product9.name;
//
//var product10 = {
//  name: 'GUATEMALA LAS VOLCANES'
//}
//var elName = document.getElementById('product-title10');
//elName.textContent = product10.name;
//
//var product11 = {
//  name: 'ETHIOPIAN SIDAMO'
//}
//var elName = document.getElementById('product-title11');
//elName.textContent = product11.name;
//
//var product12 = {
//  name: 'BURUNDI BURAMIRO'
//}
//var elName = document.getElementById('product-title12');
//elName.textContent = product12.name;
//
//var product13 = {
//  name: 'MEXICO CANOAS'
//}
//var elName = document.getElementById('product-title13');
//elName.textContent = product13.name;
//
//var product14 = {
//  name: 'COLUMBIA OPORAPA'
//}
//var elName = document.getElementById('product-title14');
//elName.textContent = product14.name;
//
//var product15 = {
//  name: 'COSTA RICA TARRAZU'
//}
//var elName = document.getElementById('product-title15');
//elName.textContent = product15.name;
//
//var product16 = {
//  name: 'ETHOPIAN KOCHERE'
//}
//var elName = document.getElementById('product-title16');
//elName.textContent = product16.name;
//
//var product17 = {
//  name: 'HONDURAS SAN VICENTE'
//}
//var elName = document.getElementById('product-title17');
//elName.textContent = product17.name;
//
//var product18 = {
//  name: 'UGANDA KAPCHORWA'
//}
//var elName = document.getElementById('product-title18');
//elName.textContent = product18.name;
//
//var product19 = {
//  name: 'RWANDA GITESI'
//}
//var elName = document.getElementById('product-title19');
//elName.textContent = product19.name;
//
//var product20 = {
//  name: 'BURUNDI BUHORWA'
//}
//var elName = document.getElementById('product-title20');
//elName.textContent = product20.name;

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