window.onload = function(){
    let seconds = 00;
    let tens = 00;
    let appendTens = document.getElementById("tens");
    let appendSeconds = document.getElementById("sec");
    let btnStart = document.getElementById('btn-start');
    let btnStop = document.getElementById('btn-stop');
    let btnReset = document.getElementById('btn-reset');
    let Interval;

    btnStart.onclick = function(){
        console.log("start")
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
    }
    btnStop.onclick = function() {
        console.log("stop")
        clearInterval(Interval);
    }
    btnReset.onclick = function() {
        console.log("reload")
        clearInterval(Interval);
        tens="00"
        seconds="00"
        appendTens.innerHTML = tens;
        appendSeconds.innerHTML = seconds;
    }
    function startTimer(){
        tens++
        if(tens < 9){
            appendTens.innerHTML = "0" + tens;
        }
        if(tens > 9){
            appendTens.innerHTML = tens;
        }
        if(tens > 99){
            seconds++;
            appendSeconds.innerHTML = "0" + seconds;
            tens = 0;
            appendTens.innerHTML = "0"  + 0;
        }
        if(seconds > 9){
            appendSeconds.innerHTML = seconds;
        }
    }
    
}