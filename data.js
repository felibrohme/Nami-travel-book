// ============================================================
// EDITÁ ESTE ARCHIVO PARA CAMBIAR LA HISTORIA
// Podés cambiar títulos, textos y el orden de las fotos.
// Las rutas son relativas a la carpeta /media.
// ============================================================

const viaje = {
  portada: {
    etiqueta: "Un regalito para Nami 2026",
    titulo: "Nuestro viaje al sur",
    subtitulo: "Un viaje, un montón de recuerdos",
    fondo: "Vistas/Portada.jpg"
  },

  introduccion: {
    etiqueta: "El comienzo",
    titulo: "Antes de todo",
    texto: `Este es un regalo para vos, Nami. Quería dejar guardado de una forma un poquito distinta el recuerdo de lo que fue nuestro viaje, de todo lo que vivimos y, sobre todo, de lo bien que la pasamos juntos.\n\nTodo esto empezó de la nada misma. Un año entero hablando solamente por mensajes, con vos en Chile y yo en Argentina. No teníamos todo resuelto, ni un plan perfecto, ni un peso de sobra. Pero cuando nos organizamos, trabajamos y nos pusimos de acuerdo, logramos hacer realidad algo que al principio parecía lejísimo.\n\nY terminó siendo uno de los viajes más increíbles que me tocó vivir.`
  },

  // PEGÁ EL LINK DE YOUTUBE MUSIC/YOUTUBE O EL ID DE LA CANCIÓN.
  // Ejemplo: "https://music.youtube.com/watch?v=ABC123" o "ABC123"
  musicaIntroduccion: {
    titulo: "Don't go insane",
    youtubeId: "https://music.youtube.com/watch?v=Z7SNttUR9n0&list=PL6e5yQa29suWQwXeojwdcEkKetzsDmyZY"
  },

  capitulos: [
    {
      id: "vistas",
      youtubeId: "https://music.youtube.com/playlist?list=PL6e5yQa29suWQwXeojwdcEkKetzsDmyZY",
      cancion: "SAINT",
      numero: "01",
      etiqueta: "El sur",
      titulo: "Los paisajes del camino",
      texto: `Antes de contar todo lo que hicimos, hay algo que merece su propio capítulo: los lugares que vimos.\n\nPaisajes enormes, agua, montañas, volcanes, bosques y rincones que hacían que cada vez que miráramos alrededor apareciera otra postal. El viaje ya era increíble por estar juntos; estos lugares hicieron que fuera todavía más difícil olvidarlo.`,
      layout: "cinematic",
      fotos: [
        "Vistas/IMG-1.jpg",
        "Vistas/IMG-2.jpg",
        "Vistas/IMG-3.jpg",
        "Vistas/IMG-4.jpg",
        "Vistas/IMG-5.jpg",
        "Vistas/IMG-6.jpg",
        "Vistas/IMG-7.jpg",
        "Vistas/IMG-8.jpg",
        "Vistas/IMG-9.jpg",
        "Vistas/IMG-10.jpg",
        "Vistas/IMG-11.jpg",
        "Vistas/IMG-12.jpg",
        "Vistas/IMG-13.jpg",
        "Vistas/IMG-14.jpg",
        "Vistas/IMG-15.jpg",
        "Vistas/IMG-18.jpg",
        "Vistas/IMG-19.jpg",
        "Vistas/IMG-20.jpg",
        "Vistas/Portada.jpg"
      ]
    },
    {
      id: "llegada",
      youtubeId: "https://music.youtube.com/watch?v=4704jzvRVhs&list=PL6e5yQa29suWQwXeojwdcEkKetzsDmyZY",
      cancion: "LIMBO",
      numero: "02",
      etiqueta: "Por fin...",
      titulo: "Nos encontramos",
      texto: `Después de todo lo que hubo que hacer para llegar hasta ahí, llegó ese momento en el que el viaje dejó de ser una idea y pasó a ser real.\n\nCuando bajé del micro no sabía con que me iba a encontrar, tenía miedo. Meses hablando del día en que nos volveriamos a ver y todo se decidía en ese momento.\n\nSin embargo, te ví por primera vez y se me fué el miedo. Desde ahí supe lo que iba a ser éste viaje :)`,
      fotos: [
        "Llegada/IMG-20260215-WA0000 (1).jpg",
        "Llegada/IMG-20260215-WA0010.jpg",
        "Llegada/IMG-20260219-WA0001.jpg",
        "Llegada/IMG-20260222-WA0116.jpg",
        "Llegada/IMG-20260227-WA0060.jpg",
        "Llegada/IMG-20260227-WA0074.jpg"
      ]
    },
    {
      id: "ruta",
      youtubeId: "https://music.youtube.com/watch?v=1kyTd8kEgp0&list=PL6e5yQa29suWQwXeojwdcEkKetzsDmyZY",
      cancion: "NERVES",
      numero: "03",
      etiqueta: "Viaje, music y mates...",
      titulo: "La ruta",
      texto: `Algo hermoso que tuvo este viaje fueron los viajes en el auto. Y si algo hizo que esos viajes fueran buenos, fué la DJ, cebadora y camarógrafa del viaje.\n\nUna excelente acompañante, buenos temones, charlas, boludeo y, por supuesto, unos buenos mates.\n\nLa ruta por el sur tiene algo especial: Nunca te preguntás cuánto falta, simplemente disfrutás de estar ahí.`,
      fotos: [
        "Ruta/IMG-20260216-WA0012 (1).jpg",
        "Ruta/IMG-20260222-WA0163.jpg",
        "Ruta/IMG-20260222-WA0166.jpg",
        "Ruta/IMG-20260227-WA0008.jpg",
        "Ruta/IMG-20260227-WA0087.jpg"
      ],
      videos: ["Ruta/VID-20260216-WA0010 (1).mp4"]
    },
    {
      id: "playa",
      youtubeId: "https://music.youtube.com/watch?v=GZXPGv0kOAQ",
      cancion: "Ponyo",
      numero: "04",
      etiqueta: "Lo mejor del mar",
      titulo: "Playa, mates y... ¿Ponyo?",
      texto: `Nunca pensé que una de mis mayores alegrías iba a ser algo tan simple como esto: estar en una playa hermosa, tomando unos mates con vos y viendo Ponyo en la tablet :)\n\nDespués jugar con la pelota, reírnos y simplemente quedarnos ahí.\n\nNo hacía falta mucho más. En ese momento, sinceramente, no quería estar en ningún otro lugar.`,
      fotos: [
        "Playa/IMG-20260216-WA0006 (1).jpg",
        "Playa/IMG-20260222-WA0026.jpg",
        "Playa/IMG-20260222-WA0037.jpg",
        "Playa/IMG-20260222-WA0041.jpg",
        "Playa/IMG-20260222-WA0042.jpg",
        "Playa/IMG-20260222-WA0050.jpg",
        "Playa/IMG-20260222-WA0052.jpg"
      ]
    },
    {
      id: "trekking",
      youtubeId: "https://music.youtube.com/watch?v=Jpz6LarMR-w&list=PL6e5yQa29suWQwXeojwdcEkKetzsDmyZY",
      cancion: "Somewhere else",
      numero: "05",
      etiqueta: "Mi parte favorita",
      titulo: "Trekking",
      texto: `Creo que este fue el mejor momento de todo el viaje.\n\nNo solamente por el lugar, la vegetación, las cascadas o todo lo que encontramos en el camino. Fue porque nunca te vi tan libre, tan sonriente y tan alegre.\n\nVerte disfrutar así hizo que para mí el lugar fuera todavía más especial.\n\nPD: vos con mil caras distintas y yo no puedo hacer más de 2 expresiones ;)`,
      fotos: [
        "Trekking/IMG-20260219-WA0053.jpg",
        "Trekking/IMG-20260219-WA0056.jpg",
        "Trekking/IMG-20260219-WA0057.jpg",
        "Trekking/IMG-20260219-WA0058.jpg",
        "Trekking/IMG-20260219-WA0066.jpg",
        "Trekking/IMG-20260219-WA0101.jpg",
        "Trekking/IMG-20260219-WA0103.jpg",
        "Trekking/IMG-20260219-WA0104.jpg",
        "Trekking/IMG-20260219-WA0105.jpg",
        "Trekking/IMG-20260219-WA0106.jpg",
        "Trekking/IMG-20260227-WA0098.jpg",
        "Trekking/IMG-20260227-WA0103.jpg"
      ]
    },
    {
      id: "lemuy",
      youtubeId: "https://music.youtube.com/watch?v=pnRFEq4tQlY&list=PL6e5yQa29suWQwXeojwdcEkKetzsDmyZY",
      cancion: "DO OR DIE",
      numero: "06",
      etiqueta: "La isla",
      titulo: "Lemuy",
      texto: `En Lemuy vimos algunos de los mejores paisajes de todo el viaje. Playas, volcanes, senderos que te sacaron la xuxa :), agua cristalina y lugares que parecían sacados de una película.\n\nPero, seamos sinceros… por más espectacular que fuera la isla, rodeados de playas y volcanes, lo más espectacular que se veía ahí eran esos Tutos ;).`,
      fotos: [
        "Lemuy/IMG-20260222-WA0022.jpg",
        "Lemuy/IMG-20260222-WA0061.jpg",
        "Lemuy/IMG-20260222-WA0070.jpg",
        "Lemuy/IMG-20260222-WA0072.jpg",
        "Lemuy/IMG-20260222-WA0093.jpg",
        "Lemuy/IMG-20260222-WA0094.jpg",
        "Lemuy/IMG-20260222-WA0097.jpg",
        "Lemuy/IMG-20260222-WA0106.jpg",
        "Lemuy/IMG-20260227-WA0110.jpg",
        "Lemuy/IMG-20260227-WA0114.jpg"
      ],
      videos: ["Lemuy/VID-20260222-WA0066.mp4"]
    },
    {
      id: "amigos",
      youtubeId: "https://music.youtube.com/watch?v=RxylBz1OLdc&list=PL6e5yQa29suWQwXeojwdcEkKetzsDmyZY",
      cancion: "Scaredy cat",
      numero: "07",
      etiqueta: "Las criaturas del viaje",
      titulo: "Nuestros acompañantes",
      texto: `Este viaje no estaría completo sin conocer a nuestros compañeros peludos.\n\nPrimero apareció la reina de casa: Mimi. Después conocimos al hermano del famoso "Boomer", a quién recordamos con mucho cariño. Finalmente, llegó el turno del gran misterio: el pudú perdido.\n\nLo buscamos. Lo esperamos. Nos dijeron que estaba por ahí. Pero el señor pudú decidió no colaborar con el documental. :(`,
      fotos: [
        "amigos/IMG-20250303-WA0027.jpg",
        "amigos/IMG-20250303-WA0031.jpg",
        "amigos/IMG-20260217-WA0001.jpg",
        "amigos/IMG-20260217-WA0002.jpg",
        "amigos/IMG-20260219-WA0013.jpg",
        "amigos/IMG-20260219-WA0023.jpg",
        "amigos/IMG-20260222-WA0015.jpg"
      ]
    },
    {
      id: "graciosos",
      youtubeId: "https://music.youtube.com/watch?v=JgnbLjeksjMY",
      cancion: "La biblia",
      numero: "08",
      etiqueta: "Porque no todo podía ser serio",
      titulo: "Mrs funny",
      texto: `Entre paisajes increíbles y momentos que parecían sacados de una película, la doña no queria dejar pasar la oportunidad de humillarme.\n\nGrabarme en la cama es un acto de deshumanidad muy grande, pero te quiero tanto que te la tengo que perdonar. Vos y Lau son la dupla perfecta jakjdakjd. Nunca vamos a olvidar lo que pasó en esa feria...\n\nY el último es la frutillita del postre ;)`,
      fotos: [
        "Graciosos/IMG-20260222-WA0170.jpg",
        "Graciosos/IMG-20260227-WA0083.jpg"
      ],
      videos: [
        "Graciosos/VID-20260222-WA0000.mp4",
        "Graciosos/VID-20260222-WA0012.mp4",
        "Graciosos/VID-20260222-WA0136.mp4"
      ]
    }
  ],

  final: {
    youtubeId: "https://music.youtube.com/watch?v=3m6WCQQWG0I&list=PL6e5yQa29suWQwXeojwdcEkKetzsDmyZY",
    cancion: "Downtown baby",
    etiqueta: "Gracias por este viaje",
    titulo: "La historia sigue",
    texto: `Gracias por ser la persona que sos. Gracias por acompañarme, por hacerme reír, por darme tanta alegría y por haber compartido conmigo todos estos momentos.\n\nNo sabemos exactamente en qué va a terminar esta historia. Y quizás eso sea justamente lo lindo.\n\nLo único que sé es que todavía quedan páginas por escribir, lugares por conocer, canciones por escuchar, mates por cebar y un montón de próximos momentos por vivir juntos.\n\nEste viaje termina acá. La historia, no.`,
    firma: "Feliz cumpleaños, hermosa.\n\nAtentamente:\nTu Gymbro \"Daddy\""
  }
};
