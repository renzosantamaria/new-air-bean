<template>
  <section>
    <p>Ordernummer <strong>#12DV23F</strong></p>
    <img src="../assets/drone.svg" alt="">
    <h1>Din beställning är på väg</h1>
    <p><strong>13</strong> minuter</p>
    <base-button @click.native="sendHome">Ok, cool!</base-button>
    <!-- <button ></button> -->
  </section>

</template>

<script>
import BaseButton from '../components/BaseButton.vue'
export default {
  components: { BaseButton },
  methods:{
    sendHome(){
      this.$router.replace('/menu')
    }
  }
}
</script>

<style scoped lang="scss">
  section{
    color: white;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    h1{
      width: fit-content;
    }

    background-color: #E5674E;
    position: absolute;
    top: 0;
    z-index: 2;
    height: 100vh;
    width: 100vw;
  }
</style>