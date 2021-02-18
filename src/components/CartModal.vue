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
                {{item.amount}}st
              </div>
              
            </div>
          </li>
        </ul>
        <h1>Total xx kr</h1>
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
    }

  },
    methods:{
    sendStatus(){
    this.$store.dispatch('toggleCart')

      this.$router.replace('/order-status')
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