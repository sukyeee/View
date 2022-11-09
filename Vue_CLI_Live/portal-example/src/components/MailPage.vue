<template>
    <div>
        <div class="card mt-3" >
        <img src="https://picsum.photos/1024/400/?images=25" class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary" @click="checkMail"> Check Mail </a>
            </div>
          {{ from }} {{ content }}
        </div>
    </div>
</template>
<script>
    export default {
      
      data(){
        return {
            from:this.$route.query.from, // 보내는건 router, 받는 건 route
            content: this.$route.query.content
            
        }
      },
      methods: {
        checkMail: function() {
          if( this.from ){
            alert(this.from + ' : ' + this.content)
          } else {
            alert('메일이 없습니다.')
          }
        }
      }

    };
</script>

<style>
</style>