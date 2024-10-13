const songs = [
    //Urbano
    { title: "2 Catorce", src: "Musica/Urbano/2 Catorce.mp3", artists: ["Rauw Alejandro"], genre: "Urbano" },
    { title: "27 Mensajes", src: "Musica/Urbano/27 Mensajes.mp3", artists: ["Shadow Blow"], genre: "Urbano" },
    { title: "105 F (RMX)", src: "Musica/Urbano/105 F (Remix).mp3", artists: ["Kevvo", "Farruko", "Arcangel", "Myke Towers", "Darell", "Ñengo Flow", "Brytiago", "Chencho"], genre: "Urbano" },
    { title: "200 MPH", src: "Musica/Urbano/200 MPH.mp3", artists: ["Bad Bunny", "Diplo"], genre: "Urbano" },
    { title: "Adentro", src: "Musica/Urbano/Adentro.mp3", artists: ["Noriel", "Amenazzy"], genre: "Urbano" },
    { title: "Aguacero", src: "Musica/Urbano/Aguacero.mp3", artists: ["Bad Bunny"], genre: "Urbano" },
    { title: "Algo me gusta de ti", src: "Musica/Urbano/Algo me gusta de ti.mp3", artists: ["Wisin", "Yandel"], genre: "Urbano" },
    { title: "Antes de morirme", src: "Musica/Urbano/Antes De Morirme.mp3", artists: ["Miky Woodz"], genre: "Urbano" },
    { title: "Ayer", src: "Musica/Urbano/Ayer.mp3", artists: ["Amenazzy", "Noriel"], genre: "Urbano" },
    { title: "Baila", src: "Musica/Urbano/Baila.mp3", artists: ["Bulova"], genre: "Urbano" },
    { title: "Bailando sola", src: "Musica/Urbano/Bailando sola.mp3", artists: ["Don Omar"], genre: "Urbano" },
    { title: "Bandolero", src: "Musica/Urbano/Bandolero.mp3", artists: ["Don Omar"], genre: "Urbano" },
    { title: "Callaita", src: "Musica/Urbano/Callaita.mp3", artists: ["Bad Bunny", "Tainy"], genre: "Urbano" },
    { title: "Calm my nerves", src: "Musica/Urbano/Calm my nerves.mp3", artists: ["Don Omar"], genre: "Urbano" },
    { title: "Candy", src: "Musica/Urbano/Candy.mp3", artists: ["Plan B"], genre: "Urbano" },
    { title: "Caro", src: "Musica/Urbano/Caro.mp3", artists: ["Bad Bunny"], genre: "Urbano" },
    { title: "Censurarme (RMX)", src: "Musica/Urbano/Censurarme (RMX).mp3", artists: ["Eddie Dee"], genre: "Urbano" },
    { title: "Conteo", src: "Musica/Urbano/Conteo.mp3", artists: ["Don Omar"], genre: "Urbano" },
    { title: "Cuidau au au", src: "Musica/Urbano/Cuidau Au Au.mp3", artists: ["Cosculluela"], genre: "Urbano" },
    { title: "Dakiti", src: "Musica/Urbano/Dakiti.mp3", artists: ["Bad Bunny", "Jhayco"], genre: "Urbano" },
    { title: "Dale pipo (RMX)", src: "Musica/Urbano/Dale pipo (RMX).mp3", artists: ["Bulava", "Noriel", "Nacho", "Alfa"], genre: "Urbano" },
    { title: "Danza kuduro", src: "Musica/Urbano/Danza kuduro.mp3", artists: ["Don Omar", "Lucenzo"], genre: "Urbano" },
    { title: "De las 2", src: "Musica/Urbano/De las 2.mp3", artists: ["Norial", "Bad Bunny", "Arcangel"], genre: "Urbano" },
    { title: "Delincuente", src: "Musica/Urbano/Delincuente.mp3", artists: ["Farruko", "Anuel AA", "Kendo Kaponi"], genre: "Urbano" },

    // Añade más canciones aquí
];

let currentSongIndex = 0;
let filteredSongs = songs;  // Lista de canciones filtradas (por defecto, todas las canciones)

