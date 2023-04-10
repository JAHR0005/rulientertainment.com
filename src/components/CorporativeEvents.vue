<template>
    <div class="event-div">
     <b-card
       title="Eventos Corporativos"
       class="event-card mx-auto w-75"
       >
        <b-card-text>
            RULI ENTERTAINMENT es una empresa especializada en la edición de video para eventos corporativos. Nos enfocamos en ayudar a las empresas a destacar y a transmitir su mensaje de manera efectiva a través de la creación de contenido audiovisual de alta calidad.
        </b-card-text>
        <b-card-text>
            Contamos con un equipo de editores de video altamente capacitados en la edición de contenido para eventos corporativos. Nos aseguramos de trabajar en estrecha colaboración con nuestros clientes para entender sus necesidades y crear videos que comuniquen su mensaje de manera clara y efectiva.
        </b-card-text>
        <b-card-text>
            Ofrecemos una variedad de servicios que incluyen la edición de videos de conferencias, seminarios, presentaciones de productos, videos de capacitación, videos promocionales, entre otros. Nos aseguramos de que cada video transmita el mensaje deseado y refleje la imagen de marca de nuestros clientes.
        </b-card-text>
        <b-card-text>
            Nuestra misión es ayudar a las empresas a destacar en su mercado y a llegar a su público objetivo a través de la creación de contenido audiovisual de alta calidad. Sabemos lo importante que es transmitir un mensaje claro y efectivo y estamos aquí para hacer que eso suceda. ¡Contáctanos y déjanos ayudarte a llevar tus eventos corporativos al siguiente nivel!
        </b-card-text>
     </b-card>
     <router-link :to="{ name:'Welcome' }" class="events-link">Volver</router-link>
   </div>
 </template>
 <script>
    export default {
      name: 'CorporativeEvents',
      created() {
        document.title = 'Eventos Corporativos';
      }
    }
 </script>
 <style scoped>
 .event-div {
    background-image: url("https://ctworker.com/images/shinning.jpg");
 }
 .router-link-active {
    background-color: rgba(128, 128, 128, 0.541);
 }
 </style>
