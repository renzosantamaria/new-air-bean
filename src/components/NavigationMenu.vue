<template>
  <nav>
    <router-link to="/menu">
      <span @click="closeNavBar">Menu</span> 
    </router-link>
    
    <router-link to="/our-coffee">
      <span  @click="closeNavBar">Vårt kaffe</span>
      
    </router-link>

    <router-link to="/my-profile">
      <span @click="closeNavBar">Min profil</span>
      
    </router-link>

    <router-link to="/order-status">
      <span @click="closeNavBar">Orderstatus</span>
    </router-link>
      
  </nav>
</template>

<script>
export default {
  methods:{
    closeNavBar(){
      this.$store.dispatch('toggleNavBar')
    }
  }
}
</script>

<style scoped lang="scss">
  nav{
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    z-index: 3;
    background-color: #2F2926;
    a{
      color: white;
      text-decoration: none;
      padding: 1rem;
      &:hover{
        cursor: pointer;
      }
    }
  }
</style>
    