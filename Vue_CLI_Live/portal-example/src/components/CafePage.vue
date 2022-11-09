<template>
    <div>
      <div class="card" >
        <img src="https://picsum.photos/1024/400/?images=33" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary" @click="sendMail"> sendMail </a>
        </div>
      </div>
  </div>
</template>

<script>
  import router from "../routers/router.js"

      export default {
          methods: {
            sendMail(){
              let data = {
                from: 'hong@hong.com',
                content: '안녕하세요? 홍길동입니다.......'
              }

              router.push({
                path: '/mail',
                query: data
              });

            }
          }
    };

</script>

<style>

</style>
