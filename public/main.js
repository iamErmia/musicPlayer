let musics;
let now_playing = document.querySelector(".now-playing");
let track_art = document.querySelector(".track-art");
let track_name = document.querySelector(".track-name");
let track_artist = document.querySelector(".track-artist");
let musicLibrary = document.querySelector(".vertical-menu");

 
let playpause_btn = document.querySelector(".playpause-track");
let next_btn = document.querySelector(".next-track");
let prev_btn = document.querySelector(".prev-track");
 
let seek_slider = document.querySelector(".seek_slider");
let volume_slider = document.querySelector(".volume_slider");
let curr_time = document.querySelector(".current-time");
let total_duration = document.querySelector(".total-duration");
 

let songIndex = 0;
let isPlaying = false;
let updateTimer;

let curr_music = document.createElement('audio');

let songs = [
    {
        name: "Daydream",
        artist: "Mark Eliyahu",
        cover: "https://songsara.net/wp-content/uploads/2022/03/Mark-Eliyahu-About-Love.jpg",
        path: "music/Daydream.mp3"
    },
    {
        name: "Sunshine",
        artist: "Mark Eliyahu",
        cover: "https://songsara.net/wp-content/uploads/2022/03/Mark-Eliyahu-About-Love.jpg",
        path: "music/Sunshine.mp3"
    },
    {
        name: "Wind",
        artist: "Mark Eliyahu",
        cover: "https://songsara.net/wp-content/uploads/2022/03/Mark-Eliyahu-About-Love.jpg",
        path: "music/Wind"
    },
];

function loadTrack(songIndex){         //make sure you find the best index
    clearInterval(updateTimer);
    resetValue();                 //declare this func
    curr_music.src = upcomiSongs[songIndex].path;
    curr_music.load();

    track_name.textContent = upcomiSongs[songIndex].name;
    track_artist.textContent = upcomiSongs[songIndex].artist;
    track_art = upcomiSongs[songIndex].cover;
}
var track_library = [];

function getMusics() {
    fetch('http://localhost:3000/songs').then((res) => res.json()).then((allMusics) => {
        musics = new Map(Object.entries(allMusics));
        for (const [key, value] of musics.entries()) {
            const parent = document.createElement('div');
            const div = document.createElement('div');
            parent.className = 'vertical-menu-div';
            div.appendChild(document.createTextNode(value.title));
            parent.appendChild(div);
            musicLibrary.appendChild(parent);
            track_library.push(value.title);//adding tracks to an array
        }
    })
}

getMusics();

var upcomiSongs = [];//a que for saving the upcomig songs
var front = 0;//the first elemnt of the afformentioned que
var rear = 0;//the last element of the afformentioned que

function firstAddToQue(){
    upcomiSongs = upcomiSongs.concat(track_library);//adding the loaded songs to the que
    rear = (track_library.length) - 1;
}

