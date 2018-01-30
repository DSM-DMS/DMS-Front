<template>
  <div>
    <img id="modal-img" :src="require('@/assets/Menu_modal/ic_bug_report.png')">
    <div id="bug-form">
      <input type="text" placeholder="제목" v-model="title">

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
      title: '',
      content: ''
    }
  },
  methods: {
    submit: function () {
      let fd = new FormData()
      fd.append('title', this.title)
      fd.append('content', this.content)
      this.$http.post('/report/bug', fd, {
        headers: {
          Authorization: 'JWT ' + this.$cookie.getCookie('JWT')
        }
      })
      .then(response => {
        alert('신고 완료')
      }).catch(error => {
        console.log(error)
      })
    }
  }
}
</script>

<style>
#modal-img {
  display: block;
  margin: auto;
  margin-top: 60px;
  margin-bottom: 40px;
  width: 15%;
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

