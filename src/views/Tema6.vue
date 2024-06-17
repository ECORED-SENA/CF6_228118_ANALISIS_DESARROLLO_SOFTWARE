<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 6
      h1 La propuesta técnica
    .row.mb-5
      .col-12
        .p-4.bg-c28(data-aos="fade-right")
          .row.align-items-center
            .col-lg-10.order-2.order-lg-1
              p.mb-0 La propuesta técnica es un documento crucial que se entrega al potencial cliente, donde se detalla la estrategia propuesta para resolver un problema existente. El formato y contenido de la propuesta pueden variar según el tipo de organización solicitante, ya sea privada, gubernamental, fundación u ONG. En estos casos, es importante adaptar la propuesta a los formatos específicos requeridos por cada tipo de organización. Una propuesta debe ser clara, concreta, explícita y fácil de entender.
            .col-lg-2.mb-4.mb-lg-0.order-1.order-lg-2
              figure
                img(src='@/assets/curso/tema6/img1.svg', style="width:180px" alt='').m-auto
    .row.mb-4.pt-4(data-aos="fade-down")
      .col-auto.bg-c7
        .px-3.pb-0
          .row.align-items-end
            .col-auto.px-0
              figure.fig-p1
                img(src='@/assets/curso/tema1/img8.svg', style="width:50px" alt='').m-auto
            .col
              h3.text-white Estructura
    p.mb-5(data-aos="fade-right") Una vez recopilada y analizada toda la información necesaria, se procede a estructurar la propuesta técnica según el siguiente esquema:
    .row.align-items-center.justify-content-center.mb-5
      .col-lg-3.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema6/img1.png', style="width:300px" alt='').m-auto
      .col-lg-5(data-aos="fade-left")
        ul.lista-ul.mb-0
          li.d-flex
            i.fas.fa-code(style="color:#1682FB")
            |
            p.mb-0 #[b Saludos y presentación.]
          li.d-flex
            i.fas.fa-code(style="color:#1682FB")
            |
            p.mb-0 #[b Alcance de la propuesta.]
          li.d-flex
            i.fas.fa-code(style="color:#1682FB")
            |
            p.mb-0 #[b Opciones de propuestas de trabajo (dos o tres).]
          li.d-flex
            i.fas.fa-code(style="color:#1682FB")
            |
            p.mb-0 #[b Cotización por cada propuesta presentada.]
          li.d-flex
            i.fas.fa-code(style="color:#1682FB")
            |
            p.mb-0 #[b Condiciones (forma de pago).]
          li.d-flex
            i.fas.fa-code(style="color:#1682FB")
            |
            p.mb-0 #[b Conclusión y despedida.]
    .row.mb-4.pt-4(data-aos="fade-down")
      .col-auto.bg-c7
        .px-3.pb-0
          .row.align-items-end
            .col-auto.px-0
              figure.fig-p1
                img(src='@/assets/curso/tema1/img8.svg', style="width:50px" alt='').m-auto
            .col
              h3.text-white Términos de Referencia (TdR)
    p(data-aos="fade-right") Es el documento que elabora una empresa, en el cual identifica oportunidades de mejora, necesidades o problemas y las presenta a otra empresa o a un experto informático para su solución. Los Términos de Referencia (TdR) son esenciales para que las empresas entiendan claramente los servicios que necesitan contratar y, para que la contraparte conozca las condiciones bajo las cuales ofrecerán dichos servicios, permitiéndoles elaborar una propuesta técnica adecuada.
    p.mb-5(data-aos="fade-right") A continuación, se detallan algunos aspectos importantes que debe tener en cuenta en relación con los Términos de Referencia (TdR):
    .row.bg-c32
      .col-12
        .px-5
          .row.justify-content-center.mb-5
            .col-md-8.col-lg-6.mb-4
              .p-4.bg-c19.shadow(data-aos="fade-right")
                figure.mb-4
                  img(src='@/assets/curso/tema6/img3.svg', style="width:110px" alt='')
                p #[b Servicio requerido]
                p.mb-0 Los Términos de Referencia (TdR) especifican el servicio que necesita la empresa de forma clara y concisa, incluyendo los objetivos que se esperan lograr con la contratación. Detallan las especificaciones técnicas de la solución informática, los requisitos del contratista, el tiempo de ejecución del contrato y las condiciones de pago.
            .col-md-8.col-lg-6.mb-4
              .p-4.bg-c19.shadow.h-100(data-aos="fade-left")
                figure.mb-4
                  img(src='@/assets/curso/tema6/img4.svg', style="width:110px" alt='')
                p #[b Estructura del documento]
                p.mb-0 Este documento está estructurado con una justificación, alcances del servicio, perfil de la empresa a contratar y condiciones contractuales.
            .col-md-8.col-lg-6.mb-4.mb-lg-0
              .p-4.bg-c19.shadow.h-100(data-aos="fade-right")
                figure.mb-4
                  img(src='@/assets/curso/tema6/img5.svg', style="width:110px" alt='')
                p #[b Empresa nueva]
                p.mb-0 Cuando una empresa es nueva y no maneja los TdR, el experto informático debe acordar una reunión con las partes interesadas o #[i stakeholders]. En esta reunión, se deben hacer preguntas sobre el funcionamiento de la empresa, los procesos que manejan, los servicios que prestan y en qué sector económico están.
            .col-md-8.col-lg-6
              .p-4.bg-c19.shadow.h-100(data-aos="fade-left")
                figure.mb-4
                  img(src='@/assets/curso/tema6/img6.svg', style="width:110px" alt='')
                p #[b Presupuesto]
                p.mb-0 En la mayoría de las ocasiones, y en búsqueda de un servicio justo, será posible proponer un diálogo sobre el presupuesto proyectado para la solución de #[i software]; asimismo, sobre la matriz DOFA de la empresa, para tener claras sus necesidades y ofrecer los servicios adecuados en una propuesta técnica.
          .row.mb-4.pt-4(data-aos="fade-down")
            .col-auto.bg-c7
              .px-3.pb-0
                .row.align-items-end
                  .col-auto.px-0
                    figure.fig-p1
                      img(src='@/assets/curso/tema1/img8.svg', style="width:50px" alt='').m-auto
                  .col
                    h3.text-white Elaboración de la propuesta técnica
          .row.mb-5
            .col-md-auto.d-none.d-md-block(data-aos="fade-right")
              figure.mt-2
                img(src='@/assets/curso/tema2/img1.svg', style="width:70px" alt='').m-auto
            .col(data-aos="fade-left")
              p.mb-0 Es fundamental recordar la importancia de disponer de una papelería adecuada que represente al negocio apropiadamente. El formato del documento ya sea físico o digital, debe contar con un diseño sobrio pero atractivo. El documento debe incluir un encabezado con el nombre de la empresa y su NIT o, en el caso de trabajadores independientes, el nombre de la persona. Este encabezado debe estar acompañado del logo de la empresa.
    .row.mb-5
      .col-lg-3.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema6/img2.png', style="width:280px" alt='').m-auto
      .col-lg-9(data-aos="fade-left")
        .p-4.bg-c17
          p.mb-0 En el pie de página, es necesario incluir la dirección de la empresa junto con datos de contacto tales como números telefónicos, correos electrónicos, y enlaces a redes sociales como WhatsApp, Facebook, Instagram, entre otros. Al elaborar la propuesta, es crucial considerar como insumos principales los Términos de Referencia (TdR) o la información obtenida durante la entrevista inicial.
    p.mb-5(data-aos="fade-right") Explore el recurso que se presenta a continuación para conocer en profundidad los aspectos más importantes sobre la elaboración de la propuesta técnica:
    .row.justify-content-center
      .col-lg-10
        figure(data-aos="fade-down")
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/hXYXmM5p2PU?si=qMOM5mVlSuXiKOkq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    Separador
    #t_6_1
    .titulo-segundo.color-acento-contenido
      h2 6.1 Validación de la propuesta técnica
    p(data-aos="fade-right") La validación de la propuesta técnica para servicios de #[i software] se rige y determina por varios factores críticos, incluyendo la normatividad, los procesos de contratación o licitación y las garantías de efectividad de la propuesta, entre otros aspectos.
    p.mb-5(data-aos="fade-right") A continuación, se presentan los elementos más relevantes que influyen directamente en el proceso de validación de una propuesta técnica:
    .row.mb-5
      .col-12
        .p-4.p-lg-5.bg-c33(data-aos="fade-left")
          .tarjeta.tarjeta--azul1
            .p-4.p-lg-5
              SlyderA(tipo="b")
                .row.align-items-center.justify-content-center
                  .col-lg-5.mb-4.mb-lg-0
                    p.mb-0 #[b Contratación]
                    p.mb-0 Se realiza después de que el cliente haya aceptado una de las propuestas técnicas presentadas, o que al ofertante le hayan adjudicado una licitación. Para legalizar este trámite, es necesario cerrar el acuerdo por medio de un contrato escrito, en el cual estén estipulados todos los términos y condiciones que se acordaron en la propuesta técnica o en el pliego de condiciones.
                  .col-lg-5
                    figure
                      img(src='@/assets/curso/tema6/img3.png', style="width:380px" alt='').m-auto
                .row.align-items-center.justify-content-center
                  .col-lg-5.mb-4.mb-lg-0
                    p.mb-0 #[b Fundamentos]
                    p.mb-0 El fin de los principios o fundamentos en contratación es garantizar a los ciudadanos un proceso público, transparente y con igualdad, al que pueden acceder todas las personas o empresas que cumplan con los requisitos establecidos en un pliego de condiciones publicado por las entidades estatales. Estas pueden ser SENA, DIAN, Fuerzas Militares, ICBF, DANE, universidades, alcaldías, gobernaciones, etc.
                  .col-lg-5
                    figure
                      img(src='@/assets/curso/tema6/img4.png', style="width:380px" alt='').m-auto
                .row.align-items-center.justify-content-center
                  .col-lg-5.mb-4.mb-lg-0
                    p.mb-0 #[b Contratación privada]
                    p.mb-0 Se trata del acuerdo al que llegan dos partes, que pueden ser personas naturales o jurídicas, para que se realice un producto, una labor o se deje de hacer algo. En este documento se pactan términos, acuerdos, multas y la forma de remuneración económica.
                  .col-lg-5
                    figure
                      img(src='@/assets/curso/tema6/img5.png', style="width:380px" alt='').m-auto
                .row.align-items-center.justify-content-center
                  .col-lg-5.mb-4.mb-lg-0
                    p.mb-0 #[b Contratación pública o estatal]
                    p.mb-0 Según el artículo 3 de la Ley 80 de 1993, la contratación estatal tiene como fin la continua y eficiente prestación de los servicios públicos y la efectividad de los derechos e intereses de los administrados que colaboran con ellas, en la consecución de dichos fines. El Estado contrata a particulares para el cumplimiento de sus fines.
                  .col-lg-5
                    figure
                      img(src='@/assets/curso/tema6/img6.png', style="width:380px" alt='').m-auto
                .row.align-items-center.justify-content-center
                  .col-lg-5.mb-4.mb-lg-0
                    p.mb-0 #[b La licitación]
                    p.mb-0 Método por el cual una entidad del Estado otorga un servicio u obra a una empresa o persona que ofrece las mejores condiciones. La licitación es privada cuando solo pueden participar las empresas a las cuales se hayan enviado invitaciones. Es pública cuando se abre a todos los participantes, permitiendo que cualquier persona pueda participar en el proceso.
                  .col-lg-5
                    figure
                      img(src='@/assets/curso/tema6/img7.png', style="width:380px" alt='').m-auto
    .row.mb-4.pt-4(data-aos="fade-down")
      .col-auto.bg-c7
        .px-3.pb-0
          .row.align-items-end
            .col-auto.px-0
              figure.fig-p1
                img(src='@/assets/curso/tema1/img8.svg', style="width:50px" alt='').m-auto
            .col
              h3.text-white Aspectos de la contratación por licitación
    .row.align-items-center.mb-5
      .col-lg-10.order-2.order-lg-1(data-aos="fade-right")
        p En Colombia, la contratación se divide en dos tipos principales: privada y pública o estatal. Cada uno de estos tipos tiene sus propias particularidades, incluyendo aspectos normativos y legales específicos.
        p.mb-0 Para participar legítimamente en una licitación estatal, se deben cumplir varios requisitos a nivel personal o empresarial:
      .col-lg-2.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema6/img7.svg', style="width:200px" alt='').m-auto
    .row.align-items-center.mb-5
      .col-lg-3.mb-4.mb-lg-0.pe-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema6/img9.png', style="width:350px" alt='').m-auto
      .col-lg-9.bg-c34(data-aos="fade-left")
        .p-4
          .row.align-items-center.mb-3
            .col-auto.pe-0
              figure
                img(src='@/assets/curso/tema6/img8.svg', style="width:35px" alt='').m-auto
            .col
              p.mb-0 Poseer el RUT (Registro Único Tributario), expedido por la DIAN.
          .row.align-items-center.mb-3
            .col-auto.pe-0
              figure
                img(src='@/assets/curso/tema6/img9.svg', style="width:35px" alt='').m-auto
            .col
              p.mb-0 Tener la empresa inscrita en el registro mercantil, gestionado en la Cámara de Comercio.
          .row.align-items-center.mb-3
            .col-auto.pe-0
              figure
                img(src='@/assets/curso/tema6/img10.svg', style="width:35px" alt='').m-auto
            .col
              p.mb-0 Registrar la empresa o los trabajadores en una ARL (Administradora de Riesgos Laborales).
          .row.align-items-center.mb-3
            .col-auto.pe-0
              figure
                img(src='@/assets/curso/tema6/img11.svg', style="width:35px" alt='').m-auto
            .col
              p.mb-0 Mantener la contabilidad de la empresa de acuerdo con la guía técnica 184, con el apoyo de un Contador Público.
          .row.align-items-start
            .col-auto.pe-0
              figure
                img(src='@/assets/curso/tema6/img12.svg', style="width:35px" alt='').m-auto
            .col
              p.mb-0 Asegurar que los trabajadores de la empresa estén afiliados al sistema de seguridad social, incluyendo salud, pensión y caja de compensación.
    p.mb-5(data-aos="fade-right") El proceso de licitación pública requiere seguir algunos pasos de estricto cumplimiento, que usted puede conocer a continuación:
    .row.bg-c35
      .col-12
        .px-5
          .row
            .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/tema6/img11.png', style="width:350px" alt='').m-auto
            .col-lg-8(data-aos="fade-left")
              AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
                .row(titulo="Pliego de condiciones")
                  .col-12
                    p.mb-0 La entidad estatal, que requiere obras, bienes o servicios, elabora un plan de compras que debe ser aprobado. Posteriormente, elabora y publica un pliego de condiciones "Borrador" en la página SECOP 
                      |
                      a(href="https://colombiacompra.gov.co/" target="_blank") https://colombiacompra.gov.co/
                      | , así como en la página web de la entidad, dentro de 10 días hábiles.
                .row(titulo="Proponentes u oferentes")
                  .col-12
                    p.mb-0 Las personas interesadas, también llamadas proponentes u oferentes, pueden solicitar aclaraciones del pliego de condiciones dentro del término de los 10 días hábiles. Con la resolución de apertura del proceso se incluye el cronograma de presentación de propuestas, lo que conlleva a la publicación del pliego de condiciones definitivo.
                .row(titulo="Entrega de propuestas")
                  .col-12
                    p.mb-0 En la audiencia de asignación, revisión y distribución de riesgos, la entidad permite que los futuros proponentes aclaren sus dudas y realicen observaciones sobre el proceso. Conforme al cronograma, los proponentes entregarán sus propuestas en el lugar, hora y términos señalados.
                .row(titulo="Etapa de evaluación")
                  .col-12
                    p.mb-0 La entidad inicia la verificación de los requisitos mínimos y otorga los puntajes a las ofertas presentadas. Posteriormente, presenta el informe de la evaluación durante un término de cinco días hábiles, durante los cuales los oferentes pueden pronunciarse y presentar observaciones.
                .row(titulo="Observaciones presentadas")
                  .col-12
                    p.mb-0 La entidad analiza las observaciones presentadas y cita para definir el proceso en una audiencia pública según el cronograma establecido.
                .row(titulo="Audiencia de adjudicación")
                  .col-12
                    p.mb-0 Antes de la audiencia de adjudicación, la entidad pública publicará en el SECOP el borrador del acto administrativo de adjudicación. Si algún oferente cumple con todos los requisitos del pliego y ofrece las condiciones más favorables en términos de costos y calidad, la entidad adjudica el proceso a este oferente; de lo contrario, se declara el proceso desierto.
          Separador
          #t_6_2
          .titulo-segundo.color-acento-contenido
            h2 6.2 Normatividad
          p(data-aos="fade-right") La contratación en Colombia, tanto pública como privada, está regulada y regida por la ley. Tener un conocimiento, al menos básico, de esta normatividad beneficia a personas y empresas al permitirles cumplir con lo establecido y alcanzar mejores procesos en la contratación de personal, bienes, servicios y obras.
          p.mb-5(data-aos="fade-right") Algunas leyes cruciales en la regulación de la contratación en Colombia son:
          .row.align-items-center.mb-5
            .col-lg-3.mb-4.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/tema6/img12.png', style="width:250px" alt='').m-auto
            .col-lg-9(data-aos="fade-left")
              SlyderF(columnas="col-md-6 col-xl-4")
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/tema6/img13.svg' alt='AvatarTop')
                  p.text-center.mb-0 Ley 80 de 1993: Modalidades de selección, publicidad, selección objetiva.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/tema6/img13.svg' alt='AvatarTop')
                  p.text-center.mb-0 Ley 1150 de 2007: Contratación con recursos públicos.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/tema6/img13.svg' alt='AvatarTop')
                  p.text-center.mb-0 Ley 1712 de 2014: Ley de Transparencia.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/tema6/img13.svg' alt='AvatarTop')
                  p.text-center.mb-0 Ley 1474 de 2011: Estatuto Anticorrupción.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/tema6/img13.svg' alt='AvatarTop')
                  p.text-center.mb-0 Ley 4170 de 2011: Agencia Nacional de Contratación Pública.
          .row.mb-4.pt-4(data-aos="fade-down")
            .col-auto.bg-c7
              .px-3.pb-0
                .row.align-items-end
                  .col-auto.px-0
                    figure.fig-p1
                      img(src='@/assets/curso/tema1/img8.svg', style="width:50px" alt='').m-auto
                  .col
                    h3.text-white Acuerdos
          p.mb-5(data-aos="fade-right") El principal acuerdo que rige el sistema de contratación en Colombia es conocido como “Acuerdo Marco”. Según la página de Colombia Compra Eficiente, el Acuerdo Marco es un instrumento de agregación de demanda. Se trata de un contrato entre Colombia Compra Eficiente, como representante de los compradores públicos, y uno o más proveedores para adquirir bienes, obras o servicios que pueden ser estandarizados.
          .row.justify-content-center
            .col-lg-10
              .p-4.bg-c19.shadow(data-aos="fade-left")
                .row.align-items-center
                  .col-md-auto.mb-4.mb-md-0
                    figure
                      img(src='@/assets/curso/tema6/img14.svg', style="width:70px" alt='').m-auto
                  .col
                    p.mb-0 El Acuerdo Marco especifica la identificación del bien o servicio, el precio máximo de adquisición, el plazo máximo de entrega, las garantías mínimas y las condiciones bajo las cuales los compradores pueden vincularse al acuerdo.

</template>

<script>
export default {
  name: 'Tema6',
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
