<template>
  <div>
    <img id="modal-img" :src="require('@/assets/Menu_modal/ic_bug_report.png')">
    <div id="bug-form">
      <textarea v-model="content"></textarea>
      <img :src="require('@/assets/Menu_modal/ic_bug_report_enter.png')" id="bug_enter" @click="submit">
    </div>
  </div>
</template>

<script>
export default {
  name: 'BugReport',
  data: function () {
    return {
      content: ''
    }
  },
  methods: {
    submit: function () {
      if (this.content === '') {
        alert('입력하지 않은 칸이 있습니다.')
      } else {
        this.$http.post('/student/report/bug', {
          platform: 1,
          content: this.content
        }, {
          headers: {
            Authorization: 'JWT ' + this.$cookie.getCookie('JWT')
          }
        })
        .then(response => {
          if (response.status === 201) {
            alert('버그 신고에 성공하였습니다.')
            this.$emit('close')
          } else {
            alert('버그 신고에 실패하였습니다.')
          }
        }).catch(() => {
          alert('버그 신고에 실패하였습니다.')
        })
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
  width: 17%;
}

#bug-form {
  width: 70%;
  margin: auto;
  margin-bottom: 60px;
  text-align: right;
}

#bug-form input {
  height: 50px;
  font-size: 20px;
  font-weight: bold;
  width: 100%;
  border: 0;
  border-bottom: 2px solid rgb(174, 174, 174);
  margin-bottom: 5px;
  margin-top: 5px;
  position: relative;
}

#bug-form input::placeholder {
  font-size: 20px;
  font-weight: bold;
  color: rgb(100, 100, 100);
}

#bug-form textarea {
  width: 100%;
  margin-bottom: 15px;
  margin-top: 15px;
  font-size: 20px;
  font-weight: bold;
  height: 200px;
  border: 2px solid rgb(174, 174, 174);
  border-radius: 5px;
  font-family: inherit;
}

#bug_enter {
  display: inline-block;
  width: 35%;
  margin-top: 35px;
  cursor: pointer;
}
</style>

