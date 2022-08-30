<template>
  <v-app>
    <v-main>

      <img src="./assets/images/bg-main-desktop.png">
      <card-form-vue v-model="card" :cardition="card" />
      <DoubleCardsVue 
      :cartao="card"/>

    </v-main>
  </v-app>
</template>

<script>
import CardFormVue from './components/CardForm.vue';
import DoubleCardsVue from './components/DoubleCards.vue';


export default {
  name: 'App',
  components: {

    CardFormVue,
    DoubleCardsVue,

},

  data: () => ({
    submeted: false,
    card: {
        numberCad: '',
        nomeCar: '',
        expired: '',
        cvc: '',
       
    }
    
  }),
};
</script>

<style scoped>
  #app {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 18px;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    position: relative;
  }
</style>
