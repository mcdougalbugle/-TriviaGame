    src="https://code.jquery.com/jquery-3.3.1.js"
    integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60="
    crossorigin="anonymous"

$(function () {
$('input[name="test"]').on('click', function() {
    if ($(this).val() == 'ans') {
        $('.exp').show();
        $('.red').hide();
    } else {
        $('.exp').hide();
        $('.red').show();
    }
})
});

var ans1 = 0
var ans2 = 0
var ans3 = 0
var ans4 = 0
var ans5 = 0
var ans6 = 0
var ans7 = 0
var ans8 = 0

var wro1 = 0
var wro2 = 0
var wro3 = 0
var wro4 = 0
var wro5 = 0
var wro6 = 0
var wro7 = 0
var wro8 = 0

$(".correctAnswer1").click(function() {
   $(this).data('clicked', true);
   ans1 = 1
});

$(".incorrectAnswer1").click(function() {
   $(this).data('clicked', true);
   ans1 = 0
   wro1 = 1
});

$(".correctAnswer2").click(function() {
   $(this).data('clicked', true);
   ans2 = 1
});

$(".incorrectAnswer2").click(function() {
   $(this).data('clicked', true);
   ans1 = 0
   wro2 = 1
});

$(".correctAnswer3").click(function() {
   $(this).data('clicked', true);
   ans3 = 1
});

$(".incorrectAnswer3").click(function() {
   $(this).data('clicked', true);
   ans1 = 0
   wro3 = 1
});

$(".correctAnswer4").click(function() {
   $(this).data('clicked', true);
   ans4 = 1
});

$(".incorrectAnswer4").click(function() {
   $(this).data('clicked', true);
   ans1 = 0
   wro4 = 1
});

$(".correctAnswer5").click(function() {
   $(this).data('clicked', true);
   ans5 = 1
});

$(".incorrectAnswer5").click(function() {
   $(this).data('clicked', true);
   ans1 = 0
   wro5 = 1
});

$(".correctAnswer6").click(function() {
   $(this).data('clicked', true);
   ans6 = 1
});

$(".incorrectAnswer6").click(function() {
   $(this).data('clicked', true);
   ans1 = 0
   wro6 = 1
});

$(".correctAnswer7").click(function() {
   $(this).data('clicked', true);
   ans7 = 1
});

$(".incorrectAnswer7").click(function() {
   $(this).data('clicked', true);
   ans1 = 0
   wro7 = 1
});

$(".correctAnswer8").click(function() {
   $(this).data('clicked', true);
   ans8 = 1
});

$(".incorrectAnswer8").click(function() {
   $(this).data('clicked', true);
   ans1 = 0
   wro8 = 1
});

$('.questionList').hide();
$('.finishPage').hide();

$(".submitButton").click(function() {
    $('.finishPage').show();
    $('.questionList').hide();
    $("#correctStat").html("Correct Answers: " + (ans1 + ans2 + ans3 + ans4 + ans5 + ans6 + ans7 + ans8));
    $("#incorrectStat").html("Incorrect Answers: " + (wro1 + wro2 + wro3 + wro4 + wro5 + wro6 + wro7 + wro8));
    $("#unansweredStat").html("Unanswered: " + (8 - (ans1 + ans2 + ans3 + ans4 + ans5 + ans6 + ans7 + ans8) - (wro1 + wro2 + wro3 + wro4 + wro5 + wro6 + wro7 + wro8)));
});

$(".startButton").click(function() {
   $('.questionList').show();
   $('.startButton').hide();
   var n = 60;
setTimeout(countDown,1000);

function countDown(){
   n--;
   if(n > 0){
      setTimeout(countDown,1000);
   }
   $("#timer").html("Time Remaining: " + n);
   if(n===0){
    $('.finishPage').show();
    $('.questionList').hide();
    $("#correctStat").html("Correct Answers: " + (ans1 + ans2 + ans3 + ans4 + ans5 + ans6 + ans7 + ans8));
    $("#incorrectStat").html("Incorrect Answers: " + (8 - (wro1 + wro2 + wro3 + wro4 + wro5 + wro6 + wro7 + wro8)));
    $("#unansweredStat").html("Unanswered: " + (8 - (ans1 + ans2 + ans3 + ans4 + ans5 + ans6 + ans7 + ans8) - (wro1 + wro2 + wro3 + wro4 + wro5 + wro6 + wro7 + wro8)));
   }
   } 

});