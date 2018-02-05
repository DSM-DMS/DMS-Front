<template>
<div class="login">
  <div class="bg">
  <img id="bg" src="../assets/background/bg_notice.png">
  </div>
  <img id="logo" src="../assets/logo/logo.png">
  <div class="main">
    <div id="main-bg">
      <img id="main-img" src="../assets/background/main-bg.png">
    </div>
    <div id="main-title">
        <h3>Dormitory</h3> 
        <h3>Management</h3> 
        <h3>System</h3>
      </div>
    <div id="login-main">
      <div id="login-from" @keyup.enter='login'>
        <input type="text" class="login-input" v-model="id" placeholder="ID">
        <input type="password" class="login-input" v-model="pw" placeholder="Password">
      </div>
      <div id="check">
        <input type="checkbox" v-model="checked"> 
        <p id="remember">자동 로그인</p>
      </div>
      <div class="login-button">
        <img id="login-btn" v-on:click="login" src="../assets/button/ic_enter.png">
      </div>
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
          console.log('관리자 로그인 성공')
          if (this.checked === true) {
            this.$setCookie('JWT', response.data['access_token'], '')
          } else {
            this.$setCookie('JWT', response.data['access_token'], 1)
          }
          this.$router.push('main')
        } else {
          console.log('관리자 로그인 실패')
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
  img#bg {
    width: 100%;
    height: 100%;
    position: absolute;
    margin-left: -50%;
  }
  
  .login {
    width: 100%;
    height: 100%;
  }
  
  .main {
    width: 60%;
    height: 60%;
    background-color: white;
    box-shadow: 5px 5px 50px rgba(0,0,0,0.7);
    position: absolute;
    top: 20%;
    left: 20%;
  }

  #login-main {
    width: 50%;
    height: 100%;
    position: relative;
    float: right;
  }

  #login-from {
    margin: auto;
    margin-top: 110px;
    width: 20vw;
    height: 23vh;
    
  }

  #main-bg {
    width: 50%;
    height: 100%;
    float: left;
  }

  img#main-img {
    width: 100%;
    height: 100%;
  }

  #main-title {
    position: absolute;
    margin-top: 30px;
  }

  h3 {
    font-size: 40px;
    margin: auto;
    font-family: 'Noto Sans KR', sans-serif;
    text-align: left;
    margin-left: 50px;
    color: white;
    line-height: 65px;
  }
  
  input[type=text], input[type=password] {
    width: 20vw;
    height: 5vh;
    margin: auto;
    margin-top: 50px;
    padding-left: 15px;
    border: none;
    border-bottom: 2px solid rgb(120, 173, 217);
    outline: none;
    font-size: 30px;
    color: rgb(120, 173, 217);
  }
  
  #check {
    width: 10vw;
    margin: auto;
    float: right;
    margin-right: 50px;
    
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
    width: 200px;
    height: 100px;
    margin-left: 350px;
    margin-top: 150px;
  }

    img#logo {
    position: relative;
    width: 148px;
    height: 50px;
    float: left;
    margin-left: 30px;
    margin-top: 30px;
  }
  
</style>

