import router from "../router.js"

export default {
  template: `
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
      
      `,
      methods: {
        sendMail(){
          let data = {
            from: 'hong@hong.com',
            content: '안녕하세요? 홍길동입니다.......'
          }

          // Cafe component 에서 main component로 데이터를 보내고 싶다.
          // router를 이용
          // import 하지 않은 경우 this.$router 를 사용
          // this.$router.push({
          //   path: '/mail',
          //    query: data
          // });

           // import 된 경우 router, 
          // router.push({
          //   path: '/mail',
          //    query: data
          // });

          // name 속성이 있는 route는 name으로 push 할 수 있다.
          router.push({
            path: '/mail',
             query: data
          });


        }
      }
};
