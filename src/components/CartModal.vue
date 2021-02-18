<template>
  <section>
      <div class="content-wrapper">
          <span class="triangle"></span>
        <h1>Din beställning</h1>
        <ul>
          <li
          v-for="item in currentOrder"
          :key="item.id"
          >
            <div class="item-wrapper">
              <div class="item-name-price">
                <p>{{item.title}}</p>
                <p>{{item.price * item.amount}} kr</p>
              </div>
              <div class="amount">
                <span @click="increaseAmount(item)" class="plus">
                  <img src="@/assets/arrow-up.svg" alt="">
                </span>
                <p>{{item.amount}}</p>
                <span @click="decreaseAmount(item)" class="minus">
                  <img src="@/assets/arrow-down.svg" alt="">
                </span>
              </div>
              
            </div>
          </li>
        </ul>
        <h1>Total {{totalPrice}} kr</h1>
        <base-button @click.native="sendStatus" class="black-btn">Take my money</base-button>
      </div>

  </section>
</template>

<script>
import BaseButton from './BaseButton.vue'
export default {
  components: { BaseButton },
  computed:{
    currentOrder(){
      return this.$store.getters.getCurrentOrder
    },

    totalPrice(){
      let totalAmount = 0
      this.currentOrder.map(item => totalAmount += item.amount * item.price)
      return totalAmount
    }

  },
  methods:{
    sendStatus(){
    this.$store.dispatch('toggleCart')

      this.$router.replace('/order-status')
    },
    increaseAmount(item){
      this.$store.dispatch('increaseAmount', item)
    },
    decreaseAmount(item){
 
      if(item.amount > 0){
        this.$store.dispatch('decreaseAmount', item)
      }
      if(item.amount == 0){
        this.$store.dispatch('removeProduct', item)
      }
    }
  }
}
</script>

<style scoped lang="scss">
    section{
        position: absolute;
        top: 0;
        z-index: 6;
        background-color: rgba(0, 0, 0, 0.637);
        height: 100vh;
        width: 100vw;
        padding: 1rem;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
        .content-wrapper{
            position: relative;
            background-color: white;
            height: 86vh;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 1.2rem;
            .item-wrapper{
              width: 200px;
              display: flex;
              justify-content: space-between;
              align-items: center;
              .amount{
                display: flex;
                flex-direction: column;
                .plus, .minus{
                  //border: 1px solid black;
                }
              }
            }
            .triangle{
                height: 20px;
                width: 20px;
                position: absolute;
                z-index: 2;
                background-color: white;
                top: -10px;
                right: 30px;
                transform: rotate(45deg);
            }
            ul{
              li{
                list-style: none;
                padding: 0.8rem;
              }
            }
        }
        .black-btn{
            background-color: black;
            color: white;
        }
    }
</style>