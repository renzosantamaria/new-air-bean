<template>
  <section>
    <div v-if="orderPlaced" class="status-info-wrapper">
      <p >Ordernummer <span class="orderNumber"><strong>#{{orderDetails.orderId}}</strong></span> </p>
      <img src="../assets/drone.svg" alt="">
      <h1>Din beställning är på väg</h1>
      <p><strong>{{countDown.min}}:{{countDown.sec}}</strong> minuter</p>
      <base-button @click.native="sendHome">Ok, cool!</base-button>
    </div>

    <div v-else>
      <img src="@/assets/loader.png" alt="">
      <h1>You don't have any pending deliveries..</h1>
      <base-button @click.native="sendHome">Ok, cool!</base-button>
    </div>
    <!-- <button @click="countDown">Check timer</button> -->
  </section>

</template>

<script>
import BaseButton from '../components/BaseButton.vue'
export default {
  components: { BaseButton },
  methods:{
    sendHome(){
      this.$router.replace('/menu')
    },
  },
  data(){
    return{
      estimatedTime: this.$store.getters.getOrderDetails
    }
  },
  computed:{
    orderDetails(){
      if (this.$store.getters.getOrderDetails) {
        return this.$store.getters.getOrderDetails
      }else{
        return []
      }
    },
    orderPlaced(){
      if (this.$store.getters.getOrderDetails) {
        return true
      }else{
        return false
      }
    },
    countDown(){
      if (this.$store.getters.getCountDown) {
        return this.$store.getters.getCountDown
      }else{
        return ""
      }
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
    .orderNumber{
      text-transform: uppercase;
    }
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