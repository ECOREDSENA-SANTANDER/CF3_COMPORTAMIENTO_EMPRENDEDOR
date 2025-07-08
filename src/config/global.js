export default {
  global: {
    Name: 'Entendiendo la empresa',
    Description:
      'Para incursionar en la estructuración y proyección de una empresa, se abordan aspectos clave que permiten definir su funcionamiento y sostenibilidad. El proceso inicia con el plan de negocios, una herramienta fundamental para establecer la viabilidad y dirección del emprendimiento, también se exploran los elementos organizacionales, relacionados con las características empresariales, áreas funcionales, estructura y tipología, posteriormente, se desarrollan los elementos estratégicos, entre ellos la misión, visión, filosofía, objetivos y estrategias. Finalmente, se integran los elementos del <em>marketing</em>, indispensables para posicionar productos o servicios en el mercado y asegurar su crecimiento. ',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1'],
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
        titulo: 'Plan de negocios',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo:
              'El valor estratégico del plan de negocios en el entorno actual',
            hash: 't_1_1',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Concepto y evolución de la empresa en el entorno actual',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Características de una empresa',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Tipología de la organización',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Áreas funcionales',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Estructura organizacional',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Elementos estratégicos de la empresa',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Misión organizacional',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Visión organizacional',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: ' Filosofía organizacional',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Objetivos organizacionales',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Estrategias organizacionales',
            hash: 't_3_5',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Elementos del <em>marketing</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Plan de <em>marketing</em>',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Etapas del plan de <em>marketing</em>',
            hash: 't_4_2',
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
        download: 'downloads/dist.pdf',
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
      tema: 'Concepto y evolución de la empresa en el entorno actual.',
      referencia:
        'Montalvo Ballesta, M., & Llorente Doria, A. P. (2020). Creación de una empresa dedicada a la asesoría financiera en el municipio de Santa Cruz de Lorica, Córdoba (Trabajo de grado, Universidad de Córdoba, sede Lorica). Repositorio Institucional Universidad de Córdoba. ',
      tipo: 'Documento',
      link:
        'https://repositorio.unicordoba.edu.co/server/api/core/bitstreams/b076d03a-59f5-430a-aaf5-f3199785c336/content ',
    },
    {
      tema: 'Plan de negocios',
      referencia:
        'Servicio Nacional de Aprendizaje – SENA. (2021). Plan de negocios -Ecosistema de Recursos Educativos Digitales SENA. ',
      tipo: 'Infografía',
      descarga: '/downloads/Plan_de_negocios.pdf',
    },
    {
      tema: 'Estrategias organizacionales',
      referencia:
        'Servicio Nacional de Aprendizaje – SENA. (2021). Estrategias organizacionales. Ecosistema de Recursos Educativos Digitales SENA. ',
      tipo: 'Infografía',
      descarga: '/downloads/Estrategias_organizacionales.pdf',
    },
    {
      tema: 'Plan de <em>marketing</em>',
      referencia:
        'Servicio Nacional de Aprendizaje – SENA. (2021). Plan de <em>marketing</em>. Ecosistema de Recursos Educativos Digitales SENA. ',
      tipo: 'Infografía',
      descarga: '/downloads/Plan_de_marketing.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Áreas funcionales',
      significado:
        'Divisiones dentro de una empresa encargadas de tareas específicas como finanzas, <em>marketing</em> o producción. ',
    },
    {
      termino: 'Cliente objetivo',
      significado:
        'Público específico al que se dirige una empresa con su producto o servicio.',
    },
    {
      termino: 'Competitividad',
      significado:
        'Capacidad de una empresa para sobresalir frente a otras en el mercado.',
    },
    {
      termino: 'Estrategia',
      significado:
        'Plan de acción que orienta las decisiones de la empresa para alcanzar objetivos. ',
    },
    {
      termino: 'Estructura organizacional',
      significado:
        'Forma en que se distribuyen funciones, jerarquías y responsabilidades en una empresa. ',
    },
    {
      termino: 'Filosofía organizacional',
      significado:
        'Conjunto de valores, principios y creencias que guían el actuar de la empresa. ',
    },
    {
      termino: 'Innovación',
      significado:
        'Proceso de generar ideas nuevas para mejorar productos, servicios o procesos. ',
    },
    {
      termino: '<em>Marketing</em>',
      significado:
        'Conjunto de acciones para posicionar un producto o servicio y satisfacer necesidades del cliente. ',
    },
    {
      termino: 'Misión',
      significado:
        'Propósito fundamental de una empresa, describe qué hace, para quién y cómo lo hace. ',
    },
    {
      termino: 'Objetivos organizacionales',
      significado:
        'Metas concretas que una empresa desea alcanzar en un período determinado.',
    },
    {
      termino: 'Plan de negocios',
      significado:
        'Documento que define y proyecta una idea empresarial para evaluar su viabilidad. ',
    },
    {
      termino: 'Posicionamiento',
      significado:
        'Percepción que tiene el consumidor de una marca o producto frente a la competencia. ',
    },
    {
      termino: 'Propuesta de valor',
      significado:
        'Beneficio único que una empresa ofrece a sus clientes para diferenciarse. ',
    },
    {
      termino: 'Tipología organizacional',
      significado:
        'Modelo estructural que adopta una empresa para operar, como lineal o matricial. ',
    },
    {
      termino: 'Visión',
      significado:
        'Imagen aspiracional de lo que la empresa quiere ser en el futuro. ',
    },
  ],
  referencias: [
    {
      referencia:
        'Chiavenato, I., & Sapiro, A. (2017). Planeación estratégica: fundamentos y aplicaciones. McGraw-Hill. ',
    },
    {
      referencia:
        'Cravens, D. W., & Piercy, N. F. (2017). Marketing estratégico. McGraw-Hill Interamericana. ',
    },
    {
      referencia:
        'Fischer, L. M., & Espejo, J. A. (2008). Casos de mercadotecnia. McGraw-Hill Interamericana. ',
    },
    {
      referencia:
        'Rosillo, J. R., Cruz, J. L., & Villarreal, J. A. (2002). Finanzas corporativas: Valoración, política de financiamiento y riesgo. Thomson. ',
    },
    {
      referencia:
        'Sainz de Vicuña Ancín, J. (2012). El plan de marketing en la práctica. ESIC Editorial. ',
    },
    {
      referencia:
        'Strauss, J., & Frost, R. (2012). E-marketing (6.ª ed.). Pearson. ',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Vilma Lucía Perilla Méndez',
          cargo: 'Experta y Diseñadora Instruccional',
          centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
        },
        {
          nombre: 'Laura Paola Gelvez Manosalva',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Jenny Rocío Reyes Acevedo',
          cargo: 'Diseñadora de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Andrea Paola Botello De la Rosa',
          cargo: 'Desarrolladora <i>full stack</i>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: ' ',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: ' ',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: ' ',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
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
}
