var myAudio = document.getElementById('myaudio');

var aplay = document.getElementById('aplay');
var apuase = document.getElementById('apuase');
var spuase = document.getElementById('spuase');

// 오디오 컨트롤
aplay.addEventListener('click', playAudio);

function playAudio(){
    myAudio.play();
}

$('#apuase').click(puaseAudio);

function puaseAudio(){
    myAudio.pause();
}

spuase.addEventListener('click', function(){
    myAudio.pause();
    myAudio.currentTime = 0;
});


var myVideo = $('#myVideo');

$('#vplay').click(function(){
    // 자바스크립트는 play();만으로도 가능하다.
    // but 제이쿼리는 직접 컨트롤이 불가능하다.
    //myVideo.play();
    
    myVideo.get(0).play();
});

$('#vpuase').click(function(){
    myVideo.get(0).pause();
});

$('#vstop').click(function(){
    myVideo.get(0).pause();
    myVideo.get(0).currentTime = 0;
});