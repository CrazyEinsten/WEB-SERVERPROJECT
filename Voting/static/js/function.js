function mainbg(){
    var canvas = $("#mycanvas")[0].getContext('2d');
    canvas.fillStyle = "#000000";
    canvas.fillRect(0,0,500,200);
}

function regist(){
    window.open("register.html");
}

function isokRegist(){
    //var tmp = {{isokey|self}};
    $.post("/regist/", {'usrname':usrname,'passwd':passwd}, function(ret){
        if (ret == 'True'){
            alert('注册成功！');
        }
        else{
            alert('用户名已被注册！');
        }
    })
}

function isokLogin(){
    //var tmp = {{isokey|self}};
    $.post("/index/", {'usrname':usrname, 'passwd':passwd}, function(ret){
        if(ret == 'False'){
            alert('用户名密码错误！');
        }
    })
}

function showusr(){
    $("#key").text(tmp);
    $("#key").css("display","none");
}

var falg_1 = 1;
function marksearch(){
    if(flag_1 == 1){
        var usrname = $("#key").text();
        $.post("/marksearch/", {'usrname':usrname}, function(ret){
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
    $.post("/pre/", {'usrname':usrname, 'pre':1}, function(ret){
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
    $.post("/presearch/", {'usrname':usrname}, function(ret){
        if(ret == 1){
            $("#tmp").append('<span class="showed">已成功预约！</span>');
        }
        else{
            $("#tmp").append('<span class="showed">还未预约！</span>');
        }
        $("#tmp").fadeIn(300);
    })
}
