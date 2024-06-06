<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Costos
    .row
      .col-lg-9.order-2.order-lg-1
        p(data-aos="fade-right") El costo, también llamado coste, representa el valor económico que se incurre para #[b producir un producto, prestar un servicio o vender un bien]. Es fundamental tener en cuenta la adquisición de insumos y los gastos derivados de la producción, tales como #[b el pago de mano de obra, gastos administrativos, entre otros].
        .row
          .col-12
            .p-4.bg-c31(data-aos="fade-down")
              .row
                .col-auto.d-none.d-md-block
                  figure.mt-1
                    img(src='@/assets/curso/tema5/img1.svg', style="width:80px" alt='').m-auto
                .col
                  p En este caso particular, la estimación del costo de desarrollo de #[i software] es un elemento crítico en el análisis de proyectos informáticos y en la elaboración de la propuesta técnica. Es importante considerar el esfuerzo, costo y tiempo asociados a las actividades que se llevarán a cabo en el proyecto. Al planificar los costos, se deben tener en cuenta los siguientes aspectos:
                  ul.lista-ul.mb-0
                    li.d-flex
                      i.fas.fa-code(style="color:#1682FB")
                      |
                      p.mb-0 #[b El tamaño del #[i software] a desarrollar y el tiempo estimado de producción.]
                    li.d-flex
                      i.fas.fa-code(style="color:#1682FB")
                      |
                      p.mb-0 #[b ¿Se realizará el trabajo por módulos?]
                    li.d-flex
                      i.fas.fa-code(style="color:#1682FB")
                      |
                      p.mb-0 #[b ¿Es necesario contratar personal de apoyo para la producción y/o soporte?]
                    li.d-flex
                      i.fas.fa-code(style="color:#1682FB")
                      |
                      p.mb-0 #[b ¿Cómo se proporcionará el soporte técnico? (Duración, presencial o remoto).]
                    li.d-flex
                      i.fas.fa-code(style="color:#1682FB")
                      |
                      p.mb-0 #[b ¿Es necesario adquirir equipos tecnológicos?]
      .col-lg-3.mb-4.mb-lg-0.order-1.order-lg-2
        figure(data-aos="fade-left")
          img(src='@/assets/curso/tema5/img1.png', style="width:300px" alt='').m-auto

</template>

<script>
export default {
  name: 'Tema5',
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
