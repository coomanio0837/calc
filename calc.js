function inputDate(number){
 var screen = document.getElementById('screen');
 screen.value += number;
}
function clean(){
    var screen = document.getElementById('screen');
    screen.value = ""
}
function result(){
    var screen = document.getElementById('screen')
    var res = screen.value;
    if(res){
        screen.value = eval(res);
    }
}
