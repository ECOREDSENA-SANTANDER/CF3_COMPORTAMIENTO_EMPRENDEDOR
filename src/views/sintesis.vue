<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    p.mb-4 Emprender con éxito exige comprender y aplicar elementos clave como el plan de negocios, la estructura organizacional, los componentes estratégicos y el marketing. Un plan de negocios sólido orienta decisiones, reduce riesgos y evalúa la viabilidad del proyecto. La empresa moderna debe ser flexible, ética, sostenible y capaz de adaptarse a cambios del entorno, definir misión, visión, objetivos, estrategias que fortalezcan la identidad, proyección empresarial y finalmente el marketing permite conectar con el mercado mediante análisis, segmentación, posicionamiento y estrategias comerciales que impulsan el crecimiento y la competitividad.    

    .tarjeta.tarjeta--gris.mb-5.py-md-5
      .row.justify-content-center
        .col-lg-11.bgs.p-4.brad
          figure
            img(src="@/assets/curso/sintesis.svg", alt=" La imagen muestra un esquema titulado “ Entendiendo la empresa”, que presenta cinco componentes clave: plan de negocios, concepto y evolución de la empresa, elementos estratégicos, y elementos del marketing, destacando temas como misión, visión, estructura organizacional, valor del plan de negocios y etapas del plan de marketing. ")
    
    .row.justify-content-center.mb-4
      .col-auto
        a.anexo(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
