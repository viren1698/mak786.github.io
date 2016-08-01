$(document).ready(function(){
  var navOffset = $('nav').offset().top,
      profileOffset = $('#ScrollProfile').offset().top,
      resumeOffset = $('#ScrollResume').offset().top,
      skillsOffset = $('#ScrollSkill').offset().top,
      portOffset = $('#ScrollPortfolio').offset().top,
        contactOffset = $('#ScrollContact').offset().top;

  $(window).scroll(function () {
    var scrollPos = $(window).scrollTop();
    if (scrollPos > navOffset-20) {
      $('nav').addClass('navbar-fixed-top');
    }
    else {
      $('nav').removeClass('navbar-fixed-top');
    }


    if (scrollPos  > profileOffset-60 && scrollPos < resumeOffset-150) {
      $("a[href^='#Scroll']").removeClass('active_nav');
      $("a[href='#ScrollProfile']").addClass('active_nav');
    }
    else if (scrollPos > resumeOffset - 150 && scrollPos < skillsOffset-100) {
      $("a[href^='#Scroll']").removeClass('active_nav');
      $("a[href='#ScrollResume']").addClass('active_nav');
    }
    else if (scrollPos > skillsOffset-100 && scrollPos < portOffset - 100) {
      $("a[href^='#Scroll']").removeClass('active_nav');
      $("a[href='#ScrollSkill']").addClass('active_nav');
    }
    else if (scrollPos > portOffset - 100 && scrollPos < contactOffset - 100) {
      $("a[href^='#Scroll']").removeClass('active_nav');
      $("a[href='#ScrollPortfolio']").addClass('active_nav');
    }
    else if (scrollPos > contactOffset-100) {
      $("a[href^='#Scroll']").removeClass('active_nav');
      $("a[href='#ScrollContact']").addClass('active_nav');
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
// portfolio tag
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

// getting height and width of div containing canvas
var canvasWidth = $(".additional-skills .col-md-4").outerWidth();
var canvasHeight = $(".additional-skills .col-md-4").outerHeight();
console.log("canvasHeight : "+canvasHeight+" canvasWidth : "+canvasWidth);
var canvasC = document.getElementById('communication');
drawCanvas(canvasC,canvasWidth,canvasHeight,0.60);
var canvasL = document.getElementById('leadership');
drawCanvas(canvasL,canvasWidth,canvasHeight,0.70);
var canvasH = document.getElementById('humour');
drawCanvas(canvasH,canvasWidth,canvasHeight,0.85);
var canvasy = document.getElementById("hello");
drawCanvas(canvasy,500,500,0.70);

});
function drawCanvas(canvas,width,height,pct) {
  start = ((2*pct)-1.5)+1;
  canvas.height = height;
  canvas.width = width;
  console.log("canvas.height : "+canvas.height+" canvas.width : "+canvas.width);
  var ctx = canvas.getContext("2d");
  console.log(ctx);
  // translate to center
  ctx.translate(canvas.width / 2,canvas.height / 2);

  radius = (canvas.height / 2) * 0.80;

  // drawing circular progress bar
  ctx.beginPath();
  ctx.lineCap="round";
  ctx.arc(0, 0, radius, 1.5*Math.PI, start*Math.PI);
  ctx.lineWidth = 5;
  ctx.strokeStyle = "#f08b65";
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(0, 0, radius, (start)*Math.PI, 1.5*Math.PI);
  ctx.lineWidth = 5;
  ctx.strokeStyle = "#f0f0f0";
  ctx.stroke();

  var text = (pct*100)+"%";
  ctx.font='25px Courier New';
  ctx.textAlign="center";
  ctx.fillText(text, 0, 0);
}
