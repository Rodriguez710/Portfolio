export const studies = [
  {
    title: "Ingeniero Informático",
    corporation: "Fossil Natura S.L.U (Fortuna-Murcia)",
    date: "05/2025 – Actualidad",
    type: "work",
  },
  {
    title: "Grado Superior Desarrollo de Aplicaciones Web",
    corporation: "IES Los Albares (Cieza-Murcia)",
    date: "09/2024 – Actualidad",
    type: "study",
  },
  {
    title: "Programador Web",
    corporation: "Solución Base Software S.L",
    date: "09/2024 – 12/2024",
    type: "work",
  },
  {
    title: "Técnico Informático",
    corporation: "Hida Alimentación S.A (Mula-Murcia)",
    date: "08/2024 – 09/2024",
    type: "work",
  },  
  {
    title: "FCT Administrador de Bases de Datos SQL",
    corporation: "Neoris (Murcia-Murcia)",
    date: "03/2024 – 07/2024",
    type: "work",
  },  
  {
    title: "Técnico Superior Informático.",
    corporation: "Algoritmos, Procesos y Diseños S.A (El Palmar-Murcia)",
    date: "07/2023 – 09/2023",
    type: "work",
  },
  {
    title: "Grado Superior Desarrollo de Aplicaciones Multiplataforma",
    corporation: "IES Vicente Medina (Archena-Murcia)",
    date: "09/2022 – 07/2024",
    type: "study",
  },
  {
    title: "FCT Técnico Microinformático",
    corporation: "Vidal Golosinas S.A (Molina de Segura-Murcia)",
    date: "03/2022 – 07/2022",
    type: "work",
  },
  {
    title: "Grado Medio Sistemas Microinformáticos y Redes",
    corporation: "IES Francisco de Goya (Molina de Segura-Murcia)",
    date: "09/2020 – 07/2022",
    type: "study",
  },
];

export const IconKeys = {
  html: "html",
  css: "css",
  javaScript: "javascript",
  astro: "astro",
  git: "git",
  github: "github",
  python: "python",
  vmware: "vmware",
  qlik: "qlik",
  php: "php",
  linux: "linux",
  windows: "windows",
  lua: "lua",
  docker: "docker",
  odoo: "odoo",
  msql: "msql",
  mysql: "mysql",
  c: "c",
  excel: "excel",
  sage: "sage"
  // here add more icon keys
};

export const skills = [
  {
    title: "Html",
    icon: IconKeys.html,
  },
  {
    title: "Css",
    icon: IconKeys.css,
  },
  {
    title: "JavaScript",
    icon: IconKeys.javaScript,
  },
  {
    title: "Astro",
    icon: IconKeys.astro,
  },
  {
    title: "Git",
    icon: IconKeys.git,
  },

  {
    title: "Github",
    icon: IconKeys.github,
  },
  {
    title: "Python",
    icon: IconKeys.python,
  },
  {
    title: "Docker",
    icon: IconKeys.docker,
  },
  {
    title: "Odoo",
    icon: IconKeys.odoo,
  },
  {
    title: "Php",
    icon: IconKeys.php,
  },
  {
    title: "Qlik",
    icon: IconKeys.qlik,
  },
  {
    title: "MySQL",
    icon: IconKeys.mysql,
  },
  {
    title: "Microsoft SQL Server",
    icon: IconKeys.msql,
  },
  {
    title: "Lua",
    icon: IconKeys.lua,
  },
  {
    title: "Vmware",
    icon: IconKeys.vmware,
  },
  {
    title: "Windows",
    icon: IconKeys.windows,
  },
  {
    title: "Linux",
    icon: IconKeys.linux,
  },
  {
    title: "C#",
    icon: IconKeys.c,
  },
  {
    title: "Excel",
    icon: IconKeys.excel
  },
  {
    title: "Sage",
    icon: IconKeys.sage,
  },
];

export const projects = [
  {
    img: "../../../img/comedorconecta.webp",
    title: "Comedor Conecta",
    link: "https://github.com/Rodriguez710/Comedor-Conecta",
    description: `Desarrollo de aplicación de escritorio para comedores escolares:
                  Registro de calidad de comida por estudiante.
                  Almacenamiento de datos en MySQL.
                  Envío automático de reportes a padres de familia mediante correo usando API de Google. `,
    technologies: [
      {
        icon: IconKeys.python,
      },
      {
        icon: IconKeys.mysql,
      },
    ],
  },
  {
    img: "../../../img/dts.webp",
    title: "Compras Delegadas DTS",
    link: "https://github.com/Rodriguez710/Compras-delegadas-DTS-PRO-",
    description: `Desarrollo de una DTS en Microsoft SQL Server con C# para procesar datos de Excel y filtrarlos automáticamente en una tabla SQL.`,
    technologies: [
      {
        icon: IconKeys.msql,
      },
      {
        icon: IconKeys.excel,
      },
      {
        icon: IconKeys.c,
      },
      {
        icon: IconKeys.windows,
      }
    ],
  },
  {
    img: "../../../img/instintorp.webp",
    title: "InstintoRP",
    link: "https://github.com/Rodriguez710/InstintoRP",
    description: `Servidor de GTA 5 en Fivem alojado en ZapHosting. Implementación de scripts innovadores y optimización del entorno de rol.`,
    technologies: [
      {
        icon: IconKeys.html,
      },
      {
        icon: IconKeys.css,
      },
      {
        icon: IconKeys.javaScript,
      },
      {
        icon: IconKeys.lua,
      },
      {
        icon: IconKeys.mysql,
      },
    ],
  },
  {
    img: "../../../img/ciezaactiva.webp",
    title: "CiezaActiva",
    link: "https://github.com/Rodriguez710/CiezaActiva",
    description: `TFG desarrollado con PHP, HTML, CSS y JavaScript que se basa en una web de reservas deportivas con usuarios, carrito de la compra y proceso de pago.`,
    technologies: [
      {
        icon: IconKeys.html,
      },
      {
        icon: IconKeys.css,
      },
      {
        icon: IconKeys.javaScript,
      },
      {
        icon: IconKeys.php,
      },
      {
        icon: IconKeys.mysql,
      },
    ],
  },
    ]
