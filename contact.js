$(document).ready(function() {
    var namesArray = [];
    var mailsArray = [];
    var messagesArray = [];
    var secondsLeft = 3;

    function hideText() {
        $(".invalid-name").hide();
        $(".invalid-mail").hide();
        $(".invalid-text").hide();
    }

    function setTime(){
        var timerInterval = setInterval(function() {
            secondsLeft--;
    
            if (secondsLeft === 0) {
                clearInterval(timerInterval);
                $(".valid-text").css('display','none');
            }
        }, 1000)
    }

    if(localStorage.getItem('names') === null) {
        bandsArray = [];
    } else {
        bandsArray = localStorage.getItem('followBand');
    }

    if(localStorage.getItem('mails') === null) {
        bandsArray = [];
    } else {
        bandsArray = localStorage.getItem('followBand');
    }

    if(localStorage.getItem('comments') === null) {
        bandsArray = [];
    } else {
        bandsArray = localStorage.getItem('followBand');
    }

    $("#submit").on('click',function(){
        var name = $(".name").val();
        var mail = $(".mail").val();
        var comment = $(".text").val();
        if (name === ""){
            $(".invalid-name").css('display','block');
        } else if (mail === "") {
            $(".invalid-mail").css('display','block');
        } else if (comment === "") {
            $(".invalid-text").css('display','block');
        } else {
            hideText();
            setTime();
            $(".valid-text").css('display','block');
            $(".name").val("");
            $(".mail").val("");
            $(".text").val("");
        }
    })

})
