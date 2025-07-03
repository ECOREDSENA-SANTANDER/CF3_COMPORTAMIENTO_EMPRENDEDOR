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
        p.mb-0 Este documento incluye información clave como la descripción del negocio, análisis del mercado, estructura organizacional, propuesta de valor, plan de #[em marketing], plan operativo, proyecciones financieras y estrategias de crecimiento, además, el plan de negocios facilita la comunicación de la propuesta empresarial ante posibles aliados, inversionistas o entidades de financiamiento, consolidándose como una herramienta fundamental para reducir riesgos, identificar oportunidades y orientar el emprendimiento hacia el logro de sus objetivos.

    .row.justify-content-center.align-items-center.mb-4           
      .col-lg-2.col-md-4.col-6.mb-3.mb-lg-0(data-aos="fade-right")
        img(src='@/assets/curso/temas/t1/2.svg', alt='')
      .col-lg-10.col-md-8(data-aos="fade-left")
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
      .col-lg-4.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/temas/t1/3.png', alt='')

    p Estos componentes, entre otros, permiten al emprendedor tomar decisiones informadas, adaptarse al entorno y orientar estratégicamente su modelo de negocio.


    Separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.1  El valor estratégico del plan de negocios en el entorno actual

    .row.justify-content-center.mb-4
      .col-lg-5.col-md-10.mb-3.mb-lg-0(data-aos="fade-right")
        img(src='@/assets/curso/temas/t1/4.png', alt='')
      .col-lg-7(data-aos="fade-left")
        .row.justify-content-center.align-items-center.mb-2
          .col-lg-9.col-md-8
            p En el contexto empresarial contemporáneo, los planes de negocio se han consolidado como herramientas estratégicas clave, no solo para estructurar emprendimientos, sino también para garantizar su sostenibilidad y capacidad de adaptación en entornos dinámicos. Este documento es frecuentemente exigido por inversionistas, aceleradoras, incubadoras y entidades financieras, ya que les permite evaluar con base en datos y proyecciones la viabilidad, el nivel de riesgo y el potencial de retorno de una inversión o financiación. 
          .col-lg-3.col-md-4.col-6
            img(src='@/assets/curso/temas/t1/5.svg', alt='')
        .tarjeta.bg3.p-4.mb-3
          p.mb-0 Además, muchas organizaciones lo actualizan periódicamente como parte de sus procesos de gestión estratégica, dado que facilita el cumplimiento de objetivos, el uso eficiente de recursos y la alineación con los cambios del entorno económico, tecnológico y social.
        p Entre las principales ventajas que ofrece un plan de negocios para un emprendimiento, se destacan:

    .row.justify-content-center.mb-5
      .col-lg-7(data-aos="fade-right")
        ul.lista-ul--color.color-2.fa-lista
          li
            i.fas.fa-circle-check
            span.mb-0 Permite evaluar, anticipar y reducir factores de riesgo antes de lanzar el producto o servicio al mercado, lo que evita inversiones innecesarias y fallos operativos.
          li
            i.fas.fa-circle-check
            span.mb-0 Clarifica los objetivos del negocio, haciéndolos medibles y alineados con una visión a corto, mediano y largo plazo.
          li
            i.fas.fa-circle-check
            span.mb-0 Facilita la identificación del punto de equilibrio, lo cual es esencial para proyectar sostenibilidad financiera.
          li
            i.fas.fa-circle-check
            span.mb-0 Articula de manera efectiva a los grupos de interés (#[em stakeholders]), integrando sus necesidades en la planificación del proyecto.
          li
            i.fas.fa-circle-check
            span.mb-0 Optimiza la presentación de la idea de negocio, aumentando las posibilidades de atraer inversionistas o aliados estratégicos.
          li
            i.fas.fa-circle-check
            span.mb-0 Permite realizar un estudio detallado del cliente, proveedores y canales de distribución, sin tener que asumir altos costos en una salida prematura al mercado.
          li
            i.fas.fa-circle-check
            span.mb-0 Reconoce con mayor precisión las necesidades del cliente y evalúa la intención de compra, ajustando la oferta a las demandas reales.
          li
            i.fas.fa-circle-check
            span.mb-0 Apoya el diseño de estrategias de #[em marketing] efectivas, basadas en un conocimiento profundo del entorno competitivo.
          li
            i.fas.fa-circle-check
            span.mb-0 Genera proyecciones financieras claras y fundamentadas, con un menor margen de error.
          li
            i.fas.fa-circle-check
            span.mb-0 Es un documento vivo, que puede ser revisado, ajustado y actualizado en la medida en que el negocio evoluciona o cambia el entorno.
          li
            i.fas.fa-circle-check
            span.mb-0 Ayuda a enfocar la gestión del emprendedor en los aspectos clave del negocio, priorizando recursos y esfuerzos.
          li
            i.fas.fa-circle-check
            span.mb-0 Estimula la creatividad del emprendedor, permitiéndole visualizar escenarios sin comprometer grandes recursos.
          li
            i.fas.fa-circle-check
            span.mb-0 Facilita la planificación de cronogramas de trabajos realistas y alcanzables, mejorando la gestión del tiempo y la productividad.
          li
            i.fas.fa-circle-check
            span.mb-0 Sirve como herramienta de valoración empresarial, especialmente útil en procesos de negociación, venta o fusión.
      .col-lg-5.d-none.d-lg-block(data-aos="fade-left")
        img.mb-4(src='@/assets/curso/temas/t1/6.png', alt='')
        .tarjeta.bg4.p-4
          .row.justify-content-center
            .col-lg-5.img-neg.d-none.d-lg-block
              img(src='@/assets/curso/temas/t1/7.svg', alt='')
            .col-lg-7
              p.mb-0 El plan de negocios es mucho más que un requisito formal, es una guía estratégica que fortalece la toma de decisiones, potencia el crecimiento sostenible y convierte la idea emprendedora en una propuesta de valor con alto impacto.
          

    .subt.mb-4(data-aos="fade")
      img(src="@/assets/curso/temas/t1/subt.svg")
      h3.ps-3.pe-4.mb-0 Desventajas del plan de negocios

    .row.bgs-1.align-items-center.p-3.p-md-4.p-lg-5.mb-5(data-aos="fade-down")
      .col-lg-12.col-12.px-lg-4
        .row.justify-content-center.align-items-center

          .tarjeta.tarjeta--blanca.p-4
            SlyderA(tipo='b')
              .row.justify-content-around.align-items-center
                .col-md-6
                  p Aunque el plan de negocios es una herramienta fundamental para orientar la creación y desarrollo de una empresa, también presenta ciertas limitaciones que deben considerarse al momento de su elaboración:
                  ul.lista-ul--color.color-2.fa-lista
                    li
                      i.fas.fa-circle-check
                      span.mb-0 No elimina completamente el riesgo, ya que, aunque permite prever y analizar muchas variables, es imposible anticipar todos los factores externos que pueden impactar el negocio, especialmente en entornos volátiles o inciertos.
                .col-md-6.col-lg-4
                  img(src='@/assets/curso/temas/t1/slide1.png', alt='')
              .row.justify-content-around.align-items-center
                .col-md-6
                  ul.lista-ul--color.color-2.fa-lista
                    li
                      i.fas.fa-circle-check
                      span.mb-0 Es susceptible a cambios del entorno, pues se basa en datos reales del momento. Si el contexto económico, tecnológico o social cambia abruptamente, algunas proyecciones o estrategias contenidas en el plan pueden quedar desactualizadas y requerir ajustes inmediatos.
                    li
                      i.fas.fa-circle-check
                      span.mb-0 Un estudio superficial puede ser perjudicial, ya que, si el plan no se desarrolla con rigurosidad, puede presentar vacíos importantes en aspectos como mercado, costos o proyecciones financieras, lo que incrementa el riesgo de fracaso.
                    li
                      i.fas.fa-circle-check
                      span.mb-0 Puede requerir mucho tiempo para su elaboración, especialmente si se busca un análisis profundo y completo. Esto puede retrasar el inicio del emprendimiento o generar ansiedad por resultados inmediatos. 
                .col-md-6.col-lg-4
                  img(src='@/assets/curso/temas/t1/slide2.png', alt='')
              .row.justify-content-around.align-items-center
                .col-md-6
                  ul.lista-ul--color.color-2.fa-lista
                    li
                      i.fas.fa-circle-check
                      span.mb-0 Puede limitar la flexibilidad del emprendedor, al enfocarse exclusivamente en una única idea de negocio, restando atención a nuevas oportunidades emergentes o innovadoras que surjan durante el proceso. 
                    li
                      i.fas.fa-circle-check
                      span.mb-0 El desarrollo profesional del plan puede ser costoso, ya que, si se recurre a consultores o especialistas externos, esto puede representar un gasto elevado, especialmente para emprendedores con recursos limitados. 
                    li
                      i.fas.fa-circle-check
                      span.mb-0 En ocasiones, se convierte en un ejercicio formal más que práctico, cuando no se utiliza como una herramienta viva y actualizable, lo que reduce su impacto en la toma de decisiones diaria del negocio. 
                .col-md-6.col-lg-4
                  img(src='@/assets/curso/temas/t1/slide3.png', alt='')
              .row.justify-content-around.align-items-center
                .col-md-6
                  p A pesar de estas limitaciones, el plan de negocios sigue siendo una herramienta clave para la planificación y gestión empresarial. Reconocer sus posibles desventajas no implica descartarlo, sino más bien abordarlo con una mirada crítica, flexible y realista. Su efectividad dependerá en gran medida del compromiso del emprendedor con su elaboración, actualización constante y uso como guía práctica para la toma de decisiones. En un entorno empresarial cambiante, la adaptabilidad y la revisión continua del plan son esenciales para transformar sus limitaciones en oportunidades de mejora y crecimiento
                .col-md-6.col-lg-4
                  img(src='@/assets/curso/temas/t1/slide4.png', alt='')


    .tarjeta.bgg-1.p-3.mb-5
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/t1/pdf.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.mb-0.tc-ac Para fortalecer el tema anteriormente plasmado, se recomienda revisar el siguiente documento  
            .col-sm-auto
              a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/Plan_de_negocios.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download


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
