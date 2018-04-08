$(window).on("scroll touchmove", function() {
  const $realPosition2 = $("#two").position().top - 170;
//  const $iconPosition = $realPosition2.position().top + 400;
  if ($(document).scrollTop() >= $("#one").position().top) {
//    $('body').css('background', $("#one").attr("data-color"));
    $('a').css('color', "#FFFFFFF");
    $('a').eq(0).css('color', "#4EFE32");
  };

  if ($(document).scrollTop() > $realPosition2) {
    console.log("reached second section");
//    $('body, left-container').css('background', "black");
    $('#left-container').animate({
      left: '20px'},'easeInOutBack');
    $('#right-container').animate({
      opacity: 1}, 'easeInOutBack');
    $('a').css('color', "#FFFFFFF");
    $('a').eq(1).css('color', "#C0FFF8");

    $('#left-container').css('color', "#C7D8C6");

    setInterval(function() {
    $('#right-container').animate( { 
      backgroundColor: '#4EFE32' }, 7000,'easeInOutBack').animate({ 
      backgroundColor: '#C0FFF8' }, 7000,'easeInOutBack'); 
    }, 1000);
    setInterval(function() {
    $('#left-container h1, #left-container span').animate({  
      color: '#4EFE32' }, 7000, 'easeInOutBack').animate({ 
      color: '#31FCE6' }, 7000, 'easeInOutBack');
    }, 1000);
  };

  if ($(document).scrollTop() > ($realPosition2 + 200)) {
      console.log("reached icons section")
      $('.icons').animate({
      left: '20px'},2000,'easeInOutBack');
  };

  const $realPosition3 = $("#three").position().top - 170;
  if ($(document).scrollTop() > $realPosition3) {
//    $('body').css('background', $("#three").attr("data-color"));
//    $('h1').css('color', 'black');
    $('body, #pre-three, #three').animate ({
      backgroundColor: 'rgba(0,0,0,0)'},'easeInOutBack');
    $('a').css('color', "#FFFFFFF");
    $('a').eq(2).css('color', "#FF3241");
  };

  if ($(document).scrollTop() > ($realPosition3 + 550)) {
      console.log("reached resume button")
      $('.button').animate ({
      opacity: 1},1000,'easeInOutBack');
  };

  const $realPosition4 = $("#four").position().top - 170;
  if ($(document).scrollTop() > $realPosition4) {
    $('body').css('background', $("#four").attr("#FAFAF9"));
    $('a').css('color', "#FFFFFFF");
    $('a').eq(3).css('color', "#FF8932");
    $('.right-figure').animate ({
      left: '0px'},2000,'easeInOutBack');
    $('.left-figure').animate ({
      left: '0px'},2000,'easeInOutBack');
  };
});

/*color schemes 
retro
#484830
#486060
#489060
#C04830
#F0D890

colorful
ee4035
f37736
FFE911
7bc043
0392cf
78166D

pastel palett
#a8e6cf
#dcedc1
#ffd3b6
#ffaaa5
#ff8b94

colorful #2
FF3241
FF8932
31FCE6
4EFE32
FF3241
FF8932
*/
// Lettering function 

$(document).ready(function() {
  $('.title').eq(0).animate({
    color: '#FF3241',
  }, 3000, 'easeInOutBack');
  $('.title').eq(1).animate({
    color: '#FF8932',
  }, 5000, 'easeInOutBack');
  $('.name').eq(0).animate({
    color: '#31FCE6',
  }, 5500, 'easeInOutBack');
  $('.name').eq(1).animate({
    color: '#4EFE32',
  }, 6000, 'easeInOutBack');
  $('.name').eq(2).animate({
    color: '#FF3241',
  }, 6500, 'easeInOutBack');
  $('.name').eq(3).animate({
    color: '#FF8932',
  }, 7000, 'easeInOutBack');
  $('.slider-content').animate({
    opacity: 1,
  }, 10000, 'easeInOutBack');
}); 


