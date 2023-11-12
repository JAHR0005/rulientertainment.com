<template>
  <div>
    <div class="menu">
      <img  class="title-xs mx-auto" src="https://ctworker.com/images/logos/ruli_name.png">
      <ul >
        <li>
          <router-link :to="{ name:'YoutubersText' }">Creadores de Contenido</router-link>
        </li>
        <li>
          <router-link :to="{ name:'AdvertisingText' }">Publicidad</router-link>
        </li>
        <li>
          <img  class="title" src="https://ctworker.com/images/logos/ruli_name.png">
        </li>
        <li>
          <router-link :to="{ name:'New' }">Noticias</router-link>
        </li>
        <li>
          <router-link :to="{ name:'CorporativeEvents' }">Eventos</router-link>
        </li>
        <li>
          <router-link :to="{ name:'ContactForm' }">Contacto</router-link>
        </li>
      </ul>
    </div>
      <iframe
        class="bg-video"
        src="https://www.youtube.com/embed/HBiyoh7jIuM?autoplay=1&mute=1&controls=0&loop=1&playlist=HBiyoh7jIuM"
        frameborder="0"
        allowfullscreen
        allow="autoplay"
      />
  </div>
</template>
<script>

export default {
  name: 'HelloWorld',

  created() {
    document.title = 'Ruli Entertainment';
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .title-xs {
    display: none;
  }
  .menu {
    position: relative;
    z-index: 1;
    margin-top: 5%;
    text-align: center;
  }

  li {
    display:inline;
    padding-left:20px;
    padding-right:20px;
  }
  .title{
    margin-bottom: 1%;
  }

  a {
    decoration: none;
    font-size: 1.5rem
  }

  .bg-video {
    position: fixed;
    left: 0;
    top: 0;
    background-size: cover;
    background: no-repeat center;
    user-select: none;
    pointer-events: none;
    /*custom styles, for example grayscale appearance*/
    filter: grayscale(0.8);
    /*additional tweaks for positioning, read more in the link above*/
    height: 100%;
    width: 100%; /* 100 * 16 / 9 */
    -moz-transform: scale(1.6);
    -webkit-transform:scale(1.6);
    -o-transform:scale(1.6);
    -ms-transform: scale(1.6);
    transform: scale(1.6);
  }

  @media (max-width: 1100px) {
    .bg-video {
      -moz-transform: scale(3);
      -webkit-transform:scale(3);
      -o-transform:scale(3);
      -ms-transform: scale(3);
      transform: scale(3);
    }
  }

  @media (max-width: 575px) {
    .title-xs {
      visibility: visible;
      position: relative;
      z-index: 1;
      margin-top: 5%;
      text-align: center;
      width: 300px;
      height: auto;
    }
    a {
      font-size: 1rem!important;
    }
    .title {
      display: none;
    }
    .bg-video {
      -moz-transform: scale(4);
      -webkit-transform:scale(4);
      -o-transform:scale(4);
      -ms-transform: scale(4);
      transform: scale(4);
    }
  }
</style>
