<template>
    <div>
        <a id="kakao-login-btn" >
        <img  @click="loginWithKakao" src="https://k.kakaocdn.net/14/dn/btroDszwNrM/I6efHub1SN5KCJqLm1Ovx1/o.jpg" width="222"
            alt="카카오 로그인 버튼" />
        </a>
        <p id="token-result"></p>
    </div>
</template>
<script src="https://developers.kakao.com/sdk/js/kakao.js"></script>

<script>

    export default {

        methods: {
            
            loginWithKakao() {
                Kakao.init('be4d3538745dd4fc16b664f5909a96e7'); //발급받은 키 중 javascript키를 사용해준다.
                console.log(Kakao.isInitialized()); // sdk초기화여부판단

                alert('login')
                Kakao.Auth.login({
                    success: function (response) {
                        Kakao.API.request({
                        url: '/v2/user/me',
                        success: function (response) {
                            console.log(response)
                        },
                        fail: function (error) {
                            console.log(error)
                        },
                        })
                    },
                    fail: function (error) {
                        console.log(error)
                    },
                    })
             },

     
          

        },
        created() {
               
        }

    }
  
</script>

<style>
</style>