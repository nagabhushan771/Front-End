const time = document.querySelector('h1');
const select = document.querySelectorAll('select');
const button = document.querySelector('button');
const options = document.querySelector('.options');

var alarmTime;
var setAlarm = false;
var tone = new Audio("./images/ringtone.mp3");

setInterval(() => {
    var date = new Date();
    var hh = date.getHours();
    var mm = date.getMinutes();
    var ss = date.getSeconds();
    var ampm = "AM";

    if(hh >= 12) {
        hh = hh - 12;
        ampm = "PM";
    }

    if(hh == 0){
        hh = 12;
    }

    hh = hh < 10 ? "0"+hh : hh;
    mm = mm < 10 ? "0"+mm : mm;
    ss = ss < 10 ? "0"+ss : ss;
    // tone.play();
    time.innerText = hh + ":" + mm + ":" + ss + " " + ampm;

    if(alarmTime == `${hh}:${mm} ${ampm}`){
        tone.play();
        tone.loop = true;
    }
}, 1000)

for(var i = 1; i<=12; i++){
    var hh = i<10 ? "0" + i : i;
    select[0].innerHTML += `<option value="${hh}">${hh}</option>`
}

for(var i = 0; i<60; i++){
    var mm = i<10 ? "0" + i : i;
    select[1].innerHTML += `<option value="${mm}">${mm}</option>`
}

for(var i = 1; i<3; i++){
    var ampm = i=== 1 ? "AM": "PM";
    select[2].innerHTML += `<option value="${ampm}">${ampm}</option>`
}

button.addEventListener("click", function(){
    if(setAlarm){
        button.innerText = "Set Alarm";
        alarmTime = "";
        setAlarm = false;
        options.classList.remove("disable");
        tone.pause();
    } else {
        var hh = select[0].value;
        var mm = select[1].value;
        var ampm = select[2].value;

        alarmTime = `${hh}:${mm} ${ampm}`;
        if(hh.includes("Hour") || mm.includes("Minutes") || ampm.includes("AM/PM")){
            return alert("Please select the time");
        }
        options.classList.add("disable");
        button.innerText = "Clear Alarm";
        setAlarm = true;
    }

})

