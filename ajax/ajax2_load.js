$('button').click(function(){
    // A.load(B) A에 B의 내용을 불러온다.
    //$('#div1').load('test.txt');
    
    /*
        responseTxt : 서버에 요청이 완료되면 결과 내용 (파라미터)
        statusTxt : 서버에 요청을 보내면, 요청의 상태
        xhr : 요청한 오브젝트
        
        $('#div1').load('경로', 요청이 완료되면 할일 function(responseTxt, statusTxt, xhr){
            ... 실제로 할 일 ...
        });
    */
    
    $('#div1').load('test.txt', function(responseTxt, statusTxt, xhr){
        console.log('로드할 파일의 내용 : ', responseTxt);
        console.log('로드할 파일과의 연결 상태 : ', statusTxt);
        console.log('요청의 상태 : ', xhr);
        console.log('요청한 파일의 상태 : ' + xhr.status);
        
        if(statusTxt == 'success' && xhr.status == 200){
            alert('파일이 준비되었습니다.')
        }else{
            alert('파일이 준비되지 않았습니다.');
        }
    });
});