<template>
    <footer>
        <div class='container'>
            <div class='row'>
                <div class='text-center mt-5'>
                    <ul>
                        <li><a href='#'>Terminos</a></li>
                        <li><a href='#'>Privacidad</a></li>
                        <li>
                          <router-link :to="{ name:'ContactForm' }">Contacto</router-link>
                        </li>
                    </ul>
                </div>
                <p class="text-center mt-3">&copy; Ruli Entertainment {{ new Date().getFullYear() }}</p>
            </div>
        </div>
    </footer>
</template>
<script>
  export default {
    name: 'FooterComponent',
  }
</script>

  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    footer {
      bottom: 0;
      left: 0;
      width: 100%;
      color: white;
      background: rgba(0, 0, 0, 0.664);
      position:relative;
      text-align: center;
      margin-top: 85vh;
      display: block;/* Alinea el contenido al centro */
    }

    /* Estilo para los elementos del pie de página (li, a, p) */
    footer li {
      display: inline;
      padding: 0 10px;
      list-style: none;
    }

    footer a {
      color: white;
      text-decoration: none; /* Corrige la propiedad de "decoration" a "text-decoration" */
      font-size: 1rem;
    }

    footer p {
      float: right;
    }

  </style>