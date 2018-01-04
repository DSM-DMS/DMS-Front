<template>
  <div id="login-modal-wrapper" @click.self="$emit('close')">
    <div id="login-modal">
      <div id="login-left">
        <img id="login-image" :src="require('../../assets/Main_login/ic_login.png')" alt="">
        <img id="sign-up-button" :src="require('../../assets/Main_login/button/ic_signup.png')" alt="">
      </div>
      <div id="login-right">
        <div id="login-form">
          <input id="login-user-name" class="login-form-input" type="text" placeholder="Username" v-model="userName">
          <input id="login-password" class="login-form-input" type="password" placeholder="Password" v-model="password">
          <input type="checkbox" hidden id="login-checkbox" v-model="checked">
          <label id="login-checkbox-label" for="login-checkbox">
            <img id="login-checkbox-image" :src="checked? require('../../assets/Main_login/button/ic_checked.png'): require('../../assets/Main_login/button/ic_unchecked.png')">
            자동 로그인
          </label>
        </div>
        <img id="login-button" @click="login" :src="require('../../assets/Main_login/button/ic_enter.png')">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginModal',
  data: function () {
    return {
      userName: '',
      password: '',
      checked: false
    }
  },
  methods: {
    login: function () {
      this.$store.dispatch('login', {userName: this.userName, password: this.password, checked: this.checked})
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
  background-image: url('../../assets/Main_login/background/background.png');
  background-size: contain;
  width: 50%;
  height: 100%;
  border-radius: 15px 0 0 15px;
  float: left;
}

#login-image {
  position: relative;
  top: 50px;
  left: 50px;
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
}

.login-form-input::placeholder {
  color: rgb(120, 173, 217);
  font-weight: bold;
}

#login-user-name {
  margin-bottom: 50px;
}

#login-form {
  width: 75%;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

#login-button {
  position: relative;
  float: right;
  left: 200px;
  top: 300px;
  cursor: pointer;
}

#login-checkbox-label {
  margin-top: 15px;
  float: right;
  color: rgb(120, 173, 217);
  height: 20px;
}

#login-checkbox-label > img {
  width: 20px;
  height: 20px;
  vertical-align: bottom;
}
</style>
