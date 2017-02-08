function program(initialInput) {

var inputTime = new Date();
var a_time = {
  minutes : initialInput,
  seconds :0
}

var  start;
var run = true;

var programInterface ={

timing : function() {
  a_time.seconds = 60;
if (run){
console.log("Timeing");
start = setInterval( function(){
if(a_time.seconds > 0 && a_time.minutes > 0 ){
  console.log("Timeing seconds");
a_time.seconds--;
}else if (a_time.seconds == 0 && a_time.minutes > 0) {
a_time--;
a_time.seconds=60;
}else if (a_time.seconds == 0 && a_time.minutes == 0) {
pause();
}
},1000);

}},

gettime: function(){
console.log(a_time);
return a_time;
},

pause : function(){
run = false;
clearInterval(start);
},

reset : function() {

a_time.minutes= initialInput;
a_time.seconds= 0;
pause();

}



}





return programInterface;
}
