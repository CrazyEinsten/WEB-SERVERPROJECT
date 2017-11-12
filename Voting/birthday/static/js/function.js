
var i = 0;
var audio = document.createElement("audio");

function show(){
    $($("#wannasay").children(".context")[i]).fadeIn(1500);
    i++;
}

function showContext(){
    audio.id="mus";
    audio.src="static/static/The Truth That You Leave.mp3";
    audio.autoplay="autoplay";
    document.body.appendChild(audio);
    setInterval(show,3000);
} 

function showSecond(){
    var second = document.createElement("div");
    second.innerHTML = "嘻嘻~~最重要的当然是。。。";
    second.id = "second";
    document.body.appendChild(second);
    $("#second").fadeIn(1500,function(){
        $("#first").fadeOut(1500);
        $(".context").fadeOut(1500);
        setTimeout(next(),3000);
    })
}

function next(){
    audio.pause();
    audio.src = "static/static/群星 - 生日歌.mp3";
    audio.play();
    var last = document.createElement("div");
    last.innerHTML = "Happy Birthday!";
    last.id = "last";
    document.body.appendChild(last);
    $("#last").fadeIn(1500);
    $(function(){
		$("#example").fireworks({
			width: "100%",
			height: "100%"
		});
	});
}
