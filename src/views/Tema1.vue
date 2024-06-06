<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Teoría de sistemas
    p.mb-5(data-aos="fade-right") Es el estudio de las características que tienen en común los sistemas; su aplicación se enfoca en los sistemas automatizados.  Los siguientes son algunos de los principios generales de la Teoría General de Sistemas (TGS):
    .row.mb-5
      .col-lg-9.order-2.order-lg-1(data-aos="fade-right")
        .p-4.bg-c3
          .row
            .col-md-auto.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/tema1/img1.svg', style="width:70px" alt='').m-auto
            .col
              ul.lista-ul--separador.mb-0
                li.d-flex
                  i.fas.fa-code(style="color:#1682FB")
                  |
                  p.mb-0 Entre más especiahzado sea un sistema, tiene menos capacidad de adaptarse a circunstancias diferentes.
                li.d-flex
                  i.fas.fa-code(style="color:#1682FB")
                  |
                  p.mb-0 Cuanto mavor sea el sistema, mavor es el número de recursos que deben dedicarse a su mantenimiento diario.
                li.d-flex
                  i.fas.fa-code(style="color:#1682FB")
                  |
                  p.mb-0 Los sistemas siempre forman parte de sistemas mayores y siempre pueden dividirse en sistemas menores.
                li.d-flex
                  i.fas.fa-code(style="color:#1682FB")
                  |
                  p.mb-0 Los sistemas crecen.
      .col-lg-3.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema1/img1.png', style="width:250px" alt='').m-auto
    p(data-aos="fade-right") La Teoría General de Sistemas (TGS) se presenta como un ejemplo de representación científica. En sus selecciones conceptuales, no hay definiciones o relaciones con contenidos preestablecidos, pero la observación sí se puede dirigir con referencia a ellas, haciéndola aplicar en contextos identificables. (Arnold, 1989). 
    p.mb-5(data-aos="fade-right") Los objetivos originales de la Teoría General de Sistemas son los siguientes
    .row.justify-content-center.mb-5
      .col-11.col-md-8.col-lg.m-2(data-aos="fade-right")
        .row
          .col-auto.bg-c4
            .row.align-items-center.h-100
              .col-12
                figure
                  img(src='@/assets/curso/tema1/img3.svg', style="width:60px" alt='').m-auto
          .col.bg-c5
            .p-4
              p.mb-0 Impulsar el desarrollo de una terminología general que permita describir las características, funciones y comportamientos sistémicos.
      .col-11.col-md-8.col-lg.m-2(data-aos="fade-up")
        .row.h-100
          .col-auto.bg-c4
            .row.align-items-center.h-100
              .col-12
                figure
                  img(src='@/assets/curso/tema1/img4.svg', style="width:60px" alt='').m-auto
          .col.bg-c5
            .p-4
              p.mb-0 Desarrollar un conjunto de leyes aplicables a todos estos comportamientos.
      .col-11.col-md-8.col-lg.m-2(data-aos="fade-left")
        .row.h-100
          .col-auto.bg-c4
            .row.align-items-center.h-100
              .col-12
                figure
                  img(src='@/assets/curso/tema1/img5.svg', style="width:60px" alt='').m-auto
          .col.bg-c5
            .p-4
              p.mb-0 Promover una formalización (matemática) de estas leyes.
    .row.justify-content-center.mb-5
      .col-lg-10.mb-5
        .tarjeta.color-primario.p-3(data-aos="fade-up")
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/tema1/img6.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.txt-c1.mb-1 Conceptos Teoría General de Sistemas
                  p Lo invitamos a consultar el Anexo denominado Conceptos, donde se describen los principales conceptos de la Teoría General de Sistemas, según Arnold (1989) y otros autores.
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexo_Conceptos.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download
    .row.bg-c6.mb-5
      .col-12
        .px-5
          .row.mb-4(data-aos="fade-down")
            .col-auto.bg-c7
              .px-3.pb-0
                .row.align-items-end
                  .col-auto.px-0
                    figure.fig-p1
                      img(src='@/assets/curso/tema1/img8.svg', style="width:50px" alt='').m-auto
                  .col
                    h3.text-white Tecnología e innovación
          p.mb-5(data-aos="fade-right") Para definir tecnología e innovación, se presentan los conceptos de varios autores:
          .row.justify-content-center.mb-4
            .col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
              .p-4.bg-c8
                .row
                  .col-md-auto.mb-4.mb-md-0
                    figure
                      img(src='@/assets/curso/tema1/img9.svg', style="width:70px" alt='').m-auto
                  .col
                    p.mb-0 Pavón y Goodman (1976) definen la innovación como un conjunto de actividades localizadas en un tiempo y lugar específicos, que conducen a la introducción exitosa en el mercado de una idea por primera vez. Esta idea generalmente se asocia con la creación de productos o servicios nuevos y de calidad, así como con la gestión y organización.
            .col-lg-5(data-aos="fade-left")
              .p-4.bg-c8
                .row
                  .col-md-auto.mb-4.mb-md-0
                    figure
                      img(src='@/assets/curso/tema1/img10.svg', style="width:70px" alt='').m-auto
                  .col
                    p.mb-0 Coque (2002) describe la innovación tecnológica como algo atribuible al mercado y que se aplica de forma permanente. Su principal objetivo es contribuir al mejoramiento del desarrollo del sector productivo de bienes y servicios, además de incrementar la calidad de vida mediante el abastecimiento de productos excelentes a los consumidores.
          .row.justify-content-center.mb-5
            .col-lg-10
              .p-4.bg-c8(data-aos="fade-down")
                .row
                  .col-md-auto.mb-4.mb-md-0
                    figure
                      img(src='@/assets/curso/tema1/img11.svg', style="width:70px" alt='').m-auto
                  .col
                    p.mb-0 Oberto (2007) sostiene que solo se puede considerar "innovación" a aquellas ideas que se utilizan para satisfacer una necesidad concreta.
          .row
            .col-lg-3.mb-4.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/tema1/img2.png', style="width:280px" alt='').m-auto
            .col-lg-9(data-aos="fade-left")
              .row
                .col-auto.d-none.d-md-block
                  figure.mt-2
                    img(src='@/assets/curso/tema1/img12.svg', style="width:70px" alt='').m-auto
                .col
                  p Desde otra perspectiva, la innovación tecnológica en las empresas se caracteriza por tener especificidades y limitaciones relacionadas con el origen natural de su fabricación y las características de su consumo. Además, la innovación trasciende la investigación y el desarrollo, abarcando las fases científicas, técnicas, comerciales y financieras necesarias para el éxito de productos nuevos o mejorados, o la introducción de un nuevo servicio.
                  p.mb-0 En el siguiente video, se presenta el concepto:
    .row.justify-content-center.mb-5
      .col-lg-10
        figure(data-aos="fade-left")
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/UKxgK7O0R4g?si=ESzN2HKX24h2o79e" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    .row.mb-4.pt-5(data-aos="fade-down")
      .col-auto.bg-c7
        .px-3.pb-0
          .row.align-items-end
            .col-auto.px-0
              figure.fig-p1
                img(src='@/assets/curso/tema1/img8.svg', style="width:50px" alt='').m-auto
            .col
              h3.text-white Clasificación de tecnología
    p.mb-5(data-aos="fade-right") La clasificación de la tecnología está compuesta por diferentes formas y tecnologías que se pueden encontrar en una organización, y que se agrupan según sus atributos.
    .row.justify-content-center.mb-5
      .col-lg-10
        .p-4.bg-c9
          .row.justify-content-center
            .col-10.col-lg.m-2
              .p-4.bg-c10(data-aos="fade-right")
                ul.lista-ul--separador.mb-0
                  li.d-flex.mb-0
                    i.fas.fa-code(style="color:#1682FB")
                    |
                    p.mb-0 Naturaleza
            .col-10.col-lg.m-2
              .p-4.bg-c10(data-aos="fade-down")
                ul.lista-ul--separador.mb-0
                  li.d-flex.mb-0
                    i.fas.fa-code(style="color:#1682FB")
                    |
                    p.mb-0 Forma de obtención
            .col-10.col-lg.m-2
              .p-4.bg-c10(data-aos="fade-up")
                ul.lista-ul--separador.mb-0
                  li.d-flex.mb-0
                    i.fas.fa-code(style="color:#1682FB")
                    |
                    p.mb-0 Aplicación
          .row.justify-content-center
            .col-10.col-lg.m-2
              .p-4.bg-c10(data-aos="fade-left")
                ul.lista-ul--separador.mb-0
                  li.d-flex.mb-0
                    i.fas.fa-code(style="color:#1682FB")
                    |
                    p.mb-0 Grado de  desarrollo
            .col-10.col-lg.m-2
              .p-4.bg-c10(data-aos="fade-down")
                ul.lista-ul--separador.mb-0
                  li.d-flex.mb-0
                    i.fas.fa-code(style="color:#1682FB")
                    |
                    p.mb-0 Injerencia
            .col-10.col-lg.m-2
              .p-4.bg-c10(data-aos="fade-up")
                ul.lista-ul--separador.mb-0
                  li.d-flex.mb-0
                    i.fas.fa-code(style="color:#1682FB")
                    |
                    p.mb-0 Pertinencia
    p.mb-5(data-aos="fade-right") El concepto de gestión de la tecnología se entiende como el proceso de administración, compra, aplicación y propagación de esta, en diferentes sectores, entre ellos:
    .row.bg-c12
      .col-12
        .px-5.pt-5
          .row.justify-content-center.mb-5
            .col-md-10.col-lg.m-2
              .p-4.bg-c11.shadow(data-aos="fade-right")
                figure.mb-4
                  img(src='@/assets/curso/tema1/img14.svg', style="width:90px" alt='').m-auto
                p.text-center.mb-0 #[b Industrial]
            .col-md-10.col-lg.m-2
              .p-4.bg-c11.shadow(data-aos="fade-down")
                figure.mb-4
                  img(src='@/assets/curso/tema1/img15.svg', style="width:90px" alt='').m-auto
                p.text-center.mb-0 #[b Servicios]
            .col-md-10.col-lg.m-2
              .p-4.bg-c11.shadow(data-aos="fade-left")
                figure.mb-4
                  img(src='@/assets/curso/tema1/img16.svg', style="width:90px" alt='').m-auto
                p.text-center.mb-0 #[b Público y privado]
          .row.mb-5
            .col-md-auto.d-none.d-md-block(data-aos="fade-right")
              figure.mt-2
                img(src='@/assets/curso/tema1/img12.svg', style="width:90px" alt='').m-auto
            .col(data-aos="fade-left")
              .p-4.bg-c13
                p.mb-0 Comprende, desde luego, la administración del proceso de innovación, investigación y desarrollo (I+D). Se constituye como la mejor forma de integrar y utilizar la tecnología para facilitar el desarrollo de productos, así como para definir y mejorar procesos de índole industrial.
          .row.justify-content-center.mb-5
            .col-lg-10
              .p-4.bg-c14(data-aos="fade-down")
                .row
                  .col-md-auto.mb-4.mb-md-0
                    figure
                      img(src='@/assets/curso/tema1/img18.svg', style="width:90px" alt='').m-auto
                  .col
                    p.mb-0 Uno de los objetivos de la gestión de la tecnología es #[b evitar prolongar innecesariamente las inversiones, optimizar la productividad, aumentar la calidad, proponer nuevos productos y servicios al mercado, así como promover el desarrollo de nuevo conocimiento]. Esta gestión se establece como la forma más efectiva de administrar el conocimiento para solucionar diversos problemas sociales, humanos y ambientales.
          .row
            .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/tema1/img20.svg', style="width:350px" alt='').m-auto
            .col-lg-8(data-aos="fade-left")
              p Según Gaynor (1999), existe una diferencia entre los conceptos de gestión y administración. La administración implica supervisar las principales tareas asignadas para mantener una organización en funcionamiento, mientras que la gestión incorpora grados de creatividad, liderazgo, preocupación y riesgo por el desempeño futuro. (p. 5)
              p.mb-0 Es importante aclarar que, aunque la mayoría de las empresas administran sus recursos tecnológicos, no todas logran gestionarlos adecuadamente, principalmente porque no fomentan constantemente la innovación.
    Separador
    #t_1_1
    .titulo-segundo.color-acento-contenido
      h2 1.1 Diagnósticos
    p.mb-5(data-aos="fade-right") El diagnóstico tecnológico se define como una actividad de observación colaborativa entre la empresa y expertos (tanto internos como externos), implementada mediante una metodología previamente establecida. Esta metodología busca definir tanto las necesidades como el potencial tecnológico de la empresa, resultando en la identificación de sus fortalezas y debilidades. Se analizan aspectos tanto de orden interno como externo.
    .row.bg-c15
      .col-12
        .px-5
          .row.justify-content-center.mb-5(data-aos="fade-right")
            .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
              .crd_hover_txt1(data-aos="flip-left")
                .crd_hover_txt1--img
                  figure
                    img(src="@/assets/curso/tema1/img4.png", alt="alt")
                .crd_hover_txt1--body
                  p #[b Internamente]
                  p.text-center.mb-0 Se pretende inventariar y evaluar los recursos tecnológicos con los que cuenta la empresa.
            .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
              .crd_hover_txt1(data-aos="flip-left")
                .crd_hover_txt1--img
                  figure
                    img(src="@/assets/curso/tema1/img5.png", alt="alt")
                .crd_hover_txt1--body
                  p #[b Externamente]
                  p.text-center.mb-0 Se examina lo que hacen los competidores o la brecha que los separa de los líderes del sector.
          .row.mb-5
            .col-auto.d-none.d-md-block(data-aos="fade-right")
              figure.mt-2
                img(src='@/assets/curso/tema1/img12.svg', style="width:70px" alt='').m-auto
            .col(data-aos="fade-left")
              p.mb-0 Un diagnóstico facilita la identificación, determinación y evaluación del potencial tecnológico que posee una empresa dentro del ambiente en el que opera, como parte de una estrategia global.
          .row.justify-content-center.mb-5
            .col-lg-10
              .p-4.bg-c16(data-aos="fade-right")
                .row.align-items-center
                  .col-md-auto.mb-4.mb-md-0
                    figure
                      img(src='@/assets/curso/tema1/img21.svg', style="width:80px" alt='').m-auto
                  .col
                    p.mb-0 Como objetivo principal, el diagnóstico tecnológico identifica diversas capacidades de la empresa para un desarrollo eficiente de innovaciones. Funciona esencialmente como una herramienta que distingue entre las capacidades que son necesarias y las que actualmente posee la empresa (brechas).
          .row.justify-content-center.mb-5
            .col-lg-10
              .tarjeta.color-primario.p-3(data-aos="fade-left")
                .row.justify-content-around.align-items-center
                  .col-3.col-sm-2.col-lg-1
                    img(src="@/assets/curso/tema1/img6.svg")
                  .col
                    .row.justify-content-between.align-items-center
                      .col.mb-3.mb-sm-0
                        h3.txt-c1.mb-1 Matriz de evaluación de las capacidades tecnológicas
                        p Lo invitamos a consultar el Anexo denominado Matriz de evaluación de las capacidades tecnológicas, para evaluar una empresa.
                      .col-sm-auto
                        a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexo_Matriz_evaluacion.xlsx')" target="_blank")
                          span Descargar
                          i.fas.fa-file-download
    Separador
    #t_1_2
    .titulo-segundo.color-acento-contenido
      h2 1.2 Soluciones
    .row.mb-5
      .col-lg-10.order-2.order-lg-1(data-aos="fade-right")
        p.mb-0 Uno de los grandes desafíos del proceso de innovación es el abordaje unidireccional de los problemas dentro de un sistema. Una manera de mejorar esta situación y adoptar una perspectiva más amplia, que ofrezca diversas opciones para potenciar soluciones, es utilizar una técnica desarrollada por Alex F. Osborn, la cual ha sido además enriquecida por varios autores. Esta técnica consiste en plantear una serie de preguntas que exploran múltiples posibilidades, estimulando así las capacidades creativas de las personas.
      .col-lg-2.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema1/img22.svg', style="width:180px" alt='').m-auto
    .row
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema1/img6.png', style="width:340px" alt='').m-auto
      .col-lg-8(data-aos="fade-left")
        .row.mb-4
          .col-12
            .p-4.bg-c17
              .row.align-items-center
                .col-md-auto.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/tema1/img23.svg', style="width:80px" alt='').m-auto
                .col 
                  p.mb-0 De esta forma, las soluciones creativas tienen como objetivo investigar alternativas para resolver un problema mediante la aplicación metodológica de un conjunto de preguntas que promueven la consideración de opciones distintas a las ya existentes. Como se presenta a continuación:
        .row.mb-4
          .col-lg-6.mb-4.mb-lg-0
            .p-4.bg-c8
              p #[b Describir la situación]
              ul.lista-ul.mb-0
                li.d-flex
                  i.fas.fa-code(style="color:#1682FB")
                  |
                  p.mb-0 Exponer la situación que se abordará.
                li.d-flex
                  i.fas.fa-code(style="color:#1682FB")
                  |
                  p.mb-0 Presentar el contexto de la situación actual.
          .col-lg-6
            .p-4.bg-c8
              p #[b Definir el problema]
              ul.lista-ul.mb-0
                li.d-flex
                  i.fas.fa-code(style="color:#1682FB")
                  |
                  p.mb-0 Identificar el problema a tratar.
                li.d-flex
                  i.fas.fa-code(style="color:#1682FB")
                  |
                  p.mb-0 Formular el problema identificado.
        .row
          .col-lg-6.mb-4.mb-lg-0
            .p-4.bg-c8
              p #[b Analizar el problema]
              ul.lista-ul.mb-0
                li.d-flex
                  i.fas.fa-code(style="color:#1682FB")
                  |
                  p.mb-0 ¿Qué se puede sustituir?
                li.d-flex
                  i.fas.fa-code(style="color:#1682FB")
                  |
                  p.mb-0 ¿Qué se puede combinar?
                li.d-flex
                  i.fas.fa-code(style="color:#1682FB")
                  |
                  p.mb-0 ¿Qué se puede adaptar?
                li.d-flex
                  i.fas.fa-code(style="color:#1682FB")
                  |
                  p.mb-0 ¿Qué se puede modificar?
                li.d-flex
                  i.fas.fa-code(style="color:#1682FB")
                  |
                  p.mb-0 ¿Qué se puede intercambiar?
                li.d-flex
                  i.fas.fa-code(style="color:#1682FB")
                  |
                  p.mb-0 ¿Qué se puede eliminar?
                li.d-flex
                  i.fas.fa-code(style="color:#1682FB")
                  |
                  p.mb-0 ¿Qué se puede invertir?
          .col-lg-6
            .p-4.bg-c8.h-100
              p #[b Tomar decisiones]
              ul.lista-ul.mb-0
                li.d-flex
                  i.fas.fa-code(style="color:#1682FB")
                  |
                  p.mb-0 Evaluar ideas de posibles soluciones.
                li.d-flex
                  i.fas.fa-code(style="color:#1682FB")
                  |
                  p.mb-0 Análisis de ideas a partir de criterios definidos.
                li.d-flex
                  i.fas.fa-code(style="color:#1682FB")
                  |
                  p.mb-0 Definir criterios de evaluación de posibles soluciones.
                li.d-flex
                  i.fas.fa-code(style="color:#1682FB")
                  |
                  p.mb-0 Seleccionar la solución.
      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
