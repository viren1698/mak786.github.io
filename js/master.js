$(document).ready(function(){
  var navOffset = $('nav').offset().top,
      profileOffset = $('#ScrollProfile').offset().top,
      resumeOffset = $('#ScrollResume').offset().top,
      skillsOffset = $('#ScrollSkill').offset().top,
      portOffset = $('#ScrollPortfolio').offset().top,
      contactOffset = $('#ScrollContact').offset().top,
      additionalSkillsOffset = $('.additional-skills').offset().top;

// smooth scrolling
  $(window).scroll(function () {
    var scrollPos = $(window).scrollTop();
    if (scrollPos > navOffset-20) {
      $('nav').addClass('navbar-fixed-top');
    }
    else {
      $('nav').removeClass('navbar-fixed-top');
    }
    if (scrollPos  > profileOffset-60 && scrollPos < resumeOffset-250) {
      $("a[href^='#Scroll']").removeClass('active_nav');
      $("a[href='#ScrollProfile']").addClass('active_nav');
    }
    else if (scrollPos > resumeOffset - 250 && scrollPos < skillsOffset-200) {
      $("a[href^='#Scroll']").removeClass('active_nav');
      $("a[href='#ScrollResume']").addClass('active_nav');
    }
    else if (scrollPos > skillsOffset-200 && scrollPos < portOffset - 200) {
      $("a[href^='#Scroll']").removeClass('active_nav');
      $("a[href='#ScrollSkill']").addClass('active_nav');
    }
    else if (scrollPos > (portOffset - 200) && scrollPos < (contactOffset - 200)) {
      $("a[href^='#Scroll']").removeClass('active_nav');
      $("a[href='#ScrollPortfolio']").addClass('active_nav');
    }
    else if (scrollPos > contactOffset-200) {
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
  $(".portNav #PortNavall").css("color","#ff6f69");
  $(".portNav button").click(function () {
    clicked = $(this).attr("id");
    if (clicked == 'PortNavAll') {
      $(".portNav #PortNavAll").css("color","#ff6f69");
      $(".portNav #PortNavAndroid").css("color","black");
      $(".portNav #PortNavPython").css("color","black");
      $(".portNav #PortNavOthers").css("color","black");
      $(".portContent button").css("display",'inline-block');
    }
    else if (clicked == 'PortNavAndroid') {
      $(".portNav #PortNavAll").css("color","black");
      $(".portNav #PortNavAndroid").css("color","#ff6f69");
      $(".portNav #PortNavPython").css("color","black");
      $(".portNav #PortNavOthers").css("color","black");
      $(".portContent button").css("display",'none');
      $(".portContent .android").css("display",'inline-block');
    }
    else if (clicked == 'PortNavPython') {
      $(".portNav #PortNavAll").css("color","black");
      $(".portNav #PortNavAndroid").css("color","black");
      $(".portNav #PortNavPython").css("color","#ff6f69");
      $(".portNav #PortNavOthers").css("color","black");
      $(".portContent button").css("display",'none');
      $(".portContent .python").css("display",'inline-block');
    }
    else if (clicked == 'PortNavOthers') {
      $(".portNav #PortNavAll").css("color","black");
      $(".portNav #PortNavAndroid").css("color","black");
      $(".portNav #PortNavPython").css("color","black");
      $(".portNav #PortNavOthers").css("color","#ff6f69");
      $(".portContent button").css("display",'none');
      $(".portContent .others").css("display",'inline-block');
    }
  });


  // send email using formspree.io
  var message = '';
  $("#sendMessage").on("click", function() {
    message = $("#contactform").serialize();
    $.ajax({
      url: "https://formspree.io/ajamalkhan65@gmail.com",
      method: "POST",
      data: {message: message},
      dataType: "json"
    });
    // alert('Thanks for the email, we\'ll be in touch promptly.');
    $('#thankyou').modal()
    return false;
  });

  // getting height and width of div containing canvas
  var canvasWidth = $(".additional-skills .col-md-4").outerWidth();
  var canvasHeight = $(".additional-skills .col-md-4").outerHeight();
  // console.log("canvasHeight : "+canvasHeight+" canvasWidth : "+canvasWidth);
  var canvasC = document.getElementById('communication');
  drawCanvas(canvasC,canvasWidth,canvasHeight,0.60);
  var canvasL = document.getElementById('leadership');
  drawCanvas(canvasL,canvasWidth,canvasHeight,0.70);
  var canvasH = document.getElementById('humour');
  drawCanvas(canvasH,canvasWidth,canvasHeight,0.85);
});
function drawCanvas(canvas,width,height,pct) {
  // console.log(width,height);
  var al = pct*100;
  var start = 4.72;
  canvas.height = height;
  canvas.width = width;

  var diff = ((al / 100) * Math.PI*2*10).toFixed(2);
  var ctx = canvas.getContext("2d");

  ctx.translate(canvas.width / 2,canvas.height / 2);

  radius = (canvas.height / 2) * 0.80;


  ctx.beginPath();

  ctx.arc(0, 0, radius, start, diff/10+start, false);
  ctx.lineWidth = 5;
  ctx.strokeStyle = "#f08b65";
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(0, 0, radius, diff/10+start, start, false);
  ctx.lineWidth = 5;
  ctx.strokeStyle = "#f0f0f0";
  ctx.stroke();

  var text = (pct*100)+"%";
  ctx.font='25px Courier New';
  ctx.textAlign="center";
  ctx.fillText(text, 0, 0);

}
