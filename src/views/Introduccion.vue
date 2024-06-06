<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.align-items-center.mb-5
      .col-md-auto.mb-4.mb-md-0
        figure
          img(src='@/assets/curso/intro/img1.svg', style="width:180px" alt='').m-auto
      .col
        p.mb-0 La importancia de llevar a cabo los procesos en la ingeniería de #[i software] de manera flexible es fundamental para permitir que el equipo de desarrolladores realice su trabajo de forma efectiva. Debido a la diversidad de tipos de software, no existe un proceso universal. En cambio, todo proceso debe incorporar las cuatro actividades principales de la ingeniería de #[i software]: especificación, desarrollo, validación y evolución del #[i software]. Además, debe contar con:
    .row.justify-content-center
      .col-lg-10
        .p-4.p-md-5.bg-c1
          .row.bg-c2.mb-4
            .col-md-auto.px-md-0.pt-4.pt-md-0
              figure
                img(src='@/assets/curso/intro/img1.png', style="width:180px" alt='').m-auto
            .col.ps-0
              .p-3.h-100
                p.mb-0 #[b Propuesta de #[i software]]
                p.mb-0 • Una propuesta adecuada es esencial aI ofrecer nuestros servicios, dado que el éxito del proyecto depende en gran medida de la calidad técnica de la misma. La oferta de servicios debe convencer al cliente de que la solución propuesta es la más adecuada para satisfacer las necesidades específicas de su empresa.
          .row.bg-c2.mb-4
            .col-md-auto.px-md-0.pt-4.pt-md-0
              figure
                img(src='@/assets/curso/intro/img2.png', style="width:180px" alt='').m-auto
            .col.ps-0
              .p-3.h-100
                p.mb-0 #[b Documento técnico]
                p.mb-0 • La propuesta técnica debe cumplir con las normativas aplicables y proporcionar información detallada sobre la solución de #[i software] propuesta para resolver un problema de negocio. Este documento puede variar según la naturaleza de la empresa solicitante, ya sea privada, gubernamental, una fundación o una ONG.
          .row.bg-c2
            .col-md-auto.px-md-0.pt-4.pt-md-0
              figure
                img(src='@/assets/curso/intro/img3.png', style="width:180px" alt='').m-auto
            .col.ps-0
              .p-3.h-100
                p.mb-0 #[b Adaptación y claridad en las propuestas]
                p.mb-0 • Es fundamental adaptar la propuesta a los formatos requeridos por las empresas. Esta debe ser clara, concreta, explícita y fácil de entender, asegurando así que se transmitan los puntos clave de manera efectiva.
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
