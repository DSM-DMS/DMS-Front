<template>
  <div>
    <img id="modal-img" :src="require('@/assets/Menu_modal/ic_report_broken.png')">
    <div id="facility-form">
      <input type="text" placeholder="제목" v-model="title">
      <input type="text" placeholder="호실" v-model="roomNum">
      <textarea v-model="content"></textarea>

      <img :src="require('@/assets/Menu_modal/ic_report_broken_enter.png')" id="facility-enter" @click="submit">
    </div>
  </div>
</template>

<script>
export default {
  name: 'FacilityReport',
  data: function () {
    return {
      title: '',
      roomNum: '',
      content: ''
    }
  },
  methods: {
    submit: function () {
      let fd = new FormData()
      fd.append('title', this.title)
      fd.append('content', this.content)
      fd.append('room', this.roomNum)
      this.$http.post('/report/facility', fd, {
        headers: {
          Authorization: 'JWT ' + this.$cookie.getCookie('JWT')
        }
      })
      .then(response => {
        if (response.status === 201) {
          alert('시설고장 신고에 성공하였습니다.')
          this.$emit('close')
        } else {
          alert('시설고장 신고에 실패하였습니다.')
        }
      }).catch(() => {
        alert('시설고장 신고에 실패하였습니다.')
      })
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
  width: 30%;
}

#facility-form {
  width: 70%;
  margin: auto;
  margin-bottom: 60px;
  text-align: right;
}

#facility-form input {
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

#facility-form input::placeholder {
  font-size: 20px;
  font-weight: bold;
  color: rgb(100, 100, 100);
}

#facility-form textarea {
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

#facility-enter {
  display: inline-block;
  width: 35%;
  margin-top: 35px;
  cursor: pointer;
}
</style>

