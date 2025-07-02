<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Plan de negocios
        
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/t1/1.jpg')})`}")
      .bloque-texto-g__texto.p-4
        p.mb-0 Un plan de negocios es un documento estructurado, estratégico y dinámico que permite definir, analizar y proyectar una idea empresarial, articulándola con las condiciones reales del entorno económico, social y tecnológico, su objetivo principal es servir como guía para la toma de decisiones, la gestión eficiente de recursos y la evaluación de la viabilidad del proyecto en el corto, mediano y largo plazo. #[br] #[br]
        p.mb-0 Este documento incluye información clave como la descripción del negocio, análisis del mercado, estructura organizacional, propuesta de valor, plan de marketing, plan operativo, proyecciones financieras y estrategias de crecimiento, además, el plan de negocios facilita la comunicación de la propuesta empresarial ante posibles aliados, inversionistas o entidades de financiamiento, consolidándose como una herramienta fundamental para reducir riesgos, identificar oportunidades y orientar el emprendimiento hacia el logro de sus objetivos.

    .row.justify-content-center.align-items-center.mb-4           
      .col-lg-2.col-md-4.col-6.mb-3.mb-lg-0(data-aos="fade-right")
        img(src='@/assets/curso/temas/t1/2.svg', alt='')
      .col-lg-10(data-aos="fade-left")
        .tarjeta.bg1.p-4
          p.mb-0 El plan de negocios integra múltiples enfoques que inciden directamente en las actividades clave del emprendimiento, estos enfoques permiten una visión integral del funcionamiento y la proyección de la empresa. Entre los más relevantes se destacan:

    .row.justify-content-center.mb-4
      .col-lg-8(data-aos="fade-right")
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg2 min-b")
          .row.justify-content-center(titulo="El enfoque organizacional")
            .col-md-11
              p Define la estructura interna, los roles, la misión y la visión de la empresa.
          .row.justify-content-center(titulo="El enfoque financiero")
            .col-md-11
              p Orientado a la estimación de costos, ingresos, rentabilidad y sostenibilidad económica.
          .row.justify-content-center(titulo="El enfoque de mercadeo")
            .col-md-11
              p Centrado en el análisis del mercado, la segmentación de clientes, la estrategia comercial y el posicionamiento del producto o servicio.
          .row.justify-content-center(titulo="El enfoque de gestión del talento humano")
            .col-md-11
              p Contempla la planificación, selección, formación y bienestar del personal.
          .row.justify-content-center(titulo="El enfoque operativo")
            .col-md-11
              p Relacionado con los procesos internos, la logística, los recursos tecnológicos y los tiempos de ejecución.
          .row.justify-content-center(titulo="El enfoque de producción")
            .col-md-11
              p Detalla el proceso productivo, los insumos, los estándares de calidad y la capacidad instalada.       
      .col-lg-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/t1/3.png', alt='')

    p Estos componentes, entre otros, permiten al emprendedor tomar decisiones informadas, adaptarse al entorno y orientar estratégicamente su modelo de negocio.


    Separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.1  El valor estratégico del plan de negocios en el entorno actual

    .row.justify-content-center.mb-4
      .col-lg-5(data-aos="fade-right")
        img(src='@/assets/curso/temas/t1/4.png', alt='')
      .col-lg-7(data-aos="fade-left")
        .row.justify-content-center.align-items-center.mb-2
          .col-lg-9
            p En el contexto empresarial contemporáneo, los planes de negocio se han consolidado como herramientas estratégicas clave, no solo para estructurar emprendimientos, sino también para garantizar su sostenibilidad y capacidad de adaptación en entornos dinámicos. Este documento es frecuentemente exigido por inversionistas, aceleradoras, incubadoras y entidades financieras, ya que les permite evaluar con base en datos y proyecciones la viabilidad, el nivel de riesgo y el potencial de retorno de una inversión o financiación. 
          .col-lg-3
            img(src='@/assets/curso/temas/t1/5.svg', alt='')
        .tarjeta.bg3.p-4.mb-3
          p.mb-0 Además, muchas organizaciones lo actualizan periódicamente como parte de sus procesos de gestión estratégica, dado que facilita el cumplimiento de objetivos, el uso eficiente de recursos y la alineación con los cambios del entorno económico, tecnológico y social.
        p Entre las principales ventajas que ofrece un plan de negocios para un emprendimiento, se destacan:

</template>

<script>
export default {
  name: 'Tema1',
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
