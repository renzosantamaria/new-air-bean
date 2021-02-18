<template>
  <div class="about">
    <h1>Vårt kaffe</h1>
    <p class="strong">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint similique laudantium sunt laboriosam odit officia, placeat error, ipsam facere incidunt vitae perferendis minima accusamus dolores nam velit totam ducimus non.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis minus, neque, pariatur ex quis necessitatibus exercitationem cupiditate molestiae numquam laborum distinctio fugiat enim adipisci ad facilis obcaecati debitis, porro sit.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis minus, neque, pariatur ex quis necessitatibus exercitationem cupiditate molestiae numquam laborum distinctio fugiat enim adipisci ad facilis obcaecati debitis, porro sit.</p>
    <div class="img-wrapper">
      <img src="../assets/eva-cortado.jpg" alt="">
      <p class="strong">Eva Cortado</p>
      <p>VD & Grundare</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .about{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    text-align: left;
    h1,p{
      width: 100%;
    }
    .strong{
      font-weight: bold;
    }
    .img-wrapper{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      img{
        border-radius: 50%;
      }
      p:nth-child(3){
        font-size: 10px;
      }

    }
  }
</style>
