function mainbg(){
    var canvas = $("#mycanvas")[0].getContext('2d');
    canvas.fillStyle = "#000000";
    canvas.fillRect(0,0,500,200);
}


var falg_1 = 1;
function marksearch(){
    if(flag_1 == 1){
        var usrname = $("#key").text();
        $.get("/marksearch/", {'usrname':usrname}, function(ret){
            $("#tmp").append('<span class="showed">你的体测成绩为：</span> <span class="showed">'+ret+'</span>');
            $("#tmp").fadeIn(300); 
        });
        flag_1 = 0;
    }
}

var flag_2 = 1;
function pre(){
    if(flag_2 == 1){
        $("#tmp").append('<span class="showed">是否预约下一场体测？</span><button type="button" onclick="mid()" class="but">确定</button>');
        $("#tmp").fadeIn(300); 
    }
}

function mid(){
    var usrname = $("#key").text();
    $.get("/pre/", {'usrname':usrname, 'pre':1}, function(ret){
        if(ret == 'True'){
            alert("预约成功！");
        }
        else{
            alert("已经预约！");
        }
    })
}

function presearch(){
    var usrname = $("#key").text();
    $.get("/presearch/", {'usrname':usrname}, function(ret){
        if(ret == 1){
            $("#tmp").append('<span class="showed">已成功预约！</span>');
        }
        else{
            $("#tmp").append('<span class="showed">还未预约！</span>');
        }
        $("#tmp").fadeIn(300);
    })
}
