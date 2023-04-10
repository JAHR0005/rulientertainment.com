<template>
    <div class="event-div">
     <b-card title="Publicidad" class="event-card mx-auto w-75">
        <b-card-text>
            Ruli enterteinment es una empresa especializada en la producción de videos publicitarios para pequeñas y grandes empresas. Nos enfocamos en ayudar a las empresas a destacar en su mercado y a llegar a su público objetivo a través de la creación de contenido audiovisual de alta calidad.        </b-card-text>
        <b-card-text>
            Contamos con un equipo de profesionales altamente capacitados en cada área de la producción audiovisual, desde la pre-producción hasta la post-producción. Nos aseguramos de trabajar en estrecha colaboración con nuestros clientes para entender sus necesidades y crear videos que comuniquen su mensaje de manera clara y efectiva.        </b-card-text>
        <b-card-text>
            Ofrecemos una variedad de servicios que incluyen la producción de videos promocionales, comerciales de televisión, anuncios para redes sociales, videos de presentación de productos, entre otros. Nos aseguramos de que cada video sea único y transmita el mensaje deseado de manera efectiva, ya sea para una pequeña o una gran empresa.
        </b-card-text>
        <b-card-text>
            Nuestra misión es ayudar a las empresas a destacar en su mercado y a conectarse con su público objetivo a través de la creación de contenido audiovisual de alta calidad. Sabemos lo importante que es para las empresas tener contenido publicitario efectivo y estamos aquí para hacer que eso suceda. ¡Contáctanos y déjanos ayudarte a llevar tu negocio al siguiente nivel!
        </b-card-text>
    </b-card>
     <router-link :to="{ name:'Welcome' }">Volver</router-link>
   </div>
 </template>
 <script>
    export default {
        name: 'AdvertisingText',
        created() {
            document.title = 'Publicidad';
        }
    }
 </script>
 <style scoped>
 .event-div {
    background-image: url("https://ctworker.com/images/pic_sf.jpg");
 }
 .router-link-active {
    background-color: rgba(128, 128, 128, 0.541);
 }
 </style>
