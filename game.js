
var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern=[];

var started = false; 
var level=0;


$(".sum").click(function()
{
  if(!started)
  {
    $("#level-title").text("Level " + level);
    nextSequence();
    started=true;
  }
})

function nextSequence() {

  userClickedPattern=[];
  level++;
  $("#level-title").text("Level " + level);


  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);


  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

  playSound(randomChosenColour);
}

$(".btn").click(function()
{
  
  userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  check((userClickedPattern.length-1))

  playSound(userChosenColour);
  animatePress(userChosenColour)

})

function check(checklLevel)
{
  if(userClickedPattern[checklLevel]===gamePattern[checklLevel])
  {
    if(userClickedPattern.length===gamePattern.length)
    {
      setTimeout(function()
      {
        nextSequence();
      },1000)
    }
  }
  else
  {
    faLse();
  }
}


function faLse()
{
  var audio = new Audio("wrong.mp3");
  audio.play();
  $("body").addClass("game-over");
  setTimeout(function()
  {
    $("body").removeClass("game-over");
  },200);

  $("#level-title").text("Game over, press again to continue");

  startOver();
}

function playSound(name)
{
  var audio = new Audio(name + ".mp3");
  audio.play();
}

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

function startOver()
{
  level=0;
  gamePattern=[];
  started=false;
}

