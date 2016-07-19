$(document).ready(function(){
  var navOffset = $('nav').offset().top,
      profileOffset = $('#ScrollProfile').offset().top,
      resumeOffset = $('#ScrollResume').offset().top,
      skillsOffset = $('#ScrollSkill').offset().top,
      portOffset = $('#ScrollPortfolio').offset().top;

  $(window).scroll(function () {
    var scrollPos = $(window).scrollTop();
    if (scrollPos > navOffset-20) {
      $('nav').addClass('navbar-fixed-top');
    }
    else {
      $('nav').removeClass('navbar-fixed-top');
    }


    if (scrollPos  > profileOffset-200 && scrollPos < resumeOffset-450) {
      $("a[href^='#Scroll']").removeClass('active_nav');
      $("a[href='#ScrollProfile']").addClass('active_nav');
    }
    else if (scrollPos > resumeOffset - 450 && scrollPos < skillsOffset-900) {
      $("a[href^='#Scroll']").removeClass('active_nav');
      $("a[href='#ScrollResume']").addClass('active_nav');
    }
    else if (scrollPos > skillsOffset-900 && scrollPos < portOffset - 900) {
      $("a[href^='#Scroll']").removeClass('active_nav');
      $("a[href='#ScrollSkill']").addClass('active_nav');
    }
    else if (scrollPos > portOffset - 900) {
      $("a[href^='#Scroll']").removeClass('active_nav');
      $("a[href='#ScrollPortfolio']").addClass('active_nav');
    }
    else{
      $("a[href^='#Scroll']").removeClass('active_nav');
    }
  });
  $("a[href^='#Scroll']").click(function() {
    var id = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(id).offset().top}, 600);
      return false;
      });
  $('.bxslider').bxSlider({
    infiniteLoop: false,
    hideControlOnEnd: true,
    minSlides: 1,
    maxSlides: 1,
    moveSlides: 1,
    pager: false,
    autoControls:true
  });
$("a[href^='#portTag']").click(function () {
  var id = $(this).attr('href');
  if (id == '#portTagWeb') {
    $('.android').css('display','none');
    $('.other').css('display','none');
    $('.web').css('display','inline-block');
    $("a[href^='#portTag']").parents('li').removeClass('active');
    $(this).parents('li').addClass('active');
  }
  else if (id=="#portTagAndroid") {
    $('.web').css('display','none');
    $('.other').css('display','none');
    $('.android').css('display','inline-block');
    $("a[href^='#portTag']").parents('li').removeClass('active');
    $(this).parents('li').addClass('active');
  }
  else if (id == "#portTagOther") {
    $('.web').css('display','none');
    $('.other').css('display','inline-block');
    $('.android').css('display','none');
    $("a[href^='#portTag']").parents('li').removeClass('active');
    $(this).parents('li').addClass('active');
  }
  else {
    $('.other').css('display','inline-block');
    $('.android').css('display','inline-block');
    $('.web').css('display','inline-block');
    $("a[href^='#portTag']").parents('li').removeClass('active');
    $(this).parents('li').addClass('active');
  }
});
});
