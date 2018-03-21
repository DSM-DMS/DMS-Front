<template>
<div class="login">
  <div class = "logo"></div>
  <div class="main">

    <div id="main-bg">
      <div id="main-title">
        <div>Login</div>
        <div>Please enter your user info</div>
      </div>
    </div>
    
    <div id="login-main">
      <div>
        <div id="login-from" @keyup.enter='login'>
          <input type="text" class="login-input" v-model="id" placeholder="Username">
          <input type="password" class="login-input" v-model="pw" placeholder="Password">
        </div>
        <div id="check">
          <input type="checkbox" v-model="checked"> 
          <p id="remember">자동 로그인</p>
        </div>
      </div>
      <div class="login-button" v-on:click = "login"></div>
    </div>
</div>
</div>  
</template>

<script>
const qs = require('query-string')

export default {
  name: 'login',
  data: function () {
    return {
      msg: '기숙사 관리(DMS)',
      id: '',
      pw: '',
      checked: false
    }
  },
  methods: {
    login: function (event) {
      this.$axios({
        method: 'POST',
        url: '/admin/auth',
        data: qs.stringify({id: this.id, pw: this.pw})
      })
      .then((response) => {
        if (response.status === 200) {
          if (this.checked === true) {
            this.$setCookie('JWT', response.data['access_token'], '')
          } else {
            this.$setCookie('JWT', response.data['access_token'], 1)
          }
          this.$router.push('main')
        }
      })
      .catch((ex) => {
        console.log('error: ', ex)
        alert('아이디 또는 비밀번호를 확인하세요.')
      })
    }
  }
}
</script>


<style scoped>
@import url(http://fonts.googleapis.com/earlyaccess/notosanskr.css);

  .bg {
    width: 100vw;
    height: 100vh;
    position: relative;
  } 

  .login {
    width: 100vw;
    height: 100vh;
    position: relative;
    display: flex;
    justify-content: center;
    overflow: auto;
    align-items: center;
    background-image: url('../assets/background/bg_notice.png');
    background-size: cover;
  }
  
  .main {
    width: 970px;
    height: 500px;
    background-color: white;
    box-shadow: 5px 5px 50px rgba(0,0,0,0.7);
    position: absolute;
    border-radius: 8px;
  }

  #login-main {
    width: 50%;
    height: 100%;
    position: relative;
    float: right;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
  }

  #login-from {
    margin: auto;
  }

  #main-bg {
    width: 50%;
    height: 100%;
    float: left;
    background-position: center;
    background-size: auto 100%;
    background-image: url('../assets/background/main-bg.png');
    background-repeat: no-repeat;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }

  img#main-img {
    width: 100%;
    height: 100%;
  }

  #main-title {
    position: absolute;
    margin: 30px; 
    text-align: left;
  }

  #main-title div:nth-child(1) {
     font-family: 'Noto Sans KR', sans-serif;
    font-size: 3em;
    font-weight: bold;
    color: white;
    letter-spacing: -2px;   
  }

  #main-title div:nth-child(2) {
     font-family: 'Noto Sans KR', sans-serif;
    font-size: 12px;
    font-weight: bold;
    color: white;
  }
  

  h3 {
    font-size: 40px;
    margin: auto;
    text-align: left;
    margin-left: 50px;
    color: white;
    line-height: 65px;
  }
  
  input[type=password] {
    width: 80%;
    height: 40px;
    margin: auto;
    margin-top: 40px;
    border: none;
    border-bottom: 1px solid rgb(120, 173, 217);
    outline: none;
    font-size: 30px;
    color: rgb(120, 173, 217);
  }

  input[type=text] {
    border: none;
    width: 80%;
    height: 40px;
    margin: auto;
    border-bottom: 1px solid rgb(120, 173, 217);
    outline: none;
    font-size: 30px;
    color: rgb(120, 173, 217);
  }
  
  #check {
    /* width: 10vw; */
    /* margin: auto; */
    float: right;
    margin-right: 50px;
    margin-top: 20px;
  }
  
  input[type=checkbox] {
    width: 15px;
    height: 15px;
    vertical-align: middle;
  }

  p#remember {
    display: inline-block;
    font-size: 15px;
    margin:  auto;
    color: rgb(120, 173, 217);
  }

  .login-input::placeholder {
    color: rgb(120, 173, 217);
    font-weight: bold;
    font-size: 30px;
  }

  .login-button {
    margin: 1.5em;
    position: absolute;
    cursor: pointer;
    bottom: 0;
    right: 0;
    background-image: url('../assets/button/ic_enter.png');
    background-repeat: no-repeat;
    width: 125px;
    height: 44px;
    background-size: auto 80%;
    background-position: center;
  }

    img#logo {
    position: relative;
    width: 148px;
    height: 50px;
    float: left;
    margin-left: 30px;
    margin-top: 30px;
  }

  .logo {
    background-image: url('../assets/logo/logo.png');
    /* width: auto;
    height: auto; */
    background-size: 80% 80%;
    width: 148px;
    height: 50px;
    margin: 50px;
    position: absolute;
    top: 0;
    left: 0;
    background-repeat: no-repeat;
  }

  
</style>


