const newYear = '17 Jan 2023';

function countDown(){
    let newYearDate = new Date(newYear);
    let curDate = new Date();

    const totalSeconds = ((newYearDate - curDate)/1000);
    // totalSeconds++;
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds/3600)%24;
    const minutes = Math.floor(totalSeconds/60)%60;
    const seconds = Math.floor(totalSeconds%60);
    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = formatTime(hours);
    document.getElementById('minutes').innerText = formatTime(minutes);
    document.getElementById('seconds').innerText = formatTime(seconds);
    console.log(days, hours, minutes, seconds);
}

function formatTime(time){
    return time < 10 ? '0'+time : time;
}

countDown();
setInterval(countDown, 1000);