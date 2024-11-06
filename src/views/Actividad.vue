<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario" />
  
  </template>

<script>
import Actividad from '@/components/actividad/Actividad'
export default {
  name: 'ActividadDidactica',
  components: { Actividad },
  data: () => ({
    cuestionario: {
      tema: 'Técnicas y estrategias de formación',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> Validar el conocimiento adquirido sobre técnicas y estrategias de formación.',
      barajarPreguntas: false,
      preguntas: [
        {
          id: 1,
          texto:
            'Las técnicas de formación se enfocan exclusivamente en transmitir conocimientos, sin impacto en habilidades o actitudes.',
          imagen: require('@/assets/curso/temas/ad/1.png'),
          barajarRespuestas: false,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            ' ¡Felicitaciones! Ha demostrado un excelente dominio de las técnicas y estrategias de formación. Su comprensión de las herramientas pedagógicas es admirable. ¡Gran trabajo!',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo. Gracias por el esfuerzo. Es una oportunidad para mejorar su comprensión de las técnicas pedagógicas.',
        },
        {
          id: 2,
          texto:
            'Las técnicas individuales en la formación fomentan el esfuerzo personal y la motivación intrínseca.',
          imagen: require('@/assets/curso/temas/ad/2.png'),
          barajarRespuestas: false,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            ' ¡Felicitaciones! Ha demostrado un excelente dominio de las técnicas y estrategias de formación. Su comprensión de las herramientas pedagógicas es admirable. ¡Gran trabajo!',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo. Gracias por el esfuerzo. Es una oportunidad para mejorar su comprensión de las técnicas pedagógicas. ',
        },
        {
          id: 3,
          texto:
            'El mentefacto es una técnica pedagógica utilizada para visualizar relaciones causales entre eventos.',
          imagen: require('@/assets/curso/temas/ad/3.png'),
          barajarRespuestas: false,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            ' ¡Felicitaciones! Ha demostrado un excelente dominio de las técnicas y estrategias de formación. Su comprensión de las herramientas pedagógicas es admirable. ¡Gran trabajo!',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo. Gracias por el esfuerzo. Es una oportunidad para mejorar su comprensión de las técnicas pedagógicas. ',
        },
        {
          id: 4,
          texto:
            'La red causal organiza eventos en una secuencia lógica, mostrando sus relaciones de causa y efecto.',
          imagen: require('@/assets/curso/temas/ad/4.png'),
          barajarRespuestas: false,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            ' ¡Felicitaciones! Ha demostrado un excelente dominio de las técnicas y estrategias de formación. Su comprensión de las herramientas pedagógicas es admirable. ¡Gran trabajo!',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo. Gracias por el esfuerzo. Es una oportunidad para mejorar su comprensión de las técnicas pedagógicas. ',
        },
        {
          id: 5,
          texto:
            'El diagrama de Venn se utiliza únicamente en matemáticas, sin aplicaciones en otros campos educativos.',
          imagen: require('@/assets/curso/temas/ad/1.png'),
          barajarRespuestas: false,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            ' ¡Felicitaciones! Ha demostrado un excelente dominio de las técnicas y estrategias de formación. Su comprensión de las herramientas pedagógicas es admirable. ¡Gran trabajo!',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo. Gracias por el esfuerzo. Es una oportunidad para mejorar su comprensión de las técnicas pedagógicas. ',
        },
        {
          id: 6,
          texto:
            'Las técnicas de formación grupales facilitan el sentido de pertenencia entre los participantes.',
          imagen: require('@/assets/curso/temas/ad/2.png'),
          barajarRespuestas: false,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            ' ¡Felicitaciones! Ha demostrado un excelente dominio de las técnicas y estrategias de formación. Su comprensión de las herramientas pedagógicas es admirable. ¡Gran trabajo!',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo. Gracias por el esfuerzo. Es una oportunidad para mejorar su comprensión de las técnicas pedagógicas. ',
        },
        {
          id: 7,
          texto:
            'El organizador cíclico es una técnica ideal para representar ciclos que se repiten de manera continua.',
          imagen: require('@/assets/curso/temas/ad/3.png'),
          barajarRespuestas: false,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            ' ¡Felicitaciones! Ha demostrado un excelente dominio de las técnicas y estrategias de formación. Su comprensión de las herramientas pedagógicas es admirable. ¡Gran trabajo!',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo. Gracias por el esfuerzo. Es una oportunidad para mejorar su comprensión de las técnicas pedagógicas. ',
        },
        {
          id: 8,
          texto:
            'Las estrategias didácticas no consideran la participación activa del estudiante en el proceso de aprendizaje.',
          imagen: require('@/assets/curso/temas/ad/4.png'),
          barajarRespuestas: false,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            ' ¡Felicitaciones! Ha demostrado un excelente dominio de las técnicas y estrategias de formación. Su comprensión de las herramientas pedagógicas es admirable. ¡Gran trabajo!',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo. Gracias por el esfuerzo. Es una oportunidad para mejorar su comprensión de las técnicas pedagógicas. ',
        },
        {
          id: 9,
          texto:
            'El pensamiento lateral está vinculado con la creatividad y la generación de nuevas ideas.',
          imagen: require('@/assets/curso/temas/ad/1.png'),
          barajarRespuestas: false,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            ' ¡Felicitaciones! Ha demostrado un excelente dominio de las técnicas y estrategias de formación. Su comprensión de las herramientas pedagógicas es admirable. ¡Gran trabajo!',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo. Gracias por el esfuerzo. Es una oportunidad para mejorar su comprensión de las técnicas pedagógicas. ',
        },
        {
          id: 10,
          texto:
            'El aprendizaje basado en problemas solo fomenta el conocimiento teórico, sin promover habilidades prácticas.',
          imagen: require('@/assets/curso/temas/ad/2.png'),
          barajarRespuestas: false,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            ' ¡Felicitaciones! Ha demostrado un excelente dominio de las técnicas y estrategias de formación. Su comprensión de las herramientas pedagógicas es admirable. ¡Gran trabajo!',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo. Gracias por el esfuerzo. Es una oportunidad para mejorar su comprensión de las técnicas pedagógicas. ',
        },
      ],
      mensaje_final_aprobado:
        ' ¡Excelente trabajo, continúe con ese gran esfuerzo!',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
  computed: {},
  methods: {},
}
</script>
