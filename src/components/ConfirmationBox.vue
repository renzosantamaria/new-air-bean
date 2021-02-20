<template>
  <section>
      <div class="message">
        <h1>Do you want to continue as a guest?</h1>
        <button @click="continueAsGuest">continue as a guest</button>
        <button @click="login">Log in</button>
      </div>

  </section>
</template>

<script>
export default {
    methods:{
        continueAsGuest(){
            this.$store.dispatch('toggleConfirmationBox')
            this.$store.dispatch('toggleCart')
            this.$router.replace('/order-status')
            // call an action that creates a random order number
            // call an action that creates a time countdown for "/status"
            
            this.$store.dispatch('makeOrder')
            this.$store.dispatch('clearCurrentOrder')

            // this.$store.dispatch('toggleCart')
            // this.$store.dispatch('clearCurrentOrder')
        },

        login(){
            this.$store.dispatch('toggleConfirmationBox')
            this.$store.dispatch('toggleCart')
            this.$router.replace('/my-profile')

            // this.$route.dispatch('addCurrentOrderToUserHistory')

            // this.$store.dispatch('clearCurrentOrder')
        }

    }
}

</script>

<style scoped lang="scss">
    section{
        position: absolute;
        z-index: 10;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100vw;
        background-color: rgba(0, 0, 0, 0.52);
        padding: 2rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        .message{
            background-color: white;
            border-radius: 8px;
            padding: 2rem;
        }
    }
</style>