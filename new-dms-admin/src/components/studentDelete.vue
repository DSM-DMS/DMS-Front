<template>
  <div id="login-modal-wrapper" @click.self="$emit('close')">
    <div id="login-modal">
      <div id="login-left">
        <img id="login-image" :src="require('../assets/icon/deleteAccount.png')">
      </div>
      <div id="login-right">
        <div id="login-form" @keyup.enter="adminDelete">
          <input id="login-id" class="login-form-input" type="number" placeholder="학번" v-model="number">
        </div>
        <img id="login-button" @click="adminDelete" :src="require('../assets/button/ic_enter.png')">
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'adminDelete',
  data: function () {
    return {
      number: ''
    }
  },
  methods: {
    adminDelete: function (evnet) {
      let fd = new FormData()
      fd.append('number', this.number)
      this.$axios({
        method: 'POST',
        url: 'admin/account-control',
        data: fd,
        headers: {
          Authorization: 'JWT ' + this.$getCookie('JWT')
        }
      })

      .then((response) => {
        if (response.status === 201) {
          alert('학생 계정 삭제 성공')
        } else {
          alert('학생 계정 삭제 실패')
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
  top: 300px;
  cursor: pointer;
}

input {
  border: none;
  outline: none;
}

</style>
