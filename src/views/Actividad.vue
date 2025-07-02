<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Entendiendo la empresa',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> evaluar la comprensión de los conceptos fundamentales del componente Entendiendo la empresa. ',
      barajarPreguntas: false,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            'Un plan de negocios sirve como guía para tomar decisiones estratégicas del emprendimiento. ',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Felicitaciones! Ha captado con claridad los conceptos del componente Entendiendo la empresa.  ',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.  ',
        },
        {
          id: 2,
          texto:
            'El enfoque financiero del plan de negocios se basa en la planeación del talento humano. ',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Felicitaciones! Ha captado con claridad los conceptos del componente Entendiendo la empresa.  ',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.  ',
        },
        {
          id: 3,
          texto:
            'La misión organizacional expresa la razón de ser de una empresa. ',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Felicitaciones! Ha captado con claridad los conceptos del componente Entendiendo la empresa.  ',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.  ',
        },
        {
          id: 4,
          texto:
            'El plan de negocios no necesita ser actualizado con el tiempo. ',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Felicitaciones! Ha captado con claridad los conceptos del componente Entendiendo la empresa.  ',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.  ',
        },
        {
          id: 5,
          texto: 'Las empresas modernas deben ser flexibles y sostenibles. ',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Felicitaciones! Ha captado con claridad los conceptos del componente Entendiendo la empresa.  ',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.  ',
        },
        {
          id: 6,
          texto:
            'La estructura organizacional permite definir jerarquías y funciones claras. ',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Felicitaciones! Ha captado con claridad los conceptos del componente Entendiendo la empresa.  ',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.  ',
        },
        {
          id: 7,
          texto:
            'Un buen plan de negocios elimina completamente el riesgo empresarial. ',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Felicitaciones! Ha captado con claridad los conceptos del componente Entendiendo la empresa.  ',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.  ',
        },
        {
          id: 8,
          texto:
            'Las estrategias organizacionales no afectan el crecimiento de la empresa. ',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Felicitaciones! Ha captado con claridad los conceptos del componente Entendiendo la empresa.  ',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.  ',
        },
        {
          id: 9,
          texto:
            'El <em>marketing</em> directo consiste en comunicación personalizada con el consumidor',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Felicitaciones! Ha captado con claridad los conceptos del componente Entendiendo la empresa.  ',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.   ',
        },
        {
          id: 10,
          texto:
            'Una visión clara orienta las decisiones a largo plazo de una empresa. ',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Felicitaciones! Ha captado con claridad los conceptos del componente Entendiendo la empresa.  ',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.   ',
        },
      ],
      mensaje_final_aprobado:
        '¡Excelente trabajo! posee una buena comprensión sobre el componente Entendiendo la empresa.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica. ',
    },
  }),
}
</script>
