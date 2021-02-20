<template>
<div class="profile-wrapper">
  <div class="user-info">
    <img src="@/assets/profile-user.svg" alt="">
    <h1>Sixten Kaffelövér</h1>
    <p>sixten.kaffelover@zocom.se</p>
  </div>

  <div class="order-history">
    <h1>Orderhistorik</h1>
    <ul>
      <li class="order-history-items"
      v-for="order in users" :key="order.orderId">
      
        <div class="item-wrapper">
          <p class="order-id">#{{order.orderId}}</p>
          <p>{{order.date}}</p>
        </div>

        <div >
          <ul>
            <li class="item-wrapper"
            v-for="orderDetail in order.order" :key="orderDetail.id"
            >
            <p>{{orderDetail.amount}}st {{orderDetail.title}}</p>
            <p>{{orderDetail.amount*orderDetail.price}}kr</p>
            </li>
          </ul>

        </div>
        <div class="item-wrapper">
          <p>total ordersumma</p>
          <p>{{order.totalPrice}} kr</p>
        </div>


      </li>
    </ul>
  </div>
  <login-modal v-if="!isLoggedIn" />
</div>

</template>
    

<script>
import LoginModal from '../components/LoginModal.vue'
export default {
  components: { LoginModal },

  computed:{
    isLoggedIn(){
      return this.$store.getters.getIsloggedIn
    },
    users(){
      if (this.$store.getters.getUser) {
        return this.$store.getters.getUser[0].orderHistory
      }else{
        return ""
      }
    }
  },
}

</script>


<style scoped lang="scss">
$light-brown: rgba(216, 209, 203, 0.815);
  .profile-wrapper{
    p{
      color: $light-brown;
    }
    padding: 2rem;
    .user-info{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-bottom: 5rem;
    }
    .order-history{
      ul{
        li{
          list-style: none;
        }
      }
      .order-history-items{
        padding: 1rem 0;
        border-bottom: 0.5px rgba(104, 97, 92, 0.582) solid;
        .item-wrapper{
          display: flex;
          justify-content: space-between;
        .order-id{
          text-transform: uppercase;
          font-weight: bold;
        }
        }
      }
    }
  }
</style>


      
