<template>
  <div class="hello">

      <img class="mt-5 logo" src="images/ruli_logo_white.png">
    <h3 class="sub-title">
      Producción Audiovisual
    </h3>
    <ul>
      <li>
        <router-link :to="{ name:'AdvertisingText' }">Publicidad</router-link>
      </li>
      <li>
        <router-link :to="{ name:'YoutubersText' }">Creadores de Contenido</router-link>
      </li>
      <li>
        <router-link :to="{ name:'CorporativeEvents' }">Eventos</router-link>
      </li>
      <li>
        <router-link :to="{ name:'ContactForm' }">Contacto</router-link>
      </li>
    </ul>
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
  .hello {
    margin:0;
    background-image: url("https://ctworker.com/images/camera.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    font-family: Ibmp, Helvetica, Arial, sans-serif;
    height:100%;
    text-align: center;
    color: white;
    width: 100%;
  }

  .sub-title {
    font-size: 3rem;
    margin-top: 5%;
  }
  .title {
    margin-top: 15%;
    font-size: 8rem;
    margin-bottom: 2%
  }
  li {
    display:inline;
    padding-left:20px;
    padding-right:20px;
  }
  a {
    decoration: none;
    font-size: 1.5rem
  }

  @media (min-width: 575px) and (max-width: 768px) {
    .sub-title {
      font-size: 2rem;
    }
    .title {
      margin-top: 40%;
      font-size: 5rem;
    }

    li {
      display:inline;
      padding-left:10px;
      padding-right:10px;
    }

    a {
      margin-top: 10%;
      color:white;
      decoration: none;
      font-size: 1rem
    }
  }
  @media (min-width: 0px) and (max-width: 575px) {
    .sub-title {
      font-size: 1.2rem;
    }
    .title {
      margin-top: 55%;
      font-size: 2.5rem;
    }
    li {
      display:inline;
      padding-left:5px;
      padding-right:5px;
    }
    a {
      margin-top: 10%;
      color:white;
      decoration: none;
      font-size: 1rem
    }
    .logo {
      width: 300px;
      height:300px;
      margin-top: 150px!important;
      margin-bottom: 100px
    }
  }
</style>
