<template>
  <button>
    <slot />
  </button>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
    button{
        border: none;
        outline: none;
        padding: 0.7rem 2rem;
        width: fit-content;
        font-size: 1.2rem;
        font-weight: bold;
        border-radius: 1.8rem;
        background-color: white;
        &:hover{
            cursor: pointer;
            transform: scale(1.03);
        }
    }
</style>