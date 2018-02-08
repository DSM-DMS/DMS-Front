<template>
  <div id="login-modal-wrapper" @click.self="$emit('close')">
    <div id="login-modal" v-if="isLogin">
      <div id="login-left">
        <img id="login-image" :src="require('../../assets/Main_login/ic_login.png')" alt="">
        <img id="sign-up-button" :src="require('../../assets/Main_login/button/ic_signup.png')" @click="isLogin = false">
      </div>
      <div id="login-right">
        <div id="login-form">
          <input id="login-user-name" class="login-form-input" type="text" placeholder="Username" v-model="userName" autofocus>
          <input id="login-password" class="login-form-input" type="password" placeholder="Password" v-model="password" @keydown.enter="login">
          <input type="checkbox" hidden id="login-checkbox" v-model="checked">
          <label id="login-checkbox-label" for="login-checkbox">
            <img id="login-checkbox-image" :src="checked? require('../../assets/Main_login/button/ic_checked.png'): require('../../assets/Main_login/button/ic_unchecked.png')">
            자동 로그인
          </label>
        </div>

        <img id="login-button" @click="login" :src="require('../../assets/Main_login/button/ic_enter.png')">
      </div>
    </div>

    <div id="login-modal" v-else>
      <div id="signup-left">
        <img id="login-image" :src="require('../../assets/Main_sign_up/ic_sign_up.png')" alt="">
        <img id="sign-up-button" :src="require('../../assets/Main_sign_up/button/ic_login.png')" @click="isLogin = true">
      </div>
      <div id="signup-right">
        <div id="signup-form">
          <input class="signup-form-input" type="text" placeholder="Username" v-model="userName" autofocus>
          <input class="signup-form-input" type="password" placeholder="Password" v-model="password">
          <input class="signup-form-input" type="text" placeholder="Code" v-model="code" @keydown.enter="signup">
        </div>
        
        <img id="signup-button" @click="signup" :src="require('../../assets/Main_sign_up/button/ic_enter.png')">
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
      code: '',
      checked: false,
      isLogin: true
    }
  },
  methods: {
    login: function () {
      this.$store.dispatch('login', {userName: this.userName, password: this.password, checked: this.checked})
    },
    signup: function () {
      let fd = new FormData()
      fd.append('uuid', this.code)
      fd.append('id', this.userName)
      fd.append('pw', this.password)
      this.$http.post('/signup', fd)
      .then(response => {
        if (response.status === 201) {
          alert('회원가입에 성공하였습니다.')
        } else if (response.status === 204) {
          alert('이미 가입된 ID 입니다.')
        } else if (response.status === 205) {
          alert('유효하지 않은 코드입니다.')
        } else {
          alert('회원가입에 실패하였습니다.')
        }
      }).catch(() => {
        alert('회원가입에 실패하였습니다.')
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
  background-image: url('../../assets/Main_login/background/bg_log_in.svg');
  background-size: contain;
  background-repeat: no-repeat;
  width: 50%;
  height: 100%;
  border-radius: 15px 0 0 15px;
  float: left;
}

#signup-left {
  background-image: url('../../assets/Main_sign_up/background/bg_sign_up.svg');
  background-size: contain;
  background-repeat: no-repeat;
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0 15px 15px 0;
}

#signup-right {
  width: 50%;
  height: 100%;
  float: right;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0 15px 15px 0;
  background-color: rgb(120, 173, 217);
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
}

#signup-form {
  width: 75%;
}

#signup-form input {
  margin-top: 40px;
  margin-bottom: 40px;
}

.signup-form-input {
  height: 40px;
  width: 100%;
  border-bottom: 1px solid white;
  margin: auto;
  display: block;
  font-size: 30px;
  padding-bottom: 5px;
  background-color: rgb(120, 173, 217);
  color: white;  
}

.signup-form-input::placeholder {
  color: white;
  font-weight: bold;
}

#login-button {
  cursor: pointer;
  align-self: flex-end;
  display: flex;
  position: absolute;
  bottom: 50px;
  right: 50px;
}

#signup-button {
  cursor: pointer;
  align-self: flex-end;
  display: flex;
  position: absolute;
  bottom: 50px;
  right: 50px;
}

#login-checkbox-label {
  margin-top: 15px;
  float: right;
  color: rgb(120, 173, 217);
  height: 20px;
  cursor: pointer;
}

#login-checkbox-label > img {
  width: 20px;
  height: 20px;
  vertical-align: bottom;
}
</style>
