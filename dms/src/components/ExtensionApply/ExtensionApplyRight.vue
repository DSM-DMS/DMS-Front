<template>
  <div id="extension-apply-right-wrapper">
    <extension-map :rows="rows" @extensionApply="apply"/>
    <div id="toggle-button">
      <input type="checkbox" hidden name="time" id="toggle-time" v-model="time" v-bind:true-value="12" v-bind:false-value="11">
      <div id="toggle-slider">
        <div id="toggle-text11">11시</div>
        <label for="toggle-time" id="toggle-switch"></label>
        <div id="toggle-text12">12시</div>
      </div>
    </div>
  </div>
</template>

<script>
import ExtensionMap from './ExtensionMap'
export default {
  name: 'ExtensionApplyLeft',
  components: {
    ExtensionMap
  },
  data: function () {
    return {
      rows: [],
      time: this.selectedTime
    }
  },
  props: {
    selectedClass: {type: Number},
    selectedTime: {type: Number}
  },
  watch: {
    selectedClass: function (val) {
      this.$http.get('/extension/map/' + String(this.time), {
        params: {
          class_num: this.selectedClass + 1
        }
      }).then(response => {
        if (response.status === 200) {
          this.rows = response.data
        }
      }).catch(error => {
        console.log(error)
      })
    },
    time: function (val) {
      this.$emit('update:selectedTime', val)
      this.$http.get('/extension/map/' + String(this.time), {
        params: {
          class_num: this.selectedClass + 1
        }
      }).then(response => {
        if (response.status === 200) {
          this.rows = response.data
        }
      }).catch(error => {
        console.log(error)
      })
    }
  },
  methods: {
    apply: function (seat) {
      let fd = new FormData()
      fd.append('class_num', this.selectedClass + 1)
      fd.append('seat_num', seat)
      this.$http.post('/extension/' + String(this.time), fd, {
        headers: {
          Authorization: 'JWT ' + this.$cookie.getCookie('JWT')
        }
      })
      .then(response => {
        if (response.status === 201) {
          alert('연장학습이 신청에 성공하였습니다.')
          this.$http.get('/extension/map/' + String(this.time), {
            params: {
              class_num: this.selectedClass + 1
            }
          }).then(response => {
            if (response.status === 200) {
              this.rows = response.data
            }
          }).catch(error => {
            console.log(error)
          })
        } else if (response.status === 204) {
          alert('연장학습 신청 가능 시간이 아닙니다.')
        }
      }).catch(() => {
        alert('연장학습 신청에 실패하였습니다.')
      })
    }
  },
  created: function () {
    this.$http.get('/extension/map/' + String(this.time), {
      params: {
        class_num: this.selectedClass + 1
      }
    }).then(response => {
      if (response.status === 200) {
        this.rows = response.data
      }
    }).catch(error => {
      console.log(error)
    })
  }
}
</script>

<style scoped>
#extension-apply-right-wrapper {
  width: 100%;
  height: 100%;
  background-image: url('../../assets/Study_application/background.png');
  background-size:cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
}

#toggle-button {
  box-sizing: content-box;
  position: relative;
  float: left;
  top: 15%;
  left: 50px;
  width: 100px;
  height: 40px;
  overflow: hidden;
  border: 3px solid white;
  border-radius: 40px;
}

#toggle-slider {
  height: 40px;
  width: 160px;
  position: relative;
  left: 0;
  transition: left .8s;
  color: white;
  line-height: 40px;
  text-align: center;
}

#toggle-slider > div, #toggle-slider > label {
  float: left;
}

#toggle-time:checked + #toggle-slider{
  left: -60px;
}

#toggle-text11 {
  width: 60px;
  height: 40px;
}

#toggle-switch {
  width: 30px;
  height: 30px;
  background-color: white;
  border-radius: 50%;
  cursor: pointer;
  margin: 5px
}

#toggle-text12 {
  width: 60px;
  height: 40px;
}
</style>
