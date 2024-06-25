let songs = [
  {
      name:'7th Floor Tango - Silent Partner',
      path:'music/7th Floor Tango - Silent Partner.mp3',
      artist:'Artist Y01',
      image:'images/7th Floor Tango - Silent Partner.jpg'
  },
  {
      name:'Arp Bounce - Geographer',
      path:'music/Arp Bounce - Geographer.mp3',
      artist:'Artist Y01',
      image:'images/Arp Bounce - Geographer.jpg'
  },
  {
      name:'BLAAM - Gunnar Olsen HipHop',
      path:'music/BLAAM - Gunnar Olsen HipHop.mp3',
      artist:'Artist Y01',
      image:'images/BLAAM - Gunnar Olsen HipHop.jpg'
  },
  {
      name:'Burner - Gunnar Olsen',
      path:'music/Burner - Gunnar Olsen.mp3',
      artist:'Artist Y01',
      image:'images/Burner - Gunnar Olsen.jpg'
  },
  {
      name:'Cielo - Huma-Huma',
      path:'music/Cielo - Huma-Huma.mp3',
      artist:'Artist Y01',
      image:'images/Cielo - Huma-Huma.jpg'
  },
  {
      name:'Circular - Gunnar Olsen',
      path:'music/Circular - Gunnar Olsen.mp3',
      artist:'Artist Y01',
      image:'images/Circular - Gunnar Olsen.jpg'
  },
  {
      name:'Dat Step - Gunnar Olsen',
      path:'music/Dat Step - Gunnar Olsen.mp3',
      artist:'Artist Y01',
      image:'images/Dat Step - Gunnar Olsen.jpg'
  },
  {
      name:'Detour - Gunnar Olsen',
      path:'music/Detour - Gunnar Olsen.mp3',
      artist:'Artist Y01',
      image:'images/Detour - Gunnar Olsen.jpg'
  },
  {
      name:'Far Away - MK2',
      path:'music/Far Away - MK2.mp3',
      artist:'Artist Y01',
      image:'images/Far Away - MK2.jpg'
  },
  {
      name:'Hooky with Sloane - Bird Creek',
      path:'music/Hooky with Sloane - Bird Creek.mp3',
      artist:'Artist Y01',
      image:'images/Hooky with Sloane - Bird Creek.jpg'
  },
];
let currentSong=0;

const music=document.querySelector('#audio');
const seekbar=document.querySelector('.seek-bar');
const artist=document.querySelector('.artist');
const songname=document.querySelector('.song-name');
const boxdisk=document.querySelector('.box-disk');
const currenttimes=document.querySelector('.current-time');
const musictime=document.querySelector('.music-time');
const btnplay=document.querySelector('.btn-play');
const btnback=document.querySelector('.btnback');
const btnnext=document.querySelector('.btnnext');


btnplay.addEventListener('click',()=>{
    if(btnplay.className.includes('pause')){
        music.play();
    }else{
        music.pause();
    }
    btnplay.classList.toggle('pause');
    boxdisk.classList.toggle('play');
});

// Cài đặt bài hát

const setSong=(i)=>{
    seekbar.value=0;
    let song=songs[i];
    currentSong=i;
    music.src=song.path;
    songname.innerHTML=song.name;
    artist.innerHTML=song.artist;
    boxdisk.style.backgroundImage=`url('${song.image}')`;

    currenttimes.innerHTML='00:00';
    setTimeout(()=>{
        seekbar.max=music.duration;
        musictime.innerHTML =formatTimes(music.duration);
    }, 300);
}

setSong(0);

const formatTimes=(time)=>{
    let min=Math.floor(time / 60);
    if(min<10){
        min=`0${min}`;
    }
    let sec=Math.floor(time % 60);
    if(sec<10){
        sec=`0${sec}`;
    }
    return `${min}:${sec}`;
}

// Set seek bar
setInterval(() => {
    seekbar.value=music.currentTime;
    currenttimes.innerHTML=formatTimes(music.currentTime);
    if(Math.floor(music.currentTime)==Math.floor(seekbar.max)){
        btnnext.click();
    }
}, 500);

seekbar.addEventListener('change',()=>{
    music.currentTime=seekbar.value;
});

const playMusic=()=>{
    music.play();
    btnplay.classList.remove('pause');
    boxdisk.classList.add('play');
}

// Next and Preview
btnnext.addEventListener('click',()=>{
    if(currentSong>=songs.length-1){
        currentSong=0;
    }else{
        currentSong++;
    }
    setSong(currentSong);
    playMusic();
}); 

btnback.addEventListener('click',()=>{
    if(currentSong<=0){
        currentSong=songs.length-1;
    }else{
        currentSong--;
    }
    setSong(currentSong);
    playMusic();
}); 
