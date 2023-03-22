const stock = [
    {
        Nombre: "Computadora",
        Marca: "Lenovo",
        Descripcion: "E41-50 Core I3 1005G1 8GB 512GB SSD NVMe W10 PRO",
        Precio: 190790,
        Stock: 1,
        img: "https://imgur.com/OUCF2BW"
    },

    {
        Nombre: "Computadora",
        Marca: "Lenovo",
        Descripcion: "Yoga Slim 714ITL5 FHD Core I5 1135G7 8GB 512GB SSD NVMe W10 Home",
        Precio: 280000,
        Stock: 1,
        img: "https://imgur.com/8D0rcei"
    },

    {
        Nombre: "Procesador",
        Marca: "AMD",
        "Descripcion": "Ryzen 9 5950X 4.9GHz Turbo AM4 - No incluye Cooler",
        Precio: 200200,
        Stock: 1,
        img: "https://imgur.com/vnrcPKd"
    },

    {
        Nombre: "Procesador",
        Marca: "AMD",
        "Descripcion": "Ryzen 9 5900X 4.8GHz Turbo AM4 - No incluye Cooler",
        Precio: 180100,
        Stock: 1,
        img: "https://imgur.com/qL5TVlU"
    },

    {
        Nombre: "Memoria Ram",
        Marca: "KingDian",
        Descripcion: "Notebook DDR4 32GB 2666MHz SODIMM",
        Precio: 18770,
        Stock: 1,
        img: "https://imgur.com/uB0uQqP"
    },

    {
        Nombre: "Memoria Ram",
        Marca: "GeiL",
        Descripcion: "DDR4 16GB 3000MHz Orion RGB Black",
        Precio: 34650,
        Stock: 1,
        img: "https://imgur.com/U1BFaIq"
    },

    {
        Nombre: "Placa de Video",
        Marca: "Asus",
        Descripcion: "Radeon Rx 6900 XT 16GB GDDR6 ROG STRIX OC LC",
        Precio: 513700,
        Stock: 1,
        img: "https://imgur.com/T0dk15Y"
    },

    {
        Nombre: "Placa de Video",
        Marca: "XFX",
        "Descripcion": "Radeon RX 6800 XT CORE 16GB GDDR6 Speedster MERC 319",
        Precio: 260950,
        Stock: 1,
        img: "https://imgur.com/znvxCa8"
    },

    {
        Nombre: "Disco",
        Marca: "WD",
        Descripcion: "Disco Rigido 12TB Red Pro 7.2k RPM 256MB",
        Precio: 92850,
        Stock: 1,
        img: "https://imgur.com/f4pMdhb"
    },

    {
        Nombre: "Disco",
        Marca: "WD",
        Descripcion: "Disco Rigido 12TB Gold 7.2K RPM 256MB",
        Precio: 83500,
        Stock: 1,
        img: "https://imgur.com/YeOxvuy"
    },

    {
        Nombre: "Placa Madre",
        Marca: "Asrock",
        Descripcion: "X670E Taichi Carrara AM5",
        Precio: 255150,
        Stock: 1,
        img: "https://imgur.com/QaDLscA"
    },

    {
        Nombre: "Placa Madre",
        Marca: "Asrock",
        Descripcion: "X670E Steel Legend AM5",
        Precio: 178600,
        Stock: 1,
        img: "https://imgur.com/MNSr7tb"
    },

    {
        Nombre: "Computadora",
        Marca: "Lenovo IdeaPad 514IILO5 FHD",
        Descripcion: "Core I7 1065G7 8GB SSD NVMe W10 Hombe",
        Precio: 270000,
        Stock: 1,
        img: "https://imgur.com/4jMRaat"
    },

    {
        Nombre: "Computadora",
        Marca: "Asus ZenBook UM425",
        Descripcion: "Ryzen 5 5600H 8GB 512GB SSD NVMe W11 Home",
        Precio: 270000,
        Stock: 1,
        img: "https://imgur.com/ywKy2i2"
    },

    {
        Nombre: "Procesador",
        Marca: "AMD",
        Descripcion: "Ryzen 7 5700X 4.6GHz Turbo AM4 - No incluye Cooler",
        Precio: 98800,
        Stock: 1,
        img: "https://imgur.com/aLCKXTk"
    },

    {
        Nombre: "Procesador",
        Marca: "Intel",
        Descripcion: "Core I7 12700K 5.0GHz Turbo Socket 1700",
        Precio: 135200,
        Stock: 1,
        img: "https://imgur.com/6s6Dvon"
    },

    {
        Nombre: "Memoria Ram",
        Marca: "GeiL",
        Descripcion: "DDR4 16GB 3000MHz Orion RGB Red",
        Precio: 34650,
        Stock: 1,
        img: "https://imgur.com/PAYQwUn"
    },

    {
        Nombre: "Memoria Ram",
        Marca: "GeiL",
        Descripcion: "DDR4 16GB 3000MHz Super Luce RGB Black",
        Precio: 35650,
        Stock: 1,
        img: "https://imgur.com/uF369Pt"
    },

    {
        Nombre: "Placa de Video",
        Marca: "Asrock",
        Descripcion: "Radeon RX 6800 XT 16GB GDDR6 Phantom Gaming D OC",
        Precio: 255950,
        Stock: 1,
        img: "https://imgur.com/ouUoXvR"
    },

    {
        Nombre: "Placa de Video",
        Marca: "MSI",
        Descripcion: "GeForce RTX 3090 24GB GDDR6X VENTUS 3X OC",
        Precio: 410800,
        Stock: 1,
        img: "https://imgur.com/cqJKKyR"
    },

    {
        Nombre: "Disco",
        Marca: "Seagate",
        Descripcion: " Disco Rigido 14TB SkyHawk AI ST14000VE0008",
        Precio: 71850,
        Stock: 1,
        img: "https://imgur.com/S1xV2BS"
    },

    {
        Nombre: "Disco",
        Marca: "T-Create",
        Descripcion: "Disco Solido SSD M.2 5000MB/s NVMe PCI-E Gen4",
        Precio: 92050,
        Stock: 1,
        img: "https://imgur.com/TO7iSaQ"
    },

    {
        Nombre: "Placa Madre",
        Marca: "Asrock",
        Descripcion: "X670E PG Lightning AM5",
        Precio: 175450,
        Stock: 1,
        img: "https://imgur.com/0KgknK1"
    },

    {
        Nombre: "Placa Madre",
        Marca: "Asus",
        Descripcion: "Rog Maximus XIII Extreme Glacial",
        Precio: 313700,
        Stock: 1,
        img: "https://imgur.com/RgHEGR6"
    },

    {
        Nombre: "Computadora",
        Marca: "Asus TUF FX506L",
        Descripcion: "Core I5 10300H 8GB 512GB SSD NVMe GeForce GTX 1650 W11 Home",
        Precio: 295000,
        Stock: 1,
        img: "https://imgur.com/YIh281u"
    },

    {
        Nombre: "Computadora",
        Marca: "Asus Vivobook M3500",
        Descripcion: "Ryzen 5 5600H 8GB 512GB SSD NVMe W11 Home",
        Precio: 260000,
        Stock: 1,
        img: "https://imgur.com/C9kQJOO"
    },

    {
        Nombre: "Procesador",
        Marca: "Intel",
        Descripcion: "Core I7 12700 S1700 12th Gen",
        Precio: 125000,
        Stock: 1,
        img: "https://imgur.com/0RkJ26T"
    },

    {
        Nombre: "Procesador",
        Marca: "Intel",
        Descripcion: "Core I7 10700KF 5.1GHz Turbo 1200 Comet Lake",
        Precio: 115500,
        Stock: 1,
        img: "https://imgur.com/sbiL96S"
    },

    {
        Nombre: "Memoria Ram",
        Marca: "Crucial",
        Descripcion: "DDR4 16GB 3200MHz",
        Precio: 41480,
        Stock: 1,
        img: "https://imgur.com/efHkHYI"
    },

    {
        Nombre: "Memoria Ram",
        Marca: "Crucial",
        Descripcion: "DDR4 16GB 3200MHz Value",
        Precio: 43320,
        Stock: 1,
        img: "https://imgur.com/dewAnuZ"
    },

    {
        Nombre: "Placa de Video",
        Marca: "Zotac",
        Descripcion: "GeForce RTX 3090 24GB GDDR6X Trinity",
        Precio: 403150,
        Stock: 1,
        img: "https://imgur.com/ivvQ0Lw"
    },

    {
        Nombre: "Placa de Video",
        Marca: "Zotac",
        Descripcion: "GeForce RTX 3080 Ti 12GB GDDR6X Trinity",
        Precio: 358.500,
        Stock: 1,
        img: "https://imgur.com/qetP5WO"
    },

    {
        Nombre: "Disco",
        Marca: "Cardea Zero",
        Descripcion: "Disco Solido SSD M.2 Z440 5000MB/s PCIe Gen4",
        Precio: 91650,
        Stock: 1,
        img: "https://imgur.com/8kwKVFm"
    },

    {
        Nombre: "Disco",
        Marca: "Swordfish",
        Descripcion: "Disco Solido SSD M.2 1800MB/s NVMe PCI-e x4",
        Precio: 45800,
        Stock: 1,
        img: "https://imgur.com/oGWdVhQ"
    },

    {
        Nombre: "Placa Madre",
        Marca: "Asus",
        Descripcion: "Rog Maximus XIII Extreme Z590 Eatx",
        Precio: 168400,
        Stock: 1,
        img: "https://imgur.com/IdnmzY8"
    },

    {
        Nombre: "Placa Madre",
        Marca: "MSI",
        Descripcion: "Meg Z590 ACE Socket 1200",
        Precio: 106750,
        Stock: 1,
        img: "https://imgur.com/MpGHoIK"
    },

    {
        Nombre: "Computadora",
        Marca: "Dell  Inspiron 3511 FHD",
        Descripcion: "Core I7 1165G7 8GB 256Gb SSD NVMe W11 Home",
        Precio: 250000,
        Stock: 1,
        img: "https://imgur.com/ShDQIBB"
    },

    {
        Nombre: "Procesador",
        Marca: "Intel",
        Descripcion: "Core I7 12700F 4.9GHz Turbo Socket 1700",
        Precio: 114500,
        Stock: 1,
        img: "https://imgur.com/CmnfTFC"
    },

    {
        Nombre: "Memoria Ram",
        Marca: "PNY",
        Descripcion: "DDR4 16GB (2x8GB) 3200MHz XLR8 Epic X RGB",
        Precio: 39290,
        Stock: 1,
        img: "https://imgur.com/b7h0tro"
    },

    {
        Nombre: "Placa de Video",
        Marca: "GALAX",
        Descripcion: "GeForce RTX 3080 Ti 12GB GDDR6X SG 1-Click OC",
        Precio: 354200,
        Stock: 1,
        img: "https://imgur.com/g8kBdsq"
    },

    {
        Nombre: "Disco",
        Marca: "WD_Black",
        "Descripcion": "Solido SSD M.2 SN770 5150MB/s NVMe PCI-E x4 Gen 4",
        Precio: 42380,
        Stock: 1,
        img: "https://imgur.com/SJcLKwb"
    },

    {
        Nombre: "Placa Madre",
        Marca: "Asus",
        Descripcion: "ROG STRIX B450-F GAMING II AM4",
        Precio: 59850,
        Stock: 1,
        img: "https://imgur.com/jvaTlkP"
    }

];

export default stock;