const audioPlayer = document.getElementById("audioPlayer");
const trackTitle = document.getElementById("trackTitle");
const playPauseBtn = document.getElementById("playPauseBtn");
const progressBar = document.getElementById("progressBar");
const currentTime = document.getElementById("currentTime");
const totalTime = document.getElementById("totalTime");
const trackList = document.getElementById("trackList");

// Configurar el evento para reproducir la siguiente canción al terminar
audioPlayer.addEventListener("ended", () => {
    nextSong();  // Llamar a la función que pasa a la siguiente canción
});

// Función para manejar el desplazamiento de la barra de progreso (seeking)
function seekAudio() {
    const seekTime = (progressBar.value / 100) * audioPlayer.duration;  // Calcular el tiempo según la posición de la barra
    audioPlayer.currentTime = seekTime;  // Actualizar el tiempo actual del reproductor
}

// Función para reproducir una canción aleatoria de la lista filtrada
function playRandomSong() {
    const randomIndex = Math.floor(Math.random() * filteredSongs.length);  // Selecciona un índice aleatorio
    loadSong(randomIndex, filteredSongs);  // Cargar y reproducir la canción aleatoria
}

// Cargar la lista de canciones en el DOM
function loadTrackList(songList) {
    trackList.innerHTML = '';  // Limpiar la lista anterior
    songList.forEach((song, index) => {
        const listItem = document.createElement('li');
        listItem.innerText = `${song.title} - ${song.artists.join(", ")}`;
        listItem.onclick = () => loadSong(index, songList);  // Cargar la canción al hacer clic
        trackList.appendChild(listItem);
    });
}

// Función para cargar una canción seleccionada
function loadSong(index, songList = filteredSongs) {
    currentSongIndex = index;
    const song = songList[currentSongIndex];
    audioPlayer.src = song.src;
    trackTitle.innerText = `${song.title} - ${song.artists.join(", ")}`;
    audioPlayer.load();
    playPause();
    audioPlayer.addEventListener('loadedmetadata', () => {
        totalTime.innerText = formatTime(audioPlayer.duration);  // Mostrar la duración total cuando se cargue la metadata
    });
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

// Función de siguiente canción con la lista filtrada
function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % filteredSongs.length;  // Cicla entre las canciones filtradas
    loadSong(currentSongIndex, filteredSongs);  // Cargar la siguiente canción de la lista filtrada
}

// Función de canción anterior con la lista filtrada
function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + filteredSongs.length) % filteredSongs.length;
    loadSong(currentSongIndex, filteredSongs);  // Cargar la canción anterior de la lista filtrada
}

// Función para actualizar la barra de progreso mientras la canción se reproduce
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

// Aplicar filtros de artista y género
function applyFilters() {
    const selectedArtist = document.getElementById("artistSelect").value;
    const selectedGenre = document.getElementById("genreSelect").value;

    // Filtrar canciones según el artista y el género seleccionado
    filteredSongs = songs.filter(song => {
        const matchArtist = selectedArtist === "all" || song.artists.includes(selectedArtist);
        const matchGenre = selectedGenre === "all" || song.genre === selectedGenre;
        return matchArtist && matchGenre;
    });

    loadTrackList(filteredSongs);  // Cargar solo las canciones filtradas
    if (filteredSongs.length > 0) {
        loadSong(0, filteredSongs);  // Cargar la primera canción de la lista filtrada
    }
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

// Función para buscar canciones por nombre
function searchSongs() {
    const searchInput = document.getElementById("searchInput").value.toLowerCase();  // Obtener el texto de búsqueda en minúsculas
    const filteredBySearch = filteredSongs.filter(song => song.title.toLowerCase().includes(searchInput));  // Filtrar según el título

    loadTrackList(filteredBySearch);  // Cargar la lista filtrada por búsqueda
}

// Cargar la lista de canciones en el DOM (usamos la lista filtrada por defecto)
function loadTrackList(songList) {
    trackList.innerHTML = '';  // Limpiar la lista anterior
    songList.forEach((song, index) => {
        const listItem = document.createElement('li');
        listItem.innerText = `${song.title} - ${song.artists.join(", ")}`;
        listItem.onclick = () => loadSong(index, songList);  // Cargar la canción al hacer clic
        trackList.appendChild(listItem);
    });
}

// Cargar la lista de artistas y géneros al iniciar la página
loadTrackList(songs);
loadArtistOptions();
loadGenreOptions();
