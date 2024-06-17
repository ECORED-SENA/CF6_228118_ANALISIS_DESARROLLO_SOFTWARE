export default {
  global: {
    componenteFormativo:
      'Especificaciones y gestión de proyectos de <i>software</i>',
    descripcionCurso:
      'Este componente se enfoca en la ingeniería de requisitos, la cual es esencial para definir las necesidades de <i>software</i>. Los aprendices aprenderán a formular propuestas técnicas para servicios de <i>software</i>, tomando en cuenta elementos clave como los conceptos, la estructura, los términos, la presentación, las normativas, los costos y la validación, todos ellos cruciales para las empresas y organizaciones.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Teoría de sistemas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Diagnósticos',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Soluciones',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Licencias de <i>software</i>',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Normativa',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Tipos de licencia',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Derechos de autor',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Fichas técnicas',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Generalidades de la propuesta técnica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Costos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'La propuesta técnica',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Validación de la propuesta técnica',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Normatividad',
            hash: 't_6_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Teoría de sistemas',
      referencia:
        'ONGAWA ONGD. (2012, septiembre 11). Tecnología, innovación, ¿desarrollo humano? YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=OrLM7awX5Ls',
    },
    {
      tema: 'Teoría de sistemas',
      referencia:
        'Pacheco, L. [ Administracion 101]. (2015, marzo 2). Gestión Tecnológica: Conceptos y Dimensiones. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=iiT9giJlhTU',
    },
    {
      tema: 'Licencias de <i>software</i>',
      referencia: 'Ármate Abogados. (2020). Licencia de <i>Software</i>.',
      tipo: 'Artículo',
      link: 'https://armate.cl/web/2020/11/03/licencia-de-software/',
    },
    {
      tema: 'Licencias de <i>software</i>',
      referencia:
        'Evaluando <i>Software</i>. (2021). Las licencias de <i>software</i>.',
      tipo: 'Artículo',
      link: 'https://www.evaluandosoftware.com/las-licencias-software/',
    },
    {
      tema: 'Licencias de <i>software</i>',
      referencia:
        'Bazán, V. (2020). ¿Conoces los tipos de licencia de <i>software</i>? Aquí te desglosamos el tema. <i>OK hosting</i>.',
      tipo: 'Artículo',
      link: 'https://okhosting.com/blog/tipos-de-licencia-de-software',
    },
    {
      tema: 'Derechos de autor',
      referencia:
        'Firma Legal Colombia. (2021, mayo 20). DERECHOS DE AUTOR EN COLOMBIA. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=JAfXwjut_ig',
    },
    {
      tema: 'Derechos de autor',
      referencia:
        'Leancase: Asesoría para emprendedores. (2020, junio 25). Derechos de autor sobre el <i>Software</i>. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=0pUHYYFQIPI',
    },
    {
      tema: 'Normatividad',
      referencia:
        'Starfish Host. (2020). Cómo hacer una propuesta de <i>Software</i> - ¡Presenta una propuesta de <i>software</i> exitosa!. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=6zI4ZcRS8yg',
    },
    {
      tema: 'Normatividad',
      referencia:
        'Ministerio de Comercio, Industria y Turismo. (2013). Contratación Pública.',
      tipo: 'Artículo',
      link: 'http://www.aplicaciones-mcit.gov.co/cincopasos/c2.html',
    },
  ],
  glosario: [
    {
      termino: 'GPL (<i>General Public License</i>)',
      significado:
        'licencia que regula los derechos de autor de los programas de <i>software</i> libre.',
    },
    {
      termino: 'Innovación',
      significado:
        'dinámica económica y social para la transformación del conocimiento científico y tecnológico.',
    },
    {
      termino: '<i>Open source</i>',
      significado:
        'término de la informática que se refiere a <i>software</i> con código fuente accesible para todos.',
    },
    {
      termino: '<i>Software</i>',
      significado:
        'conjunto de programas y rutinas que permiten a la computadora realizar determinadas tareas.',
    },
    {
      termino: 'Búsqueda',
      significado:
        'conjunto de procedimientos y operaciones que un usuario realiza para obtener la información necesaria.',
    },
    {
      termino: 'Búsqueda automatizada interactiva',
      significado:
        'técnica de búsqueda que simula un diálogo entre usuario y computadora mediante preguntas y respuestas alternas.',
    },
    {
      termino: 'Gestión de la Información (GI)',
      significado:
        'procesos que controlan el ciclo de vida de la información, desde su creación hasta su disposición final.',
    },
    {
      termino: 'Herramienta digital',
      significado:
        'paquetes informáticos disponibles en computadoras y dispositivos electrónicos como celulares y tabletas.',
    },
    {
      termino: '<i>Hardware</i>',
      significado:
        'elementos físicos que constituyen una computadora o un sistema informático.',
    },
    {
      termino: 'Información',
      significado:
        'datos procesados y ordenados que aportan conocimientos sobre diversos temas.',
    },
    {
      termino: 'Metadatos para la gestión de documentos',
      significado:
        'información que facilita la creación, gestión y uso de documentos a lo largo del tiempo y entre dominios.',
    },
    {
      termino: 'Seguridad de la información',
      significado:
        'medidas preventivas y reactivas para proteger la información y mantener su confidencialidad, disponibilidad e integridad.',
    },
  ],
  referencias: [
    {
      referencia:
        'American Psychological Association (2020). Normas APA: Cómo presentar trabajos escritos. NORMAS APA. ',
      link: 'https://normasapa.in/',
    },
    {
      referencia:
        'Arnold, M. (1989). Teoría de Sistemas. Nuevos paradigmas: Enfoque de Niklas Luhmann. Revista Paraguaya de Sociología, 26(75), p. 51-72.',
      link: '',
    },
    {
      referencia:
        'Castro, E. (17 de julio de 2020). ¿Cómo presentar una propuesta de proyecto de software? Anton.agency. ',
      link:
        'https://anton.agency/como-presentar-una-propuesta-proyecto-software/',
    },
    {
      referencia:
        'Colombia Compra Eficiente. (2020, 20 noviembre). Acuerdos Marco. DNP. ',
      link:
        'https://colombiacompra.gov.co/ciudadanos/preguntas-frecuentes/acuerdos-marco',
    },
    {
      referencia:
        'Coque, J. (2002). La innovación tecnológica en las sociedades cooperativas y otras organizaciones de participación. Revista de Estudios Cooperativos REVESCO, 78, p. 7-25. ',
      link: 'https://dialnet.unirioja.es/descarga/articulo/1114242.pdf',
    },
    {
      referencia: 'DeConceptos (2021). Conceptos. DECONCEPTOS. ',
      link: 'https://deconceptos.com/?s=contrato',
    },
    {
      referencia:
        'Free Software Foundation Europe. (2005). Campaña “Nosotros Hablamos de Software Libre”. Espacio Linux. ',
      link: '',
    },
    {
      referencia:
        'Gaynor, G. (1999). Manual de gestión en tecnología: Una estrategia para la competitividad de la empresa. McGraw-Hill. ',
      link: '',
    },
    {
      referencia:
        'Hammond, D. (2003). The Science of Synthesis: Exploring the Social Implications of General Systems Theory. University Press of Colorado. ',
      link:
        'https://books.google.es/books?hl=es&lr=&id=TBvjCwAAQBAJ&oi=fnd&pg=PA103&dq=+General+Systems+Theory+bertalanffy&ots=Ihf9vKSIAi&sig=lmXibhgxqJHaZ1H1zHsueBiPnaw#v=onepage&q=General%20Systems%20Theory%20bertalanffy&f=false',
    },
    {
      referencia:
        'Johannsen, O. (1975). Introducción a la Teoría General de Sistemas. Universidad de Chile. ',
      link: '',
    },
    {
      referencia:
        'Lozano, A. (2019). Teoría de los presupuestos. Gestiopolis. ',
      link: 'https://www.gestiopolis.com/teoria-de-los-presupuestos',
    },
    {
      referencia:
        'Malaver, F., Vargas, M. y Cerda, A. (2003). La innovación tecnológica en la industria colombiana: un estudio en dos cadenas industriales. Pontificia Universidad Javeriana. ',
      link: '',
    },
    {
      referencia:
        'Ministerio de Comercio, Industria y Turismo (2013). Contratación Pública. APLICACIONES-MCIT. ',
      link: 'http://www.aplicaciones-mcit.gov.co/cincopasos/c2.html',
    },
    {
      referencia:
        'Oberto, A. (2007). Conocimiento tecnológico e innovación en el sector de termoplásticos del estado Zulia. Venezuela. Universidad del Zulia. ',
      link: '',
    },
    {
      referencia:
        'Pavón, J. y Goodman, R. (1976). Proyecto MODELTEC. La planificación del desarrollo tecnológico en el caso español. Centro para el Desarrollo Tecnológico Industrial. ',
      link: '',
    },
    {
      referencia:
        'Pérez, M. y Fernández, L. (2003). Técnica, Ciencia, Tecnología e Innovación. International Thomson Editores. ',
      link: '',
    },
    {
      referencia:
        'Sommerville, I. (2011). Ingeniería de Software. Pearson Educación. ',
      link: '',
    },
    {
      referencia:
        'Wiener, N. (1979). Cibernética y Sociedad. Editorial Sudamericana. ',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Diego Villalobos Barreto',
          cargo: 'Experto Temático',
          centro:
            'Centro de Teleinformática y Producción Industrial - Regional Cauca',
        },
        {
          nombre: 'Zulema Yidney León Escobar',
          cargo: 'Experto Temático ',
          centro:
            'Centro de Teleinformática y Producción Industrial - Regional Cauca',
        },
        {
          nombre: 'Paola Alexandra Moya Peralta',
          cargo: 'Evaluadora Instruccional',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Juan Daniel Polanco Muñoz',
          cargo: 'Diseñador de Contenidos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Jhon Jairo Urueta Alvarez',
          cargo: 'Desarrollador Fullstack',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Laura Gisselle Murcia Pardo',
          cargo: 'Animador y Producción audiovisual',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Edgar Mauricio Cortés García',
          cargo: 'Actividad Didáctica',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        //{
        //  nombre: 'Jaime Hernán Tejada Llano',
        //  cargo: 'Validador de Recursos Educativos Digitales',
        //  centro: 'Centro de Servicios de Salud - Regional Antioquia',
        //},
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
