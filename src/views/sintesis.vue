<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 Las técnicas y estrategias de formación constituyen un enfoque integral para el desarrollo educativo, combinando teorías de enseñanza, métodos específicos y la estimulación del pensamiento creativo. 
      | Estas estrategias buscan no solo impartir conocimiento, sino también fomentar la capacidad crítica y adaptativa de los estudiantes, aprovechando diversos recursos pedagógicos que promueven la innovación y la aplicación práctica de las ideas. Este enfoque equilibrado impulsa tanto el desarrollo individual como el colectivo, permitiendo una formación más completa y flexible.

    .row.justify-content-center
      .col-lg-8.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="El esquema organiza las técnicas y estrategias de formación en cuatro categorías principales. Estas incluyen teorías de formación, estrategias educativas, pensamiento creativo y un componente de pensamiento y desarrollo. Cada una de estas secciones se desglosa en elementos específicos: las teorías de formación abarcan métodos y procedimientos, las estrategias educativas combinan técnicas y recursos pedagógicos, el pensamiento creativo implica la generación de nuevas ideas y transformación, y el componente de pensamiento y desarrollo se centra en el pensamiento lateral y vertical.")
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
