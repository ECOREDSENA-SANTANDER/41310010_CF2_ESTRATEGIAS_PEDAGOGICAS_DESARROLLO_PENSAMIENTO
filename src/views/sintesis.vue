<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 Las técnicas y estrategias de formación constituyen un enfoque integral para el desarrollo educativo, combinando teorías de enseñanza, métodos específicos y la estimulación del pensamiento creativo. 
      span.text-dest.fw-bold Estas estrategias buscan no solo impartir conocimiento, sino también fomentar la capacidad crítica y adaptativa de los estudiantes, 
      | aprovechando diversos recursos pedagógicos que promueven la innovación y la aplicación práctica de las ideas. Este enfoque equilibrado impulsa tanto el desarrollo individual como el colectivo, permitiendo una formación más completa y flexible.

    .row.justify-content-center
      .col-lg-8.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="El esquema presenta tres áreas principales: teorías sobre las inteligencias múltiples, el discurso pedagógico y la relación entre cognición y aprendizaje. Estos componentes están conectados con el modelo pedagógico y la pedagogía en general. Cada área aborda aspectos esenciales, como la identificación de las distintas inteligencias, las normas y tipos de discurso pedagógico, y los modelos de aprendizaje y estrategias cognitivas, incluyendo la PNL. En conjunto, estos elementos proporcionan una estructura integral para comprender y aplicar prácticas educativas efectivas.")
    .row.justify-content-center  
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
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
