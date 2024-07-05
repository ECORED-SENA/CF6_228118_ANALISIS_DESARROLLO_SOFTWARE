<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Fichas técnicas
    p.mb-5(data-aos="fade-right") Una ficha técnica es un documento que detalla las características o funciones de un #[i software] desarrollado, funcionando como una herramienta esencial para transmitir información relevante sobre un tema específico. Este documento contiene datos útiles y concisos, cuyo contenido varía según la finalidad y el tipo de ficha.
    .row.mb-5
      .col-12
        .p-4.bg-c26(data-aos="fade-left")
          .row.justify-content-center
            .col-lg-8.order-2.order-lg-1
              p.mb-0 #[b La ficha técnica es especialmente útil para comercializar o promocionar un producto o servicio. Es crucial que contenga información veraz, ofreciendo datos claros y precisos sobre las características de los productos de #[i software] desarrollados.]
            .col-lg-auto.mb-4.mb-lg-0.order-1.order-lg-2
              figure
                img(src='@/assets/curso/tema3/img2.svg', style="width:170px" alt='').m-auto
    .row.mb-4.pt-4(data-aos="fade-down")
      .col-auto.bg-c7
        .px-3.pb-0
          .row.align-items-end
            .col-auto.px-0
              figure.fig-p1
                img(src='@/assets/curso/tema1/img8.svg', style="width:50px" alt='').m-auto
            .col
              h3.text-white Elaboración de la ficha técnica
    .row.align-items-center.mb-5
      .col-lg-9.order-2.order-lg-1(data-aos="fade-right")
        .row.mb-3
          .col-md-auto.d-none.d-md-block
            figure.mt-2
              img(src='@/assets/curso/tema2/img1.svg', style="width:70px" alt='').m-auto
          .col
            p.mb-0 Para la elaboración de una ficha técnica, es recomendable apoyarse en normativas establecidas. En este caso, la ficha técnica se elaborará tomando como referencia la norma NTC ISO 9000, Sistema de Gestión de Calidad.
        .tarjeta.color-primario.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/tema1/img6.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.txt-c1.mb-1 Generalidades sobre ISO-9000
                  p Para obtener más información sobre la norma ISO, incluyendo sus objetivos, finalidades y terminología, puede consultar el siguiente sitio web.
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://www.iso.org/obp/ui/es/#iso:std:iso:9000:ed-4:v1:es" target="_blank")
                    span Ver enlace
                    i.fas.fa-link
      .col-lg-3.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema3/img1.png', style="width:270px" alt='').m-auto
    .row.mb-4.pt-4(data-aos="fade-down")
      .col-auto.bg-c7
        .px-3.pb-0
          .row.align-items-end
            .col-auto.px-0
              figure.fig-p1
                img(src='@/assets/curso/tema1/img8.svg', style="width:50px" alt='').m-auto
            .col
              h3.text-white Diligenciamiento
    p.mb-5(data-aos="fade-right") A continuación, se realiza la descripción para el diligenciamiento de un ejemplo de una ficha técnica de productos de #[i software].
    .row.bg-c27
      .col-12
        .px-5
          .row.mb-5
            .col-12
              .p-4.p-lg-5.bg-c28(data-aos="fade-right")
                .titulo-sexto.color-acento-contenido.mb-4
                  p.mb-0 #[b Tabla 1.] Ejemplo ficha técnica
                .tabla-a.color-primario
                  table
                    thead
                      tr
                        th.text-white Registro del formato de ficha técnica
                        th.text-white Responsable (coordinador encargado)
                    tbody
                      tr
                        td
                          p Para realizar el diligenciamiento de la ficha técnica, el coordinador técnico de desarrollo se apoya en el coordinador de base de datos y el coordinador de infraestructura.
                          p.mb-0 Se deben llenar los campos de acuerdo con:
                        td
                      tr
                        td
                          p #[b CARACTERÍSTICAS DEL PRODUCTO]
                          br
                          p.mb-0 #[b Nombre del producto:] nombre con el que será identificado el producto.
                          p.mb-0 #[b Línea de producción:] a qué sistema pertenece.
                          p.mb-0 #[b Versiones anteriores:] número y nombre del último desarrollo del producto.
                          p.mb-0 #[b Versión actual:] número con el que se identificará el nuevo producto.
                          p.mb-0 #[b Módulo:] nombre técnico del módulo.
                        td
                      tr
                        td
                          p #[b DESCRIPCIÓN DEL PRODUCTO]
                          br
                          p.mb-0 #[b Descripción general del producto:] descripción breve del nombre del producto.
                          p.mb-0 #[b Objetivo:] definir el propósito principal del producto, especificando el problema que resuelve o la necesidad que satisface.
                        td
                      tr
                        td
                          p #[b ARQUITECTURA]
                          br
                          p.mb-0 #[b Descripción:] explica el tipo de arquitectura de desarrollo del aplicativo.
                        td
                      tr
                        td
                          p #[b REQUERIMIENTOS DEL PRODUCTO]
                          br
                          p.mb-0 #[b Requisitos del sistema (servidor)]
                          p.mb-0 #[b #[i Hardware]:] se describen los requerimientos físicos mínimos que debe tener el equipo.
                          p.mb-0 #[b #[i Software]:] se describen los requerimientos lógicos necesarios para la ejecución del aplicativo.
                          p.mb-0 #[b Otros:] recomendaciones para que el aplicativo funcione mejor.
                          br
                          p.mb-0 #[b Requisitos del sistema (cliente)]
                          p.mb-0 #[b #[i Hardware]:] se describen los requerimientos físicos mínimos que debe tener el equipo.
                          p.mb-0 #[b #[i Software]:] se describen los requerimientos lógicos necesarios para la ejecución del aplicativo.
                          p.mb-0 #[b Otros:] recomendaciones para que el aplicativo funcione mejor.
                        td
                      tr
                        td
                          p #[b REQUERIMIENTOS]
                          br
                          p.mb-0 #[b Requerimientos funcionales generales:] definición de funciones que el sistema realizará.
                          p.mb-0 #[b Requerimientos adicionales:] funcionalidades adicionales para el correcto funcionamiento del sistema.
                          p.mb-0 #[b Clientes del producto:] características del cliente o usuarios finales que puedan usar el producto.
                        td
          .row.mb-5
            .col-12
              .p-4.p-lg-5.bg-c28(data-aos="fade-left")
                .titulo-sexto.color-acento-contenido.mb-4
                  p.mb-0 #[b Tabla 2.] Historial de modificaciones
                .tabla-a.color-primario
                  table
                    thead
                      tr
                        th.text-white Versión
                        th.text-white Naturaleza del cambio
                        th.text-white Fecha de aprobación
                        th.text-white Fecha validación
                    tbody
                      tr
                        td 00
                        td Actualización del documento
                        td 25/05/2021
                        td 25/06/2021
                      tr
                        td 01
                        td Actualización del documento
                        td 25/07/2021
                        td 25/08/2021
          .row
            .col-12
              .p-4.p-lg-5.bg-c28(data-aos="fade-right")
                .titulo-sexto.color-acento-contenido.mb-4
                  p.mb-0 #[b Tabla 3.] Firmas
                .tabla-a.color-primario
                  table
                    thead
                      tr
                        th.text-white Elaboró
                        th.text-white Aprobó
                        th.text-white Validó
                    tbody
                      tr
                        td Firma
                        td Firma
                        td Firma
                      tr
                        td Fecha
                        td Fecha
                        td Fecha

</template>

<script>
export default {
  name: 'Tema3',
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
