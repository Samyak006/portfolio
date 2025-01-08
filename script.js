
// enum for all tab classes
var allClasses = ["project","experience","education","about"]
// default position set inorder to avoid scrolling from the homepage on the first try
var defaultPos = 0
// on document load mimic pressing project button.
$(function(){
    $("#project-btn").click()
    defaultPos+=1
})

//to toggle between tabs
$(".navBtn").on("click",function(){
    for (var i in allClasses){
        var currClass = "."+allClasses[i]
        if ($(this).val() === allClasses[i]){
            $(currClass).show()
        }
        else{
            $(currClass).hide()
        }
    }
    if (defaultPos === 1){
        $(window).scrollTop($("."+$(this).val()).position().top)
    }
})

$(".navBtn").hover(function(){
    $(this).css({"background-color":"rgba(256,256,256,0.1)","scale":"1.02","transition":"scale 200ms ease-in-out","border":"1px solid #fff"});
}, function(){
    $(this).css({"background-color":"inherit","scale":"1", "border":"1px solid #ffffff00"})
})
$(".col-8 .card").hover(function(){
    $(this).css({"background-color":"rgba(256,256,256,0.1)","scale":"1.02","transition":"scale 200ms ease-in-out"});
}, function(){
    $(this).css({"background-color":"inherit","scale":"1"})
})
$(".navLinks .list-group-item").hover(function(){
    $(this).css({"color":"white","background-color":"rgba(256,256,256,0.1)","scale":"1.02","transition":"scale 200ms ease-in-out"});
}, function(){
    $(this).css({"color":"inherit","background-color":"inherit","scale":"1"})
})


