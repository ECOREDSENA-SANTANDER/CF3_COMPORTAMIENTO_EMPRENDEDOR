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
          .col-md-6.col-11.col-lg-5.mb-4.mb-md-0
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
          .col-md-6.col-11.col-lg-5.mb-4
            img(src='@/assets/curso/temas/t4/tab1-2.svg' alt='')
          .col-md-6.col-11.col-lg-5
            p Son los elementos controlables que la empresa puede ajustar para satisfacer las necesidades del cliente y competir eficazmente. Están representados en el llamado mix de #[em marketing] o las 4 P:
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
          .col-lg-11.col-11.col-md-12
            p Estos factores permiten planificar acciones estratégicas orientadas a captar, retener y fidelizar clientes, al mismo tiempo que se optimizan los recursos y se incrementa la rentabilidad del negocio. Un adecuado manejo de los factores internos, sumado a una lectura inteligente del entorno externo, permite a las empresas diseñar acciones de mercadeo más efectivas, adaptadas a las dinámicas de los mercados actuales y orientados a lograr posicionamiento, competitividad y sostenibilidad comercial.


    Separador
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 4.1 Plan de #[em marketing]

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade")
      .col-lg-5.mb-4
        .tarjeta.bg1.p-4
          p.mb-0 Es un documento estratégico que orienta y regula las decisiones comerciales de una empresa durante un período específico. Su propósito es definir con claridad qué se va a hacer, cómo, cuándo, con qué recursos y para lograr qué objetivos dentro del mercado objetivo.
          p.mb-0 Este plan permite establecer una hoja de ruta detallada que articula los recursos comerciales con los objetivos estratégicos y financieros del negocio. Además, facilita el monitoreo del desempeño mediante indicadores cualitativos y cuantitativos.
      .col-lg-2.mb-4
        img(src='@/assets/curso/temas/t4/2.svg' alt='')
      .col-lg-5.mb-4
        img(src='@/assets/curso/temas/t4/3.png' alt='')

    .subt.mb-4(data-aos="fade")
      img(src="@/assets/curso/temas/t1/subt.svg")
      h3.ps-3.pe-4.mb-0 Entre los elementos clave que componen un plan de marketing se encuentran

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
            p En resumen, los propósitos centrales del plan de marketing son:
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
            p.mb-0 El plan de marketing es una hoja de ruta indispensable para cualquier organización que aspire a posicionarse, crecer y competir en un entorno dinámico y centrado en el cliente.


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
              h4.mb-0 Las principales etapas del plan de marketing son
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


    .subt4.mb-4(data-aos="fade-right")
      h3.mb-0 Planificación de objetivos para el siguiente periodo


    .subt4.mb-4(data-aos="fade-right")
      h3.mb-0 Formulación de estrategias de marketing


    .subt4.mb-4(data-aos="fade-right")
      h3.mb-0 Estrategias complementarias para alcanzar el mercado


    .subt4.mb-4(data-aos="fade-right")
      h3.mb-0 Estrategias de posicionamiento, marca y comunicación

      

    .subt.mb-4(data-aos="fade")
      img(src="@/assets/curso/temas/t1/subt.svg")
      h3.ps-3.pe-4.mb-0 Definición de una estrategia de precio como herramienta de posicionamiento




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
