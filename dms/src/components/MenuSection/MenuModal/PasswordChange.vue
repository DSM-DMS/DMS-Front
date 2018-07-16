<template>
  <div>
    <img id="modal-img" :src="require('@/assets/Menu_modal/ic_change_pw.png')">
    <div id="password-form">
      <input type="password" placeholder="현재 비밀번호" v-model="password.old">
      <input type="password" placeholder="새로운 비밀번호" :style="password.style" v-model="password.new" @blur="styling">
      <input type="password" placeholder="비밀번호 확인" :style="password.style" v-model="password.confirm" @blur="styling" @keydown.enter="submit">
      
      <img :src="require('@/assets/Menu_modal/ic_change_pw_enter.png')" id="password-enter" @click="submit">
    </div>
  </div>
</template>

<script>
export default {
  name: 'PasswordChange',
  data: function () {
    return {
      password: {
        old: '',
        new: '',
        confirm: '',
        style: {}
      }
    }
  },
  methods: {
    submit: function () {
      this.styling()
      if (this.confirm()) {
        if (this.password.old === '' || this.password.confirm === '') {
          alert('입력하지 않은 칸이 있습니다.')
        } else {
          this.$http.post('/student/account/change-pw', {
            currentPassword: this.password.old,
            newPassword: this.password.new
          }, {
            headers: {
              Authorization: 'JWT ' + this.$cookie.getCookie('JWT')
            }
          })
          .then(response => {
            if (response.status === 200) {
              alert('비밀번호 변경에 성공하였습니다.')
              this.$emit('close')
              this.$store.dispatch('logout')
            } else {
              alert('비밀번호 변경에 실패하였습니다.')
            }
          }).catch((err) => {
            console.log(err)
            alert('비밀번호 변경에 실패하였습니다.')
          })
        }
      } else {
        alert('새로운 비밀번호와 비밀번호 확인이 다릅니다.')
      }
    },
    confirm: function () {
      if (this.password.new === this.password.confirm) {
        return true
      } else {
        return false
      }
    },
    styling: function () {
      if (this.confirm()) {
        if (this.password.new === '') {
          this.password.style = {}
        } else {
          this.password.style = {
            border: '2px solid #87cd7b'
          }
        }
      } else {
        this.password.style = {
          border: '2px solid #f36b7e'
        }
      }
    }
  }
}
</script>

<style scoped>

#modal-img {
  display: block;
  margin: auto;
  margin-top: 60px;
  margin-bottom: 40px;
  width: 25%;
}

#password-form {
  width: 70%;
  margin: auto;
  margin-bottom: 60px;
  text-align: right;
}

#password-form input {
  height: 50px;
  font-size: 40px;
  width: 100%;
  border: 0;
  border-bottom: 2px solid rgb(174, 174, 174);
  margin-bottom: 15px;
  margin-top: 15px;
  position: relative;
}

#password-form input::placeholder {
  font-size: 20px;
  font-weight: bold;
  line-height: 50px;
  color: rgb(100, 100, 100);
}

#password-enter {
  display: inline-block;
  width: 35%;
  margin-top: 35px;
  cursor: pointer;
}
</style>

