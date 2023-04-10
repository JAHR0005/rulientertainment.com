<template>
    <div class="event-div">
     <b-card
       title="Creadores de Contenido"
       class="event-card mx-auto w-75"
       >
        <b-card-text>
            RULI ENTERTAINMENT es una empresa especializada en la edición de video para creadores de Contenido. Nos enfocamos en ayudar a los creadores de contenido en YouTube a mejorar la calidad de sus videos y a crear contenido más atractivo y profesional para su audiencia.
        </b-card-text>
        <b-card-text>
            Contamos con un equipo de editores de video altamente capacitados en la edición de contenido para YouTube. Desde la edición básica de videos hasta la creación de videos de alta calidad, nos aseguramos de que cada video sea único y transmita el mensaje deseado.
        </b-card-text>
        <b-card-text>
            Ofrecemos una variedad de servicios que incluyen la edición de video, la corrección de color, la corrección de audio, la edición de subtítulos y la creación de miniaturas personalizadas. Nos aseguramos de trabajar en estrecha colaboración con nuestros clientes para entender sus necesidades y crear videos que superen sus expectativas.
        </b-card-text>
        <b-card-text>
            Nuestra misión es ayudar a los creadores de contenido en YouTube a crecer y a mejorar su presencia en línea. Sabemos lo importante que es para los creadores de contenido tener contenido de calidad y estamos aquí para hacer que eso suceda. ¡Contáctanos y déjanos ayudarte a llevar tus videos al siguiente nivel!        </b-card-text>
     </b-card>
     <router-link :to="{ name:'Welcome' }">Volver</router-link>
   </div>
 </template>
 <script>
    export default {
        name: 'YoutubersText',
        created() {
            document.title = 'Creadores de Contenido';
        }
    }
 </script>
 <style scoped>
 .event-div {
    background-image: url("https://ctworker.com/images/youtubers.jpg");
 }
 </style>
