<template>
  <div class="home">
    <h1>Menu</h1>
    <ul>
      <li v-for="product in getProducts" :key="product.id">
        <div @click="addToCart(product)" class="add-icon-wrapper">
          <img class="add-icon" src="@/assets/add.svg" alt="">
        </div>

        <!-- <button @click="addToCart(product)">Add</button> -->
        <div class="wrapper">
          <h3>{{product.title}} <span class="dots"></span></h3>
          <p>{{product.desc}}</p>
        </div>

        <p>{{product.price}}</p>
        
      </li>
    </ul>
        
  </div>
</template>

<script>
export default {
  name: 'Menu',
  computed: {
    getProducts() {
      return this.$store.getters.getProducts
    }
  },
  methods: {
    addToCart(prod) {
      this.$store.dispatch("addToCart", prod)
    }
  }
}
</script>

<style scoped lang="scss">
  .home{
    padding: 1.5rem;
    h1{
      text-align: center;
      margin-bottom: 3rem;
    }
    ul{
      li{
        display: flex;
        justify-content: space-evenly;
        margin-bottom: 1.8rem;

        .add-icon-wrapper{
          height: 30px;
          width: 30px;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: black;
          border-radius: 50%;
          &:hover{
            cursor: pointer;
            // transform: scale(1.4);
            animation: roll ease-in-out 0.6s;
          }
          @keyframes roll{
            0%{transform: rotate(0deg), scale(1.4);}
            50%{transform: rotate(200deg);}
            100%{transform: rotate(0deg), scale(1.4);}

          }
          .add-icon{
            width: 18px;
           
          }
        }
      }
    }
  }
</style>