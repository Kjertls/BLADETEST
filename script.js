window.addEventListener('DOMContentLoaded', startTimer);

function startTimer() {
  var timerElement = document.getElementById('timer');

  var hours = 0;
  var minutes = 0;
  var seconds = 0;

  setInterval(updateTimer, 1000);

  function updateTimer() {
    seconds++;
    if (seconds >= 60) {
      seconds = 0;
      minutes++;
      if (minutes >= 60) {
        minutes = 0;
        hours++;
      }
    }

    var formattedTime = formatTime(hours) + ':' + formatTime(minutes) + ':' + formatTime(seconds);
    timerElement.textContent = formattedTime;
  }

  function formatTime(time) {
    return time < 10 ? '0' + time : time;
  }
}
/*
$(document).ready(function(){

  $(window).load(function(){
      $duration = 10;
      $('.seconds').text($duration);
      $('.popup-wrap').fadeIn(3000); //STARTET DEN TIMER NACH 3 SEKUNDEN

      $myTimer = setInterval(function(){ startTimer() }, 1000);
      $('.popup .btn-close').on("click",function(){
          clearInterval($myTimer);
          $('.popup-wrap').fadeOut(500);
      });
      
      function startTimer(){
          $duration--;
          $('.seconds').text($duration);
          if($duration==0){
              clearInterval($myTimer);
              $('.popup-wrap').fadeOut(500);
          }
      }
  });
}); */


$(document).ready(function () {

  $(window).on('load', function () {
      setTimeout(() => {
          $duration = 30;
          console.log("popup")
          $('.seconds').text($duration);
          $('.popup-wrap').css("display", "flex")
              .hide()
              .show();

          $myTimer = setInterval(function () { startTimer() }, 1000);
          $('.popup .btn-close').on("click", function () {
              clearInterval($myTimer);
              $('.popup-wrap').fadeOut(500);
          });

          function startTimer() {
              $duration--;
              $('.seconds').text($duration);
              if ($duration == 0) {
                  clearInterval($myTimer);
                  $('.popup-wrap').fadeOut(500);
              }
          }
      }, 3000);

  });
}); 
