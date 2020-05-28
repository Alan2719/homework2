function hideAll() {
    $(".password-generator").hide();
    $(".culture-quiz").hide();
    $(".day-planner").hide();
    $(".weather-dashboard").hide();
    $(".band-tracker").hide();
}

$("#password-generator").on('click',function(event){
    event.preventDefault();
    hideAll();
    console.log($(this));
    $(".display").css('display','block');
    $(".password-generator").css('display','block');
    $("#link").attr('href','https://alan2719.github.io/homework3/index.html');
})

$("#culture-quiz").on('click',function(event){
    event.preventDefault();
    hideAll();
    console.log($(this));
    $(".display").css('display','block');
    $(".culture-quiz").css('display','block');
    $("#link").attr('href','https://alan2719.github.io/homework4/index.html');
})

$("#day-planner").on('click',function(event){
    event.preventDefault();
    hideAll();
    console.log($(this));
    $(".display").css('display','block');
    $(".day-planner").css('display','block');
    $("#link").attr('href','https://alan2719.github.io/homework5/index.html');
})

$("#weather-dashboard").on('click',function(event){
    event.preventDefault();
    hideAll();
    console.log($(this));
    $(".display").css('display','block');
    $(".weather-dashboard").css('display','block');
    $("#link").attr('href','https://alan2719.github.io/homework6/index.html');
})

$("#band-tracker").on('click',function(event){
    event.preventDefault();
    hideAll();
    console.log($(this));
    $(".display").css('display','block');
    $(".band-tracker").css('display','block');
    $("#link").attr('href','    https://alan2719.github.io/BandTracker/index.html');
})

$("#close").on('click',function(){
   hideAll();
   $(".display").css('display','none');
})