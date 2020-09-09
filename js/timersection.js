$(document).ready(function () {
    //start a timer
    $('.pause').hide();
      $('.pause-task').hide();
      
      //pause the timer
      $('.pause').on('click', function () {
        $('.start').show();
        $('.pause').hide();
      })
      $('.start').on('click', function () {
        $('.pause').show();
        $('.start').hide();

      })
      $('#remove').on('click', function () {
          $('#timer1').timer('remove').hide();
          $('#pause,#resume,#remove').hide();
          $('.text-note').show();

      })


      $('#startTimer').click(function(){
        $('#startingTimer').stopwatch().stopwatch('toggle')
  });
  $('#endTimer').click(function(){
        $('#startingTimer').stopwatch().stopwatch('toggle')
  });
      

});