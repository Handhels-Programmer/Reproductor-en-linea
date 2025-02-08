const songs = [
    // Urbano
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
    { title: "Fantasias (Unplugged)", src: "https://res.cloudinary.com/dllbhc3yl/video/upload/v1738515030/Urbano/Fantasias-%28Unplugged%29-h.mp3", artists: ["Rauw Alejandro", "Farruko"], genre: "Urbano" },
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
    { title: "Ella se contradice (Remix)", src: "https://res.cloudinary.com/dllbhc3yl/video/upload/v1738524209/Urbano/Ella-se-contradice-%28Remix%29-h.mp3", artists: ["Baby Rasta", "Gringo", "Don Omar", "Kendo", "Syko"], genre: "Urbano" },
    { title: "Entregala", src: "https://res.cloudinary.com/dllbhc3yl/video/upload/v1738524421/Urbano/Entregala-h.mp3", artists: ["Bulova"], genre: "Urbano" },
    { title: "EoO", src: "https://res.cloudinary.com/dllbhc3yl/video/upload/v1738524687/Urbano/EoO-h.mp3", artists: ["Bad Bunny"], genre: "Urbano" },
    { title: "Espuma", src: "https://res.cloudinary.com/dllbhc3yl/video/upload/v1738524797/Urbano/Espuma-h.mp3", artists: ["Rauw Alejandro", "De La Ghetto"], genre: "Urbano" },
    { title: "Estamos bien", src: "https://res.cloudinary.com/dllbhc3yl/video/upload/v1738524936/Urbano/Estamos-bien-h.mp3", artists: ["Bad Bunny"], genre: "Urbano" },
    { title: "Estilo de vida", src: "https://res.cloudinary.com/dllbhc3yl/video/upload/v1738525173/Urbano/Estilo-De-Vida-h.mp3", artists: ["Amenazzy"], genre: "Urbano" },
    { title: "Explicito", src: "https://res.cloudinary.com/dllbhc3yl/video/upload/v1738525322/Urbano/Explicito-h.mp3", artists: ["Myke Towers"], genre: "Urbano" },
    { title: "Favorito de los capos (Remix)", src: "https://res.cloudinary.com/dllbhc3yl/video/upload/v1738525716/Urbano/Favorito-de-los-capos-%28Remix%29-h.mp3", artists: ["Flow Mafia", "Arcangel", "Bad Bunny"], genre: "Urbano" },
    { title: "Fina", src: "https://res.cloudinary.com/dllbhc3yl/video/upload/v1738525859/Urbano/Fina-h.mp3", artists: ["Bad Bunny", "Young Miko"], genre: "Urbano" },
    { title: "Flow cabron", src: "https://res.cloudinary.com/dllbhc3yl/video/upload/v1738526027/Urbano/Flow-Cabron-h.mp3", artists: ["Arcangel", "Tali"], genre: "Urbano" },
    { title: "Fronteamos porque podemos", src: "https://res.cloudinary.com/dllbhc3yl/video/upload/v1738526131/Urbano/Fronteamos-porque-podemos-h.mp3", artists: ["De La Ghetto", "Daddy Yankee", "Yandel", "Ñengo Flow"], genre: "Urbano" },
    { title: "Grita", src: "https://res.cloudinary.com/dllbhc3yl/video/upload/v1738526331/Urbano/Grita-h.mp3", artists: ["Amenazzy"], genre: "Urbano" },
    { title: "Haganme el saludo", src: "https://res.cloudinary.com/dllbhc3yl/video/upload/v1738526501/Urbano/Haganme-el-saludo-h.mp3", artists: ["Bulova"], genre: "Urbano" },
    { title: "Hey chanty", src: "https://res.cloudinary.com/dllbhc3yl/video/upload/v1738526679/Urbano/Hey-chanty-h.mp3", artists: ["Amenazzy"], genre: "Urbano" },
    { title: "Im all the way up", src: "https://res.cloudinary.com/dllbhc3yl/video/upload/v1738526919/Urbano/Im-all-the-way-up-h.mp3", artists: ["Bulova"], genre: "Urbano" },
    { title: "In da getto", src: "https://res.cloudinary.com/dllbhc3yl/video/upload/v1738527420/Urbano/In-da-getto-h.mp3", artists: ["J Balvin", "Skrillex"], genre: "Urbano" },
    { title: "Influencer", src: "https://res.cloudinary.com/dllbhc3yl/video/upload/v1738527599/Urbano/Influencer-h.mp3", artists: ["Amenazzy"], genre: "Urbano" },
    { title: "JS4E", src: "https://res.cloudinary.com/dllbhc3yl/video/upload/v1738528874/Urbano/JS4E-h.mp3", artists: ["Arcangel"], genre: "Urbano" },
    { title: "Ketu tecré", src: "https://res.cloudinary.com/dllbhc3yl/video/upload/v1738529111/Urbano/Ketu-tecr%C3%A9-h.mp3", artists: ["Bad Bunny"], genre: "Urbano" },
    { title: "Kloufrens", src: "https://res.cloudinary.com/dllbhc3yl/video/upload/v1738529278/Urbano/Kloufrens-h.mp3", artists: ["Bad Bunny"], genre: "Urbano" },
    { title: "Krippy kush", src: "https://res.cloudinary.com/dllbhc3yl/video/upload/v1738529414/Urbano/Krippy-Kush-h.mp3", artists: ["Farruko", "Bad Bunny"], genre: "Urbano" },
    { title: "La chanty", src: "https://res.cloudinary.com/dllbhc3yl/video/upload/v1738529716/Urbano/La-chanty-h.mp3", artists: ["Amenazzy"], genre: "Urbano" },
    { title: "La curiosidad", src: "https://res.cloudinary.com/dllbhc3yl/video/upload/v1738547288/Urbano/La-curiosidad-h.mp3", artists: ["Jay Wheeler", "DJ Nelson", "Myke Towers"], genre: "Urbano" },
    { title: "La mudanza", src: "https://res.cloudinary.com/dllbhc3yl/video/upload/v1738547442/Urbano/La-mudanza-h.mp3", artists: ["Bad Bunny"], genre: "Urbano" },
    { title: "La playa", src: "https://res.cloudinary.com/dllbhc3yl/video/upload/v1738547589/Urbano/La-playa-h.mp3", artists: ["Myke Towers"], genre: "Urbano" },
    { title: "Lala", src: "https://res.cloudinary.com/dllbhc3yl/video/upload/v1738547706/Urbano/Lala-h.mp3", artists: ["Myke Towers"], genre: "Urbano" },
    { title: "Le gusta eso", src: "https://res.cloudinary.com/dllbhc3yl/video/upload/v1738547814/Urbano/Le-gusta-eso-h.mp3", artists: ["Bulova"], genre: "Urbano" },
    { title: "Llegará", src: "https://res.cloudinary.com/dllbhc3yl/video/upload/v1738548070/Urbano/Llegar%C3%A1-h.mp3", artists: ["Myke Towers"], genre: "Urbano" },
    { title: "Lo que le pasó a hawaii", src: "https://res.cloudinary.com/dllbhc3yl/video/upload/v1738548207/Urbano/Lo-que-le-pas%C3%B3-a-hawaii-h.mp3", artists: ["Bad Bunny"], genre: "Urbano" },
    { title: "Lo que yo diga", src: "https://res.cloudinary.com/dllbhc3yl/video/upload/v1738548362/Urbano/Lo-que-yo-diga-h.mp3", artists: ["El Alfa", "Bad Bunny", "Jon Z", "Farruko", "Miky Woodz"], genre: "Urbano" },
    { title: "Loca (Remix)", src: "https://res.cloudinary.com/dllbhc3yl/video/upload/v1738548575/Urbano/Loca-%28Remix%29-h.mp3", artists: ["Khea", "Duki", "Cazzu", "Bad Bunny"], genre: "Urbano" },
    { title: "LSD", src: "https://res.cloudinary.com/dllbhc3yl/video/upload/v1738548753/Urbano/LSD-h.mp3", artists: ["Amenazzy"], genre: "Urbano" },
    { title: "Madrid", src: "https://res.cloudinary.com/dllbhc3yl/video/upload/v1738548857/Urbano/Madrid-h.mp3", artists: ["Maluma", "Myke Towers"], genre: "Urbano" },
    { title: "Marijuana", src: "https://res.cloudinary.com/dllbhc3yl/video/upload/v1738548985/Urbano/Marijuana-h.mp3", artists: ["Amenazzy", "Ben Carrillo"], genre: "Urbano" },
    { title: "Me acostumbre", src: "https://res.cloudinary.com/dllbhc3yl/video/upload/v1738549092/Urbano/Me-acostumbre-h.mp3", artists: ["Arcangel", "Bad Bunny"], genre: "Urbano" },
    { title: "Me fui de vacaciones", src: "https://res.cloudinary.com/dllbhc3yl/video/upload/v1738549187/Urbano/Me-fui-de-vacaciones-h.mp3", artists: ["Bad Bunny"], genre: "Urbano" },
    { title: "Me hace falta", src: "https://res.cloudinary.com/dllbhc3yl/video/upload/v1738549314/Urbano/Me-hace-falta-h.mp3", artists: ["Amenazzy"], genre: "Urbano" },
    { title: "Me porto bonito", src: "https://res.cloudinary.com/dllbhc3yl/video/upload/v1738549419/Urbano/Me-porto-bonito-h.mp3", artists: ["Bad Bunny", "Chencho"], genre: "Urbano" },
    { title: "Mi cuarto", src: "https://res.cloudinary.com/dllbhc3yl/video/upload/v1738549560/Urbano/Mi-cuarto-h.mp3", artists: ["Jerry Di"], genre: "Urbano" },
    { title: "Mi nena", src: "https://res.cloudinary.com/dllbhc3yl/video/upload/v1738549662/Urbano/Mi-nena-h.mp3", artists: ["Amenazzy", "Iz BLAKK"], genre: "Urbano" },
    { title: "MMG", src: "https://res.cloudinary.com/dllbhc3yl/video/upload/v1738549771/Urbano/MMG-h.mp3", artists: ["Amenazzy", "Eklectico"], genre: "Urbano" },
    { title: "Moscow Mule", src: "https://res.cloudinary.com/dllbhc3yl/video/upload/v1738549845/Urbano/Moscow-Mule-h.mp3", artists: ["Bad Bunny"], genre: "Urbano" },
    { title: "Munchies de mujeres", src: "https://res.cloudinary.com/dllbhc3yl/video/upload/v1738549921/Urbano/Munchies-de-mujeres-h.mp3", artists: ["Amenazzy"], genre: "Urbano" },
    { title: "Museo", src: "https://res.cloudinary.com/dllbhc3yl/video/upload/v1738550024/Urbano/Museo-h.mp3", artists: ["Rauw Alejandro"], genre: "Urbano" },
    { title: "Na con Nah", src: "https://res.cloudinary.com/dllbhc3yl/video/upload/v1738550207/Urbano/Na-con-Nah-h.mp3", artists: ["Amenazzy"], genre: "Urbano" },
    { title: "Nadie", src: "https://res.cloudinary.com/dllbhc3yl/video/upload/v1738614638/Urbano/Nadie-h.mp3", artists: ["Amenazzy", "Flow Mafia"], genre: "Urbano" },
    { title: "Netflixxx", src: "https://res.cloudinary.com/dllbhc3yl/video/upload/v1738614888/Urbano/Netflixxx-h.mp3", artists: ["Brytiago", "Bad Bunny"], genre: "Urbano" },
    { title: "Not To Much", src: "https://res.cloudinary.com/dllbhc3yl/video/upload/v1738615033/Urbano/Not-To-Much-h.mp3", artists: ["Don Omar", "Zion"], genre: "Urbano" },
    { title: "Nuevayol", src: "https://res.cloudinary.com/dllbhc3yl/video/upload/v1738615312/Urbano/Nuevayol-h.mp3", artists: ["Bad Bunny"], genre: "Urbano" },
    { title: "Oh oh ", src: "https://res.cloudinary.com/dllbhc3yl/video/upload/v1738615661/Urbano/Oh-oh-h.mp3", artists: ["Shadow Blow"], genre: "Urbano" },
    { title: "Ojitos chiquititos", src: "https://res.cloudinary.com/dllbhc3yl/video/upload/v1738615943/Urbano/Ojitos-chiquititos-h.mp3", artists: ["Don Omar"], genre: "Urbano" },
    { title: "Only fans (Remix)", src: "https://res.cloudinary.com/dllbhc3yl/video/upload/v1738616127/Urbano/Only-fans-%28Remix%29-h.mp3", artists: ["Young Martino", "Brray", "Joyce Santana", "Jhay Cortez", "Myke Towers", "Lunay", "Arcangel", "Darell", "Ñengo Flow"], genre: "Urbano" },
    { title: "Original", src: "https://res.cloudinary.com/dllbhc3yl/video/upload/v1738616830/Urbano/Original-h.mp3", artists: ["Arcángel", "Bad Bunny"], genre: "Urbano" },
    { title: "Otro trago (Remix)", src: "https://res.cloudinary.com/dllbhc3yl/video/upload/v1738617203/Urbano/Otro-trago-%28Remix%29-h.mp3", artists: ["Sech", "Ozuna", "Anuel Aa", "Darell", "Nicky Jam", "Dímelo Flow"], genre: "Urbano" },
    { title: "Pacto", src: "https://res.cloudinary.com/dllbhc3yl/video/upload/v1738617318/Urbano/Pacto-h.mp3", artists: ["Jay Wheeler", "Hades66", "Dei V", "Luar La L"], genre: "Urbano" },
    { title: "Panda (Remix)", src: "https://res.cloudinary.com/dllbhc3yl/video/upload/v1738617440/Urbano/Panda-%28Remix%29-h.mp3", artists: ["Almighty", "Farruko", "Daddy Yankee", "Cosculluela"], genre: "Urbano" },
    { title: "Party", src: "https://res.cloudinary.com/dllbhc3yl/video/upload/v1738618342/Urbano/Party-h.mp3", artists: ["Bad Bunny", "Rauw Alejandro"], genre: "Urbano" },
    { title: "Passion whine (Remix)", src: "https://res.cloudinary.com/dllbhc3yl/video/upload/v1738701780/Urbano/Passion-whine-%28Remix%29-h.mp3", artists: ["Farruko", "Sean Paul", "Wissin"], genre: "Urbano" },
    { title: "Perfumito nuevo", src: "https://res.cloudinary.com/dllbhc3yl/video/upload/v1738701977/Urbano/Perfumito-nuevo-h.mp3", artists: ["Bad Bunny", "RaiNao"], genre: "Urbano" },
    { title: "Piecitos", src: "https://res.cloudinary.com/dllbhc3yl/video/upload/v1738702083/Urbano/Piecitos-h.mp3", artists: ["Amenazzy"], genre: "Urbano" },
    { title: "Piensan", src: "https://res.cloudinary.com/dllbhc3yl/video/upload/v1738702198/Urbano/Piensan-h.mp3", artists: ["Myke Towers"], genre: "Urbano" },
    { title: "Pitorro de coco", src: "https://res.cloudinary.com/dllbhc3yl/video/upload/v1738702252/Urbano/Pitorro-de-coco-h.mp3", artists: ["Bad Bunny"], genre: "Urbano" },
    { title: "Planta", src: "https://res.cloudinary.com/dllbhc3yl/video/upload/v1738702318/Urbano/Planta-h.mp3", artists: ["Amenazzy", "Kenser"], genre: "Urbano" },
    { title: "Playa de noche", src: "https://res.cloudinary.com/dllbhc3yl/video/upload/v1738702495/Urbano/Playa-de-noche-h.mp3", artists: ["Amenazzy"], genre: "Urbano" },
    { title: "Pomposo (Remix)", src: "https://res.cloudinary.com/dllbhc3yl/video/upload/v1738892471/Urbano/Pomposo-%28Remix%29-h.mp3", artists: ["Yomel", "Shadow Blow", "Bulova", "El Alfa", "Zion", "Lennox", "Jowell", "Randy"], genre: "Urbano" },
    { title: "Prende", src: "https://res.cloudinary.com/dllbhc3yl/video/upload/v1738892716/Urbano/Prende-h.mp3", artists: ["Bulova"], genre: "Urbano" },
    { title: "Prrrum", src: "https://res.cloudinary.com/dllbhc3yl/video/upload/v1738892809/Urbano/Prrrum-h.mp3", artists: ["Cosculluela"], genre: "Urbano" },
    { title: "Punto 40", src: "https://res.cloudinary.com/dllbhc3yl/video/upload/v1738892900/Urbano/Punto-40-h.mp3", artists: ["Rauw Alejandro", "Baby Rasta"], genre: "Urbano" },
    { title: "Que rico fue", src: "https://res.cloudinary.com/dllbhc3yl/video/upload/v1738892983/Urbano/Que-rico-fue-h.mp3", artists: ["Amenazzy"], genre: "Urbano" },
    { title: "Rico de boca", src: "https://res.cloudinary.com/dllbhc3yl/video/upload/v1738893101/Urbano/Rico-de-boca-h.mp3", artists: ["Bulova"], genre: "Urbano" },
    { title: "Rulay", src: "https://res.cloudinary.com/dllbhc3yl/video/upload/v1738893185/Urbano/Rulay-h.mp3", artists: ["Amenazzy", "Beny Jr"], genre: "Urbano" },
    { title: "Sacala", src: "https://res.cloudinary.com/dllbhc3yl/video/upload/v1738958368/Urbano/Sacala-h.mp3", artists: ["Hector el Father", "Naldo", "Daddy Yankee", "Don Omar", "Wissin", "Yandel", "Tego", "Voltio", "Zion"], genre: "Urbano" },
    { title: "Si ella me quiere", src: "https://res.cloudinary.com/dllbhc3yl/video/upload/v1738958828/Urbano/Si-ella-me-quiere-h.mp3", artists: ["Amenazzy", "Bryant Myers"], genre: "Urbano" },
    { title: "Si me emborracho", src: "https://res.cloudinary.com/dllbhc3yl/video/upload/v1738959041/Urbano/Si-me-emborracho-h.mp3", artists: ["Amenazzy"], genre: "Urbano" },
    { title: "Si se da", src: "https://res.cloudinary.com/dllbhc3yl/video/upload/v1738961418/Urbano/Si-se-da-h.mp3", artists: ["Myke Towers", "Farruko"], genre: "Urbano" },
    { title: "Solita", src: "https://res.cloudinary.com/dllbhc3yl/video/upload/v1738961548/Urbano/Solita-h.mp3", artists: ["Ozuna", "Bad Bunny", "Almighty", "Wissin"], genre: "Urbano" },
    { title: "Somos de calle (Remix)", src: "https://res.cloudinary.com/dllbhc3yl/video/upload/v1738962310/Urbano/Somos-de-calle-%28Remix%29-h.mp3", artists: ["Daaddy Yankee", "De La Ghetto", "Arcangel", "Ñejo", "Baby Rasta", "Julio Voltio", "Chyno Nino", "Cosculluela", "Guelo Star", "MC Ceja"], genre: "Urbano" },
    { title: "Suano", src: "https://res.cloudinary.com/dllbhc3yl/video/upload/v1738962559/Urbano/Suano-h.mp3", artists: ["Amenazzy", "NTG"], genre: "Urbano" },
    { title: "Subimos de precio", src: "https://res.cloudinary.com/dllbhc3yl/video/upload/v1738962795/Urbano/Subimos-de-precio-h.mp3", artists: ["Arcangel"], genre: "Urbano" },
    { title: "Te bote (Remix)", src: "https://res.cloudinary.com/dllbhc3yl/video/upload/v1738962949/Urbano/Te-bote-%28Remix%29-h.mp3", artists: ["Nio Garcia", "Darell", "Casper Magico", "Bad Bunny", "Ozuna", "Nicky Jam"], genre: "Urbano" },
    { title: "Tití me preguntó", src: "https://res.cloudinary.com/dllbhc3yl/video/upload/v1738963060/Urbano/Titi%CC%81-me-pregunto%CC%81-h.mp3", artists: ["Bad Bunny"], genre: "Urbano" },
    { title: "Toda (Remix)", src: "https://res.cloudinary.com/dllbhc3yl/video/upload/v1738963245/Urbano/Toda-%28Remix%29-h.mp3", artists: ["Alexx Rose", "Raw Alejandro", "Lenny Tavarez", "Lyanno", "Cazzu"], genre: "Urbano" },
    { title: "Todo de ti", src: "https://res.cloudinary.com/dllbhc3yl/video/upload/v1738963358/Urbano/Todo-de-ti-h.mp3", artists: ["Rauw Alejandro"], genre: "Urbano" },
    { title: "Tontoron tonton", src: "https://res.cloudinary.com/dllbhc3yl/video/upload/v1738963715/Urbano/Tontoron-tonton-h.mp3", artists: ["El Alfa", "Braulio Fogon"], genre: "Urbano" },
    { title: "Tu no metes cabras (Remix)", src: "https://res.cloudinary.com/dllbhc3yl/video/upload/v1738963834/Urbano/Tu-no-metes-cabras-%28Remix%29-h.mp3", artists: ["Bad Bunny", "Daddy Yankee", "Anuel Aa", "Cosculluela"], genre: "Urbano" },
    { title: "Tu por tu lao", src: "https://res.cloudinary.com/dllbhc3yl/video/upload/v1738972327/Urbano/Tu-por-tu-lao-h.mp3", artists: ["Bulova"], genre: "Urbano" },
    { title: "Tu te las traes (Remix)", src: "https://res.cloudinary.com/dllbhc3yl/video/upload/v1738972405/Urbano/Tu-te-las-traes-%28Remix%29-h.mp3", artists: ["Yomo", "Julio Voltio", "Jowell", "Randy", "Ñejo", "Dalmata"], genre: "Urbano" },
    { title: "Turista", src: "https://res.cloudinary.com/dllbhc3yl/video/upload/v1738972760/Urbano/Turista-h.mp3", artists: ["Bad Bunny"], genre: "Urbano" },
    { title: "Un ratito", src: "https://res.cloudinary.com/dllbhc3yl/video/upload/v1738972839/Urbano/Un-ratito-h.mp3", artists: ["Bad Bunny"], genre: "Urbano" },
    { title: "Vamo a involucrano 2.0", src: "https://res.cloudinary.com/dllbhc3yl/video/upload/v1738972991/Urbano/Vamo-a-involucrano-2.0-h.mp3", artists: ["Shadow Blow", "Melymel"], genre: "Urbano" },
    { title: "Vas a repetirlo", src: "https://res.cloudinary.com/dllbhc3yl/video/upload/v1738973098/Urbano/Vas-a-repetirlo-h.mp3", artists: ["Amenazzy"], genre: "Urbano" },
    { title: "Veldá", src: "https://res.cloudinary.com/dllbhc3yl/video/upload/v1738973192/Urbano/Veld%C3%A1-h.mp3", artists: ["Bad Bunny", "Omar Courtz", "Dei V"], genre: "Urbano" },
    { title: "Verte ir", src: "https://res.cloudinary.com/dllbhc3yl/video/upload/v1738973381/Urbano/Verte-ir-h.mp3", artists: ["Myke Towers"], genre: "Urbano" },
    { title: "Voy a llevarte pa PR", src: "https://res.cloudinary.com/dllbhc3yl/video/upload/v1738973465/Urbano/Voy-a-llevarte-pa-PR-h.mp3", artists: ["Bad Bunny"], genre: "Urbano" },
    { title: "Voy después", src: "https://res.cloudinary.com/dllbhc3yl/video/upload/v1738973526/Urbano/Voy-despu%C3%A9s-h.mp3", artists: ["Amenazzy"], genre: "Urbano" },
    { title: "Weltita", src: "https://res.cloudinary.com/dllbhc3yl/video/upload/v1738973655/Urbano/Weltita-h.mp3", artists: ["Bad Bunny", "Chuwi"], genre: "Urbano" },
    { title: "Y eso", src: "https://res.cloudinary.com/dllbhc3yl/video/upload/v1738973740/Urbano/Y-eso-h.mp3", artists: ["Bulova"], genre: "Urbano" },
    { title: "Ya cobré", src: "https://res.cloudinary.com/dllbhc3yl/video/upload/v1738973825/Urbano/Ya-cobr%C3%A9-h.mp3", artists: ["Amenazzy"], genre: "Urbano" },


    // Bachatas
    { title: "Amiga veneno", src: "https://res.cloudinary.com/dllbhc3yl/video/upload/v1738974086/Bachata/Amiga-Veneno-h.mp3", artists: ["Zacarías Ferreira"], genre: "Bachata" },
    { title: "Chica de mi barrio", src: "https://res.cloudinary.com/dllbhc3yl/video/upload/v1738987373/Bachata/Chica-de-mi-barrio-h.mp3", artists: ["Zacarías Ferreira"], genre: "Bachata" },
    { title: "Corazón de dinero", src: "https://res.cloudinary.com/dllbhc3yl/video/upload/v1738987710/Bachata/Coraz%C3%B3n-de-dinero-h.mp3", artists: ["Luis Miguel Del Amargue"], genre: "Bachata" },
    { title: "Devuélveme mi libertad", src: "https://res.cloudinary.com/dllbhc3yl/video/upload/v1738987845/Bachata/Devu%C3%A9lveme-mi-libertad-h.mp3", artists: ["Frank Reyes"], genre: "Bachata" },
    { title: "Fecha de vencimiento", src: "https://res.cloudinary.com/dllbhc3yl/video/upload/v1738989994/Bachata/Fecha-de-vencimiento-h.mp3", artists: ["Frank Reyes"], genre: "Bachata" },
    { title: "-", src: "--", artists: ["---"], genre: "Bachata" },
    { title: "-", src: "--", artists: ["---"], genre: "Bachata" },
    { title: "-", src: "--", artists: ["---"], genre: "Bachata" },
    { title: "-", src: "--", artists: ["---"], genre: "Bachata" },
    { title: "-", src: "--", artists: ["---"], genre: "Bachata" },
    { title: "-", src: "--", artists: ["---"], genre: "Bachata" },
    { title: "-", src: "--", artists: ["---"], genre: "Bachata" },
    { title: "-", src: "--", artists: ["---"], genre: "Bachata" },
    { title: "-", src: "--", artists: ["---"], genre: "Bachata" },
    { title: "-", src: "--", artists: ["---"], genre: "Bachata" },
    { title: "-", src: "--", artists: ["---"], genre: "Bachata" },
    { title: "-", src: "--", artists: ["---"], genre: "Bachata" },
    { title: "-", src: "--", artists: ["---"], genre: "Bachata" },
    { title: "-", src: "--", artists: ["---"], genre: "Bachata" },
    { title: "-", src: "--", artists: ["---"], genre: "Bachata" },
    { title: "-", src: "--", artists: ["---"], genre: "Bachata" },
    { title: "-", src: "--", artists: ["---"], genre: "Bachata" },
    { title: "-", src: "--", artists: ["---"], genre: "Bachata" },
    { title: "-", src: "--", artists: ["---"], genre: "Bachata" },
    { title: "-", src: "--", artists: ["---"], genre: "Bachata" },
    { title: "-", src: "--", artists: ["---"], genre: "Bachata" },
    { title: "-", src: "--", artists: ["---"], genre: "Bachata" },
    { title: "-", src: "--", artists: ["---"], genre: "Bachata" },
    { title: "-", src: "--", artists: ["---"], genre: "Bachata" },

    
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
