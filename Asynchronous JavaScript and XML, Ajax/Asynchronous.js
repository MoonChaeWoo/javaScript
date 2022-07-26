/*
    XMLHttpRequest Object Properties
    
    속성                      설명
    onreadystatechange      readyState property 값이 바뀌면 할 일 (함수)를 정의한다.
    
    readyState              readystate 가 가질 수 있는 모든 값의 목록
                            0
                            - request(브라우저의 요청)이 시작되지 않음
                            1
                            - 서버 연결이 완료됨
                            2
                            - 서버에서 request(브라우저의 요청)을 받음
                            3
                            - request(요청)을 처리 중
                            4
                            - request(요청)에 대한 처리가 끝났고 브라우저로 보낼 반응이 준비됨
    
    responseText            실제 요청 후의 결과를 변수명으로 반환한다.(함수 밖으로 출력한다.)
    
    resposeXML              실제 요청 후 결과를 XML 데이터의 형식으로 변환한다.
    
    status                  요청의 상태 번호를 출력
                            200 : 이상 없음
                            403, 404, 500등등
*/

    
    const demo = document.getElementById('demo');
    
function loadDoc() {
    //demo.textContent = "wer";
  var xhttp;
    
    xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function(){
        
        console.log(this.readyState);
        console.log(this.status);

        if(this.readyState == 4 && this.status == 200){
            // javaScript (A.innerHTML = b) ==  (jquery  A.text(B))
            demo.innerHTML = this.responseText;
        }
    }
  
    xhttp.open('get', 'ajax_info.txt', true);
    xhttp.send();
    
}


/*

*/