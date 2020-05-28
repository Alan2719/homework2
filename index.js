var textArray = [0,1,2];
var index = 1;

changeText(index);


$(".right").on('click',function(){
    index += 1;
    if (index > 3) {
        index = 1;
        changeText(index);
    } else {
        changeText(index)
    }
})

$(".left").on('click',function(){
    index -= 1;
    if (index < 1) {
        index = 3;
        changeText(index);
    } else {
        changeText(index)
    }
})

function changeText(index){
    console.log(index);
    if (index === 1) {
        $(".text1").css('display','block');
        $(".text2").css('display','none');
        $(".text3").css('display','none');
    } else if (index === 2) {
        $(".text1").css('display','none');
        $(".text2").css('display','block');
        $(".text3").css('display','none');
    } else if (index === 3) {
        $(".text1").css('display','none');
        $(".text2").css('display','none');
        $(".text3").css('display','block');
    }
}