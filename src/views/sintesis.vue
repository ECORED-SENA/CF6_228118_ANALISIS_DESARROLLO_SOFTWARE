<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 A continuación, se muestra un mapa conceptual con los elementos más importantes desarrollados en este componente.
    .row.justify-content-center
      .col-12.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="La síntesis detalla un esquema de gestión de proyectos de software que abarca desde la teoría de sistemas, con enfoque en características y objetivos de sistemas automatizados, hasta la innovación tecnológica, destacando la creación de nuevos productos. Incluye también prácticas de diagnóstico colaborativo para evaluar la tecnología de una empresa y se enfoca en la regulación de licencias de software, con especial mención a la normativa colombiana. Las fichas técnicas se presentan como herramientas documentales que siguen estándares internacionales, y se culmina con la propuesta técnica que orienta los términos de referencia y la personalización del servicio al cliente.")
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
