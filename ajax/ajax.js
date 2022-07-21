$('button').click(function(){
   // $.ajax({경로,         동기화 여부,      성공하면 할 일});
   // $.ajax({url : '경로', async : false, success:function(result){..성공 시 할 일}});
    
    $.ajax({url : 'test.txt', async : false, success:function(result){
        $('#div1').html(result);
    }});
    
    $.ajax({url : 'ajax_demo.js', async : false, dataType : 'script'});
});