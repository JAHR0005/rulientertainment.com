<template>
   <div class="contact-div">
    <b-card class="contact-card mx-auto w-75">
      <h5 class="card-title">Contacto <img class="logo-card" src="images/ruli_logo_white_not_letters.png">
      </h5>
      <form ref="form" @submit.prevent="sendEmail">
        <b-row>
          <b-col class="input-field">
            <input id="name" type="text" class="validate" name="name" required>
            <label class="lb" for="name">Nombre y Apellidos</label>
          </b-col>
        </b-row>
        <b-row>
          <b-col class="input-field">
            <input id="email" type="text" class="validate" name="email" required>
            <label class="lb" for="email">Email</label>
          </b-col>
          <b-col class="input-field">
            <input id="phone" type="number" class="validate" name="phone" required>
            <label class="lb" for="phone">Teléfono</label>
          </b-col>
        </b-row>
        <b-row>
          <b-col class="input-field col s6">
            <textarea id="textarea1" class="materialize-textarea" name="message" required>
            </textarea>
            <label for="textarea1" class='lb'>Mensaje</label>
          </b-col>
        </b-row>
        <b-row>
          <button class="button button--hyperion mx-auto w-25">
          <span>
            <span>Enviar</span>
          </span>
        </button>
        </b-row>
      </form>
    </b-card>
    <router-link :to="{ name:'Welcome' }">Volver</router-link>
  </div>
</template>
<script>
  import emailjs from '@emailjs/browser';

  export default {
    name: 'ContactForm',

    data() {
      return {
        form: {
          email: '',
          name: '',
          message: '',
        },
        show: true
      }
    },
    methods: {
      sendEmail() {
        console.log(this.$refs.form)
        emailjs.sendForm('service_3b0iypw', 'template_f0zsba9', this.$refs.form, 'iDNfH5hM8mg99vzd1')
        .then((result) => {
            console.log('SUCCESS!', result.text);
        }, (error) => {
            console.log('FAILED...', error.text);
        });

      }
    },
    created() {
      document.title = 'Contacto';
    }
  }
</script>
<style scoped>
@import '@/css/buttons.css';
.contact-div {
  margin:0;
  background-image: url("https://ctworker.com/images/claqueta.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height:100%;
  text-align: center;
  color: white;
  width: 100%;
}
.logo-card{
  width: 50px;
  height: 50px;
}
.input-field>label,
.input-field>label:not(.label-icon).active.lb{
  color: white!important;
  border-bottom: white
}
.contact-card {
  margin-top:5%;
  max-width: 700px;
  background-color: rgba(128, 128, 128, 0.473)
}
.button--hyperion:focus:not(:active){
  background-color: white;
  color:black
}

input, select, textarea{
  color: white;
  font-family: Ibmp!important
}
.input-field input:focus,
.materialize-textarea:focus:not([readonly]) {
  border-bottom: 1px solid white !important;
  box-shadow: 0 1px 0 0 rgb(168, 167, 167) !important;
}
.button--hyperion:active{
  background-color: white;
  color:white
}
.button--hyperion:hover{
  background-color: white;
}
.logo-card[data-v-67929df8] {
  width:80px;
  height: 80px
}
@media (min-width: 575px) and (max-width: 768px) {
  .contact-card {
    margin-top: 20%
  }

}
@media (min-width: 0px) and (max-width: 575px) {
  .contact-card {
    width:90%!important;
    font-size: 0.8rem!important;
    margin-top: 30%
  }

}
</style>
