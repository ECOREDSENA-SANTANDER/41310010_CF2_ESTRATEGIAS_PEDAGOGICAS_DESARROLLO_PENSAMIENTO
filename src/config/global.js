export default {
  global: {
    componenteFormativo: 'Técnicas y estrategias de formación',
    descripcionCurso:
      'Las técnicas de formación son fundamentales en la educación, utilizando estrategias específicas para guiar el aprendizaje. Las técnicas de formación se enfocan en métodos concretos, mientras que las estrategias educativas combinan diversas técnicas para lograr un aprendizaje eficaz y adaptado a los estudiantes. Ambos conceptos, contribuyen a desarrollar habilidades, conocimientos y actitudes, fomentando una educación integral y efectiva.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
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
        titulo: 'Técnicas de formación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Tipos de técnicas de formación',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Implementación de las técnicas de formación',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Estrategias educativas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Las estrategias didacticas',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Estrategias pedagógicas para la enseñanza-aprendizaje',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Técnicas pedagógicas para la formación',
            hash: 't_2_3',
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
      tema: '1. Técnicas de formación',
      referencia:
        'Ministerio de Educación Nacional. (2007). Aprendizajes para mejorar: Guía para la gestión de buenas prácticas (Guía 28).',
      tipo: 'Guía del ministerio de educación',
      link:
        'http://www.mineducacion.gov.co/1621/articles-124660_archivo_pdf.pdf',
    },
    {
      tema: '1. Técnicas de formación',
      referencia:
        'Ministerio de Educación Nacional. (s.f.). Normograma: Ley 115 de 1994, Ley 1064 de 2006, Ley 1295 de 2009, Ley 1324 de 2009, Decreto 1860 de 1994 y Decreto 1075 de 2015.',
      tipo: 'Leyes y decretos',
      link: 'https://www.mineducacion.gov.co/portal/Normatividad/',
    },
    {
      tema: '2. Estrategias educativas',
      referencia:
        'Ministerio de Tecnologías de la Información y las Comunicaciones (MINTIC). (s.f.). Tecnologías de la información y las comunicaciones (TIC).',
      tipo: 'Pagina Ministerio',
      link:
        'https://mintic.gov.co/portal/inicio/Glosario/T/5755:Tecnologias-de-la-Informacion-y-las-Comunicaciones-TIC#:~:text=Las%20Tecnolog%C3%ADas%20de%20la%20Informaci%C3%B3n,%2C%20video%20e%20im%C3%A1genes%20(Art.',
    },
  ],
  glosario: [
    {
      termino: 'Estrategias didácticas',
      significado:
        'Conjunto de procedimientos y métodos organizados que guían el proceso de enseñanza-aprendizaje, diseñados para alcanzar objetivos educativos específicos.',
    },
    {
      termino: 'Métodos',
      significado:
        'Enfoques o caminos estructurados para guiar el aprendizaje hacia la consecución de un objetivo particular. Ejemplos incluyen métodos inductivos, deductivos y basados en problemas.',
    },
    {
      termino: 'Procedimientos',
      significado:
        'Secuencias lógicas de acciones que se implementan para alcanzar un fin educativo específico. Pueden ser algorítmicos (predeterminados) o heurísticos (flexibles).',
    },
    {
      termino: 'Técnicas pedagógicas',
      significado:
        'Herramientas y métodos específicos que los docentes emplean para facilitar el aprendizaje. Estas técnicas son aplicadas en el aula para organizar y guiar la enseñanza.',
    },
    {
      termino: 'Autoevaluación',
      significado:
        'Proceso en el que los estudiantes reflexionan sobre su propio aprendizaje y rendimiento, identificando fortalezas y áreas de mejora.',
    },
    {
      termino: 'Trabajo en equipo',
      significado:
        'Colaboración entre estudiantes para alcanzar un objetivo común, lo que fomenta habilidades sociales, de comunicación y resolución de problemas.',
    },
    {
      termino: 'Aprendizaje basado en problemas (ABP)',
      significado:
        'Enfoque educativo en el que los estudiantes adquieren conocimientos y habilidades resolviendo problemas complejos que se asemejan a situaciones de la vida real.',
    },
    {
      termino: 'Simulación',
      significado:
        'Técnica pedagógica que recrea escenarios o situaciones reales en un entorno controlado, permitiendo a los estudiantes aprender a través de la práctica y la experimentación.',
    },
    {
      termino: 'Estudio de casos',
      significado:
        'Método de enseñanza que utiliza situaciones reales o simuladas para que los estudiantes analicen, discutan y resuelvan problemas, promoviendo un aprendizaje profundo y contextualizado.',
    },
    {
      termino: 'Juego de roles',
      significado:
        'Técnica en la que los estudiantes asumen roles específicos para explorar diferentes perspectivas y soluciones a problemas, desarrollando habilidades como la empatía y la resolución de conflictos.',
    },
    {
      termino: ' Lluvia de ideas <em>(brainstorming)</em>',
      significado:
        'Técnica creativa que consiste en generar un gran número de ideas en un grupo, sin críticas, para fomentar la creatividad y encontrar soluciones innovadoras.',
    },
    {
      termino: 'Transferencia del conocimiento',
      significado:
        'Capacidad de aplicar conocimientos adquiridos en un contexto a situaciones nuevas o diferentes, un aspecto clave del aprendizaje significativo.',
    },
    {
      termino: 'Pensamiento crítico',
      significado:
        'Habilidad para analizar, evaluar y sintetizar información de manera reflexiva y lógica, esencial para el aprendizaje profundo y la resolución de problemas.',
    },
    {
      termino: 'Reflexión',
      significado:
        'Proceso de análisis y evaluación que los estudiantes realizan sobre su propio aprendizaje, permitiéndoles mejorar su comprensión y aplicación del conocimiento.',
    },
    {
      termino: 'Innovación educativa',
      significado:
        'Introducción de nuevas ideas, métodos o herramientas en la enseñanza con el objetivo de mejorar el aprendizaje y adaptarse a las necesidades cambiantes de los estudiantes.',
    },
  ],
  referencias: [
    {
      referencia: '',
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
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Regional Santander - Centro Agroturístico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Lilian Clarena Franco López',
          cargo: 'Experta temática',
          centro: 'Centro Agroindustrial - Regional Quindío',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de Contenidos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Andrea Paola Botello De la rosa',
          cargo: 'Desarrollador Fullstack',
          centro: 'Regional Santander - Centro Agroturístico',
        },
        {
          nombre: 'Nombre',
          cargo: 'Animador y Producción audiovisual',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Nombre',
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
        {
          nombre: 'Jaime Hernan Tejada',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano',
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
