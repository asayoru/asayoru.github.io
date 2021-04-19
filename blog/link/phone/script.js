//import $ from "https://cdn.skypack.dev/jquery@3.6.0";

//變換手機型號的音效
var button_audio = new Audio("https://monoame.com/awi_class/ballsound/click14.wav");
button_audio.play();


$(".i5").click(function(){
  $(".phone").css("width","");
  $(".screen").css("height","");
  $(".phonename").text($(this).text());
  button_audio.play();
});


$(".i5s").click(function(){
  $(".phone").css("width","250px");
  $(".screen").css("height","420px");
  $(".phonename").text($(this).text());
  button_audio.play();
});

$(".i6").click(function(){
  $(".phone").css("width","270px");
  $(".screen").css("height","440px");
  $(".phonename").text($(this).text());
  button_audio.play();
});

$(".i6s").click(function(){
  $(".phone").css("width","300px");
  $(".screen").css("height","480px");
  $(".phonename").text($(this).text());
  button_audio.play();
});

//點擊螢幕的音效
var screen_audio = new Audio("https://monoame.com/awi_class/ballsound/click18.wav");

//點擊螢幕的動作
var page = 0;
$(".screen").click(function(){
  page += 1;
  if (page > 2){
    page = 0;
  }
  $(".pages").css("left","-"+page*100+"%");
  screen_audio.play();
});

//點擊home的音效
var home_audio = new Audio("https://monoame.com/awi_class/ballsound/click23.wav");

//點擊回到主畫面
$(".button").click(function(){
  page = 0;
  $(".pages").css("left","-"+page*100+"%");
  home_audio.play();
});


//旋轉手機
//轉一次360度，一直360加上去才能一直轉
var deg = 0;
$(".turn").click(function(){
  $(".phone").css("transform","rotate("+deg+"deg)");
  deg += 360;
});

//手機震動的音效
var wiggle_audio = new Audio("https://monoame.com/awi_class/ballsound/phonevi.mp3");

//手機震動，wiggletime=0時就會震動
$(".wiggle").click(function(){
  wiggletime = 0;
  wiggle_audio.play();
});

//震動的次數
var wiggletime = 21;
setInterval(function(){
  //設定震動20次就停下來
  if (wiggletime <= 20 ){
    wiggletime += 1;
    console.log(wiggletime);
    
    //奇數往右，偶數往左
    if (wiggletime%2 == 0){
      $(".phone").css("left","-30px");
    }else{
      $(".phone").css("left","30px");
    }
    
    //震動完=21，回到原本的位置
    if (wiggletime == 21){
      $(".phone").css("left","");
    }
  }  
},60);