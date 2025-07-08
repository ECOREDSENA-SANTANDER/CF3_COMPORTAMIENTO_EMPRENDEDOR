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



    Separador
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 4.2 Etapas del plan de #[em marketing]

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
