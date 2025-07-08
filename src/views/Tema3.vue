<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Elementos estratégicos de la empresa 

    .row.justify-content-center.mb-4
      .col-lg-4.mb-3.mb-lg-0(data-aos="fade-right")
        img(src='@/assets/curso/temas/t3/1.png', alt='')
      .col-lg-8(data-aos="fade-left")
        p Comprender el pensamiento estratégico es fundamental para quienes lideran y desarrollan organizaciones en contextos dinámicos y altamente competitivos. Se trata de una capacidad humana que permite proyectar a la empresa hacia el futuro, a partir de la interacción entre sus condiciones actuales, recursos disponibles y el análisis del entorno. Este tipo de pensamiento no se limita a resolver problemas del presente, sino que se enfoca en diseñar alternativas viables que posibiliten construir el futuro deseado, entendiendo que este no es un destino fijo, sino una realidad que se moldea, a través de decisiones estratégicas.
        .tarjeta.bg3.p-4
          p.mb-0 Aunque el pensamiento estratégico surge desde un individuo, generalmente el líder o emprendedor, responde a los intereses colectivos de la organización. Implica tener una visión de largo plazo, anticiparse a los cambios, identificar oportunidades, entender el comportamiento del mercado y adaptar continuamente el modelo de negocio. Pensar estratégicamente es, en esencia, actuar con intención, creatividad y enfoque en los resultados sostenibles.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10(data-aos="fade-right")
        .tarjeta.bg4.p-4
          p.mb-0 Toda organización nace a partir de un sueño, una visión o una propuesta de valor concebida por su fundador para satisfacer necesidades específicas del mercado. Esta intención estratégica es lo que moviliza a la empresa, da sentido a sus acciones y permite que sus miembros crean en el producto o servicio que ofrecen. Como afirman Chiavenato y Sapiro (2017), esta intención estratégica es la base que permite a la organización desarrollar confianza, identidad y diferenciación frente a la competencia.
      .col-lg-2.d-none.d-lg-block(data-aos="fade-left")
        img.px-lg-4(src='@/assets/curso/temas/t3/2.svg', alt='')

    .bloque-texto-g.bloque-texto-g--inverso.t3-list.color-secundario.p-3.p-sm-4.p-md-5.mb-4(data-aos="fade-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/t3/3.jpg')})`}")
      .bloque-texto-g__texto.p-4
        p Para traducir esa intención en acciones concretas, las empresas cuentan con herramientas de planeación estratégica que orientan el camino hacia el logro de sus objetivos. Estas herramientas permiten definir el propósito organizacional, construir una visión compartida, establecer metas claras y formular estrategias que alineen los esfuerzos colectivos. Entre las principales herramientas se destacan: #[br]
        .row.justify-content-center.mb-0
          .col-lg-6
            ul.lista-ul--color.color-2.fa-lista.mb-0
              li
                i.fas.fa-circle-check
                span.mb-0 Misión organizacional
              li
                i.fas.fa-circle-check
                span.mb-0 Visión organizacional
              li
                i.fas.fa-circle-check
                span.mb-0 Filosofía organizacional
          .col-lg-6
            ul.lista-ul--color.color-2.fa-lista.mb-0
              li
                i.fas.fa-circle-check
                span.mb-0 Objetivos organizacionales
              li
                i.fas.fa-circle-check
                span.mb-0 Estrategias organizacionales
    
    p Estas herramientas no solo permiten estructurar la identidad de la empresa, sino que también actúan como guías prácticas para la toma de decisiones, el diseño de planes operativos y la evaluación del desempeño. A continuación, analizaremos cada una de ellas en detalle.


    Separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.1 Misión organizacional

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4.col-md-6.col-9.mb-3.mb-lg-0(data-aos="fade-right")
        img.px-lg-3(src='@/assets/curso/temas/t3/4.png', alt='')
      .col-lg-8(data-aos="fade-left")
        .tarjeta.bg4.p-4.p-lg-5
          p.mb-0 La misión organizacional define la razón de ser de una empresa; es decir, explica de forma clara y concisa por qué existe la organización, a quién sirve, qué hace y cómo lo hace. Representa sus aspiraciones fundamentales y el propósito que guía su actividad de manera permanente o semipermanente. Le da sentido a todas las acciones estratégicas, operativas y culturales que emprende, orientando tanto a sus miembros internos como a sus públicos externos.
          p Una misión bien formulada permite distinguir a la organización de otras del mismo sector, señalando con precisión sus elementos diferenciadores: su propuesta de valor, su enfoque, sus prioridades y sus principios rectores. Además, sirve como marco de referencia para la evaluación de decisiones, planes y resultados, garantizando que todo lo que se haga esté alineado con su propósito esencial.
          p.mb-0 Desde una perspectiva estratégica, la misión se articula con los objetivos organizacionales, las políticas institucionales, la planeación táctica y los planes de acción tanto a corto como a largo plazo. Actúa como un eje integrador que conecta la visión de futuro con las operaciones del presente.

    .subt.mb-4(data-aos="fade")
      img(src="@/assets/curso/temas/t1/subt.svg")
      h3.ps-3.pe-4.mb-0 Una misión efectiva suele incluir los siguientes componentes clave

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7(data-aos="fade-right")
        ul.lista-ul--color.lista-ul--separador.color-2.fa-lista
          li
            i.fas.fa-circle-check
            span.mb-0 #[b Clientes o público objetivo:] ¿A quién va dirigida la oferta de valor?
          li
            i.fas.fa-circle-check
            span.mb-0 #[b Producto o servicio:] ¿Qué se ofrece y qué necesidad satisface?
          li
            i.fas.fa-circle-check
            span.mb-0 #[b Mercado:] ¿En qué sectores o contextos opera la organización?
          li
            i.fas.fa-circle-check
            span.mb-0 #[b Tecnología:] ¿Qué recursos o capacidades técnicas se utilizan?
          li
            i.fas.fa-circle-check
            span.mb-0 #[b Crecimiento proyectado:] ¿Qué nivel de expansión o sostenibilidad se espera?
          li
            i.fas.fa-circle-check
            span.mb-0 #[b Filosofía institucional:] ¿Qué valores y principios inspiran la cultura empresarial?
          li
            i.fas.fa-circle-check
            span.mb-0 #[b Imagen pública:] ¿Cómo desea ser percibida la empresa por su entorno?
      .col-lg-5.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/temas/t3/5.png' alt='')

    .row.justify-content-center.mb-5
      .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
        .bg5
          .row
            .col-lg-4.col-md-5.col-8
              img(src='@/assets/curso/temas/t3/6.svg' alt='')
            .col-lg-8
              .tarjeta.bg6.p-4
                p.mb-0 Redactar una misión clara, auténtica y orientada al impacto es fundamental para consolidar la identidad organizacional y movilizar al equipo hacia un mismo propósito; para lograrlo, es necesario reflexionar estratégicamente sobre los elementos que conforman dicha identidad y propósito, a través de preguntas clave que guíen su formulación con coherencia, sentido y alineación con la visión de la empresa, a continuación se destacan las siguientes: 
      .col-lg-5(data-aos="fade-left")
        ul.lista-ul--color.color-2.fa-lista.mb-0
          li.mb-1
            i.fas.fa-circle-check
            span.mb-0 ¿Cuál es el negocio al que se dedica la organización?
          li.mb-1
            i.fas.fa-circle-check
            span.mb-0 ¿Para qué existe la empresa, cuál es su propósito esencial?
          li.mb-1
            i.fas.fa-circle-check
            span.mb-0 ¿Qué elementos la hacen diferente frente a la competencia?
          li.mb-1
            i.fas.fa-circle-check
            span.mb-0 ¿Cuáles son los productos y servicios que ofrece actualmente?
          li.mb-1
            i.fas.fa-circle-check
            span.mb-0 ¿Quiénes son sus clientes actuales y potenciales?
          li.mb-1
            i.fas.fa-circle-check
            span.mb-0 ¿En qué mercados opera y cuáles proyecta atender en el futuro?
          li.mb-1
            i.fas.fa-circle-check
            span.mb-0 ¿Qué nivel de compromiso asume con sus grupos de interés #[em (stakeholders)]?
          li.mb-0
            i.fas.fa-circle-check
            span.mb-0 ¿Cuáles son los canales de distribución actuales y cuáles se planean implementar?

    .tarjeta.bg1.p-3.py-lg-1
      .row.justify-content-center.align-items-center
        .col-lg-9.col-md-9
          p.mb-0 Una vez se han respondido estas preguntas, la misión debe redactarse de manera que transmita con claridad el valor que aporta la empresa a sus clientes y a la sociedad, refleje su compromiso ético y social, y sirva como una fuente de inspiración tanto para el talento humano como para los inversionistas, aliados y consumidores. En este sentido, una misión bien formulada fortalece el sentido de pertenencia interno y proyecta una imagen coherente y confiable hacia el entorno externo.
        .col-lg-2.col-md-3.col-7
          img(src='@/assets/curso/temas/t3/7.svg' alt='')


    Separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.2 Visión organizacional

    .bg6.mb-5(data-aos="fade-down")
      .row.justify-content-center.align-items-center
        .col-lg-5
          img(src='@/assets/curso/temas/t3/8.png' alt='')
        .col-lg-7
          .p-4
            p Constituye una declaración estratégica que expresa cómo una empresa se proyecta en el futuro. Es una guía que orienta las decisiones y acciones a mediano y largo plazo, reflejando las aspiraciones de la organización y su enfoque hacia los grupos de interés, tales como clientes, colaboradores, inversionistas y la comunidad. Esta debe ser clara, realista, motivadora, positiva y retadora, además de estar alineada con la filosofía, misión y valores corporativos. La visión no solo transmite el rumbo deseado, sino que también fortalece la identidad empresarial, permitiendo a todos sus miembros trabajar hacia un objetivo común.
            p.mb-0 Para construir una visión sólida, coherente y con impacto, es necesario responder estratégicamente a una serie de preguntas orientadoras:
    
    .row.justify-content-center(data-aos="fade")
      .col-lg-5.mb-3.mb-lg-0
        .bg6.tarjeta.p-4.h-100
          ul.lista-ul--color.color-2.fa-lista.mb-0
            li.mb-0
              i.fas.fa-circle-check
              span.mb-0 ¿Cuál es la imagen que se espera proyectar ante los clientes y la sociedad en el futuro?
            li.mb-0
              i.fas.fa-circle-check
              span.mb-0 ¿Cómo será el negocio en 3, 5 o más años?
            li.mb-0
              i.fas.fa-circle-check
              span.mb-0 ¿Cuáles son las metas organizacionales a corto, mediano y largo plazo?
            li.mb-0
              i.fas.fa-circle-check
              span.mb-0 ¿Cuáles serán los pro ductos o servicios clave para competir en el futuro?
            li.mb-0
              i.fas.fa-circle-check
              span.mb-0 ¿Qué actividades nuevas se espera desarrollar para consolidar la posición empresarial?
            li.mb-0
              i.fas.fa-circle-check
              span.mb-0 ¿Qué tipo de innovaciones tecnológicas, operativas o sociales podrían aplicarse?
            li.mb-0
              i.fas.fa-circle-check
              span.mb-0 ¿Cómo se espera que evolucionen los canales de distribución y comunicación con los clientes?
      .col-lg-3.col-md-7.mb-3.mb-lg-0.d-none.d-lg-block
        .bg2.h-100.p-3.d-flex.align-items-center
          img(src='@/assets/curso/temas/t3/9.svg' alt='')
      .col-lg-4
        p Estas preguntas permiten definir con mayor claridad la proyección estratégica del negocio, fortaleciendo la toma de decisiones y el compromiso colectivo con los objetivos trazados.
        p.mb-0 Fundamental lograr una visión organizacional bien definida funciona como una brújula que guía a la empresa hacia su crecimiento y sostenibilidad. Establece un horizonte temporal que inspira, da sentido a las acciones diarias y fortalece la cohesión interna. Así, se convierte en un motor estratégico para anticiparse a los cambios del entorno, adaptarse con resiliencia y competir con propósito en un mercado cada vez más dinámico y exigente.


    Separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.3 Filosofía organizacional

    .row.bgs-1.align-items-center.p-3.p-md-4.p-lg-5.mb-5(data-aos="fade-down")
      .col-lg-12.col-12.px-lg-4
        .row.justify-content-center.align-items-center

          .tarjeta.tarjeta--blanca.p-4
            SlyderA(tipo='b')
              .row.justify-content-around.align-items-center
                .col-11.col-lg-6
                  p La filosofía organizacional representa el corazón ideológico de una empresa. Se compone de principios, valores, creencias y normas que orientan el comportamiento de sus miembros, sustentan su cultura y guían todas las decisiones estratégicas y operativas. Esta filosofía responde al “ser” de la organización, aquello en lo que cree, cómo actúa y hacia dónde se proyecta, otorgándole identidad y coherencia interna.
                  p Según Chiavenato y Sapiro (2017), los principios son convicciones innegociables, como la ética, la integridad y la responsabilidad. Por otro lado, los valores son aquellas cualidades que la organización promueve y protege, como el respeto por la diversidad, la equidad, la transparencia, la excelencia, el compromiso ambiental y la innovación. 
                .col-md-7.col-lg-4
                  img(src='@/assets/curso/temas/t3/slide1-1.png', alt='')
              .row.justify-content-around.align-items-center
                .col-11.col-lg-7.mb-3.mb-lg-0
                  p.mb-0 En el contexto actual, donde las empresas enfrentan cambios constantes, entornos globalizados y una ciudadanía cada vez más exigente, contar con una filosofía organizacional sólida es más que un elemento decorativo: es un activo estratégico. 
                  p A continuación, se detalla la importancia de una filosofía organizacional sólida, como base para la coherencia, el compromiso y el desarrollo estratégico de la empresa.
                  ul.lista-ul--color.color-2.fa-lista.mb-0
                    li.mb-1
                      i.fas.fa-circle-check
                      span.mb-0 Alinea a los colaboradores con un propósito común, generando sentido de pertenencia y motivación genuina.
                    li.mb-1
                      i.fas.fa-circle-check
                      span.mb-0 Orienta la toma de decisiones en todos los niveles, promoviendo coherencia y evitando contradicciones internas.
                    li.mb-1
                      i.fas.fa-circle-check
                      span.mb-0 Fortalece la cultura organizacional, facilitando la adaptación al cambio y el manejo de crisis.
                    li.mb-1
                      i.fas.fa-circle-check
                      span.mb-0 Aumenta la confianza de los grupos de interés (clientes, proveedores, aliados, comunidad, entes reguladores), al percibir una organización coherente, ética y responsable.
                    li.mb-0
                      i.fas.fa-circle-check
                      span.mb-0 Impulsa el liderazgo corporativo al reflejar una imagen íntegra y consistente ante el mercado.
                .col-md-7.col-lg-4
                  img(src='@/assets/curso/temas/t3/slide1-2.png', alt='')

    .subt.mb-4(data-aos="fade")
      img(src="@/assets/curso/temas/t1/subt.svg")
      h3.ps-3.pe-4.mb-0 Beneficios de una filosofía organizacional bien definida

    .row.justify-content-center.align-items-center
      .col-lg-5.col-md-10.mb-3.mb-lg-0(data-aos="fade-right")
        img(src='@/assets/curso/temas/t3/10.png' alt='')
      .col-lg-7(data-aos="fade-left")
        .tarjeta.bg6.p-4.mb-3
          ul.lista-ul--color.color-2.fa-lista.mb-0
            li.mb-1
              i.fas.fa-circle-check
              span.mb-0 Fortalece la identidad institucional y diferencia a la empresa frente a su competencia.
            li.mb-1
              i.fas.fa-circle-check
              span.mb-0 Promueve un clima laboral saludable, donde los valores compartidos regulan la convivencia y el desempeño.
            li.mb-1
              i.fas.fa-circle-check
              span.mb-0 Mejora la reputación y credibilidad, especialmente ante consumidores que valoran el compromiso ético y social.
            li.mb-1
              i.fas.fa-circle-check
              span.mb-0 Facilita la integración de nuevos talentos, al proporcionar una base clara de lo que se espera y valora en la organización.
            li.mb-0
              i.fas.fa-circle-check
              span.mb-0 Aporta sostenibilidad, al priorizar decisiones que equilibran el éxito económico con el bienestar social y ambiental.
        p Una filosofía organizacional bien formulada y vivida no solo es un referente interno para quienes hacen parte de la empresa, sino también una carta de presentación ante el mundo. Es una herramienta clave para construir organizaciones más humanas, sostenibles, eficientes y competitivas en el largo plazo.


    Separador
    #t_3_4.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.4 Objetivos organizacionales

    .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/t3/11.jpg')})`}")
      .bloque-texto-g__texto.p-4
        p Los objetivos organizacionales representan los resultados deseados que una empresa se propone alcanzar dentro de un marco temporal específico. Estos están estrechamente vinculados con la misión y la visión institucional, y reflejan el propósito estratégico de la organización tanto a nivel interno como externo. #[br] #[br]
        p En el entorno empresarial actual, caracterizado por la transformación digital, la sostenibilidad, la globalización y la innovación constante, los objetivos organizacionales no solo buscan alcanzar eficiencia operativa, sino también generar valor para todos los grupos de interés (clientes, colaboradores, comunidad, aliados estratégicos y entes reguladores).

    .row.justify-content-center.align-items-center(data-aos="fade")
      .col-lg-8.mb-3.mb-lg-0
        .tarjeta--container.row
          .col-md.tarjeta.color-primario.p-5
            .subt2.mb-4
              h3.text-white.mb-1 Definir objetivos claros permite
            ul.lista-ul--color.color-2.fa-lista.mb-0
              li.mb-1
                i.fas.fa-circle-check
                span.mb-0 Guiar la toma de decisiones en todos los niveles de la organización.
              li.mb-1
                i.fas.fa-circle-check
                span.mb-0 Establecer indicadores de desempeño para evaluar avances y logros.
              li.mb-1
                i.fas.fa-circle-check
                span.mb-0 Motivar y alinear al equipo humano hacia un propósito común.
              li.mb-0
                i.fas.fa-circle-check
                span.mb-0 Adaptarse de manera proactiva a los cambios del entorno.
          .col-md.tarjeta.bg6.p-5
            .subt2.mb-4
              h3.text-white.mb-1 Los objetivos organizacionales pueden clasificarse en
            ul.lista-ul--color.color-2.fa-lista.mb-0
              li.mb-1
                i.fas.fa-circle-check
                span.mb-0 #[b Estratégicos:] de largo plazo, orientados al crecimiento, sostenibilidad y posicionamiento.
              li.mb-1
                i.fas.fa-circle-check
                span.mb-0 #[b Tácticos:] de mediano plazo, enfocados en la coordinación de áreas o departamentos.
              li.mb-0
                i.fas.fa-circle-check
                span.mb-0 #[b Operacionales:] de corto plazo, centrados en tareas concretas y resultados inmediatos.
      .col-lg-4
        img.w-90px.mb-4(src='@/assets/curso/temas/t3/12.svg' alt='')
        p Importante identificar que los objetivos bien formulados funcionan como una brújula que guía a la empresa hacia su visión, fortaleciendo su competitividad, adaptabilidad y responsabilidad social en un entorno empresarial dinámico y exigente.


    Separador
    #t_3_5.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.5 Estrategias organizacionales

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6.mb-3.mb-lg-0(data-aos="fade-right")
        img(src='@/assets/curso/temas/t3/13.png' alt='')
      .col-lg-6(data-aos="fade-left")
        p Las estrategias organizacionales son planes de acción estructurados que permiten a los empresarios y líderes tomar decisiones orientadas al logro de objetivos a mediano y largo plazo. A través de ellas, se definen las directrices que marcarán el rumbo de la organización frente a su entorno competitivo, buscando posicionarse de manera sólida en el mercado y responder eficazmente a las necesidades de los clientes.
        .tarjeta.bg5.p-4.py-lg-3
          .row.justify-content-center.align-items-center
            .col-lg-3.col-md-3.col-4.mb-3.mb-md-0
              img(src='@/assets/curso/temas/t3/14.svg' alt='')
            .col-lg-9.col-md-9
              p.mb-0 Estas estrategias permiten asignar y optimizar el uso de recursos, resolver problemáticas específicas, identificar oportunidades de mejora y superar a la competencia. Al mismo tiempo, ofrecen un marco para proyectar lo que la empresa es hoy y lo que aspira ser en el futuro, promoviendo una gestión proactiva y orientada a resultados.

    .row.bgs-1.align-items-center.p-3.p-md-4.p-lg-5.mb-5(data-aos="fade-down")
      .col-lg-12.col-12.px-lg-4
        .row.justify-content-center.align-items-center

          .tarjeta.tarjeta--blanca.p-4
            LineaTiempoC.color-primario
              .row.justify-content-center.align-items-center(titulo="Las estrategias genéricas")
                .col-md-6.mb-4.mb-md-0
                  h4 Las estrategias genéricas buscan generar ventajas competitivas sostenibles y abarcan aspectos clave como:
                  ul.lista-ul--color.color-2.fa-lista
                    li
                      i.fas.fa-circle-check
                      span.mb-0 Maximización de la rentabilidad y la productividad.
                    li
                      i.fas.fa-circle-check
                      span.mb-0 Incremento en la participación de mercado y el crecimiento empresarial. 
                    li
                      i.fas.fa-circle-check
                      span.mb-0 Mejora continua en la calidad de productos y servicios. 
                    li
                      i.fas.fa-circle-check
                      span.mb-0 Reducción de costos y optimización operativa. 
                    li
                      i.fas.fa-circle-check
                      span.mb-0 Protección de activos y mitigación de riesgos corporativos. 
                    li
                      i.fas.fa-circle-check
                      span.mb-0 Fortalecimiento de la sostenibilidad y la innovación. 
                .col-md-6.col-lg-5
                  img(src='@/assets/curso/temas/t3/slide2-1.png', alt='')
              .row.justify-content-center.align-items-center(titulo="Estrategia efectiva")
                .col-md-6.mb-4.mb-md-0
                  h4 Para formular una estrategia efectiva, se requiere:
                  ol.lista-ol--cuadro.fa-lista.mb-0
                    li
                      .lista-ol--cuadro__vineta
                        span.fw-bold 1
                      span.mb-0 Analizar el entorno identificando oportunidades y amenazas externas.
                    li
                      .lista-ol--cuadro__vineta
                        span.fw-bold 2
                      span.mb-0 Estimar los riesgos asociados a cada alternativa estratégica.
                    li
                      .lista-ol--cuadro__vineta
                        span.fw-bold 3
                      span.mb-0 Evaluar las fortalezas y debilidades internas de la organización.
                    li
                      .lista-ol--cuadro__vineta
                        span.fw-bold 4
                      span.mb-0 Reconocer los recursos actuales y potenciales disponibles.
                    li
                      .lista-ol--cuadro__vineta
                        span.fw-bold 5
                      span.mb-0 Analizar la capacidad del mercado, tanto en presente como a futuro.
                    li
                      .lista-ol--cuadro__vineta
                        span.fw-bold 6
                      span.mb-0 Valorar la habilidad de la organización para gestionar y asumir riesgos.
                    li
                      .lista-ol--cuadro__vineta
                        span.fw-bold 7
                      span.mb-0 Definir los valores, principios éticos y aspiraciones que guían la toma de decisiones.
                .col-md-6.col-lg-5
                  img(src='@/assets/curso/temas/t3/slide2-2.png', alt='')
              .row.justify-content-center.align-items-center(titulo="Implementación estratégica")
                .col-md-6.mb-4.mb-md-0
                  h4 Implementación estratégica: 
                  p Una estrategia no es eficaz sin una adecuada ejecución. Para implementarla, es indispensable:
                  ul.lista-ul--color.color-2.fa-lista
                    li
                      i.fas.fa-circle-check
                      span.mb-0 Movilizar recursos financieros, humanos y tecnológicos.
                    li
                      i.fas.fa-circle-check
                      span.mb-0 Establecer procesos claros y una estructura organizacional alineada.
                    li
                      i.fas.fa-circle-check
                      span.mb-0 Definir indicadores de desempeño que permitan medir avances y resultados.
                    li
                      i.fas.fa-circle-check
                      span.mb-0 Establecer sistemas de compensación y motivación que impulsen el cumplimiento de metas.
                    li
                      i.fas.fa-circle-check
                      span.mb-0 Asegurar una cultura organizacional coherente con la estrategia.
                .col-md-6.col-lg-5.mb-4
                  img(src='@/assets/curso/temas/t3/slide2-3.png', alt='')
                .col-lg-11
                  p En un entorno empresarial caracterizado por la volatilidad, la incertidumbre y el cambio constante, la formulación e implementación estratégica se convierten en herramientas clave para asegurar la sostenibilidad, adaptabilidad y competitividad de cualquier organización.
              .row.justify-content-center.align-items-center(titulo="Estrategias organizacionales")
                .col-md-6.mb-4.mb-md-0
                  h4 Tipos de estrategias organizacionales
                  p En el marco de la planeación estratégica, las organizaciones implementan distintas estrategias corporativas que les permiten enfrentar desafíos, aprovechar oportunidades del entorno y alcanzar sus metas de largo plazo. Estas estrategias se configuran como rutas de acción orientadas a posicionar a la empresa, optimizar su competitividad y garantizar su sostenibilidad. A continuación, se describen las principales categorías estratégicas:
                  .row
                    .col-lg-5
                      ol.lista-ol--cuadro.fa-lista.mb-0
                        li
                          .lista-ol--cuadro__vineta
                            span.fw-bold 1
                          span.mb-0 Estrategias intensivistas
                        li
                          .lista-ol--cuadro__vineta
                            span.fw-bold 2
                          span.mb-0 Estrategias integrativas
                    .col-lg-5
                      ol.lista-ol--cuadro.fa-lista.mb-0
                        li
                          .lista-ol--cuadro__vineta
                            span.fw-bold 3
                          span.mb-0 Estrategias diversificadas
                        li
                          .lista-ol--cuadro__vineta
                            span.fw-bold 4
                          span.mb-0 Estrategias defensivas
                .col-md-6.col-lg-5
                  img(src='@/assets/curso/temas/t3/slide2-4.png', alt='')

    TabsC.color-acento-contenido.mb-4(data-aos="fade-down")
      .bg8.py-4.py-md-5(titulo="1.	Estrategias intensivistas")
        .row.align-items-center.justify-content-evenly
          .col-md-6.col-11.col-lg-5.mb-4.mb-md-0
            img(src='@/assets/curso/temas/t3/tab1-1.svg' alt='')
          .col-md-6.col-11.col-lg-5
            p Estas estrategias se enfocan en mejorar la posición competitiva de la empresa utilizando los productos o servicios actuales. Son ideales cuando se busca fortalecer la participación en el mercado sin diversificarse o alterar radicalmente el modelo de negocio.
            ul.lista-ul--color.color-2.fa-lista
              li
                i.fas.fa-circle-check
                span.mb-0 #[b Penetración de mercado:] busca aumentar la participación en el mercado mediante campañas publicitarias, promociones, refuerzo del equipo comercial o mayor posicionamiento de marca.
              li
                i.fas.fa-circle-check
                span.mb-0 #[b Desarrollo de mercado:] consiste en introducir productos existentes en nuevos mercados geográficos, segmentos poblacionales o canales de distribución.
              li
                i.fas.fa-circle-check
                span.mb-0 #[b Desarrollo de producto:] implica realizar mejoras o innovaciones a productos o servicios actuales para aumentar las ventas y la rentabilidad.
      .bg8.py-4.py-md-5(titulo="2.	Estrategias integrativas")
        .row.align-items-center.justify-content-evenly
          .col-md-6.col-11.col-lg-5.mb-4.mb-md-0
            img(src='@/assets/curso/temas/t3/tab1-2.svg' alt='')
          .col-md-6.col-11.col-lg-5
            p Estas estrategias buscan incrementar el control sobre los actores clave de la cadena de valor (proveedores, distribuidores o competidores) para mejorar la eficiencia, reducir costos y aumentar el poder de negociación.
            ul.lista-ul--color.color-2.fa-lista
              li
                i.fas.fa-circle-check
                span.mb-0 #[b Integración hacia adelante:] la empresa busca controlar los canales de distribución o venta directa para acercarse más al cliente final y reducir intermediarios.
              li
                i.fas.fa-circle-check
                span.mb-0 #[b Integración hacia atrás:] implica controlar o adquirir a los proveedores para asegurar calidad, disponibilidad de insumos y mejores condiciones de compra.
              li
                i.fas.fa-circle-check
                span.mb-0 #[b Integración horizontal:] se orienta a la adquisición, fusión o asociación con empresas del mismo sector para expandir la cuota de mercado y reducir la competencia directa.
      .bg8.py-4.py-md-5(titulo="3.	Estrategias diversificadas")
        .row.align-items-center.justify-content-evenly
          .col-md-6.col-11.col-lg-5.mb-4.mb-md-0
            img(src='@/assets/curso/temas/t3/tab1-3.svg' alt='')
          .col-md-6.col-11.col-lg-5
            p La diversificación permite a las empresas minimizar riesgos e incrementar su participación en nuevos sectores o mercados mediante la incorporación de productos o servicios diferentes a los actuales.
            ul.lista-ul--color.color-2.fa-lista
              li
                i.fas.fa-circle-check
                span.mb-0 #[b Diversificación concéntrica:] se agregan productos nuevos relacionados con los actuales, aprovechando sinergias de mercado o producción.
              li
                i.fas.fa-circle-check
                span.mb-0 #[b Diversificación horizontal:] se introducen productos o servicios no relacionados, pero dirigidos al mismo grupo de clientes, optimizando canales ya existentes.
              li
                i.fas.fa-circle-check
                span.mb-0 #[b Diversificación por conglomerado:] se exploran nuevos mercados y sectores completamente distintos al negocio actual, buscando fuentes alternativas de ingresos.
      .bg8.py-4.py-md-5(titulo="4. Estrategias defensivas")
        .row.align-items-center.justify-content-evenly
          .col-md-6.col-11.col-lg-5.mb-4.mb-md-0
            img(src='@/assets/curso/temas/t3/tab1-4.svg' alt='')
          .col-md-6.col-11.col-lg-5
            p Estas estrategias son aplicadas cuando la organización enfrenta entornos de riesgo o crisis, y busca preservar su operación, capital y participación en el mercado. Su objetivo es mitigar amenazas y asegurar la continuidad del negocio.
            ul.lista-ul--color.color-2.fa-lista
              li
                i.fas.fa-circle-check
                span.mb-0 #[b Riesgo compartido:] alianzas estratégicas entre dos o más empresas para reducir el impacto de una inversión o riesgo elevado.
              li
                i.fas.fa-circle-check
                span.mb-0 #[b Contratos de cooperación:] acuerdos para compartir redes, tecnología o conocimientos sin necesidad de una fusión formal.
              li
                i.fas.fa-circle-check
                span.mb-0 #[b Encogimiento:] reducción de costos y eliminación de procesos o unidades que no aportan valor.
              li
                i.fas.fa-circle-check
                span.mb-0 #[b Desinversión:] venta de una unidad de negocio para generar recursos e invertir en áreas más rentables.
              li
                i.fas.fa-circle-check
                span.mb-0 #[b Liquidación:] cierre total de operaciones cuando continuar generaría mayores pérdidas que la salida definitiva del mercado.
          
    .row.justify-content-center
      .col-lg-6.mb-3.mb-lg-0(data-aos="fade-right")
        .bg3.p-4
          p.mb-0 Estas estrategias permiten a las organizaciones adaptarse a distintos escenarios del entorno competitivo, ya sea para crecer, innovar, consolidarse o defenderse. La correcta elección y ejecución de cada tipo estratégico dependerá del análisis interno y externo de la empresa, sus recursos disponibles, su visión a futuro y su capacidad de asumir riesgos. Integrar estas decisiones dentro de un modelo de planeación estratégica permite optimizar los resultados y aumentar la sostenibilidad organizacional a largo plazo.
      .col-lg-6(data-aos="fade-right")
        .tarjeta.bgg-1.h-100.p-3.p-lg-4
          .row.justify-content-end.align-items-center
            .col-3.col-sm-2.col-lg-3
              img.px-lg-2(src="@/assets/curso/temas/t1/pdf.svg")            
            .col.col-lg-9.mb-3.mb-sm-0.mb-lg-4
              h4.mb-0.tc-ac Para fortalecer el tema anteriormente plasmado, se recomienda revisar el siguiente documento
            .col-sm-auto
              a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/Estrategias_organizacionales.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download




</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
