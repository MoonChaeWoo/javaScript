
// ************************입력이 필요한 곳 *************************
// table의 rows 가로행의 tr
const rows = $('#my-table tbody tr');

// table의 페이지 숫자 현재 ol의 id값
const numbers = $('#numbers');

// 페이지당 보여줄 개수
let rowsPerPage = 10;

// 페이지 인덱스 시작 번호
let numStart = 1;

// 한번에 보여준 페이지 인덱스의 개수
let numPerCount = 5;

// ****************************************************************

// ****************** 입력이 불필요한 곳(기능 구현) *******************
// 가로행의 tr 개수
let rowsCount = rows.length;

// Math.ceil은 올림을 해주는 함수
// 페이지 수 = 전체 가로행/페이지당 보여줄 가로행 개수
let pageCount = Math.ceil(rowsCount/rowsPerPage);

// 페이지 인덱스의 끝
let numEnd = pageCount;

// 페이지 번호 생성
for(let i = 1; i <= pageCount; i++){
    numbers.append('<li><a href="">'+i+'</a></li>');
}
// ************************입력이 필요한 곳 *************************

// numbers의 li를 추가 했으니 li를 불러옴
let numbersLi = $('#numbers li');
// ****************************************************************

// 페이지 인덱스 총 길이
let numberLength = numbersLi.length;
   
// 첫번째 a태그 스타일에 효과 부여
numbers.find('li:first-child a').addClass('active');

// 페이징 함수
function displayRows(idx){
    // 시작값
    let start = (idx - 1) * rowsPerPage;
    
    // 끝값
    let end = start + rowsPerPage;
    
    // 첫번째로 모든 행을 보이지 않게 해준다
    rows.hide();
    
    // 시작과 끝값을 가져와서 해당하는 곳만 화면에 출력
    rows.slice(start, end).show();
}

displayRows(1);

// 페이징 인덱스 함수
function displayNum(idx){
    let numberStart = idx - 1;
    let numberEnd = idx + numPerCount;
    
    numbersLi.hide();
    
    if(numberEnd >= numberLength && numberStart > (numberLength - numPerCount)){
        numbersLi.slice(numberLength - numPerCount, numberLength).show();
    }else if(numberStart <= (numPerCount - 2)){
        numbersLi.slice(0, numPerCount).show();
    }else{
        numbersLi.slice(idx -3, idx + 2).show();
    }
}

displayNum(1);

// 페이지번호 클릭시 페이지네이션 보여주기
numbers.find('li a').click(function(e){
   e.preventDefault();
    numbers.find('li a').removeClass('active');
    $(this).addClass('active');
    let index = parseInt($(this).text());
    displayRows(index);
    displayNum(index);
});

// ****************************************************************