<template>
<div class="login">
  <div class="bg">
  <img id="bg" src='../assets/bg.png'>
  </div>
  <div class="bg2"></div>
  <div class="main">
    <div id="main-bg">
      <img id="main-img" src="../assets/main-bg.png">
    </div>
    <div id="main-title">
        <h3>Dormitory</h3> 
        <h3>Management</h3> 
        <h3>System</h3>
      </div>
    <div id="login-main">
      <img id="logo" src="../assets/logo2.png">
      <div id="login-from">
        <input type="text" v-model="id" placeholder="아이디">
        <input type="password" v-model="pw" placeholder="비밀번호">
      </div>
      <div id="check">
        <input type="checkbox"> 
        <p id="remember">자동 로그인</p>
      </div>
      <div class="login-button">
        <button id="login-btn" v-on:click="login">로그인</button>
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
      pw: ''
    }
  },
  methods: {
    login: function (event) {
      console.log(this.id, this.pw)
      this.$axios({
        method: 'POST',
        url: '/admin/auth',
        data: qs.stringify({id: this.id, pw: this.pw})
      })
      .then((response) => {
        if (response.status === 200) {
          console.log('성공')
          this.$setCookie('JWT', response.data['access_token'], 1)
          this.$router.push('main')
        } else {
          console.log('실패')
        }
        console.log(response)
      })
      .catch((ex) => {
        console.log('error: ', ex)
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
  .bg2 {
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.7);
    position: absolute;
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
    width: 35%;
    height: 100%;
    position: relative;
    float: right;
  }

  #login-from {
    margin: auto;
    margin-top: 30px;
    width: 19vw;
    height: 10vh;
    
  }

  #main-bg {
    width: 65%;
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
    font-size: 50px;
    margin: auto;
    font-family: 'Noto Sans KR', sans-serif;
    text-align: left;
    margin-top: 10px;
    margin-left: 50px;
    color: white;
    line-height: 65px;
  }
  
  img#logo {
    width: 35%;
    height: 25%;
    margin-top: 50px;
  }

  input[type=text], input[type=password] {
    width: 18vw;
    height: 5vh;
    margin: auto;
    margin-top: 10px;
    padding-left: 15px;
  }
  
  #check {
    width: 18vw;
    margin: auto;
    padding-bottom: 20px;
    border-bottom: 1px solid #BDBDBD;
    margin-top: 40px;
  }
  
  input[type=checkbox] {
    width: 15px;
    height: 15px;
    vertical-align: middle;
  }

  p#remember {
    display: inline-block;
    font-size: 12px;
    margin-top: 30px;
    margin:  auto;
  }
  
  .login-button {
    width: 18vw;
    margin: auto;
  }

  #login-btn {
    width: 18vw;
    height: 5vh;
    background-color: #162D56;
    color: white;
    margin-top: 20px;
  } 
</style>

