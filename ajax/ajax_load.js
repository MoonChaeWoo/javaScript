$('button').click(function(){
    // A.load(B) A에 B의 내용을 불러온다.
    $('#div1').load('test.txt');
    
    // test.txt의 특정 태그만 가져와서 내용 표출을 하고 싶다면
    // $('#div1').load('test.txt h2');를 하면 h2 태그의 내용만 온다.
    
    /*
        responseTxt : 서버에 요청이 완료되면 결과 내용 (파라미터)
        statusTxt : 서버에 요청을 보내면, 요청의 상태
        xhr : 요청한 오브젝트
    */
});