console.log('Welcome to spotify');

let audioElement = new Audio('./songs/1.mp3');
let songIndex = 0;
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
const songItems = document.querySelectorAll('.songItem');
const songItemPlays = document.querySelectorAll('.songItemPlay');
let cover = document.getElementById('cover');

let songs = [
    {songName:"Raatan Lambiyan", filepath:"./songs/1.mp3", coverpath:"./covers/1.jpg"},
    {songName:"Arabic Kuthu", filepath:"./songs/2.mp3", coverpath:"./covers/2.jpg"},
    {songName:"Toofan", filepath:"./songs/3.mp3", coverpath:"./covers/3.jpg"},
    {songName:"Puthumazhayai", filepath:"./songs/4.mp3", coverpath:"./covers/4.jpg"},
    {songName:"Pularikalo", filepath:"./songs/5.mp3", coverpath:"./covers/5.jpg"},
    {songName:"Yaare-Yaare", filepath:"./songs/6.mp3", coverpath:"./covers/6.jpg"},
    {songName:"Ninade-Nenapu-Dinavu", filepath:"./songs/7.mp3", coverpath:"./covers/7.jpg"},
    {songName:"Neralanu-Kaanada", filepath:"./songs/8.mp3", coverpath:"./covers/8.jpg"},
    {songName:"Moda Modalu Bhoomigilida", filepath:"./songs/9.mp3", coverpath:"./covers/9.jpg"},
    {songName:"Alu Bandharu", filepath:"./songs/10.mp3", coverpath:"./covers/10.jpg"}
]

songItems.forEach((songItem, i)  => {
    songItem.getElementsByTagName('img')[0].src = songs[i].coverpath;
    songItem.getElementsByClassName('songName')[0].innerText = songs[i].songName;
    // let audioEle = new Audio(songs[i].filepath);
    // songItem.getElementsByClassName('timestamp')[0].innerHTML = audioEle.duration + '<i class="fa-regular fa-circle-play fa-2x">';
})


//play and pause song
masterPlay.addEventListener('click', () => {
    if(audioElement.paused || audioElement.currentTime == 0){
        audioElement.play();
        masterSongName.innerText = songs[songIndex].songName;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        console.log(songItemPlays[songIndex].classList);
        songItemPlays[songIndex].classList.remove('fa-circle-play');
        songItemPlays[songIndex].classList.add('fa-circle-pause');
        cover.src = songs[songIndex].coverpath;
        gif.style.opacity = 1;
    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        // songItemPlays[songIndex].classList.add('fa-circle-pause');
        // songItemPlays[songIndex].classList.remove('fa-circle-play');
        songItemPlays[songIndex].classList.remove('fa-circle-pause');
        songItemPlays[songIndex].classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})


// audioElement.play();

//listen to the events
//to sync the progress bar with the timings of the song
audioElement.addEventListener('timeupdate', () => {
    console.log('timeupdate');
    let progress = parseFloat((audioElement.currentTime/audioElement.duration)*10000);
    myProgressBar.value = progress;
    console.log(progress);
})

//to start the song from where we select in the range bar 
myProgressBar.addEventListener('change', () => {
    let curTime = myProgressBar.value * audioElement.duration/10000;
    audioElement.currentTime = curTime;
})

songItemPlays.forEach((element) => {
    element.addEventListener('click', (e) => {
        console.log(e.target);
        makeAllPlay();
        var nextSongId = parseInt(e.target.id);
        if(audioElement.paused || audioElement.currentTime == 0){
            // songIndex = parseInt(e.target.id);
            
            if(songIndex == nextSongId){
                audioElement.play();
                masterPlay.classList.remove('fa-circle-play');
                masterPlay.classList.add('fa-circle-pause');
                console.log(songItemPlays[songIndex].classList);
                songItemPlays[songIndex].classList.remove('fa-circle-play');
                songItemPlays[songIndex].classList.add('fa-circle-pause');
                cover.src = songs[songIndex].coverpath;
                gif.style.opacity = 1;
            }
            else{
                playThisSong(nextSongId, e.target);
            }
        } else {
            
            audioElement.pause();
            masterPlay.classList.remove('fa-circle-pause');
            masterPlay.classList.add('fa-circle-play');
            if(songIndex != nextSongId){
                // songIndex = nextSongId;
                // e.target.classList.remove('fa-circle-play');
                // e.target.classList.add('fa-circle-pause');
                // audioElement.src = songs[songIndex].filepath;
                // audioElement.currentTime = 0;
                // audioElement.play();
                // cover.src = songs[songIndex].coverpath;
                // masterSongName.innerText = songs[songIndex].songName;
                // gif.style.opacity = 1;
                // masterPlay.classList.remove('fa-circle-play');
                // masterPlay.classList.add('fa-circle-pause');
                playThisSong(nextSongId, e.target);
            }
        }
        
        
        
    })
})

function playThisSong(nextSongId, element){
    songIndex = nextSongId;
    element.classList.remove('fa-circle-play');
    element.classList.add('fa-circle-pause');
    audioElement.src = songs[songIndex].filepath;
    audioElement.currentTime = 0;
    audioElement.play();
    cover.src = songs[songIndex].coverpath;
    masterSongName.innerText = songs[songIndex].songName;
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
}

var makeAllPlay = () => {
    document.querySelectorAll('.songItemPlay').forEach((element) => {
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}

document.getElementById('next').addEventListener('click', () => {
    songItemPlays[songIndex].classList.remove('fa-circle-pause');
    songItemPlays[songIndex].classList.add('fa-circle-play');
    if(songIndex >= 9){
        songIndex = 0;
    } else {
        songIndex++;
    }
    audioElement.src = songs[songIndex].filepath;
    audioElement.currentTime = 0;
    // makeAllPlay();
    songItemPlays[songIndex].classList.remove('fa-circle-play')
    songItemPlays[songIndex].classList.add('fa-circle-pause');
    audioElement.play();
    cover.src = songs[songIndex].coverpath;
    masterSongName.innerText = songs[songIndex].songName;
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})

document.getElementById('previous').addEventListener('click', () => {
    songItemPlays[songIndex].classList.remove('fa-circle-pause');
    songItemPlays[songIndex].classList.add('fa-circle-play');
    if(songIndex <= 0 ){
        songIndex = 9;
    } else {
        songIndex--;
    }
    audioElement.src = songs[songIndex].filepath;
    audioElement.currentTime = 0;
    songItemPlays[songIndex].classList.remove('fa-circle-play');
    songItemPlays[songIndex].classList.add('fa-circle-pause');
    cover.src = songs[songIndex].coverpath;
    audioElement.play();
    masterSongName.innerText = songs[songIndex].songName;
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})

//If the currently playing audio ends we need to play the next song in the sequence
audioElement.onended = () => {
    songItemPlays[songIndex].classList.remove('fa-circle-pause');
    songItemPlays[songIndex].classList.add('fa-circle-play')
    songIndex = (songIndex+1)%10;
    
    playThisSong(songIndex, songItemPlays[songIndex]);
}
