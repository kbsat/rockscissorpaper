var left = 0;
var repeat=setInterval(function(){
  if(left === 0) {
    left = '-188px';
  } else if (left === '-188px'){
    left = '-376px';
  } else {
    left = 0;
  }
  document.getElementById("comselect").style.background='url(img/rsp.png) ' + left + ' 0';
},200);
//left = 0 > 보 left = 188px > 주먹 left 376px > 가위




var comRsp = ['r','s','p'];
var yourChoice;
var myScore =0;
var comScore =0;

function comChoiceReset(){
  var comeChoice;
  comChoice = comRsp[Math.floor(Math.random() * 3)];
}

comChoiceReset();

function yourClick(click) {
  yourChoice = click;
  if(comChoice == 'r'){
    left = '-188px';
    clearInterval(repeat);
    document.getElementById("comselect").style.background='url(img/rsp.png) ' + left + ' 0';
    if(yourChoice == 'p'){
      myScore ++;
      document.getElementById("result").innerHTML = myScore+":"+comScore;
      setTimeout(function(){
        alert('이겼습니다!');
      },10);
      }
    else if(yourChoice == 's'){
      comScore ++;
      document.getElementById("result").innerHTML = myScore+":"+comScore;
      setTimeout(function(){
        alert('졌습니다!');
      },10);
    }
    else{
      document.getElementById("result").innerHTML = myScore+":"+comScore;
      setTimeout(function(){
        alert('비겼습니다!');
      },10);
    }

  }
  if(comChoice == 's'){
    left = '-376px';
    clearInterval(repeat);
    document.getElementById("comselect").style.background='url(img/rsp.png) ' + left + ' 0';
    if(yourChoice == 'r'){
      myScore ++;
      document.getElementById("result").innerHTML = myScore+":"+comScore;
      setTimeout(function(){
        alert('이겼습니다!');
      },10);
      }
    else if(yourChoice == 'p'){
      comScore ++;
      document.getElementById("result").innerHTML = myScore+":"+comScore;
      setTimeout(function(){
        alert('졌습니다!');
      },10);
    }
    else{
      document.getElementById("result").innerHTML = myScore+":"+comScore;
      setTimeout(function(){
        alert('비겼습니다!');
      },10);
    }
  }
  if(comChoice == 'p'){
    left = 0;
    clearInterval(repeat);
    document.getElementById("comselect").style.background='url(img/rsp.png) ' + left + ' 0';
    if(yourChoice == 's'){
      myScore ++;
      document.getElementById("result").innerHTML = myScore+":"+comScore;
      setTimeout(function(){
        alert('이겼습니다!');
      },10);
      }
    else if(yourChoice == 'r'){
      comScore ++;
      document.getElementById("result").innerHTML = myScore+":"+comScore;
      setTimeout(function(){
        alert('졌습니다!');
      },10);
    }
    else{
      document.getElementById("result").innerHTML = myScore+":"+comScore;
      setTimeout(function(){
        alert('비겼습니다!');
      },10);
    }
  }
    repeat=setInterval(function(){
      if(left === 0) {
        left = '-188px';
      } else if (left === '-188px'){
        left = '-376px';
      } else {
        left = 0;
      }
      document.getElementById("comselect").style.background='url(img/rsp.png) ' + left + ' 0';
    },200);
  comChoiceReset();

}
