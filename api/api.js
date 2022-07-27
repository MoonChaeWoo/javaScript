let apiKey2 = '3%2FXE8PU0Cz7plOdNzmb73e7Nwmp0%2B8geWSkHauYkfi7uOSvinwVnwS%2BT2R9u4HSnXx8B51Az%2BFALxKJ81RKQPQ%3D%3D';

let today = new Date();

//alert(dayFormat(today));

var xhr = new XMLHttpRequest();
var url = 'http://apis.data.go.kr/1360000/RadarImgInfoService/getCmpImg'; /*URL*/
var queryParams = '?' + encodeURIComponent('serviceKey') + '='+ apiKey2; /*Service Key*/
queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /**/
queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('10'); /**/
queryParams += '&' + encodeURIComponent('dataType') + '=' + encodeURIComponent('XML'); /**/
queryParams += '&' + encodeURIComponent('data') + '=' + encodeURIComponent('CMP_WRC'); /**/
queryParams += '&' + encodeURIComponent('time') + '=' + encodeURIComponent(dayFormat(today)); /**/
xhr.open('GET', url + queryParams);

xhr.onreadystatechange = function () {
    if (this.readyState == 4) {

        var parser, xmlDoc;

        parser = new DOMParser();
        xmlDoc = parser.parseFromString(this.responseText, 'text/html'); // String -> xml 만들어주는 과정
        // DOMParser() : parsing을 위한 객체 생성 (사용자지정함수 아님)
        // xmlDoc = xml데이터로 파싱하여 문서로 담음
        // this.responseText : xml 데이터 담은 변수
        
        
        var length = xmlDoc.getElementsByTagName('rdr-img-file').length;
        var count = 0;
        function imgCount(){
            
            for(var i = 0; i <= (length-1); i++){
                let srcXml = xmlDoc.getElementsByTagName('item')[0].childNodes[i].childNodes[0];
                
                let src = (new XMLSerializer()).serializeToString(srcXml);
                
                //console.log(src);
                
                let html = '';
                html += '<option value="';
                html += src;
                html += '">';
                html += src.substr(-16, 12);
                html += '</option>';
                
                $('select[name=imgSelect]').append(html);
            }
        }
        
        imgCount();
        
        var imgSource = $('select[name=imgSelect]').val();
        $('.img-box').children('img').attr('src', imgSource);
        
        $('select[name=imgSelect]').change(function(){
            $('.img-box').children('img').attr('src', $(this).val());
        });
        
        setInterval(changeImg, 1000);
        
        function changeImg(){
            $('select[name=imgSelect]').find('option:selected').next().prop('selected', true);
            
            $('.img-box').children('img').attr('src', $('select[name=imgSelect]').find('option:selected').val());
        }
        
        function prevImg(){
            $('select[name=imgSelect]').find('option:selected').prev().prop('selected', true);
            $('.img-box').children('img').attr('src', $('select[name=imgSelect]').find('option:selected').val());
        }
        
        $('.btn-prev').click(function(){
            prevImg();
        });
        
        $('.btn-next').click(function(){
            changeImg();
        });
        
        $('.btn-first').click(function(){
            $('select[name=imgSelect]').find('option:eq(0)').prop('selected', true);
            $('.img-box').children('img').attr('src', $('select[name=imgSelect]').find('option:selected').val());
        });
        
        $('.btn-last').click(function(){
            $('select[name=imgSelect]').find('option:last').prop('selected', true);
            $('.img-box').children('img').attr('src', $('select[name=imgSelect]').find('option:selected').val());
        });
    }
};

xhr.send('');

// 날짜 포맷
function dayFormat(day){
    let month = (day.getMonth()+1);
    month = month >= 10 ? month : '0'+month;
    
    let date = day.getDate();
    date = date >= 10 ? date : '0'+date;
    
    return day.getFullYear()+''+month+''+date;
}