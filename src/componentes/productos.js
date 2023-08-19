const talles = [
    'PM',
    'RN',
    '0-3m',
    '3-6m',
    '6-9m',
    '9-12m',
    '12-18m',
    '18-24m',
    '0-3m',
    '3-6m',
    '6-9m',
    '9-12m',
];

const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
};

shuffleArray(talles);

const productos = [
    {
        codigo: 'P001',
        nombre: 'Body rosa conejitos',
        descripcion: 'Body clásico cuello redondo, manga larga. Detalle en cuello con puntillas a contratono. Estampa central.',
        composicion: '95% Algodón 5% Elastano.',
        precio: 11000,
        talles: [talles[0], talles[1], talles[2]],
        fotoPrincipal:'P001-1.jpg',
        fotosSecundarias: [
            '/P001-2.jpg',
            '/P001-3.jpg',
        ],
    },
    {
        codigo: 'P002',
        nombre: 'Body celeste con globo',
        descripcion: 'Body liso, cuello redondo, manga larga a contratono. Apertura en tiro con snaps. Estampa central.',
        composicion: '100% Algodón.',
        precio: 11000,
        talles: [talles[3], talles[4], talles[5]],
        fotoPrincipal: 'P002-1.jpg',
        fotosSecundarias: [
            'P002-2.jpg',
            'P002-3.jpg',
        ],
    },
    {
        codigo: 'P003',
        nombre: 'Cardigan lana beige',
        descripcion: 'Cardigan manga larga con cuello doble rebatible y bolsillos delanteros. Botones a contratono. Cuerpo tejido en morley, y cuello y cartera en jersey. Calidad suave y confortable.',
        composicion: '50% Viscosa, 27% Poliéster, 23% Nailon.',
        precio: 16000,
        talles: [talles[6], talles[7], talles[8]],
        fotoPrincipal: 'P003-1.jpg',
        fotosSecundarias: [
            'P003-2.jpg',
            'P003-3.jpg',
        ],
    },
    {
        codigo: 'P004',
        nombre: 'Campera puff rosa',
        descripcion: 'Campera ultralight con capucha, manga larga de nylon con relleno "warm & cozy" de fibra sustentable. Detalles contratono en vivos y cierres de nylon. Estampa en capucha.',
        composicion: 'Exterior 100% Poliamida - Relleno 100% poliéster - Interior 100% poliamida.',
        precio: 25000,
        talles: [talles[9], talles[10], talles[11]],
        fotoPrincipal: 'P004-1.jpg',
        fotosSecundarias: [
            'P004-2.jpg',
            'P004-3.jpg',
        ],
    },
    {
        codigo: 'P005',
        nombre: 'Campera peluche negra',
        descripcion: 'Campera con cierre y capucha en polar tipo corderito, manga larga con detalles a contratono y bolsillos canguro.',
        composicion: '100% Poliéster.',
        precio: 18000,
        talles: [talles[0], talles[1], talles[2]],
        fotoPrincipal: 'P005-1.jpg',
        fotosSecundarias: [
            'P005-2.jpg',
            'P005-3.jpg',
        ],
    },
    {
        codigo: 'P006',
        nombre: 'Cárdigan hilo rojo',
        descripcion: 'Cardigan escote redondo con manga larga raglán. Cuerpo tejido en jersey, y cuello, puños y bajo en rib. Cartera tejida en morley con detalle de cinta gross en el interior. botones de perlitas.',
        composicion: '80% Rayón 20% Nailon.',
        precio: 16000,
        talles: [talles[3], talles[4], talles[5]],
        fotoPrincipal: 'P006-1.jpg',
        fotosSecundarias: [
            'P006-2.jpg',
            'P006-3.jpg',
        ],
    },
    {
        codigo: 'P007',
        nombre: 'Pantalón denim azul marino',
        descripcion: 'Jean skinny en tela ultra soft y elastizada para lograr un calce confortable. Cintura interna con elástico con ojales y botón regulable.',
        composicion: '90% Algodón 8% Poliéster 2% Elastano.',
        precio: 9000,
        talles: [talles[6], talles[7], talles[8]],
        fotoPrincipal: 'P007-1.jpg',
        fotosSecundarias: [
            'P007-2.jpg',
            'P007-3.jpg',
        ],
    },
    {
        codigo: 'P008',
        nombre: 'Pantalón corderoy nude',
        descripcion: 'Pantalón elastizado al tobillo, con bolsillos, en plush acanalado con elastano.',
        composicion: '75% Algodón 20% Poliéster 5% Elastano.',
        precio: 8000,
        talles: [talles[9], talles[10], talles[11]],
        fotoPrincipal: 'P008-1.jpg',
        fotosSecundarias: [
            'P008-2.jpg',
            'P008-3.jpg',
        ],
    },
    {
        codigo: 'P009',
        nombre: 'Pantalón gabardina beige',
        descripcion: 'Pantalón de gabardina de algodón con elastano y elástico en la cintura para mayor comodidad y calce. Con cordones de algodón color crudo y terminación con puntera de goma.',
        composicion: '70% Algodón 27% Viscosa 3% Elastano.',
        precio: 9500,
        talles: [talles[0], talles[1], talles[2]],
        fotoPrincipal: 'P009-1.jpg',
        fotosSecundarias: [
            'P009-2.jpg',
            'P009-3.jpg',
        ],
    },
    {
        codigo: 'P010',
        nombre: 'Vestido blanco y negro lunares',
        descripcion: 'Vestido americano, largo arriba de la rodilla en corderoy basta fina, estampado con lunares. Faldón con tablas y detalle de moño en frente a contratono.',
        composicion: '100% Algodón.',
        precio: 18000,
        talles: [talles[3], talles[4], talles[5]],
        fotoPrincipal: 'P010-1.jpg',
        fotosSecundarias: [
            'P010-2.jpg',
            'P010-3.jpg',
        ],
    },
    {
        codigo: 'P011',
        nombre: 'Zapatos guillermina glitter rosa',
        descripcion: 'Chatita de glitter con pulsera y hebilla . Suela flexible.',
        composicion: 'Capellada: textil. Suela: sintético. Interior: sintético.',
        precio: 25500,
        talles: [talles[6], talles[7], talles[8]],
        fotoPrincipal: 'P011-1.jpg',
        fotosSecundarias: [
            'P011-2.jpg',
            'P011-3.jpg',
        ],
    },
    {
        codigo: 'P012',
        nombre: 'Zapato botita gamuza marrón',
        descripcion: 'Abotinado en gamuza sintética. Con cordones de algodón para un mejor anudado. Con suela crepe.',
        composicion: 'Capellada: sintético. Forrería: sintético. Fondo: sintético.',
        precio: 25000,
        talles: [talles[9], talles[10], talles[11]],
        fotoPrincipal: 'P012-1.jpg',
        fotosSecundarias: [
            'P012-2.jpg',
            'P012-3.jpg',
        ],
    },
];

export default productos;


