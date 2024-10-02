<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.pb-0.pb-md-0.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Estrategias educativas 
    
    p En este componente formativo, se abordan temas como estrategias didácticas y pedagógicas para la enseñanza y el aprendizaje, así como técnicas pedagógicas, que son elementos claves para la planificación de estrategias educativas que garanticen resultados positivos en el proceso formativo.


    Separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.1  Las estrategias didácticas
    
    .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos='fade-down')
      .bloque-texto-g__img(:style="{'background-image': `url(${require('@/assets/curso/temas/t1/BG.png')})`}")
        img(src='@/assets/curso/temas/t2/img1.png', alt='')
      .bloque-texto-g__texto.p-4.p-lg-5
        p Son procedimientos sistematizados diseñados para desarrollar y organizar actividades formativas en función de los objetivos y finalidades establecidos en el plan de enseñanza. Actúan como el medio a través del cual los participantes reconocen, interiorizan, apropian y aplican el conocimiento. Sin embargo, es fundamental entender que esta construcción significativa de conocimiento por parte del estudiante se logra a través del diálogo y la participación activa en entornos de aprendizaje.
        br
        br
        p.mb-0 En la práctica docente, es crucial implementar el diseño de estrategias didácticas de manera creativa, innovadora y reflexiva. Este enfoque permite crear un ambiente de aprendizaje agradable y propicio para los estudiantes, fortaleciendo sus conocimientos, generando nuevos, aplicándolos y transmitiéndolos de manera asertiva.
    
    .row.align-items-center.mb-4
      .col-lg-11.col-md-10(data-aos='fade-right')
        p Es importante destacar que las estrategias de aprendizaje son actividades que guían las acciones del estudiante para alcanzar metas específicas. En otras palabras, son procedimientos aplicados a una tarea, sin que esto implique acciones automatizadas o simples secuencias de habilidades.
      .col-lg-1.col-md-2.d-none.d-md-block(data-aos='fade-left')
        img(src='@/assets/curso/temas/t1/tarj1-ico1.svg', alt='')

    .row.align-items-center.tit-tercer2.mb-4(data-aos='fade-right')
      .col-md-auto.col-2
        img(src='@/assets/curso/temas/t1/tit-terc2.svg', alt='')
      .col-md-auto.col-10
        h3.mb-0.pe-4 Estrategias didácticas en la enseñanza-aprendizaje
    
    .row.align-items-end.justify-content-center.mb-4
      .col-lg-3.col-md-6.col-8.mb-4.mb-lg-0
        img(src='@/assets/curso/temas/t2/img2.png', alt='')
      .col-lg-9
        p Las estrategias didácticas son procesos y requisitos pedagógicos fundamentales para fortalecer la cognición de los estudiantes, fomentar el aprendizaje autónomo y regular la formación. A menudo, los enfoques tradicionales de aprendizaje no logran el desarrollo cognitivo esperado en los estudiantes porque no se implementan estrategias didácticas que estimulen de manera integral las diferentes áreas del cerebro.
        .cajon.color-primario.bg-1.p-4
          p.mb-0 Estas estrategias facilitan la adquisición del conocimiento mediante los recursos y la organización adecuada proporcionados por los docentes. La manera en que se aplican en el aula determina cómo el estudiante asimilará y reforzará el saber, pero es esencial que este saber se traduzca en acciones concretas.
    
    p.mb-5 El concepto de estrategias didácticas abarca la selección de actividades y prácticas pedagógicas adecuadas en distintos momentos formativos, así como los métodos y recursos empleados en la enseñanza. Además, incluye el aprendizaje colaborativo, dado que una distinción clara entre método, técnica y estrategia permite proyectar una propuesta efectiva en entornos de tutoría.
    
    .row.align-items-center.tit-tercer2.mb-4(data-aos='fade-right')
      .col-md-auto.col-2
        img(src='@/assets/curso/temas/t1/tit-terc2.svg', alt='')
      .col-md-auto.col-10
        h3.mb-0.pe-4 Clasificación de estrategias didácticas
    
    p.mb-4 Existen diversas clasificaciones para las estrategias didácticas, pero todas coinciden en tres parámetros clave: 
      span.fw-bold métodos, procedimientos y técnicas.

    TabsB.color-primario.mb-5(data-aos='fade-down')
      .bg-2.p-4.py-md-5(titulo="Métodos" :icono="require('@/assets/curso/temas/t2/tab1.svg')")
        .row.justify-content-center
          .col-lg-6
            p Los métodos son enfoques o caminos estructurados para alcanzar un objetivo de aprendizaje específico. En el contexto educativo, un método se refiere a la manera de guiar el pensamiento y las acciones del estudiante hacia la consecución de una meta previamente establecida. Los métodos se basan en principios pedagógicos y están orientados a facilitar la comprensión y adquisición de conocimientos.
            p Ejemplos: algunos ejemplos de métodos son la enseñanza activa, el método clínico, el método Montessori, el método inductivo, el método deductivo, y el aprendizaje basado en problemas.
          .col-lg-4
            img(src='@/assets/curso/temas/t2/img3.png', alt='')
      .bg-2.p-4.py-md-5(titulo="Procedimientos" :icono="require('@/assets/curso/temas/t2/tab2.svg')")
        .row.justify-content-center
          .col-lg-6
            p.mb-4 Los procedimientos son secuencias lógicas y organizadas de acciones que se siguen para lograr un fin específico dentro del proceso de enseñanza-aprendizaje. Los procedimientos pueden ser tanto algoritmos fijos (donde el resultado es predecible y seguro) como heurísticos (donde las acciones pueden variar y los resultados no son siempre predecibles).
            p #[b Tipos de Procedimientos:]
            p Procedimientos algorítmicos: son aquellos en los que las acciones están claramente definidas y probadas, lo que asegura un resultado previsible y seguro.
            p Procedimientos heurísticos: son aquellos que involucran un grado de variabilidad y no garantizan un resultado seguro, como la observación e intuición.
          .col-lg-4
            img(src='@/assets/curso/temas/t2/img4.png', alt='')
      .bg-2.p-4.py-md-5(titulo="Técnicas" :icono="require('@/assets/curso/temas/t2/tab3.svg')")
        .row.justify-content-center
          .col-lg-6
            p Las técnicas son herramientas o métodos específicos empleados para ejecutar los procedimientos y llevar a cabo los métodos. Las técnicas se refieren a las acciones concretas que el docente y los estudiantes realizan durante el proceso de enseñanza-aprendizaje. Son las prácticas que permiten implementar los métodos y procedimientos de manera efectiva en el aula.
            p Ejemplos: Ejemplos de técnicas incluyen el uso de mapas conceptuales, discusiones en grupo, simulaciones, resolución de problemas, y trabajo en equipo.
          .col-lg-4
            img(src='@/assets/curso/temas/t2/img5.png', alt='')
    
    .cajon.color-primario.bg-1.p-4(data-aos='fade-down')
      p.mb-0 Los métodos son los enfoques generales, los procedimientos son las secuencias organizadas de acciones, y las técnicas son las herramientas específicas que se utilizan para aplicar los métodos y procedimientos en la práctica educativa.
    

    Separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.2  Estrategias pedagógicas para la enseñanza-aprendizaje
    
    p.mb-4 Para que una estrategia pedagógica sea efectiva, debe cumplir con las siguientes características:
    
    SlyderF.mb-5(columnas="col-lg-6 col-xl-4" data-aos='fade-down')
      .tarjeta.bg-3.p-4
        h4.text-center.mb-4.tit-tarjeta Funcionalidad y significatividad 
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/t2/slyder1.png', alt='')
        p.text-center La estrategia debe contribuir al incremento del rendimiento del estudiante en las tareas previstas, requiriendo un esfuerzo y tiempo razonable.
      .tarjeta.bg-3.p-4
        h4.text-center.mb-4.tit-tarjeta Instrucción clara y aplicada
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/t2/slyder2.png', alt='')        
        p.text-center Es fundamental que la instrucción muestre claramente qué estrategias se pueden implementar, cómo utilizarlas, cuándo aplicarlas, y por qué son ventajosas en determinadas situaciones.      
      .tarjeta.bg-3.p-4
        h4.text-center.mb-4.tit-tarjeta Transferencia y aplicación
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/t2/slyder3.png', alt='')        
        p.text-center Los estudiantes deben entender no solo por qué, dónde y cuándo aplicar las estrategias, sino también cómo transferirlas a diferentes contextos. Las estrategias deben ser claras, bien diseñadas y atractivas.      
      .tarjeta.bg-3.p-4
        h4.text-center.mb-4.tit-tarjeta Comprensión de la utilidad
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/t2/slyder4.png', alt='')        
        p.text-center Es crucial que los estudiantes reconozcan que las estrategias son útiles y necesarias para su aprendizaje.
      .tarjeta.bg-3.p-4
        h4.text-center.mb-4.tit-tarjeta Conexión con el contexto
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/t2/slyder5.png', alt='')        
        p.text-center Debe existir una relación directa entre la estrategia enseñada y la percepción del estudiante sobre el contexto en el que se aplica la tarea.      
      .tarjeta.bg-3.p-4
        h4.text-center.mb-4.tit-tarjeta Generación de autoconfianza
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/t2/slyder6.png', alt='')        
        p.text-center Una instrucción eficaz y exitosa fomenta la confianza y la creencia en la autoeficacia del estudiante.      
      .tarjeta.bg-3.p-4
        h4.text-center.mb-4.tit-tarjeta Instrucción directa y explicativa
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/t2/slyder7.png', alt='')        
        p.text-center La enseñanza debe ser clara, informativa y proporcionar explicaciones detalladas.    
      .tarjeta.bg-3.p-4
        h4.text-center.mb-4.tit-tarjeta.px-0 Transferencia de responsabilidad
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/t2/slyder8.png', alt='')        
        p.text-center Es importante que la responsabilidad de generar, aplicar y controlar estrategias eficaces se transfiera gradualmente del instructor al estudiante, fomentando su autonomía.
    
    .row.align-items-end.mb-4
      .col-lg-3.d-none.d-lg-block
        img(src='@/assets/curso/temas/t2/img2.png', alt='')
      .col-lg-9
        p.mb-4 Las estrategias pedagógicas en la enseñanza-aprendizaje tienen como objetivo 
          span.fw-bold  elevar el nivel académico de los estudiantes y potenciar sus competencias, adaptándolas al contexto y promoviendo su desarrollo como investigadores. 
          | Estas estrategias representan un nuevo paradigma educativo, en respuesta a una generación en constante cambio y a una revolución conceptual en el sistema educativo, cuyo propósito es proporcionar conocimientos cognitivos de manera integral.
        .cajon.color-primario.bg-1.p-4
          p.mb-0 En este contexto, las estrategias pedagógicas se implementan como herramientas esenciales para informar, retroalimentar, enseñar, orientar y estructurar el desarrollo cognitivo, afectivo y expresivo de los estudiantes, formando así individuos íntegros para la sociedad. Según Medina (2003), citado en Medina y Salvador (2009), las estrategias pedagógicas bajo un modelo alternativo promueven la integración y aceptación dentro del proceso educativo.
    
    p Este paradigma se enmarca en una visión reflexiva y colaborativa, que reconoce la diversidad sociopolítica y plurilingüe, y la necesidad de desarrollar valores emergentes. Se enfrenta a la incertidumbre y los retos que la educación intercultural implica, superando posibles marginaciones culturales y personales. Históricamente, el sistema educativo dirigía a los estudiantes con necesidades educativas especiales a instituciones separadas. Sin embargo, 
      span.fw-bold el enfoque actual promueve la integración, ofreciendo oportunidades a todos los estudiantes, 
      | quienes deben adaptarse al sistema educativo vigente.
    

    Separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.3  Técnicas pedagógicas para la formación
    
    p.mb-4 Las técnicas pedagógicas para la formación se refieren a métodos y estrategias utilizadas por educadores para facilitar el aprendizaje y el desarrollo de habilidades en los estudiantes. Estas técnicas incluyen 
      span.fw-bold la enseñanza directa, el aprendizaje colaborativo, el uso de tecnologías educativas, estudios de casos, debates, y actividades prácticas. 
      | Cada técnica se adapta a los objetivos específicos de la formación, buscando no solo transmitir conocimientos, sino también fomentar el pensamiento crítico, la resolución de problemas y la aplicación práctica de los conceptos aprendidos.

    .row.bgc-1.align-items-center.py-4.pb-lg-0.mb-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center
          
          .row.justify-content-center.align-items-center.mb-5(data-aos='fade-down')
            .col-lg-7
              .titulo-sexto.color-acento-contenido
                h5 Figura 7. 
                span Técnicas pedagógicas para la formación
              figure
                img.mb-3(src='@/assets/curso/temas/t2/img6.svg', alt='El gráfico ilustra diversas técnicas pedagógicas que facilitan el proceso de formación. Estas incluyen el aprendizaje basado en preguntas, la simulación, el uso de proyectos y el método Phillips 6/6. Además, destacan herramientas como el estudio de casos, la lluvia de ideas, la exposición, el juego de roles y el uso de preguntas para promover la interacción y el análisis crítico en el aprendizaje. Cada una de estas técnicas está diseñada para fomentar la participación activa y el desarrollo de habilidades prácticas y cognitivas.')
          
          .col-lg-12(data-aos='fade-down')
            .cajon.color-primario.bg-1.p-4
              p.mb-0 Las técnicas pedagógicas en la formación constituyen la capacidad de aplicar procedimientos que resulten en la adquisición de conocimientos especializados. Existen diversas técnicas pedagógicas, todas válidas siempre que se implementen de manera activa, fomentando la reflexión crítica y un espíritu indagador en los estudiantes.
    
    p.mb-5 Estas técnicas facilitan el desarrollo de habilidades esenciales en los estudiantes, como la organización, sistematización, transferencia y comunicación del conocimiento adquirido, entre otras competencias clave. Funcionan como guías o rutas que los docentes pueden seguir para asegurar procesos de enseñanza eficaces y garantizar el aprendizaje.
    
    .row.align-items-center.tit-tercer2.mb-4(data-aos='fade-right')
      .col-md-auto.col-2
        img(src='@/assets/curso/temas/t1/tit-terc2.svg', alt='')
      .col-md-auto.col-10
        h3.mb-0.pe-4 Tipos de técnicas pedagógicas para la formación
    
    .row.mb-4
      .col-lg-4.d-none.d-lg-block(data-aos='fade-right')
        img(src='@/assets/curso/temas/t2/img7.png', alt='')
      .col-lg-8(data-aos='fade-left')
        p.mb-4 A continuación, se describen diversas técnicas pedagógicas que los docentes pueden emplear para facilitar la adquisición de conocimientos en sus estudiantes. Es esencial que la aplicación de estas técnicas incorpore elementos clave como la autoevaluación, el trabajo en equipo, la comunicación y la responsabilidad.
        .tarjeta.bgi-1.p-4
          SlyderA
            .row.justify-content-center
              .col-md-11
                .tarjeta.tarjeta--blanca.p-5
                  h4 a)	Expositiva
                  p Esta técnica se organiza de manera coherente para presentar contenido al grupo. Aunque ocasionalmente los estudiantes participan activamente, generalmente es el docente o tutor quien lidera la exposición.
            .row.justify-content-center
              .col-md-11
                .tarjeta.tarjeta--blanca.p-5
                  h4 b)	Aprendizaje basado en preguntas
                  p En esta técnica, se forman pequeños grupos que construyen y sintetizan conocimientos a través del análisis de problemas reales. Este enfoque desarrolla habilidades analíticas y fomenta actitudes positivas hacia la resolución de problemas.
            .row.justify-content-center
              .col-md-11
                .tarjeta.tarjeta--blanca.p-5
                  h4 c)	Preguntas
                  p Utilizando preguntas, se impulsa a los estudiantes a la indagación, discusión y análisis, estimulando el pensamiento crítico y facilitando la construcción de conocimientos y principios.
            .row.justify-content-center
              .col-md-11
                .tarjeta.tarjeta--blanca.p-5
                  h4 d)	Juego de roles
                  p Esta técnica amplía el campo de experiencia de los estudiantes, estimulando su capacidad para resolver problemas desde múltiples perspectivas. Además, fomenta la creatividad y proporciona un acercamiento práctico a la realidad.
            .row.justify-content-center
              .col-md-11
                .tarjeta.tarjeta--blanca.p-5
                  h4 e)	Estudio de casos
                  p Similar al enfoque de proyectos, esta técnica transforma una situación real en un contexto académico, permitiendo una síntesis más significativa de los contenidos.
            .row.justify-content-center
              .col-md-11
                .tarjeta.tarjeta--blanca.p-5
                  h4 f)	Simulación
                  p A través de la acción e interacción en situaciones simuladas, los estudiantes adquieren conocimientos significativos de manera dinámica y divertida, siempre que se implemente adecuadamente.
            .row.justify-content-center
              .col-md-11
                .tarjeta.tarjeta--blanca.p-5
                  h4 g)	Phillip 6/6
                  p Esta técnica es útil para aumentar la participación democrática y el análisis en grupos grandes. Permite que cada grupo escuche y sintetice las opiniones de los demás en un tiempo limitado, logrando un análisis profundo y conciso.
            .row.justify-content-center
              .col-md-11
                .tarjeta.tarjeta--blanca.p-5
                  h4 h)	Proyectos
                  p Integrando una realidad específica en un entorno académico, esta técnica se centra en la ejecución de un proyecto de trabajo. Estimula el desarrollo de habilidades para resolver problemas reales y actúa como un incentivo motivador.
            .row.justify-content-center
              .col-md-11
                .tarjeta.tarjeta--blanca.p-5
                  h4 i)	Lluvia de ideas
                  p Esta técnica potencia la creatividad en grupo de manera efectiva, es versátil, motivadora y fácil de aplicar. Además, promueve la participación activa y la resolución de problemas.
    
    p.mb-4 Estas técnicas representan solo algunas de las muchas herramientas disponibles para los docentes. La implementación estratégica de estas técnicas abre un abanico de posibilidades para que los estudiantes desarrollen su pensamiento crítico y alcancen un aprendizaje significativo.

    .row.bgc-2.align-items-center.py-4.pb-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center

          .row.justify-content-center.align-items-center(data-aos='fade-down')
            .col-lg-8
              .titulo-sexto.color-acento-contenido
                h5 Tabla 1. 
                span Ejemplos de estrategias técnicas
              .tabla-a.color-acento-contenido.mb-2
                table(alt="La tabla presenta diferentes tipos de participación en el aprendizaje, junto con ejemplos de estrategias y técnicas aplicables en cada uno. Se destacan el autoaprendizaje, que incluye actividades individuales como el estudio guiado, exámenes, y ejercicios de reflexión. El aprendizaje interactivo se basa en actividades como tutorías, charlas y seminarios. El aprendizaje colaborativo se refiere a estrategias grupales como debates, juegos de roles y proyectos en equipo. Finalmente, se mencionan técnicas relacionadas con prácticas cortas y largas, con actividades como talleres, prácticas en laboratorios, simulaciones y la aplicación de módulos de práctica.")
                  thead
                    tr.bg-color-acento-contenido
                      th.text-start #[b Participación]
                      th.text-start Ejemplos de estrategias y técnicas
                  tbody
                    tr.bg-4
                      td #[b Autoaprendizaje]
                      td 
                        ul.lista-ul--color.fa-ul.color-adicional-1.mb-0
                          li
                            i.fas.fa-check-circle
                            | Estudio individual.
                          li
                            i.fas.fa-check-circle
                            | Búsqueda y análisis de información.
                          li
                            i.fas.fa-check-circle
                            | Elaboración de ensayos.
                          li
                            i.fas.fa-check-circle
                            | Tareas individuales.
                          li
                            i.fas.fa-check-circle
                            | Proyectos.
                          li.mb-0
                            i.fas.fa-check-circle
                            | Investigaciones.
                    tr.bg-5
                      td #[b Aprendizaje interactivo]
                      td 
                        ul.lista-ul--color.fa-ul.color-adicional-1.mb-0
                          li
                            i.fas.fa-check-circle
                            | Exposiciones del profesor.
                          li
                            i.fas.fa-check-circle
                            | Conferencia de un experto.
                          li
                            i.fas.fa-check-circle
                            | Entrevistas
                          li
                            i.fas.fa-check-circle
                            | Visitas.
                          li
                            i.fas.fa-check-circle
                            | Paneles
                          li
                            i.fas.fa-check-circle
                            | Debates.
                          li.mb-0
                            i.fas.fa-check-circle
                            | Seminarios.
                    tr.bg-4
                      td #[b Aprendizaje colaborativo]
                      td 
                        ul.lista-ul--color.fa-ul.color-adicional-1.mb-0
                          li
                            i.fas.fa-check-circle
                            | Solución de casos.
                          li
                            i.fas.fa-check-circle
                            | Método de proyectos.
                          li
                            i.fas.fa-check-circle
                            | Aprendizaje basado en problemas.
                          li
                            i.fas.fa-check-circle
                            | Análisis y discusión en grupos.
                          li.mb-0
                            i.fas.fa-check-circle
                            | Discusión y debates.
                    tr.bg-5
                      td #[b Técnicas (períodos cortos y temas específicos)]
                      td 
                        ul.lista-ul--color.fa-ul.color-adicional-1.mb-0
                          li
                            i.fas.fa-check-circle
                            | Juegos de negocios.
                          li
                            i.fas.fa-check-circle
                            | Debates.
                          li
                            i.fas.fa-check-circle
                            | Métodos de consenso.
                          li
                            i.fas.fa-check-circle
                            | Discusión en panel.
                          li
                            i.fas.fa-check-circle
                            | Seminario.
                          li
                            i.fas.fa-check-circle
                            | Simposio.
                          li
                            i.fas.fa-check-circle
                            | Juego de roles.
                          li.mb-0
                            i.fas.fa-check-circle
                            | Simulaciones.
                    tr.bg-4
                      td #[b Técnicas (períodos largos)]
                      td 
                        ul.lista-ul--color.fa-ul.color-adicional-1.mb-0
                          li
                            i.fas.fa-check-circle
                            | Aprendizaje basado en problemas.
                          li
                            i.fas.fa-check-circle
                            | Método de casos.
                          li
                            i.fas.fa-check-circle
                            | Método de proyectos.
                          li.mb-0
                            i.fas.fa-check-circle
                            | Sistema de instrucción personalizada.

              figcaption Nota. Tomada de Instituto Tecnológico y de Estudios Superiores de Monterrey (s.f.) 

</template>

<script>
export default {
  name: 'Tema2',
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
