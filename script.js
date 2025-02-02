const songs = [
    //Urbano
    { title: "2 Catorce", src: "https://res.cloudinary.com/dllbhc3yl/video/upload/v1738503780/Urbano/2-Catorce-h.mp3", artists: ["Rauw Alejandro"], genre: "Urbano" },
    { title: "27 Mensajes", src: "https://res.cloudinary.com/dllbhc3yl/video/upload/v1738503822/Urbano/27-Mensajes-h.mp3", artists: ["Shadow Blow"], genre: "Urbano" },
    { title: "105 F (Remix)", src: "https://res.cloudinary.com/dllbhc3yl/video/upload/v1738503869/Urbano/105-F-%28Remix%29-h.mp3", artists: ["Kevvo", "Farruko", "Arcangel", "Myke Towers", "Darell", "Ñengo Flow", "Brytiago", "Chencho"], genre: "Urbano" },
    { title: "200 MPH", src: "https://res.cloudinary.com/dllbhc3yl/video/upload/v1738503760/Urbano/200-MPH-h.mp3", artists: ["Bad Bunny", "Diplo"], genre: "Urbano" },
    { title: "Adentro", src: "https://res.cloudinary.com/dllbhc3yl/video/upload/v1738503837/Urbano/Adentro-h.mp3", artists: ["Amenazzy", "Noriel"], genre: "Urbano" },
    { title: "Aguacero", src: "https://res.cloudinary.com/dllbhc3yl/video/upload/v1738503778/Urbano/Aguacero-h.mp3", artists: ["Bad Bunny"], genre: "Urbano" },
    { title: "Algo me gusta de ti", src: "https://res.cloudinary.com/dllbhc3yl/video/upload/v1738503814/Urbano/Algo-me-gusta-de-ti-h.mp3", artists: ["Wissin", "Yandel"], genre: "Urbano" },
    { title: "Antes de morirme", src: "https://res.cloudinary.com/dllbhc3yl/video/upload/v1738505050/Urbano/Antes-de-morirme-h.mp3", artists: ["Miky Woodz"], genre: "Urbano" },
    { title: "Ayer", src: "https://res.cloudinary.com/dllbhc3yl/video/upload/v1738505231/Urbano/Ayer-h.mp3", artists: ["Amenazzy", "Noriel"], genre: "Urbano" },
    { title: "Baila", src: "https://res.cloudinary.com/dllbhc3yl/video/upload/v1738507319/Urbano/Baila-h.mp3", artists: ["Bulova"], genre: "Urbano" },
    { title: "Bailando sola", src: "https://res.cloudinary.com/dllbhc3yl/video/upload/v1738507446/Urbano/Bailando-sola-h.mp3", artists: ["Don Omar"], genre: "Urbano" },
    { title: "Bandolero", src: "https://res.cloudinary.com/dllbhc3yl/video/upload/v1738507997/Urbano/Bandolero-h.mp3", artists: ["Don Omar"], genre: "Urbano" },
    { title: "Café con ron", src: "https://res.cloudinary.com/dllbhc3yl/video/upload/v1738508488/Urbano/Caf%C3%A9-con-ron-h.mp3", artists: ["Bad Bunny"], genre: "Urbano" },
    { title: "Callaita", src: "https://res.cloudinary.com/dllbhc3yl/video/upload/v1738508828/Urbano/Callaita-h.mp3", artists: ["Bad Bunny"], genre: "Urbano" },
    { title: "Calm my nerves", src: "https://res.cloudinary.com/dllbhc3yl/video/upload/v1738508968/Urbano/Calm-my-nerves-h.mp3", artists: ["Don Omar"], genre: "Urbano" },
    { title: "Candy", src: "https://res.cloudinary.com/dllbhc3yl/video/upload/v1738509591/Urbano/Candy-h.mp3", artists: ["Plan B"], genre: "Urbano" },
    { title: "Caro", src: "https://res.cloudinary.com/dllbhc3yl/video/upload/v1738509722/Urbano/Caro-h.mp3", artists: ["Bad Bunny"], genre: "Urbano" },
    { title: "Censurarme (Remix)", src: "https://res.cloudinary.com/dllbhc3yl/video/upload/v1738509841/Urbano/Censurarme-%28Remix%29-h.mp3", artists: ["Eddie Dee"], genre: "Urbano" },
    { title: "Conteo", src: "https://res.cloudinary.com/dllbhc3yl/video/upload/v1738510050/Urbano/Conteo-h.mp3", artists: ["Don Omar"], genre: "Urbano" },
    { title: "Cuidau au au", src: "https://res.cloudinary.com/dllbhc3yl/video/upload/v1738510398/Urbano/Cuidau-au-au-h.mp3", artists: ["Cosculluela"], genre: "Urbano" },
    { title: "Dakiti", src: "https://res.cloudinary.com/dllbhc3yl/video/upload/v1738510713/Urbano/Dakiti-h.mp3", artists: ["Bad Bunny", "Jhay Cortez"], genre: "Urbano" },
    { title: "Dale pipo (Remix)", src: "https://res.cloudinary.com/dllbhc3yl/video/upload/v1738513959/Urbano/Dale-pipo-%28Remix%29-h.mp3", artists: ["Bulova", "Nacho", "Noriel", "El Alfa"], genre: "Urbano" },
    { title: "Danza kuduro", src: "https://res.cloudinary.com/dllbhc3yl/video/upload/v1738514097/Urbano/Danza-kuduro-h.mp3", artists: ["Don Omar"], genre: "Urbano" },
    { title: "De las 2", src: "https://res.cloudinary.com/dllbhc3yl/video/upload/v1738514261/Urbano/De-las-2-h.mp3", artists: ["Noriel", "Bad Bunny", "Arcangel"], genre: "Urbano" },
    { title: "Delincuente", src: "https://res.cloudinary.com/dllbhc3yl/video/upload/v1738514524/Urbano/Delincuente-h.mp3", artists: ["Farruko", "Anuel AA", "Kendo Kaponi"], genre: "Urbano" },
    { title: "Desesperados", src: "https://res.cloudinary.com/dllbhc3yl/video/upload/v1738514845/Urbano/Desesperados-h.mp3", artists: ["Rauw Alejandro"], genre: "Urbano" },
    { title: "Fantasias  (Unplugged)", src: "https://res.cloudinary.com/dllbhc3yl/video/upload/v1738515030/Urbano/Fantasias-%28Unplugged%29-h.mp3", artists: ["Rauw Alejandro", "Farruko"], genre: "Urbano" },
    { title: "Después de la playa", src: "https://res.cloudinary.com/dllbhc3yl/video/upload/v1738515235/Urbano/Despue%CC%81s-de-la-Playa-h.mp3", artists: ["Bad Bunny"], genre: "Urbano" },
    { title: "Diabla", src: "https://res.cloudinary.com/dllbhc3yl/video/upload/v1738516065/Urbano/Diabla-h.mp3", artists: ["Amenazzy", "NTG"], genre: "Urbano" },
    { title: "Difícil de reemplazar", src: "https://res.cloudinary.com/dllbhc3yl/video/upload/v1738516234/Urbano/Dif%C3%ADcil-de-reemplazar-h.mp3", artists: ["Amenazzy"], genre: "Urbano" },
    { title: "Diles", src: "https://res.cloudinary.com/dllbhc3yl/video/upload/v1738516431/Urbano/Diles-h.mp3", artists: ["Bad Bunny", "Ñengo Flow", "Ozuna", "Arcangel", "Farruko"], genre: "Urbano" },
    { title: "Diosa", src: "https://res.cloudinary.com/dllbhc3yl/video/upload/v1738516592/Urbano/Diosa-h.mp3", artists: ["Myke Towers"], genre: "Urbano" },
    { title: "DM", src: "https://res.cloudinary.com/dllbhc3yl/video/upload/v1738517333/Urbano/DM-h.mp3", artists: ["Cosculluela"], genre: "Urbano" },
    { title: "Dos Mil 16", src: "https://res.cloudinary.com/dllbhc3yl/video/upload/v1738517543/Urbano/Dos-Mil-16-h.mp3", artists: ["Bad Bunny"], genre: "Urbano" },
    { title: "DtMF", src: "https://res.cloudinary.com/dllbhc3yl/video/upload/v1738517672/Urbano/DtMF-h.mp3", artists: ["Bad Bunny"], genre: "Urbano" },
    { title: "Ebrio", src: "https://res.cloudinary.com/dllbhc3yl/video/upload/v1738517819/Urbano/Ebrio-h.mp3", artists: ["Amenazzy", "NTG"], genre: "Urbano" },
    { title: "Efecto", src: "https://res.cloudinary.com/dllbhc3yl/video/upload/v1738517924/Urbano/Efecto-h.mp3", artists: ["Bad Bunny"], genre: "Urbano" },
    { title: "El clúb", src: "https://res.cloudinary.com/dllbhc3yl/video/upload/v1738518176/Urbano/El-cl%C3%BAb-h.mp3", artists: ["Bad Bunny"], genre: "Urbano" },
    { title: "El Sol & La Playa", src: "https://res.cloudinary.com/dllbhc3yl/video/upload/v1738519323/Urbano/El-Sol--La-Playa-h.mp3", artists: ["Monkey Black"], genre: "Urbano" },
    { title: "Elegí", src: "https://res.cloudinary.com/dllbhc3yl/video/upload/v1738519491/Urbano/Eleg%C3%AD-h.mp3", artists: ["Rauw Alejandro", "Dalex", "Lenny Tavarez", "Dimelo Flow"], genre: "Urbano" },
    { title: "Nuevo", src: "fyjfxggg", artists: ["ddsfsdf"], genre: "Urbano" },

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
    trackList.innerHTML = '';  
    const sortedSongs = [...songList].sort((a, b) => a.title.localeCompare(b.title)); // Ordenar por título
    sortedSongs.forEach((song, index) => {
        const listItem = document.createElement('li');
        listItem.innerText = `${song.title} - ${song.artists.join(", ")}`;
        listItem.onclick = () => loadSong(index, sortedSongs);  
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
    songs.forEach(song => song.artists.forEach(artist => artistSet.add(artist)));

    const artistSelect = document.getElementById("artistSelect");
    artistSelect.innerHTML = '<option value="all">Todos</option>';  // Agregar opción por defecto
    
    [...artistSet].sort().forEach(artist => {  // Ordenar antes de agregar
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
    genreSelect.innerHTML = '<option value="all">Todos</option>';  // Agregar opción por defecto
    
    [...genreSet].sort().forEach(genre => {  // Ordenar antes de agregar
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

// Cargar la lista de artistas y géneros al iniciar la página
loadTrackList(songs);
loadArtistOptions();
loadGenreOptions();
