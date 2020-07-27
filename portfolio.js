function hideAll() {
    $(".password-generator").hide();
    $(".culture-quiz").hide();
    $(".day-planner").hide();
    $(".weather-dashboard").hide();
    $(".band-tracker").hide();
    $(".note-taker").hide();
    $(".readme").hide();
    $(".team-generator").hide();
}

$("#password-generator").on('click',function(event){
    event.preventDefault();
    hideAll();
    console.log($(this));
    $(".display").css('display','block');
    $(".password-generator").css('display','block');
    $("#link").attr('href','https://alan2719.github.io/PasswordGenerator/index.html');
});

$("#culture-quiz").on('click',function(event){
    event.preventDefault();
    hideAll();
    console.log($(this));
    $(".display").css('display','block');
    $(".culture-quiz").css('display','block');
    $("#link").attr('href','https://alan2719.github.io/GeneralCultureQuiz/index.html');
});

$("#day-planner").on('click',function(event){
    event.preventDefault();
    hideAll();
    console.log($(this));
    $(".display").css('display','block');
    $(".day-planner").css('display','block');
    $("#link").attr('href','https://alan2719.github.io/DayPlanner/index.html');
});

$("#weather-dashboard").on('click',function(event){
    event.preventDefault();
    hideAll();
    console.log($(this));
    $(".display").css('display','block');
    $(".weather-dashboard").css('display','block');
    $("#link").attr('href','https://alan2719.github.io/WeatherDashboard/index.html');
});

$("#band-tracker").on('click',function(event){
    event.preventDefault();
    hideAll();
    console.log($(this));
    $(".display").css('display','block');
    $(".band-tracker").css('display','block');
    $("#link").attr('href','https://alan2719.github.io/BandTracker/index.html');
});

$("#note-taker").on('click',function(event){
    event.preventDefault();
    hideAll();
    console.log($(this));
    $(".display").css('display','block');
    $(".note-taker").css('display','block');
    $("#link").attr('href','https://shrouded-thicket-71970.herokuapp.com/');
});

$("#readme").on('click',function(event){
    event.preventDefault();
    hideAll();
    console.log($(this));
    $(".display").css('display','block');
    $(".readme").css('display','block');
    $("#link").attr('href','https://github.com/Alan2719/ReadmeGenerator');
});

$("#team-generator").on('click',function(event){
    event.preventDefault();
    hideAll();
    console.log($(this));
    $(".display").css('display','block');
    $(".team-generator").css('display','block');
    $("#link").attr('href','https://github.com/Alan2719/ReadmeGenerator');
});

$("#close").on('click',function(){
   hideAll();
   $(".display").css('display','none');
})