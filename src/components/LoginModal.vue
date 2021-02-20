<template>
  <section>
    <div class="content-wrapper">
        <div class="header">
            <img src="@/assets/a-icon.svg" alt="">
            <div class="title-main">
                <h1>Välkommen till</h1>
                <h1>AirBean-familjen</h1>
            </div>
            <div class="title-sub">
                <p>Genom att skapa ett konto nedan kan du spara och se din orderhistorik.</p>
            </div>
        </div>

            
        <div class="form-wrapper">
            <label for="name">Namn</label>
            <input v-model="name" id="name" type="text" placeholder="Sixten Kaffelövér">

            <label for="epost">Epost</label>
            <input v-model="epost" id="epost" type="email" placeholder="sixten.kaffelover@zocom.se">

            <div class="checkbox-wrapper">
                <input type="checkbox" name="gdpr" id="gdpr">
                <label for="gdpr">GDPR Ok!</label>
            </div>

        </div>


        <base-button @click.native="registerUser" class="brown-btn">Brew me a cup!</base-button>
      </div>

  </section>
</template>

<script>
import BaseButton from './BaseButton.vue'
export default {
    components: { BaseButton },
    data(){
        return{
            name: '',
            epost: ''
        }
    },
    computed:{
        currentOrder(){
        return this.$store.getters.getCurrentOrder
        },
    },
    methods:{
        registerUser(){
            this.$store.dispatch('registerUser',
            {
                id: '',
                name: this.name,
                epost: this.epost,
                orderHistory: {}
            })
            this.$router.replace('/menu')
        }
    }
}    
</script>

<style scoped lang="scss">
$pink: #F3E4E1;
$brown: #2F2926;
    section{
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        // background-color: rgba(0, 0, 0, 0.637);
        color: $brown;
        height: 100vh;
        width: 100vw;
        padding: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        h1{
            font-size: 2rem;
        }
        p{
            font-size: 1.2rem;
        }
        .content-wrapper{
            position: relative;
            background-color: $pink;
            height: 86vh;
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 1.4rem;
            border-radius: 4px;
            .header{
                text-align: center;
                .title-main{
                    margin-bottom: 0.8rem;
                }
                .title-sub{
                    margin-bottom: 0.8rem;
                }
            }
            .form-wrapper{
                padding: 2rem 0;
                input{
                    width: 100%;
                    height: 2.5rem;
                    border-radius: 5px;
                    border: 1.2px solid black;
                    background-color: transparent;
                    padding-left: 0.6rem;
                    margin-bottom: 1rem;
                }
                .checkbox-wrapper{
                    display: flex;
                    align-items: center;
                    input{
                        width: fit-content;
                        margin-right: 0.5rem;
                        margin-bottom: 0;
                    }
                }
            }
            
            .brown-btn{
                background-color: $brown;
                color: white;
            }

        }

    }
</style>