const songs = [
    { title: "2 Catorce", src: "Musica/Urbano/2 Catorce.mp3", artists: ["Rauw Alejandro"], genre: "Urbano" },
    { title: "27 Mensajes", src: "Musica/Urbano/27 Mensajes.mp3", artists: ["Shadow Blow"], genre: "Urbano" },
    { title: "105 F (Remix)", src: "Musica/Urbano/105 F (Remix).mp3", artists: ["Kevvo", "Farruko", "Arcangel", "Myke Towers", "Darell", "Ñengo Flow", "Brytiago", "Chencho"], genre: "Jazz" },
    { title: "2 Catorce", src: "Musica/Urbano/2 Catorce.mp3", artists: ["Rauw Alejandro"], genre: "Urbano" },
    { title: "27 Mensajes", src: "Musica/Urbano/27 Mensajes.mp3", artists: ["Shadow Blow"], genre: "Urbano" },
    { title: "105 F (Remix)", src: "Musica/Urbano/105 F (Remix).mp3", artists: ["Kevvo", "Farruko", "Arcangel", "Myke Towers", "Darell", "Ñengo Flow", "Brytiago", "Chencho"], genre: "Jazz" },
    { title: "2 Catorce", src: "Musica/Urbano/2 Catorce.mp3", artists: ["Rauw Alejandro"], genre: "Urbano" },
    { title: "27 Mensajes", src: "Musica/Urbano/27 Mensajes.mp3", artists: ["Shadow Blow"], genre: "Urbano" },
    { title: "105 F (Remix)", src: "Musica/Urbano/105 F (Remix).mp3", artists: ["Kevvo", "Farruko", "Arcangel", "Myke Towers", "Darell", "Ñengo Flow", "Brytiago", "Chencho"], genre: "Jazz" },
    { title: "2 Catorce", src: "Musica/Urbano/2 Catorce.mp3", artists: ["Rauw Alejandro"], genre: "Urbano" },
    { title: "27 Mensajes", src: "Musica/Urbano/27 Mensajes.mp3", artists: ["Shadow Blow"], genre: "Urbano" },
    { title: "105 F (Remix)", src: "Musica/Urbano/105 F (Remix).mp3", artists: ["Kevvo", "Farruko", "Arcangel", "Myke Towers", "Darell", "Ñengo Flow", "Brytiago", "Chencho"], genre: "Jazz" },
    { title: "2 Catorce", src: "Musica/Urbano/2 Catorce.mp3", artists: ["Rauw Alejandro"], genre: "Urbano" },
    { title: "27 Mensajes", src: "Musica/Urbano/27 Mensajes.mp3", artists: ["Shadow Blow"], genre: "Urbano" },
 
    // Añade más canciones aquí
];

let currentSongIndex = 0;
const audioPlayer = document.getElementById("audioPlayer");
const trackTitle = document.getElementById("trackTitle");
const playPauseBtn = document.getElementById("playPauseBtn");
const progressBar = document.getElementById("progressBar");
const currentTime = document.getElementById("currentTime");
const totalTime = document.getElementById("totalTime");
const trackList = document.getElementById("trackList");

// Cargar la lista de canciones en el DOM
function loadTrackList(songs) {
    trackList.innerHTML = ''; // Limpiar la lista anterior
    songs.forEach((song, index) => {
        const listItem = document.createElement('li');
        listItem.innerText = `${song.title} - ${song.artist}`;
        listItem.onclick = () => loadSong(index);
        trackList.appendChild(listItem);
    });
}

// Función para cargar una canción seleccionada
function loadSong(index) {
    currentSongIndex = index;
    audioPlayer.src = songs[currentSongIndex].src;
    trackTitle.innerText = `${songs[currentSongIndex].title} - ${songs[currentSongIndex].artist}`;
    audioPlayer.load();
    playPause();
}

// Función de reproducir/pausar
function playPause() {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playPauseBtn.innerText = "⏸️";
    } else {
        audioPlayer.pause();
        playPauseBtn.innerText = "▶️";
    }
}

audioPlayer.addEventListener("timeupdate", updateProgressBar);

// Función para actualizar la barra de progreso
function updateProgressBar() {
    const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    progressBar.value = progress;
    currentTime.innerText = formatTime(audioPlayer.currentTime);
    totalTime.innerText = formatTime(audioPlayer.duration);
}

// Formatear el tiempo en minutos y segundos
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? "0" + secs : secs}`;
}

// Avanzar a la siguiente canción
function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
}

// Retroceder a la canción anterior
function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
}

// Obtener todos los artistas únicos de las canciones
function loadArtistOptions() {
    const artistSet = new Set();
    songs.forEach(song => {
        song.artists.forEach(artist => artistSet.add(artist));
    });

    const artistSelect = document.getElementById("artistSelect");
    artistSet.forEach(artist => {
        const option = document.createElement("option");
        option.value = artist;
        option.innerText = artist;
        artistSelect.appendChild(option);
    });
}

// Filtrar canciones según el artista seleccionado
function filterByArtist() {
    const selectedArtist = document.getElementById("artistSelect").value;
    
    const filteredSongs = selectedArtist === "all"
        ? songs
        : songs.filter(song => song.artists.includes(selectedArtist));
    
    loadTrackList(filteredSongs);
}

// Obtener todos los géneros únicos de las canciones
function loadGenreOptions() {
    const genreSet = new Set();
    songs.forEach(song => genreSet.add(song.genre));

    const genreSelect = document.getElementById("genreSelect");
    genreSet.forEach(genre => {
        const option = document.createElement("option");
        option.value = genre;
        option.innerText = genre;
        genreSelect.appendChild(option);
    });
}

function applyFilters() {
    const selectedArtist = document.getElementById("artistSelect").value;
    const selectedGenre = document.getElementById("genreSelect").value;

    // Filtrar canciones según el artista y el género seleccionado
    const filteredSongs = songs.filter(song => {
        const matchArtist = selectedArtist === "all" || song.artists.includes(selectedArtist);
        const matchGenre = selectedGenre === "all" || song.genre === selectedGenre;
        return matchArtist && matchGenre;
    });

    loadTrackList(filteredSongs);  // Cargar solo las canciones filtradas
}


function loadTrackList(filteredSongs) {
    trackList.innerHTML = '';
    filteredSongs.forEach((song, index) => {
        const listItem = document.createElement('li');
        listItem.innerText = `${song.title} - ${song.artists.join(", ")}`;
        listItem.onclick = () => loadSong(index, filteredSongs);
        trackList.appendChild(listItem);
    });
}

// Función para cargar una canción de la lista filtrada
function loadSong(index, songList) {
    currentSongIndex = index;
    const song = songList[currentSongIndex];
    audioPlayer.src = song.src;
    trackTitle.innerText = `${song.title} - ${song.artists.join(", ")}`;
    audioPlayer.load();
    playPause();
}

// Funciones de siguiente y anterior también se basan en la lista filtrada
function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % filteredSongs.length;
    loadSong(currentSongIndex, filteredSongs);
}

function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + filteredSongs.length) % filteredSongs.length;
    loadSong(currentSongIndex, filteredSongs);
}


// Cargar la lista de artistas y géneros al iniciar la página
loadTrackList(songs);
loadArtistOptions();
loadGenreOptions();

