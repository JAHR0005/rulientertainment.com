<template>
    <div id="app">
      <router-view></router-view>
      <footerComponent v-if="$route.name == 'Welcome'"></footerComponent>
    </div>
</template>
<script>
import FooterComponent from './components/FooterComponent.vue'

export default {
  name: 'App',
  components: {
    FooterComponent
  },
}
</script>
<style>
html, body, #app {
  height:100%;
  margin: 0;
  display: flex;
  flex-direction: column;
  font-family: Colvetica!important
}

a {
  color:white!important
}

a:hover {
  color:#fb0606 !important
}

.event-card {
  margin-top: 5%!important;
  background-color: rgba(128, 128, 128, 0.644)!important;
  padding: 5%!important;
  padding-top: 3%!important
}

.card-title {
  margin-top: 0%!important;
  margin-bottom:3%!important;
  font-size: 2rem!important
}

.event-div {
  margin:0;
  background-position: center!important;
  background-repeat: no-repeat!important;
  background-size: cover!important;
  text-align: center!important;
  color: white!important;
  width: 100%;
  height: 2000px
}

@media (min-width: 0px) and (max-width: 575px) {
  .event-card {
    min-width:90%!important;
    font-size: 0.9rem!important;
    padding: 0px!important
  }
  .card-title {
    font-size: 1.5rem !important;
    margin-bottom: 10%!important
  }
  .event-div {
    height: 2000px
  }
}
@media (min-width: 575px) and (max-width: 768px) {
  .event-card {
    min-width: 90%!important;
    font-size: 1rem!important;
  }
  .card-title {
    font-size: 2rem !important;
    margin-bottom: 10%!important
  }

}

</style>
