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
        '<b> Objetivo:</b> Validar el conocimiento adquirido sobre técnicas y estrategias de formación.',
      barajarPreguntas: false,
      preguntas: [
        {
          id: 1,
          texto:
            'Las técnicas de formación se enfocan en métodos concretos, mientras que las estrategias educativas combinan diversas técnicas para lograr un aprendizaje eficaz y adaptado a los estudiantes.',
          imagen: require('@/assets/curso/temas/ad/1.png'),
          barajarRespuestas: false,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            'Excelente trabajo. Se observa claridad en la identificación de técnicas y estrategias de formación.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto:
            'Las técnicas de formación son conjuntos de métodos, secuencias y procedimientos cuidadosamente diseñados para orientar los procesos educativos y asegurar una pedagogía tanto eficaz como eficiente.',
          imagen: require('@/assets/curso/temas/ad/2.png'),
          barajarRespuestas: false,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            'Excelente trabajo. Se observa claridad en la identificación de técnicas y estrategias de formación.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto:
            'La implementación adecuada de estas técnicas, adaptada a cada contexto específico, NO es fundamental para transmitir conocimientos, ni para fomentar el desarrollo integral de habilidades y actitudes en los estudiantes.',
          imagen: require('@/assets/curso/temas/ad/3.png'),
          barajarRespuestas: false,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            'Excelente trabajo. Se observa claridad en la identificación de técnicas y estrategias de formación.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto:
            'El objetivo principal de las técnicas de formación es la transmisión de conocimientos, la enseñanza de nuevas habilidades y la modificación de actitudes.',
          imagen: require('@/assets/curso/temas/ad/4.png'),
          barajarRespuestas: false,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            'Excelente trabajo. Se observa claridad en la identificación de técnicas y estrategias de formación.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto:
            'La importancia de las técnicas de formación radica en su implementación planificada, evitando la improvisación en el aula y asegurando que se realicen las necesarias estimulaciones o retroalimentaciones de contenido para optimizar los resultados de aprendizaje.',
          imagen: require('@/assets/curso/temas/ad/1.png'),
          barajarRespuestas: false,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            'Excelente trabajo. Se observa claridad en la identificación de técnicas y estrategias de formación.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto:
            'Técnicas grupales o colectivas, No facilitan la construcción del conocimiento a través de la interacción social, ni fomentan un sentido de pertenencia entre los participantes.',
          imagen: require('@/assets/curso/temas/ad/2.png'),
          barajarRespuestas: false,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            'Excelente trabajo. Se observa claridad en la identificación de técnicas y estrategias de formación.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        '¡Excelente! Lo felicito, ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
  computed: {},
  methods: {},
}
</script>
