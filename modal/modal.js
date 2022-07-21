$('.modal-container').hide();

$('.btn').click(function(){
    $('.modal-container').fadeIn();
});
$('.modal-container').click(function(){
    $('.modal-container').fadeOut();
});

// 모달은 div를 이용하여 그냥 팝업창 느낌이 나도록 만든 것이다.