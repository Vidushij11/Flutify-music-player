function changeImage(x,image){
  if(x == 1){
    image.src = 'newlogo.png'
  }
  if(x == 2){
    image.src = 'logoo.png'
  }
}

console.log("Welcome to Flutify")
let songIndex = 0;
let audioElement = new Audio('/songs/Galliyan.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressbar = document.getElementById('myProgressbar'); 
let gif = document.getElementById('gif'); 
let songs = [
    {songName: "Galliyan", filePath: "songs/Galliyan.mp3" , coverPath: "covers/1.png"},
    {songName: "Mann Bharryaa", filePath: "songs/Mann Bharryaa.mp3" , coverPath: "covers/2.png"},
    {songName: "Galliyan", filePath: "songs/Galliyan.mp3" , coverPath: "covers/1.png"},
    {songName: "Galliyan", filePath: "songs/Mann Bharryaa .mp3" , coverPath: "covers/1.png"},
    {songName: "Galliyan", filePath: "songs/songs/Krishna Theme  Krish theme  Flute cover By Lakhinandan Lahon.mp3" , coverPath: "covers/1.png"},
    {songName: "Galliyan", filePath: "songs/songs/y2mate.com - Saathiya Flute Version  Badmas Dil Flute  Singham  Lakhinandan Lahon  Anupam BG.mp3" , coverPath: "covers/1.png"},
    {songName: "Galliyan", filePath: "songs/songs/y2mate.com - Teri Mitti flute cover instrumental  kesari  Divyansh  Shrivastava akshay kumar parineeti chopra.mp3" , coverPath: "covers/1.png"},
    {songName: "Galliyan", filePath: "songs/songs/y2mate.com - Ve Maahi flute cover instrumental  kesari  akshay kumar  parineeti chopra  Divyansh Shrivastava.mp3" , coverPath: "covers/1.png"}, 
 ]
//handle play/pause click
 masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
      audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
 })
 //listen to event

 audioElement.addEventListener('timeupdate', ()=>{

   progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
   myProgressbar.value = progress;
   console.log('')
   
 })

 myProgressbar.addEventListener('change', ()=>{
   audioElement.currentTime = myProgressbar.value * audioElement.duration /100;
 })