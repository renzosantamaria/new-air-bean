<template>
  <header>
    <slot name="header">
        <!-- väntar på mner html -->
    </slot>
  </header>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
    header{
        position: absolute;
        top: 0;
        // z-index: 7;
        height: 100px;
        width: 100%;
        background-color: rgba(255, 0, 0, 0);
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 1.5rem;
       
    }
</style>