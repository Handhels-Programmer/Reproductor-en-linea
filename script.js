const songs = [
    // Urbano
    { title: "+ Picky (Remix)", src: "Musica/Urbano/+ Picky (Remix).mp3", artists: ["Amenazzy", "Titoflow", "J Abdiel"], genre: "Urbano" },
    { title: "105 F (Remix)", src: "Musica/Urbano/105 F (Remix).mp3", artists: ["Kevvo", "Farruko", "Arcangel", "Myke Towers", "Darell", "Ñengo Flow", "Brytiago", "Chencho"], genre: "Urbano" },
    { title: "2 Catorce", src: "Musica/Urbano/2 Catorce.mp3", artists: ["Rauw Alejandro"], genre: "Urbano" },
    { title: "27 Mensajes", src: "Musica/Urbano/27 Mensajes.mp3", artists: ["Shadow Blow"], genre: "Urbano" },
    { title: "200 MPH", src: "Musica/Urbano/200 MPH.mp3", artists: ["Bad Bunny", "Diplo"], genre: "Urbano" },
    { title: "Adentro", src: "Musica/Urbano/Adentro.mp3", artists: ["Amenazzy", "Noriel"], genre: "Urbano" },
    { title: "Aguacero", src: "Musica/Urbano/Aguacero.mp3", artists: ["Bad Bunny"], genre: "Urbano" },
    { title: "Algo me gusta de ti", src: "Musica/Urbano/Algo me gusta de ti.mp3", artists: ["Wisin & Yandel"], genre: "Urbano" },
    { title: "Antes de morirme", src: "Musica/Urbano/Antes de morirme.mp3", artists: ["Miky Woodz"], genre: "Urbano" },
    { title: "Ayer", src: "Musica/Urbano/Ayer.mp3", artists: ["Amenazzy", "Noriel"], genre: "Urbano" },
    { title: "Baby", src: "Musica/Urbano/Baby.mp3", artists: ["Amenazzy", "Nicky Jam", "Farruko"], genre: "Urbano" },
    { title: "Baila", src: "Musica/Urbano/Baila.mp3", artists: ["Bulova"], genre: "Urbano" },
    { title: "Bailando sola", src: "Musica/Urbano/Bailando sola.mp3", artists: ["Don Omar"], genre: "Urbano" },
    { title: "Bandolero", src: "Musica/Urbano/Bandolero.mp3", artists: ["Don Omar"], genre: "Urbano" },
    { title: "Café con ron", src: "Musica/Urbano/Café con ron.mp3", artists: ["Bad Bunny", "Los Pleneros De La Cresta"], genre: "Urbano" },
    { title: "Callaita", src: "Musica/Urbano/Callaita.mp3", artists: ["Bad Bunny"], genre: "Urbano" },
    { title: "Calm my nerves", src: "Musica/Urbano/Calm my nerves.mp3", artists: ["Don Omar"], genre: "Urbano" },
    { title: "Candy", src: "Musica/Urbano/Candy.mp3", artists: ["Plan B"], genre: "Urbano" },
    { title: "Carita bonita", src: "Musica/Urbano/Carita bonita.mp3", artists: ["Amenazzy", "NAYO"], genre: "Urbano" },
    { title: "Caro", src: "Musica/Urbano/Caro.mp3", artists: ["Bad Bunny"], genre: "Urbano" },
    { title: "Censurarme (RMX)", src: "Musica/Urbano/Censurarme (RMX).mp3", artists: ["Eddie Dee"], genre: "Urbano" },
    { title: "Chimbita", src: "Musica/Urbano/Chimbita.mp3", artists: ["Amenazzy"], genre: "Urbano" },
    { title: "Con Sonido", src: "Musica/Urbano/Con Sonido.mp3", artists: ["Bulin 47", "Alofoke Music", "Ceky Viciny"], genre: "Urbano" },
    { title: "Conteo", src: "Musica/Urbano/Conteo.mp3", artists: ["Don Omar"], genre: "Urbano" },
    { title: "Cuidau Au Au", src: "Musica/Urbano/Cuidau Au Au.mp3", artists: ["Cosculluela"], genre: "Urbano" },
    { title: "Dakiti", src: "Musica/Urbano/Dakiti.mp3", artists: ["Bad Bunny", "Jhay Cortez"], genre: "Urbano" },
    { title: "Dale pipo (RMX)", src: "Musica/Urbano/Dale pipo (RMX).mp3", artists: ["Bulova", "Nacho", "Noriel", "El Alfa"], genre: "Urbano" },
    { title: "Danza kuduro", src: "Musica/Urbano/Danza kuduro.mp3", artists: ["Don Omar"], genre: "Urbano" },
    { title: "De las 2", src: "Musica/Urbano/De las 2.mp3", artists: ["Noriel", "Bad Bunny", "Arcangel"], genre: "Urbano" },
    { title: "Delincuente", src: "Musica/Urbano/Delincuente.mp3", artists: ["Farruko", "Anuel AA", "Kendo Kaponi"], genre: "Urbano" },
    { title: "Desesperados", src: "Musica/Urbano/Desesperados.mp3", artists: ["Rauw Alejandro"], genre: "Urbano" },
    { title: "Despues de la Playa", src: "Musica/Urbano/Despues de la Playa.mp3", artists: ["Bad Bunny"], genre: "Urbano" },
    { title: "Diabla", src: "Musica/Urbano/Diabla.mp3", artists: ["Amenazzy", "NTG"], genre: "Urbano" },
    { title: "Difícil De Reemplazar", src: "Musica/Urbano/Difícil De Reemplazar.mp3", artists: ["Amenazzy"], genre: "Urbano" },
    { title: "Diles", src: "Musica/Urbano/Diles.mp3", artists: ["Bad Bunny", "Ñengo Flow", "Ozuna", "Arcangel", "Farruko"], genre: "Urbano" },
    { title: "Diosa", src: "Musica/Urbano/Diosa.mp3", artists: ["Myke Towers"], genre: "Urbano" },
    { title: "DM", src: "Musica/Urbano/DM.mp3", artists: ["Cosculluela"], genre: "Urbano" },
    { title: "Dos Mil 16", src: "Musica/Urbano/Dos Mil 16.mp3", artists: ["Bad Bunny"], genre: "Urbano" },
    { title: "DtMF", src: "Musica/Urbano/DtMF.mp3", artists: ["Bad Bunny"], genre: "Urbano" },
    { title: "Ebrio", src: "Musica/Urbano/Ebrio.mp3", artists: ["Amenazzy", "NTG"], genre: "Urbano" },
    { title: "Efecto", src: "Musica/Urbano/Efecto.mp3", artists: ["Bad Bunny"], genre: "Urbano" },
    { title: "El clúb", src: "Musica/Urbano/El clúb.mp3", artists: ["Bad Bunny"], genre: "Urbano" },
    { title: "El Sol & La Playa", src: "Musica/Urbano/El Sol & La Playa.mp3", artists: ["Monkey Black"], genre: "Urbano" },
    { title: "Elegi", src: "Musica/Urbano/Elegi.mp3", artists: ["Rauw Alejandro", "Dalex", "Lenny Tavarez", "Dimelo Flow"], genre: "Urbano" },
    { title: "Ella se contradice (RMX)", src: "Musica/Urbano/Ella se contradice (RMX).mp3", artists: ["Baby Rasta & Gringo", "Don Omar", "Kendo", "Syko"], genre: "Urbano" },
    { title: "En una caja de muerto", src: "Musica/Urbano/En una caja de muerto.mp3", artists: ["Amenazzy", "El Alfa"], genre: "Urbano" },
    { title: "Entregala", src: "Musica/Urbano/Entregala.mp3", artists: ["Bulova"], genre: "Urbano" },
    { title: "Eoo", src: "Musica/Urbano/Eoo.mp3", artists: ["Bad Bunny"], genre: "Urbano" },
    { title: "Espuma", src: "Musica/Urbano/Espuma.mp3", artists: ["Rauw Alejandro", "De La Ghetto"], genre: "Urbano" },
    { title: "Estamos bien", src: "Musica/Urbano/Estamos bien.mp3", artists: ["Bad Bunny"], genre: "Urbano" },
    { title: "Estilo de vida", src: "Musica/Urbano/Estilo de vida.mp3", artists: ["Amenazzy"], genre: "Urbano" },
    { title: "Explicito", src: "Musica/Urbano/Explicito.mp3", artists: ["Myke Towers"], genre: "Urbano" },
    { title: "Fantasias  (Unplugged)", src: "Musica/Urbano/Fantasias  (Unplugged).mp3", artists: ["Rauw Alejandro", "Farruko"], genre: "Urbano" },
    { title: "Favorito de los capos (RMX)", src: "Musica/Urbano/Favorito de los capos (RMX).mp3", artists: ["Flow Mafia", "Arcangel", "Bad Bunny"], genre: "Urbano" },
    { title: "Fina", src: "Musica/Urbano/Fina.mp3", artists: ["Bad Bunny", "Young Miko"], genre: "Urbano" },
    { title: "Flow Cabron", src: "Musica/Urbano/Flow Cabron.mp3", artists: ["Arcangel", "Tali"], genre: "Urbano" },
    { title: "Fronteamos Porque Podemos", src: "Musica/Urbano/Fronteamos Porque Podemos.mp3", artists: ["De La Ghetto", "Daddy Yankee", "Yandel", "Ñengo Flow"], genre: "Urbano" },
    { title: "Grita", src: "Musica/Urbano/Grita.mp3", artists: ["Amenazzy"], genre: "Urbano" },
    { title: "Haganme El Saludo", src: "Musica/Urbano/Haganme El Saludo.mp3", artists: ["Bulova"], genre: "Urbano" },
    { title: "Hey Chanty", src: "Musica/Urbano/Hey Chanty.mp3", artists: ["Amenazzy"], genre: "Urbano" },
    { title: "Im all the way up", src: "Musica/Urbano/Im all the way up.mp3", artists: ["Bulova"], genre: "Urbano" },
    { title: "In Da Getto", src: "Musica/Urbano/In Da Getto.mp3", artists: ["J Balvin", "Skrillex"], genre: "Urbano" },
    { title: "Influencer", src: "Musica/Urbano/Influencer.mp3", artists: ["Amenazzy"], genre: "Urbano" },
    { title: "JS4E", src: "Musica/Urbano/JS4E.mp3", artists: ["Arcangel"], genre: "Urbano" },
    { title: "Ketu tecré", src: "Musica/Urbano/Ketu tecré.mp3", artists: ["Bad Bunny"], genre: "Urbano" },
    { title: "Kloufrens", src: "Musica/Urbano/Kloufrens.mp3", artists: ["Bad Bunny"], genre: "Urbano" },
    { title: "Krippy Kush", src: "Musica/Urbano/Krippy Kush.mp3", artists: ["Farruko", "Bad Bunny"], genre: "Urbano" },
    { title: "La Chanty", src: "Musica/Urbano/La Chanty.mp3", artists: ["Amenazzy"], genre: "Urbano" },
    { title: "La Curiosidad", src: "Musica/Urbano/La curiosidad.mp3", artists: ["Jay Wheeler", "DJ Nelson", "Myke Towers"], genre: "Urbano" },
    { title: "La Mudanza", src: "Musica/Urbano/La mudanza.mp3", artists: ["Bad Bunny"], genre: "Urbano" },
    { title: "La playa", src: "Musica/Urbano/La playa.mp3", artists: ["Myke Towers"], genre: "Urbano" },
    { title: "Lala", src: "Musica/Urbano/Lala.mp3", artists: ["Myke Towers"], genre: "Urbano" },
    { title: "Le gusta eso", src: "Musica/Urbano/Le gusta eso.mp3", artists: ["Bulova"], genre: "Urbano" },
    { title: "Lean", src: "Musica/Urbano/Lean.mp3", artists: ["Amenazzy", "Bad Bunny", "Lito Kirino"], genre: "Urbano" },
    { title: "Llegara", src: "Musica/Urbano/Llegara.mp3", artists: ["Myke Towers"], genre: "Urbano" },
    { title: "Lo que le pasó a hawaii", src: "Musica/Urbano/Lo que le pasó a hawaii.mp3", artists: ["Bad Bunny"], genre: "Urbano" },
    { title: "Lo que yo diga", src: "Musica/Urbano/Lo que yo diga.mp3", artists: ["El Alfa", "Bad Bunny", "Jon Z", "Farruko", "Miky Woodz"], genre: "Urbano" },
    { title: "Loca (RMX)", src: "Musica/Urbano/Loca (RMX).mp3", artists: ["Khea", "Duki", "Cazzu", "Bad Bunny"], genre: "Urbano" },
    { title: "LSD", src: "Musica/Urbano/LSD.mp3", artists: ["Amenazzy"], genre: "Urbano" },
    { title: "Madrid", src: "Musica/Urbano/Madrid.mp3", artists: ["Maluma", "Myke Towers"], genre: "Urbano" },
    { title: "Mala eligiendo", src: "Musica/Urbano/Mala eligiendo.mp3", artists: ["Amenazzy"], genre: "Urbano" },
    { title: "Malo", src: "Musica/Urbano/Malo.mp3", artists: ["Amenazzy", "Lyanno"], genre: "Urbano" },
    { title: "Marijuana", src: "Musica/Urbano/Marijuana.mp3", artists: ["Amenazzy", "Ben Carrillo"], genre: "Urbano" },
    { title: "Me Acostumbre", src: "Musica/Urbano/Me Acostumbre.mp3", artists: ["Arcangel", "Bad Bunny"], genre: "Urbano" },
    { title: "Me Fui De Vacaciones", src: "Musica/Urbano/Me Fui De Vacaciones.mp3", artists: ["Bad Bunny"], genre: "Urbano" },
    { title: "Me Hace Falta", src: "Musica/Urbano/Me Hace Falta.mp3", artists: ["Amenazzy"], genre: "Urbano" },
    { title: "Me Porto Bonito", src: "Musica/Urbano/Me Porto Bonito.mp3", artists: ["Bad Bunny", "Chencho"], genre: "Urbano" },
    { title: "Mi Cuarto", src: "Musica/Urbano/Mi Cuarto.mp3", artists: ["Jerry Di"], genre: "Urbano" },
    { title: "Mi nena", src: "Musica/Urbano/Mi nena.mp3", artists: ["Amenazzy", "Iz BLAKK"], genre: "Urbano" },
    { title: "MMG", src: "Musica/Urbano/MMG.mp3", artists: ["Amenazzy", "Eklectico"], genre: "Urbano" },
    { title: "Moscow Mule", src: "Musica/Urbano/Moscow Mule.mp3", artists: ["Bad Bunny"], genre: "Urbano" },
    { title: "Munchies De Mujeres", src: "Musica/Urbano/Munchies De Mujeres.mp3", artists: ["Amenazzy"], genre: "Urbano" },
    { title: "Museo", src: "Musica/Urbano/Museo.mp3", artists: ["Rauw Alejandro"], genre: "Urbano" },
    { title: "Nombre", src: "Musica/Urbano", artists: ["Artista"], genre: "Urbano" },
    { title: "Nombre", src: "Musica/Urbano", artists: ["Artista"], genre: "Urbano" },
    { title: "Nombre", src: "Musica/Urbano", artists: ["Artista"], genre: "Urbano" },


    // Bachatas
   

    // English
   

    // Nuevas Musicas
    { title: "Nombre", src: "Musica/Urbano", artists: ["Artista"], genre: "Urbano" },
    
    
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
