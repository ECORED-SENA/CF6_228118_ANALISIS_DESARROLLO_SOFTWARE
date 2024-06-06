<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Licencias de #[i software]
    .row.mb-5
      .col-md-auto.d-none.d-md-block(data-aos="fade-right")
        figure.mt-2
          img(src='@/assets/curso/tema2/img1.svg', style="width:70px" alt='').m-auto
      .col(data-aos="fade-left")
        p.mb-0 Una licencia de #[i software] es un acuerdo esencial que regula el uso y distribución de obras intelectuales en la tecnología. Este contrato establece las condiciones clave para el uso de software, resaltando la importancia de los derechos de autor y la propiedad intelectual. En el siguiente video, se presenta una explicación:
    .row.justify-content-center.mb-5
      .col-lg-10
        figure(data-aos="fade-down")
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/19ooUSDZwuQ?si=fP3HzR6cqr3H44dG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    p.mb-5 Algunos términos importantes son:
    .row.bg-c18
      .col-12
        .px-5
          .row.justify-content-center.mb-5(data-aos="fade-left")
            .col-xl-5.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
              .crd_hover_txt2(data-aos="flip-right")
                .crd_hover_txt2--img
                  figure
                    img(src="@/assets/curso/tema2/img2.png", alt="alt")
                .crd_hover_txt2--body
                  p.text-white #[b Licencia]
                  p.text-white.mb-0 Este término se refiere a un acuerdo o contrato entre un desarrollador y un usuario, en el que el #[i software] está sujeto a propiedad intelectual y derechos de autor. La licencia detalla los derechos y obligaciones de ambas partes. La elección de la licencia de distribución del #[i software] depende del desarrollador.
            .col-xl-5.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
              .crd_hover_txt2(data-aos="flip-left")
                .crd_hover_txt2--img
                  figure
                    img(src="@/assets/curso/tema2/img3.png", alt="alt")
                .crd_hover_txt2--body
                  p.text-white #[b Patente]
                  p.text-white.mb-0 Consiste en un derecho exclusivo otorgado por el Estado para la protección de una invención, ya sea un producto material o inmaterial que se pueda explotar comercialmente. Este derecho se concede por un período de tiempo limitado y a conveniencia del solicitante.
          .row.mb-5
            .col-12.bg-c19.shadow(data-aos="fade-left")
              .row.align-items-center
                .col-lg-auto.px-lg-0.pt-4.pt-lg-0
                  figure
                    img(src='@/assets/curso/tema2/img4.png', style="width:280px" alt='').m-auto
                .col
                  .p-4.p-lg-0
                    p.mb-0 #[b Derecho de autor o copyright:] es una forma de protección otorgada por las leyes vigentes en la mayoría de los países para los autores de obras originales. Esta protección incluye obras literarias, dramáticas, musicales, artísticas e intelectuales, ya sean publicadas o inéditas.
          .row.mb-5
            .col-12
              .p-4.bg-c19.shadow(data-aos="fade-right")
                p.mb-4 #[b #[i Software] libre:] este tipo de #[i software] ofrece libertades específicas que incluyen:
                .row
                  .col-md-6.col-lg.mb-4.mb-lg-0
                    .p-4.bg-c17.h-100
                      figure.mb-4
                        img(src='@/assets/curso/tema2/img2.svg', style="width:80px" alt='')
                      p Ejecutar el programa para cualquier propósito.
                  .col-md-6.col-lg.mb-4.mb-lg-0
                    .p-4.bg-c17.h-100
                      figure.mb-4
                        img(src='@/assets/curso/tema2/img3.svg', style="width:80px" alt='')
                      p Estudiar y modificar el programa según las necesidades del usuario.
                  .col-md-6.col-lg.mb-4.mb-md-0
                    .p-4.bg-c17.h-100
                      figure.mb-4
                        img(src='@/assets/curso/tema2/img4.svg', style="width:80px" alt='')
                      p Redistribuir copias del programa.
                  .col-md-6.col-lg
                    .p-4.bg-c17.h-100
                      figure.mb-4
                        img(src='@/assets/curso/tema2/img5.svg', style="width:80px" alt='')
                      p Mejorar el programa y compartir las mejoras con la comunidad.
          .row.mb-5
            .col-12
              .p-4.bg-c19.shadow(data-aos="fade-left")
                p.mb-4 #[b #[i Software] de fuente abierta:] este #[i software] se caracteriza por criterios específicos de distribución:
                .row
                  .col-lg-3.mb-4.mb-lg-0
                    figure
                      img(src='@/assets/curso/tema2/img6.svg', style="width:280px" alt='').m-auto
                  .col
                    ul.lista-ul.mb-0
                      li.d-flex
                        i.fas.fa-code(style="color:#1682FB")
                        |
                        p.mb-0 Libre distribución del #[i software].
                      li.d-flex
                        i.fas.fa-code(style="color:#1682FB")
                        |
                        p.mb-0 Acceso al código fuente para su intervención.
                      li.d-flex
                        i.fas.fa-code(style="color:#1682FB")
                        |
                        p.mb-0 Permitir modificaciones y derivaciones a las mismas condiciones del #[i software] original.
                      li.d-flex
                        i.fas.fa-code(style="color:#1682FB")
                        |
                        p.mb-0 No discriminar a personas o grupos en su uso.
                      li.d-flex
                        i.fas.fa-code(style="color:#1682FB")
                        |
                        p.mb-0 La licencia no debe imponer restricciones tecnológicas.
          .row.mb-5
            .col-12
              .p-4.bg-c19.shadow(data-aos="fade-right")
                .row.align-items-center
                  .col-md-auto.mb-4.mb-md-0
                    figure
                      img(src='@/assets/curso/tema2/img7.svg', style="width:80px" alt='').m-auto
                  .col
                    p.mb-0 #[b #[i Software] de dominio público:] se refiere al #[i software] que no está protegido por derechos de autor y, por tanto, está libre de restricciones de uso asociadas a tales derechos.
    Separador
    #t_2_1
    .titulo-segundo.color-acento-contenido
      h2 2.1.Normativa
    p.mb-5(data-aos="fade-right") Cuando se implementa un #[i software], su uso debe regirse por una normativa que previene futuras sanciones o multas.
    .row.mb-5
      .col.pe-0(data-aos="fade-right")
        .p-4.bg-c20.h-100
          p.mb-0 #[b ¿Cumple con la Ley 603?]
          p.mb-0 En Colombia, la regulación de las licencias de #[i software] está a cargo de la Ley 603 de 2000, también conocida como Ley para el Cumplimiento de las Licencias de #[i Software]. Esta ley obliga a las empresas a presentar un informe de gestión que debe incluir detalles sobre el progreso de los negocios y su estado financiero, administrativo y jurídico. Dicho informe debe demostrar el cumplimiento de las normas relacionadas con la propiedad intelectual y los derechos de autor.
      .col-auto.ps-0.d-none.d-lg-block(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema2/img5.png', style="width:280px" alt='').m-auto
    .row.mb-5
      .col-lg-2.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema2/img6.png', style="width:280px" alt='').m-auto
      .col-lg-10(data-aos="fade-left")
        p La DIAN (Dirección de Impuestos y Aduanas Nacionales) tiene la autoridad para realizar auditorías durante las visitas a las empresas, asegurando así el cumplimiento legal del #[i software] instalado en los equipos de cómputo.
        p.mb-0 Se enumeran a continuación las penalidades por incumplimiento de la Ley 603 de 2000:
    .row.justify-content-center
      .col-lg-10
        .p-4.bg-c21(data-aos="fade-right")
          .row.align-items-center.mb-3
            .col-auto
              figure
                img(src='@/assets/curso/tema2/img9.svg', style="width:50px" alt='').m-auto
            .col
              p.mb-0 Para los administradores de la empresa, sanciones de hasta 200 SMMLV (Salarios Mínimos Mensuales Legales Vigentes).
          .row.align-items-center.mb-3
            .col-auto
              figure
                img(src='@/assets/curso/tema2/img10.svg', style="width:50px" alt='').m-auto
            .col
              p.mb-0 Delito de desfalco de derechos patrimoniales, punible con prisión de entre 2 y 5 años.
          .row.align-items-center.mb-3
            .col-auto
              figure
                img(src='@/assets/curso/tema2/img11.svg', style="width:50px" alt='').m-auto
            .col
              p.mb-0 Infracción a los elementos de protección de los derechos patrimoniales de autor, punible con prisión de 4 a 8 años.
          .row.align-items-center
            .col-auto
              figure
                img(src='@/assets/curso/tema2/img12.svg', style="width:50px" alt='').m-auto
            .col
              p.mb-0 La DIAN también puede imponer sanciones por evasión de impuestos derivados del uso de #[i software] ilegal.
    Separador
    #t_2_2
    .titulo-segundo.color-acento-contenido
      h2 2.2 Tipos de licencia 
    p.mb-5(data-aos="fade-right") Exploramos a continuación los distintos tipos de licencias de #[i software] y sus características principales:
    .row.mb-4.pt-4(data-aos="fade-down")
      .col-auto.bg-c7
        .px-3.pb-0
          .row.align-items-end
            .col-auto.px-0
              figure.fig-p1
                img(src='@/assets/curso/tema1/img8.svg', style="width:50px" alt='').m-auto
            .col
              h3.text-white Licencia de #[i Software Freeware]
    .row.mb-5
      .col-md-auto.d-none.d-md-block(data-aos="fade-right")
        figure.mt-2
          img(src='@/assets/curso/tema2/img1.svg', style="width:70px" alt='').m-auto
      .col(data-aos="fade-left")
        p.mb-0 Las licencias #[i freeware] permiten descargar, instalar y/o usar gratuitamente un programa de computadora. Con este tipo de licencia, no es necesario que el usuario se suscriba, se registre o compre alguna licencia. Estas licencias permiten el acceso al código objeto, pero no al código fuente.
    .row.justify-content-center.mb-5
      .col-lg-10
        .p-4.bg-c17(data-aos="fade-left")
          .row.align-items-center
            .col-md-auto.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/tema2/img7.png', style="width:140px" alt='').m-auto
            .col
              p.mb-0 Ejemplo: el antivirus Avast, que se puede descargar gratuitamente de Internet.
    .row.mb-4.pt-4(data-aos="fade-down")
      .col-auto.bg-c7
        .px-3.pb-0
          .row.align-items-end
            .col-auto.px-0
              figure.fig-p1
                img(src='@/assets/curso/tema1/img8.svg', style="width:50px" alt='').m-auto
            .col
              h3.text-white Licencias de #[i software] libre o #[i software] de código abierto
    .row.align-items-center.mb-3
      .col-lg-9.order-2.order-lg-1(data-aos="fade-right")
        p Este tipo de licencia se caracteriza porque los desarrolladores generalmente ofrecen acceso abierto al código fuente de su #[i software]. Existen diversas licencias creadas por organizaciones, entre las que destaca la GNU GPL (Licencia Pública General de GNU). Esta licencia, creada por la Fundación de Software Libre (Free Software Foundation), es ampliamente utilizada en el mundo del #[i software] libre y código abierto. Garantiza a los usuarios finales, ya sean personas, organizaciones o empresas la libertad de utilizar, estudiar, compartir (copiar) y modificar el #[i software].
        .row
          .col-12
            .p-4.bg-c17
              .row.align-items-center
                .col-md-auto.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/tema2/img8.png', style="width:140px" alt='').m-auto
                .col
                  p.mb-0 Ejemplos: Android, Mozilla, Linux, WordPress y Chromium.
      .col-lg-3.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema2/img9.png', style="width:290px" alt='').m-auto
    p.mb-5(data-aos="fade-right") Este tipo de licencias se subdivide en otras que contienen cláusulas más específicas, como el #[i copyleft].
    .row.bg-c22
      .col-12
        .px-5
          .row.justify-content-center.mb-5
            .col-10.col-md-7.col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
              .row
                .col-12
                  figure
                    img(src='@/assets/curso/tema2/img10.png', style="width:390px" alt='').m-auto
                .col-12
                  .p-4.bg-c23
                    p.text-center #[b #[i Copyleft]]
                    p.text-center Es una versión del copyright diseñada para regular las licencias de software libre. Impide que el material sea distribuido o reformado por alguien no autorizado y establece condiciones específicas de uso del código.
            .col-10.col-md-7.col-lg-4.mb-4.mb-lg-0(data-aos="fade-left")
              .row
                .col-12
                  figure
                    img(src='@/assets/curso/tema2/img11.png', style="width:390px" alt='').m-auto
                .col-12
                  .p-4.bg-c23
                    p.text-center #[b Licencia de #[i software] libre sin protección #[i copyleft]]
                    p.text-center Permite a terceros modificar el producto y licenciarlo bajo sus propios términos, sin imponer restricciones sobre cómo se puede redistribuir el software modificado.
            .col-10.col-md-7.col-lg-4(data-aos="fade-right")
              .row
                .col-12
                  figure
                    img(src='@/assets/curso/tema2/img12.png', style="width:390px" alt='').m-auto
                .col-12
                  .p-4.bg-c23
                    p.text-center #[b Licencia de #[i software] libre con protección #[i copyleft]]
                    p.text-center Obliga a los programadores que redistribuyan su código a adherirse a ciertos lineamientos y restricciones, asegurando que las modificaciones permanezcan bajo las mismas condiciones de licencia del original.
          .row.mb-4.pt-4(data-aos="fade-down")
            .col-auto.bg-c7
              .px-3.pb-0
                .row.align-items-end
                  .col-auto.px-0
                    figure.fig-p1
                      img(src='@/assets/curso/tema1/img8.svg', style="width:50px" alt='').m-auto
                  .col
                    h3.text-white Licencias de #[i software shareware]
          p.mb-5(data-aos="fade-right") Este tipo de licencia permite la descarga gratuita de una versión del #[i software] con funcionalidades limitadas. Tras un período determinado, para continuar utilizando todas las funcionalidades, el usuario debe realizar un pago. Estas licencias no permiten modificaciones, ya que no incluyen el código fuente. Se subdividen en tres categorías: trial, demo y adware.
          .row.justify-content-center.mb-5
            .col-10.col-md-8.col-lg-4.mb-4.mb-lg-0
              .p-4.bg-c24(data-aos="fade-right")
                figure.mb-4
                  img(src='@/assets/curso/tema2/img14.svg', style="width:110px" alt='')
                p.text-white #[b #[i Trial]]
                p.text-white Licencia que activa todas las funcionalidades del #[i software], pero solo por un periodo de tiempo limitado.
            .col-10.col-md-8.col-lg-4.mb-4.mb-lg-0
              .p-4.bg-c24(data-aos="fade-down")
                figure.mb-4
                  img(src='@/assets/curso/tema2/img15.svg', style="width:110px" alt='')
                p.text-white #[b Demo]
                p.text-white Permite el uso del #[i software] de forma indefinida, pero con la limitante de no tener habilitadas todas sus funciones. Comúnmente utilizado en videojuegos.
            .col-10.col-md-8.col-lg-4
              .p-4.bg-c24(data-aos="fade-left")
                figure.mb-4
                  img(src='@/assets/curso/tema2/img16.svg', style="width:110px" alt='')
                p.text-white #[b #[i Adware]]
                p.text-white Licencia que permite utilizar los programas de forma gratuita; sin embargo, a cambio, los programas descargan y muestran publicidad de forma continua.
          .row.mb-4.pt-4(data-aos="fade-down")
            .col-auto.bg-c7
              .px-3.pb-0
                .row.align-items-end
                  .col-auto.px-0
                    figure.fig-p1
                      img(src='@/assets/curso/tema1/img8.svg', style="width:50px" alt='').m-auto
                  .col
                    h3.text-white Licencias de #[i software] propietario
          p(data-aos="fade-right") Esta licencia implica que el autor del #[i software] restringe los derechos de copia, redistribución y modificación de su obra. En consecuencia, si un usuario final desea realizar alguna de estas acciones, deberá pagar una cantidad de dinero al autor para obtener el derecho legal de hacerlo.
    Separador
    #t_2_3
    .titulo-segundo.color-acento-contenido
      h2 2.3 Derechos de autor
    .row.mb-5
      .col-12.bg-c13(data-aos="fade-left")
        .row
          .col-lg-10.order-2.order-lg-1
            .p-4
              .row.mb-3
                .col-auto.d-none.d-md-block
                  figure.mt-2
                    img(src='@/assets/curso/tema2/img17.svg', style="width:60px" alt='').m-auto
                .col
                  p.mb-0 Se refiere a la protección que se otorga a todas las obras artísticas, literarias o científicas por el derecho de autor durante un período determinado, a partir del momento de su creación. En Colombia, la Dirección Nacional de Derechos de Autor (DNDA) es la entidad encargada de proteger estas obras.
              p.mb-0 Cuando el software está protegido por derechos de autor, es necesario establecer claramente en la licencia los usos que serán permitidos al usuario. Comúnmente, los usos autorizados incluyen:
          .col-lg-2.mb-4.mb-lg-0.order-1.order-lg-2.px-lg-0.mt-4.mt-lg-0
            figure
              img(src='@/assets/curso/tema2/img13.png', style="width:260px" alt='').m-auto
    .row.align-items-center.mb-4
      .col-lg-3.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema2/img14.png', style="width:300px" alt='').m-auto
      .col-lg-9(data-aos="fade-left")
        .row.justify-content-center
          .col-10.col-md-6.col-lg-4.mb-4.mb-lg-0
            .p-4.bg-c25
              figure.mb-4
                img(src='@/assets/curso/tema2/img19.svg', style="width:100px" alt='')
              p.mb-0 La ejecución del código del #[i software], ya sea en dispositivos de almacenamiento oen el disco local del equipo donde se instalará el #[i software].
          .col-10.col-md-6.col-lg-4.mb-4.mb-lg-0
            .p-4.bg-c25
              figure.mb-4
                img(src='@/assets/curso/tema2/img20.svg', style="width:100px" alt='')
              p.mb-0 Es fundamental que la licencia especifique el plazo y el territorio de validez de la concesión.
          .col-10.col-md-6.col-lg-4
            .p-4.bg-c25
              figure.mb-4
                img(src='@/assets/curso/tema2/img21.svg', style="width:100px" alt='')
              p.mb-0 La posibilidad de distribuir el #[i software], 10 que incluye realizar nuevas copias y comercializarlas a terceros.
    p(data-aos="fade-right") Finalmente, es importante tener en cuenta que los usuarios solo podrán hacer uso del #[i software] para los fines expresamente autorizados en la licencia.

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
