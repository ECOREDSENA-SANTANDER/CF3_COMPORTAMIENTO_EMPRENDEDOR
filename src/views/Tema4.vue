<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Elementos del #[em marketing]

    .bloque-texto-g.color-primario.bg6.p-3.p-sm-4.p-md-5.mb-4(data-aos="fade-down")
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/t4/1.jpg')})`}")
      .bloque-texto-g__texto.p-4
        p Las acciones de mercadeo son fundamentales para acercar productos y servicios al consumidor final, con el fin de generar valor, posicionar la marca y alcanzar los niveles de ventas esperados. Toda empresa que desea ser competitiva en el mercado debe implementar un plan de mercadeo estructurado, que analice las condiciones del entorno y permita definir estrategias efectivas de comercialización. #[br] #[br]
        p El plan de mercadeo no solo orienta los esfuerzos publicitarios o promocionales, sino que también permite tomar decisiones basadas en un análisis profundo de dos tipos de factores:

    TabsC.color-acento-contenido(data-aos="fade-down")
      .bg10.py-4.py-md-5(titulo="Factores externos del mercado")
        .row.align-items-center.justify-content-evenly
          .col-md-5.col-11.col-lg-5.mb-4.mb-md-0
            img(src='@/assets/curso/temas/t4/tab1-1.svg' alt='')
          .col-md-6.col-11.col-lg-5
            p Son variables del entorno que están fuera del control directo de la empresa, pero que influyen significativamente en la forma como se posicionan y venden los productos o servicios. Entre ellos se destacan:
            ul.lista-ul--color.color-2.fa-lista.mb-4
              li
                i.fas.fa-circle-check
                span.mb-0 Condiciones políticas, legales y regulatorias.
              li
                i.fas.fa-circle-check
                span.mb-0 Entorno económico y medioambiental.
              li
                i.fas.fa-circle-check
                span.mb-0 Cambios sociales, culturales y demográficos.
              li
                i.fas.fa-circle-check
                span.mb-0 Nivel de competencia y comportamiento del consumidor.
              li
                i.fas.fa-circle-check
                span.mb-0 Avances tecnológicos y transformación digital.
              li
                i.fas.fa-circle-check
                span.mb-0 Tendencias del mercado y evolución de los canales de venta.
            p Estos factores exigen que las empresas estén en constante monitoreo y adaptación para anticiparse a los cambios y tomar decisiones ágiles.
      .bg10.py-4.py-md-5(titulo="Factores internos del mercado")
        .row.align-items-center.justify-content-evenly
          .col-md-5.col-11.col-lg-5.mb-4
            img(src='@/assets/curso/temas/t4/tab1-2.svg' alt='')
          .col-md-6.col-11.col-lg-5
            p Son los elementos controlables que la empresa puede ajustar para satisfacer las necesidades del cliente y competir eficazmente. Están representados en el llamado #[em mix] de #[em marketing] o las 4 P:
            ul.lista-ul--color.color-2.fa-lista.mb-4
              li
                i.fas.fa-circle-check
                span.mb-0 #[b Producto:] diseño, calidad, innovación, empaque, ciclo de vida.
              li
                i.fas.fa-circle-check
                span.mb-0 #[b Precio:] estrategia de precios, descuentos, percepción de valor.
              li
                i.fas.fa-circle-check
                span.mb-0 #[b Plaza (distribución):] canales de venta, cobertura, logística, puntos de contacto.
              li
                i.fas.fa-circle-check
                span.mb-0 #[b Promoción:] comunicación, publicidad, ventas personales, #[em marketing] digital.
          .col-lg-11.col-11.col-md-11
            p Estos factores permiten planificar acciones estratégicas orientadas a captar, retener y fidelizar clientes, al mismo tiempo que se optimizan los recursos y se incrementa la rentabilidad del negocio. Un adecuado manejo de los factores internos, sumado a una lectura inteligente del entorno externo, permite a las empresas diseñar acciones de mercadeo más efectivas, adaptadas a las dinámicas de los mercados actuales y orientados a lograr posicionamiento, competitividad y sostenibilidad comercial.


    Separador
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 4.1 Plan de #[em marketing]

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade")
      .col-lg-5.mb-4
        .tarjeta.bg1.p-4
          p.mb-0 Es un documento estratégico que orienta y regula las decisiones comerciales de una empresa durante un período específico. Su propósito es definir con claridad qué se va a hacer, cómo, cuándo, con qué recursos y para lograr qué objetivos dentro del mercado objetivo.
          p.mb-0 Este plan permite establecer una hoja de ruta detallada que articula los recursos comerciales con los objetivos estratégicos y financieros del negocio. Además, facilita el monitoreo del desempeño mediante indicadores cualitativos y cuantitativos.
      .col-lg-2.mb-4.d-none.d-lg-block
        img(src='@/assets/curso/temas/t4/2.svg' alt='')
      .col-lg-5.mb-4
        img(src='@/assets/curso/temas/t4/3.png' alt='')

    .subt.mb-4(data-aos="fade")
      img(src="@/assets/curso/temas/t1/subt.svg")
      h3.ps-3.pe-4.mb-0 Entre los elementos clave que componen un plan de #[em marketing] se encuentran

    .row.justify-content-center.align-items-center
      .col-lg-3.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/temas/t4/4.png' alt='')
      .col-lg-9(data-aos="fade-left")
        SlyderF.circl-arrow(columnas="col-12")
          .tarjeta.tarjeta--gris.p-4.p-lg-5        
            ul.lista-ul--color.color-2.fa-lista
              li
                i.fas.fa-circle-check
                span.mb-0 #[b Logro de objetivos:] compara lo planeado con lo ejecutado, midiendo avances y desviaciones.
              li
                i.fas.fa-circle-check
                span.mb-0 #[b Estrategia de marketing:] define las variables del #[em mix] de #[em marketing] (producto, precio, promoción y distribución) para posicionar la oferta en el mercado.
              li
                i.fas.fa-circle-check
                span.mb-0 #[b Calendario:] establece la programación de actividades y campañas a lo largo del periodo de ejecución.
              li
                i.fas.fa-circle-check
                span.mb-0 #[b Estándares de desempeño:] contempla métricas cualitativas (como la percepción del cliente o el posicionamiento de marca) y cuantitativas (como niveles de ventas, participación de mercado y retorno sobre la inversión).
          .tarjeta.tarjeta--gris.p-4.px-lg-5 
            p.mb-2 Este proceso integral permite evaluar continuamente los resultados, tomar decisiones basadas en datos y adaptar las estrategias según las condiciones del mercado. Así, se convierte en una herramienta fundamental para guiar el crecimiento comercial del emprendimiento o empresa.
            p En resumen, los propósitos centrales del plan de #[em marketing] son:
            ol.lista-ol--cuadro.fa-lista.mb-0
              li.mb-1
                .lista-ol--cuadro__vineta
                  span.fw-bold A.
                span.mb-0 Definir el segmento de mercado en el que el emprendimiento centrará sus actividades.
              li.mb-1
                .lista-ol--cuadro__vineta
                  span.fw-bold B.
                span.mb-0 Determinar las variables del #[em mix] de #[em marketing] adecuadas para alcanzar al cliente objetivo.
              li
                .lista-ol--cuadro__vineta
                  span.fw-bold C.
                span.mb-0 Alinear los objetivos comerciales con los planes financieros y estratégicos de la organización.
            p.mb-0 El plan de #[em marketing] es una hoja de ruta indispensable para cualquier organización que aspire a posicionarse, crecer y competir en un entorno dinámico y centrado en el cliente.


    Separador
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 4.2 Etapas del plan de #[em marketing]

    .bg6.mb-5(data-aos="fade-down")
      .row.justify-content-center.align-items-center
        .col-lg-5
          img(src='@/assets/curso/temas/t4/5.png' alt='')
        .col-lg-7
          .p-4
            p.mb-4 El plan de #[em marketing] se construye a partir de un proceso estructurado que permite comprender la realidad actual del negocio, definir metas estratégicas, formular acciones concretas, asignar recursos y hacer seguimiento a los resultados. Este proceso se compone de varias etapas interdependientes que facilitan la toma de decisiones acertadas y alineadas con la visión comercial de la organización.
            .subt3.mb-4
              h4.mb-0 Las principales etapas del plan de #[em marketing] son
            .row.justify-content-center.mb-3
              .col-lg-5
                ul.lista-ul--color.color-2.fa-lista.mb-0
                  li
                    i.fas.fa-circle-check
                    span.mb-0 Análisis de la situación actual.
                  li
                    i.fas.fa-circle-check
                    span.mb-0 Planificación de objetivos para el siguiente periodo.
              .col-lg-7
                ul.lista-ul--color.color-2.fa-lista.mb-0
                  li
                    i.fas.fa-circle-check
                    span.mb-0 Formulación de estrategias de #[em marketing].
                  li
                    i.fas.fa-circle-check
                    span.mb-0 Asignación del presupuesto comercial.
                  li
                    i.fas.fa-circle-check
                    span.mb-0 Control y seguimiento del desempeño.
            p A continuación, se profundiza en las dos primeras etapas:

    .subt4.mb-4(data-aos="fade-right")
      h3.mb-0 Análisis de la situación actual

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade")
      .col-lg-2.col-md-3.col-6
        img(src='@/assets/curso/temas/t4/6.svg' alt='')
      .col-lg-10.col-md-9
        p.mb-0 Esta etapa inicial consiste en examinar los resultados obtenidos en el periodo anterior, a partir de la implementación de políticas relacionadas con las variables del #[em mix] de #[em marketing]: producto, precio, promoción y distribución. Se comparan los objetivos planeados con los resultados alcanzados, y se evalúa la efectividad de las acciones ejecutadas. Además, se realiza un análisis detallado del segmento de mercado atendido, considerando:

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-7.mb-3.mb-lg-0(data-aos="fade-right")
        LineaTiempoD.color-acento-contenido
          .row.justify-content-center(numero="1" titulo="Tamaño y crecimiento del segmento")
            .col-12
              p.mb-0 Incluye la recopilación y análisis de datos sobre ventas actuales, tasas de crecimiento, proyecciones de rentabilidad y comportamiento del consumidor.
          .row.justify-content-center(numero="2" titulo="Atractivo estructural del segmento")
            .col-12
              p.mb-0 Se evalúa el nivel de competencia, barreras de entrada, poder de negociación de los clientes y proveedores, entre otros factores.
          .row.justify-content-center(numero="3" titulo="Capacidades y recursos de la empresa")
            .col-12
              p.mb-0 Se analiza si la organización cuenta con los medios necesarios para sostener su participación y posicionamiento en el segmento elegido.
      .col-lg-5.col-md-10(data-aos="fade-left")
        img(src='@/assets/curso/temas/t4/7.png' alt='')

    .tarjeta.bg3.p-4.mb-5(data-aos="fade")
      p Es importante destacar que no siempre los segmentos más grandes o de mayor crecimiento son los más convenientes. Algunas empresas, especialmente los emprendimientos, pueden optar por nichos específicos donde existan menos competidores agresivos, mayores márgenes de rentabilidad o mejores condiciones para establecer una ventaja competitiva.
      p.mb-0 Por ejemplo, un emprendimiento puede evitar competir en mercados saturados con actores dominantes, y enfocarse en nichos donde el valor agregado, la atención personalizada o la innovación sean más valorados que el precio.


    .subt4.mb-4(data-aos="fade-right")
      h3.mb-0 Planificación de objetivos para el siguiente periodo

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade")
      .col-lg-2.col-md-3.col-6
        img(src='@/assets/curso/temas/t4/8.svg' alt='')
      .col-lg-10.col-md-9
        p.mb-0 Con base en el análisis anterior, se procede a establecer los objetivos para el próximo ciclo de planificación, los cuales deben ser claros, medibles, alcanzables y coherentes con la estrategia general del negocio. Estos objetivos se plantean en relación con varios ejes clave:

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-5.col-md-10.mb-3.mb-lg-0(data-aos="fade-right")
        img(src='@/assets/curso/temas/t4/9.png' alt='')
      .col-lg-7(data-aos="fade-left")
        LineaTiempoD.color-acento-contenido
          .row.justify-content-center(numero="1" titulo="Producto")
            .col-12
              p.mb-0 Se define la cantidad a producir, estándares de calidad, mejoras o innovaciones, presentación y empaque.
          .row.justify-content-center(numero="2" titulo="Cliente / consumidor")
            .col-12
              p.mb-0 Se proyecta la expansión del segmento de clientes, ya sea diversificando productos, optimizando la experiencia del usuario o fortaleciendo la marca.
          .row.justify-content-center(numero="3" titulo="Distribución")
            .col-12
              p.mb-0 Se revisan los canales existentes y se identifican nuevas rutas para alcanzar al cliente, se establecen políticas de inventario, logística y cobertura geográfica.
          .row.justify-content-center(numero="4" titulo="Ventas")
            .col-12
              p.mb-0 Se fijan metas concretas de ventas para el periodo, basadas en proyecciones realistas y el análisis de tendencias de consumo.
      
    .tarjeta.bg4.p-4.mb-5(data-aos="fade")
      p.mb-0 Estas dos etapas constituyen la base para las decisiones posteriores dentro del plan de #[em marketing]. Un análisis profundo y una planificación bien estructurada permitirán que la empresa oriente sus recursos hacia acciones de alto impacto, minimizando riesgos y maximizando oportunidades en un entorno competitivo.


    .subt4.mb-4(data-aos="fade-right")
      h3.mb-0 Formulación de estrategias de #[em marketing]

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade")
      .col-lg-2.col-md-3.col-5
        img(src='@/assets/curso/temas/t4/10.svg' alt='')
      .col-lg-10.col-md-9
        p Una vez realizado el análisis situacional y definidos los objetivos del plan de #[em marketing], se procede a la formulación de estrategias, que guiarán las acciones de la empresa para alcanzar su mercado objetivo de forma efectiva. En esta etapa, el emprendedor selecciona el segmento de mercado meta y diseña las estrategias más adecuadas para acercarse a él, comunicar valor, posicionar sus productos y construir una marca sólida.
        p.mb-0 Para lograrlo, se pueden utilizar diferentes enfoques estratégicos según los recursos disponibles, las características del mercado y el tipo de producto o servicio. Entre las principales estrategias de cobertura de mercado se encuentran:
    
    h5 Tipos de estrategias de #[em marketing] según el enfoque de segmentación:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7.mb-3.mb-lg-0(data-aos="fade-right")
        LineaTiempoD.color-acento-contenido
          .row.justify-content-center(numero="1" titulo="<em>Marketing</em> no diferenciado (o masivo)")
            .col-12
              p Se dirige a todo el mercado con una misma oferta comercial, sin distinguir entre segmentos. Es útil cuando el producto tiene una demanda amplia y homogénea.
              p.mb-0 Ejemplo: productos de consumo básico como sal o azúcar.
          .row.justify-content-center(numero="2" titulo="<em>Marketing</em> diferenciado (o segmentado)")
            .col-12
              p Se enfoca en varios segmentos del mercado, adaptando una oferta específica para cada uno. Permite atender las particularidades de diversos públicos objetivos.
              p.mb-0 Ejemplo: marcas de ropa con líneas para hombres, mujeres y niños.
          .row.justify-content-center(numero="3" titulo="<em>Marketing</em> concentrado (o de nicho)")
            .col-12
              p Se centra en un único segmento específico, ideal cuando se cuentan con recursos limitados o se busca posicionarse como especialista en un solo mercado.
              p.mb-0 Ejemplo: productos veganos para personas con alergias alimentarias.
          .row.justify-content-center(numero="4" titulo="Micromarketing (o <em>marketing</em> individualizado)")
            .col-12
              p Consiste en personalizar la oferta para grupos muy específicos o incluso para cada cliente, adaptando productos, promociones y canales de distribución.
              p.mb-0 Ejemplo: campañas de #[em marketing] hiperlocal o productos personalizados online.
      .col-lg-5.col-md-10(data-aos="fade-left")
        img(src='@/assets/curso/temas/t4/11.png' alt='')


    .subt4.mb-4(data-aos="fade-right")
      h3.mb-0 Estrategias complementarias para alcanzar el mercado

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade")
      .col-lg-2.col-md-3.col-5
        img(src='@/assets/curso/temas/t4/12.svg' alt='')
      .col-lg-10.col-md-9
        p.mb-0 Una vez elegido el mercado objetivo, es necesario acompañar las estrategias de cobertura con acciones específicas que garanticen su efectividad:

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-5.col-md-10.mb-3.mb-lg-0(data-aos="fade-right")
        img(src='@/assets/curso/temas/t4/13.png' alt='')
      .col-lg-7(data-aos="fade-left")
        LineaTiempoD.color-acento-contenido
          .row.justify-content-center(numero="1" titulo="Estrategias de posicionamiento de producto")
            .col-12
              p Se definen con el fin de establecer cómo desea la empresa que el consumidor perciba su producto, en comparación con los de la competencia. El posicionamiento se basa en atributos clave como calidad, precio, funcionalidad, exclusividad o experiencia de marca.
              p.mb-0 El objetivo es ocupar un lugar claro, deseable y diferencial en la mente del cliente.
          .row.justify-content-center(numero="2" titulo="Estrategias de comunicación")
            .col-12
              p.mb-0 Permiten conectar emocional y racionalmente con el consumidor a través de mensajes alineados con la identidad y valores de la marca. Incluyen campañas publicitarias, promoción, contenido digital, relaciones públicas y redes sociales.
          .row.justify-content-center(numero="3" titulo="Estrategias de <em>marketing</em>")
            .col-12
              p.mb-0 Comprenden el diseño y aplicación del #[em mix] de #[em marketing]: producto, precio, plaza y promoción, en función del comportamiento del consumidor y del entorno competitivo.
          .row.justify-content-center(numero="4" titulo="Estrategias de desarrollo de marca")
            .col-12
              p.mb-0 Se orientan a construir una identidad sólida, coherente y memorable, que conecte con el mercado meta y facilite la lealtad del cliente a largo plazo.

    .tarjeta.bg11.p-4.mb-5(data-aos="fade")
      p.mb-0 La formulación de estrategias de #[em marketing] es una etapa crítica del proceso comercial, ya que define la forma en que la empresa logrará acercarse a su público objetivo, diferenciarse en el mercado y construir relaciones duraderas con sus clientes. La correcta selección y articulación de estas estrategias marcará la diferencia entre una oferta genérica y una propuesta de valor auténtica, relevante y sostenible.


    .subt4.mb-4(data-aos="fade-right")
      h3.mb-0 Estrategias de posicionamiento, marca y comunicación

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade")
      .col-lg-2.col-md-3.col-5
        img(src='@/assets/curso/temas/t4/14.svg' alt='')
      .col-lg-10.col-md-9
        p Una vez realizado el análisis situacional y definidos los objetivos del plan de #[em marketing], se procede a la formulación de estrategias, que guiarán las acciones de la empresa para alcanzar su mercado objetivo de forma efectiva. En esta etapa, el emprendedor selecciona el segmento de mercado meta y diseña las estrategias más adecuadas para acercarse a él, comunicar valor, posicionar sus productos y construir una marca sólida.
        p.mb-0 Para lograrlo, se pueden utilizar diferentes enfoques estratégicos según los recursos disponibles, las características del mercado y el tipo de producto o servicio. Entre las principales estrategias de cobertura de mercado se encuentran:
      
    .tarjeta.bg7.p-4.mb-4(data-aos="fade")
      .row.justify-content-center.align-items-center
        .col-lg-4
          h4.mb-lg-0 A. Estrategias de posicionamiento
        .col.px-lg-0.mb-2.mb-md-0
          img.w-90px(src='@/assets/curso/temas/t4/15.svg' alt='')
        .col-lg-7.col-md-9
          p.mb-0 El posicionamiento es el proceso mediante el cual una empresa define cómo desea que su producto sea percibido por el mercado meta, en comparación con los productos de la competencia. Esta acción consta de tres etapas principales:

    .row.justify-content-center.mb-5
      .col-lg-7.mb-3.mb-lg-0(data-aos="fade-right")
        LineaTiempoD.color-acento-contenido
          .row.justify-content-center(numero="1" titulo="Identificación de ventajas competitivas ")
            .col-12
              p.mb-0 Se analizan todos los elementos que podrían diferenciar la oferta del negocio: calidad del producto, servicio postventa, tiempos de entrega, imagen de marca, condiciones logísticas, sostenibilidad, entre otros. En el caso de productos genéricos, se deben destacar atributos como certificaciones, procesos de producción, almacenamiento o transporte. 
          .row.justify-content-center(numero="2" titulo="Selección de ventajas competitivas relevantes ")
            .col-12
              p No todas las diferencias son estratégicamente efectivas. Se deben seleccionar aquellas que cumplan con los siguientes criterios (Kotler & Armstrong, 2012):
              ul.lista-ul--color.color-2.fa-lista.mb-0
                li.mb-2
                  i.fas.fa-circle-check
                  span.mb-0 #[b Importancia:] el beneficio debe ser valorado por el consumidor.
                li.mb-2
                  i.fas.fa-circle-check
                  span.mb-0 #[b Distintividad:] la competencia no lo ofrece igual.
                li.mb-2
                  i.fas.fa-circle-check
                  span.mb-0 #[b Superioridad:] ofrece mejor calidad, funcionalidad o costo.
                li.mb-2
                  i.fas.fa-circle-check
                  span.mb-0 #[b Comunicabilidad:] puede ser fácilmente explicado y percibido.
                li.mb-2
                  i.fas.fa-circle-check
                  span.mb-0 #[b Exclusividad:] difícil de imitar por los competidores.
                li.mb-2
                  i.fas.fa-circle-check
                  span.mb-0 #[b Rentabilidad:] aporta beneficios financieros sostenibles.
                li.mb-0
                  i.fas.fa-circle-check
                  span.mb-0 #[b Accesibilidad:] asequible para el cliente objetivo.
          .row.justify-content-center(numero="3" titulo="Definición de una estrategia de precio como herramienta de posicionamiento ")
            .col-12
              p El precio es un componente estratégico para comunicar valor. Su fijación debe considerar:
              ul.lista-ul--color.color-2.fa-lista.mb-0
                li
                  i.fas.fa-circle-check
                  span.mb-0 #[b Precio técnico:] costo unitario + gasto unitario.
                li
                  i.fas.fa-circle-check
                  span.mb-0 #[b Precio óptimo:] precio técnico + utilidad esperada
                li
                  i.fas.fa-circle-check
                  span.mb-0 #[b Precio de aceptación:] rango que el cliente está dispuesto a pagar.
                li
                  i.fas.fa-circle-check
                  span.mb-0 #[b Precio competitivo:] en relación con los precios de la competencia directa.
      .col-lg-5.col-md-10(data-aos="fade-left")
        img(src='@/assets/curso/temas/t4/16.png' alt='')


    .tarjeta.bg4.p-4.mb-4(data-aos="fade")
      .row.justify-content-center.align-items-center
        .col-lg-4
          h4.mb-lg-0 B. Estrategia de desarrollo de marca
        .col.px-lg-0.mb-2.mb-md-0
          img.w-90px(src='@/assets/curso/temas/t4/17.svg' alt='')
        .col-lg-7.col-md-9
          p.mb-0 La marca representa uno de los activos más valiosos y duraderos de una organización. No se trata solo de un nombre o logotipo, sino de una construcción emocional y simbólica en la mente del consumidor. Una buena estrategia de marca debe:

    .row.justify-content-center.mb-5
      .col-lg-5
        ul.lista-ul--color.color-2.fa-lista.mb-0.ps-lg-5
          li
            i.fas.fa-circle-check
            span.mb-0 Resaltar los atributos únicos del producto.
          li
            i.fas.fa-circle-check
            span.mb-0 Asociarse a beneficios funcionales y emocionales.
          li
            i.fas.fa-circle-check
            span.mb-0 Estar alineada con la misión, visión y valores corporativos.
      .col-lg-7
        ul.lista-ul--color.color-2.fa-lista.mb-0
          li
            i.fas.fa-circle-check
            span.mb-0 Proyectar una identidad coherente, creíble y diferenciadora.
          li
            i.fas.fa-circle-check
            span.mb-0 Crear vínculos de confianza y fidelidad con los clientes.
          li
            i.fas.fa-circle-check
            span.mb-0 La marca bien posicionada genera reconocimiento, recordación, lealtad y valor agregado.    


    .tarjeta.bg12.p-4.mb-4(data-aos="fade")
      .row.justify-content-center.align-items-center
        .col-lg-4
          h4.mb-lg-0 C. Estrategia de comunicación
        .col.px-lg-0.mb-2.mb-md-0
          img.w-90px(src='@/assets/curso/temas/t4/18.svg' alt='')
        .col-lg-7.col-md-9
          p.mb-0 Las estrategias de comunicación son esenciales para informar, persuadir y conectar con los públicos objetivos. Entre las herramientas más utilizadas están:

    .row.bgc-1.align-items-center.p-3.p-md-4.p-lg-5.mb-5(data-aos="fade-down")
      .col-lg-12.col-12.px-lg-4
        .row.justify-content-center.align-items-center

          .row.justify-content-center.mb-5
            .col-lg-11  
              SlyderF.circl-arrow(columnas="col-lg-4 col-md-6")
                .tarjeta.bg2.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-5.col-md-6
                      img(src='@/assets/curso/temas/t4/tarj1.svg' alt='')
                  .subt2.mb-4
                    h4.mb-0 Venta personal
                  p.text-center Contacto directo con el cliente para identificar necesidades, presentar soluciones, manejar objeciones, cerrar ventas y hacer seguimiento.
                .tarjeta.bg2.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-5.col-md-6
                      img(src='@/assets/curso/temas/t4/tarj1.svg' alt='')
                  .subt2.mb-4 
                    h4.mb-0 #[em Marketing] directo
                  p.text-center Uso de medios masivos o personalizados para llegar directamente al consumidor (ejemplo. correos electrónicos, mensajes SMS, llamadas).
                .tarjeta.bg2.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-5.col-md-6
                      img(src='@/assets/curso/temas/t4/tarj1.svg' alt='')
                  .subt2.mb-4 
                    h4.mb-0 #[em Marketing] digital
                  p.text-center Uso de plataformas como redes sociales, motores de búsqueda, sitios web, #[em email marketing] y canales electrónicos de atención y pago.
                .tarjeta.bg2.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-5.col-md-6
                      img(src='@/assets/curso/temas/t4/tarj1.svg' alt='')
                  .subt2.mb-4
                    h4.mb-0 #[em Merchandising]
                  p.text-center Técnicas en punto de venta para estimular compras impulsivas, como exhibiciones, degustaciones, demostraciones y promociones visuales.
                .tarjeta.bg2.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-5.col-md-6
                      img(src='@/assets/curso/temas/t4/tarj1.svg' alt='')
                  .subt2.mb-4
                    h4.mb-0 Visual
                  p.text-center Ambientación del espacio físico (ejemplo. vitrinas, iluminación, muebles).
                .tarjeta.bg2.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-5.col-md-6
                      img(src='@/assets/curso/temas/t4/tarj1.svg' alt='')
                  .subt2.mb-4
                    h4.mb-0 Gestión
                  p.text-center Análisis de la rentabilidad del punto de venta.
                .tarjeta.bg2.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-5.col-md-6
                      img(src='@/assets/curso/temas/t4/tarj1.svg' alt='')
                  .subt2.mb-4
                    h4.mb-0 Relaciones públicas
                  p.text-center Acciones para construir una imagen positiva, a través de eventos, alianzas, notas de prensa o acciones de responsabilidad social.

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.t4-bloqg(data-aos="fade")
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/t4/19.jpg')})`}")
      .bloque-texto-g__texto.p-4
        .subt4.mb-4
          h3.mb-0 Presupuesto comercial
        p.mb-0 A partir de las estrategias diseñadas, se formula el presupuesto de #[em marketing], que asigna los recursos económicos, humanos y logísticos necesarios para su implementación.
        p Este presupuesto debe: 
        ul.lista-ul--color.color-2.fa-lista.mb-0
          li.mb-1
            i.fas.fa-circle-check
            span.mb-0 Estar alineado con los objetivos estratégicos y financieros.
          li.mb-1
            i.fas.fa-circle-check
            span.mb-0 Incluir proyecciones de inversión y retorno esperado (ROI).
          li.mb-1
            i.fas.fa-circle-check
            span.mb-0 Evaluar los costos por canal, campaña y segmento.
          li.mb-0
            i.fas.fa-circle-check
            span.mb-0 Establecer márgenes de ajuste según el comportamiento del mercado.

    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-4.t4-bloqg(data-aos="fade")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/t4/20.jpg')})`}")
      .bloque-texto-g__texto.p-4
        .subt4.mb-4
          h3.mb-0 Control y seguimiento
        p El plan de #[em marketing] no es estático. Exige una revisión periódica para garantizar su ejecución, medir los resultados y aplicar medidas correctivas si es necesario. El seguimiento debe contemplar:
        ul.lista-ul--color.color-2.fa-lista.mb-0
          li.mb-1
            i.fas.fa-circle-check
            span.mb-0 Indicadores cuantitativos (ventas, participación de mercado, ROI).
          li.mb-1
            i.fas.fa-circle-check
            span.mb-0 Indicadores cualitativos (posicionamiento, satisfacción del cliente, percepción de marca).
          li.mb-0
            i.fas.fa-circle-check
            span.mb-0 Herramientas de control como reportes periódicos, matrices de evaluación o análisis comparativos entre lo planeado y lo ejecutado.

    .row.justify-content-center.align-items-center
      .col-lg-5.col-md-10.mb-3.mb-lg-0(data-aos="fade-right")
        img(src='@/assets/curso/temas/t4/21.svg' alt='')
      .col-lg-7(data-aos="fade-left")
        .row.justify-content-center.align-items-center.mb-4
          .col-lg-9.col-md-9
            p.mb-0 Comprender la estructura y funcionamiento de una empresa requiere una visión integral que inicie con la formulación de un plan de negocios sólido, el cual trace la ruta hacia la viabilidad y sostenibilidad de la idea emprendedora. A partir de allí, se hace indispensable definir los elementos organizacionales que le dan forma a la empresa: sus características, funciones, estructura y tipología. 
          .col-lg-3.col-md-3.d-none.d-md-block
            img(src='@/assets/curso/temas/t4/22.svg' alt='')
        .tarjeta.bg2.p-4
          p.mb-0 Estos componentes, en articulación con los elementos estratégicos, como la misión, visión, filosofía, objetivos y estrategias, permiten alinear el propósito institucional con el entorno empresarial. Finalmente, los elementos del #[em marketing] complementan este proceso, facilitando la conexión con el mercado objetivo a través de planes estructurados, estrategias de posicionamiento, desarrollo de marca y comunicación efectiva. Todos estos elementos conforman un sistema interrelacionado que potencia la toma de decisiones, el crecimiento y la competitividad empresarial en un entorno dinámico y en constante transformación.


</template>

<script>
export default {
  name: 'Tema4',
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
