const stock = [
    {
        Nombre: "Computadora",
        Marca: "Lenovo",
        Descripcion: "E41-50 Core I3 1005G1 8GB 512GB SSD NVMe W10 PRO",
        Precio: 190790,
        Stock: 1,
        img: "https://i.postimg.cc/0ybhm65V/pc.jpg"
    },

    {
        Nombre: "Computadora",
        Marca: "Lenovo",
        Descripcion: "Yoga Slim 714ITL5 FHD Core I5 1135G7 8GB 512GB SSD NVMe W10 Home",
        Precio: 280000,
        Stock: 1,
        img: "https://i.postimg.cc/Wz5fqVBR/pc-2.jpg"
    },

    {
        Nombre: "Procesador",
        Marca: "AMD",
        "Descripcion": "Ryzen 9 5950X 4.9GHz Turbo AM4 - No incluye Cooler",
        Precio: 200200,
        Stock: 1,
        img: "https://i.postimg.cc/gctDhgwP/proce.jpg"
    },

    {
        Nombre: "Procesador",
        Marca: "AMD",
        "Descripcion": "Ryzen 9 5900X 4.8GHz Turbo AM4 - No incluye Cooler",
        Precio: 180100,
        Stock: 1,
        img: "https://i.postimg.cc/qvV2cS4W/proce-2.jpg"
    },

    {
        Nombre: "Memoria Ram",
        Marca: "KingDian",
        Descripcion: "Notebook DDR4 32GB 2666MHz SODIMM",
        Precio: 18770,
        Stock: 1,
        img: "https://i.postimg.cc/hG08tsF6/ram.jpg"
    },

    {
        Nombre: "Memoria Ram",
        Marca: "GeiL",
        Descripcion: "DDR4 16GB 3000MHz Orion RGB Black",
        Precio: 34650,
        Stock: 1,
        img: "https://i.postimg.cc/hjPLzmcj/ram-2.jpg"
    },

    {
        Nombre: "Placa de Video",
        Marca: "Asus",
        Descripcion: "Radeon Rx 6900 XT 16GB GDDR6 ROG STRIX OC LC",
        Precio: 513700,
        Stock: 1,
        img: "https://i.postimg.cc/qMYjP10G/placav.jpg"
    },

    {
        Nombre: "Placa de Video",
        Marca: "XFX",
        "Descripcion": "Radeon RX 6800 XT CORE 16GB GDDR6 Speedster MERC 319",
        Precio: 260950,
        Stock: 1,
        img: "https://i.postimg.cc/RZHX4wZx/placav-2.jpg"
    },

    {
        Nombre: "Disco",
        Marca: "WD",
        Descripcion: "Disco Rigido 12TB Red Pro 7.2k RPM 256MB",
        Precio: 92850,
        Stock: 1,
        img: "https://i.postimg.cc/4N4DfLDk/disco.jpg"
    },

    {
        Nombre: "Disco",
        Marca: "WD",
        Descripcion: "Disco Rigido 12TB Gold 7.2K RPM 256MB",
        Precio: 83500,
        Stock: 1,
        img: "https://i.postimg.cc/02tLbGv6/disco-2.jpg"
    },

    {
        Nombre: "Placa Madre",
        Marca: "Asrock",
        Descripcion: "X670E Taichi Carrara AM5",
        Precio: 255150,
        Stock: 1,
        img: "https://i.postimg.cc/QMc4k12J/placam.jpg"
    },

    {
        Nombre: "Placa Madre",
        Marca: "Asrock",
        Descripcion: "X670E Steel Legend AM5",
        Precio: 178600,
        Stock: 1,
        img: "https://i.postimg.cc/DZFCCmFk/placam-2.jpg"
    },

    {
        Nombre: "Computadora",
        Marca: "Lenovo IdeaPad 514IILO5 FHD",
        Descripcion: "Core I7 1065G7 8GB SSD NVMe W10 Hombe",
        Precio: 270000,
        Stock: 1,
        img: "https://i.postimg.cc/pVCS6Qp0/pc-3.jpg"
    },

    {
        Nombre: "Computadora",
        Marca: "Asus ZenBook UM425",
        Descripcion: "Ryzen 5 5600H 8GB 512GB SSD NVMe W11 Home",
        Precio: 270000,
        Stock: 1,
        img: "https://i.postimg.cc/m2rnfc9T/pc-4.jpg"
    },

    {
        Nombre: "Procesador",
        Marca: "AMD",
        Descripcion: "Ryzen 7 5700X 4.6GHz Turbo AM4 - No incluye Cooler",
        Precio: 98800,
        Stock: 1,
        img: "https://i.postimg.cc/c4KcBfYt/proce-3.jpg"
    },

    {
        Nombre: "Procesador",
        Marca: "Intel",
        Descripcion: "Core I7 12700K 5.0GHz Turbo Socket 1700",
        Precio: 135200,
        Stock: 1,
        img: "https://i.postimg.cc/L6r3ChBC/proce-4.jpg"
    },

    {
        Nombre: "Memoria Ram",
        Marca: "GeiL",
        Descripcion: "DDR4 16GB 3000MHz Orion RGB Red",
        Precio: 34650,
        Stock: 1,
        img: "https://i.postimg.cc/2y1nTfqN/ram-3.jpg"
    },

    {
        Nombre: "Memoria Ram",
        Marca: "GeiL",
        Descripcion: "DDR4 16GB 3000MHz Super Luce RGB Black",
        Precio: 35650,
        Stock: 1,
        img: "https://i.postimg.cc/Rh2KDbf6/ram-4.jpg"
    },

    {
        Nombre: "Placa de Video",
        Marca: "Asrock",
        Descripcion: "Radeon RX 6800 XT 16GB GDDR6 Phantom Gaming D OC",
        Precio: 255950,
        Stock: 1,
        img: "https://i.postimg.cc/bvfLJdZD/placav-3.jpg"
    },

    {
        Nombre: "Placa de Video",
        Marca: "MSI",
        Descripcion: "GeForce RTX 3090 24GB GDDR6X VENTUS 3X OC",
        Precio: 410800,
        Stock: 1,
        img: "https://i.postimg.cc/vm7h6MnP/placav-4.jpg"
    },

    {
        Nombre: "Disco",
        Marca: "Seagate",
        Descripcion: " Disco Rigido 14TB SkyHawk AI ST14000VE0008",
        Precio: 71850,
        Stock: 1,
        img: "https://i.postimg.cc/GmVVjcHd/disco-3.jpg"
    },

    {
        Nombre: "Disco",
        Marca: "T-Create",
        Descripcion: "Disco Solido SSD M.2 5000MB/s NVMe PCI-E Gen4",
        Precio: 92050,
        Stock: 1,
        img: "https://i.postimg.cc/FRQ62Dy6/disco-4.jpg"
    },

    {
        Nombre: "Placa Madre",
        Marca: "Asrock",
        Descripcion: "X670E PG Lightning AM5",
        Precio: 175450,
        Stock: 1,
        img: "https://i.postimg.cc/wvVwnHTt/placam-3.jpg"
    },

    {
        Nombre: "Placa Madre",
        Marca: "Asus",
        Descripcion: "Rog Maximus XIII Extreme Glacial",
        Precio: 313700,
        Stock: 1,
        img: "https://i.postimg.cc/NFjdcV5d/placam-4.jpg"
    },

    {
        Nombre: "Computadora",
        Marca: "Asus TUF FX506L",
        Descripcion: "Core I5 10300H 8GB 512GB SSD NVMe GeForce GTX 1650 W11 Home",
        Precio: 295000,
        Stock: 1,
        img: "https://i.postimg.cc/J4d2113Z/pc-5.jpg"
    },

    {
        Nombre: "Computadora",
        Marca: "Asus Vivobook M3500",
        Descripcion: "Ryzen 5 5600H 8GB 512GB SSD NVMe W11 Home",
        Precio: 260000,
        Stock: 1,
        img: "https://i.postimg.cc/HkcPnf3K/pc-6.jpg"
    },

    {
        Nombre: "Procesador",
        Marca: "Intel",
        Descripcion: "Core I7 12700 S1700 12th Gen",
        Precio: 125000,
        Stock: 1,
        img: "https://i.postimg.cc/fRmj6Z8w/proce-5.jpg"
    },

    {
        Nombre: "Procesador",
        Marca: "Intel",
        Descripcion: "Core I7 10700KF 5.1GHz Turbo 1200 Comet Lake",
        Precio: 115500,
        Stock: 1,
        img: "https://i.postimg.cc/mr4N4qn7/proce-6.jpg"
    },

    {
        Nombre: "Memoria Ram",
        Marca: "Crucial",
        Descripcion: "DDR4 16GB 3200MHz",
        Precio: 41480,
        Stock: 1,
        img: "https://i.postimg.cc/kMHQGDZJ/ram-5.jpg"
    },

    {
        Nombre: "Memoria Ram",
        Marca: "Crucial",
        Descripcion: "DDR4 16GB 3200MHz Value",
        Precio: 43320,
        Stock: 1,
        img: "https://i.postimg.cc/Nfr1HBq1/ram-6.jpg"
    },

    {
        Nombre: "Placa de Video",
        Marca: "Zotac",
        Descripcion: "GeForce RTX 3090 24GB GDDR6X Trinity",
        Precio: 403150,
        Stock: 1,
        img: "https://i.postimg.cc/63YhY0Yn/placav-5.jpg"
    },

    {
        Nombre: "Placa de Video",
        Marca: "Zotac",
        Descripcion: "GeForce RTX 3080 Ti 12GB GDDR6X Trinity",
        Precio: 358.500,
        Stock: 1,
        img: "https://i.postimg.cc/KjjDVMHV/placav-6.jpg"
    },

    {
        Nombre: "Disco",
        Marca: "Cardea Zero",
        Descripcion: "Disco Solido SSD M.2 Z440 5000MB/s PCIe Gen4",
        Precio: 91650,
        Stock: 1,
        img: "https://i.postimg.cc/2ykK5yXF/disco-5.jpg"
    },

    {
        Nombre: "Disco",
        Marca: "Swordfish",
        Descripcion: "Disco Solido SSD M.2 1800MB/s NVMe PCI-e x4",
        Precio: 45800,
        Stock: 1,
        img: "https://i.postimg.cc/g0h5SfZR/disco-6.jpg"
    },

    {
        Nombre: "Placa Madre",
        Marca: "Asus",
        Descripcion: "Rog Maximus XIII Extreme Z590 Eatx",
        Precio: 168400,
        Stock: 1,
        img: "https://i.postimg.cc/j23ZdXft/placam-5.jpg"
    },

    {
        Nombre: "Placa Madre",
        Marca: "MSI",
        Descripcion: "Meg Z590 ACE Socket 1200",
        Precio: 106750,
        Stock: 1,
        img: "https://i.postimg.cc/nV3dkHPg/placam-6.jpg"
    },

    {
        Nombre: "Computadora",
        Marca: "Dell  Inspiron 3511 FHD",
        Descripcion: "Core I7 1165G7 8GB 256Gb SSD NVMe W11 Home",
        Precio: 250000,
        Stock: 1,
        img: "https://i.postimg.cc/2Ss9Z2K5/pc-7.jpg"
    },

    {
        Nombre: "Procesador",
        Marca: "Intel",
        Descripcion: "Core I7 12700F 4.9GHz Turbo Socket 1700",
        Precio: 114500,
        Stock: 1,
        img: "https://i.postimg.cc/RFscc0ZT/proce-7.jpg"
    },

    {
        Nombre: "Memoria Ram",
        Marca: "PNY",
        Descripcion: "DDR4 16GB (2x8GB) 3200MHz XLR8 Epic X RGB",
        Precio: 39290,
        Stock: 1,
        img: "https://i.postimg.cc/L8tLxDs5/ram-7.jpg"
    },

    {
        Nombre: "Placa de Video",
        Marca: "GALAX",
        Descripcion: "GeForce RTX 3080 Ti 12GB GDDR6X SG 1-Click OC",
        Precio: 354200,
        Stock: 1,
        img: "https://i.postimg.cc/fyPfhb4b/placav-7.jpg"
    },

    {
        Nombre: "Disco",
        Marca: "WD_Black",
        "Descripcion": "Solido SSD M.2 SN770 5150MB/s NVMe PCI-E x4 Gen 4",
        Precio: 42380,
        Stock: 1,
        img: "https://i.postimg.cc/vBLKMfXZ/disco-7.jpg"
    },

    {
        Nombre: "Placa Madre",
        Marca: "Asus",
        Descripcion: "ROG STRIX B450-F GAMING II AM4",
        Precio: 59850,
        Stock: 1,
        img: "https://i.postimg.cc/5NjsKhc0/placam-7.jpg"
    }

];

export default stock;