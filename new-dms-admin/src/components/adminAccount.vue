<template>
  <div id="login-modal-wrapper" @click.self="$emit('close')">
    <div id="login-modal">
      <div id="login-left">
        <img id="login-image" :src="require('../assets/icon/ic_createAccount.png')">
      </div>
      <div id="login-right">
        <div id="login-form" @keyup.enter="login">
          <input id="login-id" class="login-form-input" type="text" placeholder="ID" v-model="id">
          <input id="login-password" class="login-form-input" type="password" placeholder="Password" v-model="pw">
          <input id="login-user-name" class="login-form-input" type="text" placeholder="Username" v-model="name">
        </div>
        <img id="login-button" @click="login" :src="require('../assets/button/ic_enter.png')">
      </div>
    </div>
  </div>
</template>

<script>
const qs = require('query-string')

export default {
  name: 'adminAccount',
  data: function () {
    return {
      id: '',
      pw: '',
      name: ''
    }
  },
  methods: {
    login: function (evnet) {
      this.$axios({
        method: 'POST',
        url: '/admin/new-account',
        data: qs.stringify({id: this.id, pw: this.pw, name: this.name}),
        headers: {
          Authorization: 'JWT ' + this.$getCookie('JWT')
        }
      })
      .then((response) => {
        console.log(response.data)
        if (response.status === 201) {
          alert('관리자 계정 생성 성공')
        } else {
          alert('관리자 계정 생성 실패')
        }
      })
      .catch((ex) => {
        console.log(ex)
      })
    }
  }
}
</script>

<style scoped>
#login-modal-wrapper {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
}

#login-modal {
  background-color: white;
  width: 1000px;
  height: 500px;
  border-radius: 15px;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%)
}

#login-left {
  background-image: url('../assets/background/main-bg.png');
  background-size: contain;
  width: 50%;
  height: 100%;
  border-radius: 15px 0 0 15px;
  float: left;
  background-repeat: no-repeat;
  background-size: cover;
}

#login-image {
  position: relative;
  top: 40px;
  right: 110px;
  width: 200px;
  height: 100px;
}

#sign-up-button {
  position: relative;
  float: right;
  right: 50px;
  top: 400px;
  cursor: pointer;
}

#login-right {
  width: 50%;
  height: 100%;
  float: right;
}

.login-form-input {
  height: 40px;
  width: 100%;
  border-bottom: 1px solid rgb(120, 173, 217);
  margin: auto;
  display: block;
  font-size: 30px;
  padding-bottom: 5px;
  color: rgb(120, 173, 217);
  margin-top: 50px;
}

.login-form-input::placeholder {
  color: rgb(120, 173, 217);
  font-weight: bold;
}

#login-form {
  width: 75%;
  position: relative;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
}

#login-button {
  position: relative;
  float: right;
  right: 50px;
  top: 100px;
  cursor: pointer;
}

input {
  border: none;
  outline: none;
}

</style>
