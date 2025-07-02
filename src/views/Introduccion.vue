<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.align-items-center.mb-4(data-aos="fade")          
      .col-lg-5.mb-3.mb-lg-0
        img(src='@/assets/curso/temas/intro/1.png', alt='')
      .col-lg-5.mb-3.mb-lg-0
        p.mb-0 Para emprender con solidez en el ámbito empresarial, es esencial comprender los elementos que integran la planeación estratégica del negocio, esta permite visualizar el rumbo del emprendimiento, establecer metas claras y crear las condiciones necesarias para su funcionamiento sostenible. Contar con una estructura organizacional definida, identificar las áreas funcionales, comprender la tipología de la empresa y construir un plan de negocios sólido son aspectos fundamentales para orientar cualquier iniciativa empresarial hacia el éxito.
      .col-lg-2.col-md-4.col-6
        img(src='@/assets/curso/temas/intro/2.svg', alt='')
    
    .tarjeta.bg1.p-4.mb-4(data-aos="fade-down")
      p.mb-0 Integrar elementos estratégicos como la misión, visión, filosofía, objetivos y estrategias organizacionales, junto con herramientas de marketing que faciliten la proyección del negocio en el mercado, permite al empresario tomar decisiones acertadas, a través del análisis del entorno y de una planificación estructurada, se favorece la rentabilidad, el crecimiento y la sostenibilidad de la empresa en el corto, mediano y largo plazo.
    
    figure(data-aos="fade")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    figcaption Video. 

</template>

<script>
export default {
  name: 'Introduccion',
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
