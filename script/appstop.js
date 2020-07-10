function increment(){
    if(running == 1){
        setTimeout(function(){
            time++;
            var mins = Math.floor(time/10/60);
            var secs = Math.floor(time/10 % 60);
            var hours = Math.floor(time/10/60/60);
            var tenths = time % 10;
            if(mins < 10){
                mins = "0" + mins;
            }
            if(secs < 10){
                secs = "0" + secs;
            }
            document.getElementById("Result").innerHTML = hours + ":" + mins + ":" + secs + ":" + tenths + "0";
            increment();
        },100)
    }
}
var time = 0;
var running = 0;
function start(){
    if(running == 0){
        running = 1;
        increment();
    document.getElementById("start").innerHTML;
    document.getElementById("Resume").innerHTML = "Start"; 
  
    }
 
}
function Push(){
    running = 0;
    document.getElementById("start").innerHTML = "Resume"; 
    
}
function reset(){
    running = 0;
    time = 0;
    mins=0;
    secs=0;
    hours=0;
    tenths=0;
    document.getElementById("start").innerHTML = "Start";
    document.getElementById("Result").innerHTML = "0:00:00:00";
   
}