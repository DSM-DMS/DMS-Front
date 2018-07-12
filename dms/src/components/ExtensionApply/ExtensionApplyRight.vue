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
      rows: []
    }
  },
  props: {
    applyStatus: { type: Object }
  },
  computed: {
    selectedClass () {
      return this.applyStatus.selectedClass
    },
    time: {
      get () {
        return this.applyStatus.selectedTime
      },
      set (val) {
        this.$emit('changeTimeValue', val)
        this.getMap(val, this.selectedClass + 1)
      }
    }
  },
  watch: {
    selectedClass: function (val) {
      this.getMap(this.time, this.selectedClass + 1)
    }
  },
  methods: {
    apply: function (seat) {
      this.$http.post('/student/apply/extension/' + this.time, {
        classNum: this.selectedClass + 1,
        seatNum: seat
      }, {
        headers: {
          Authorization: 'JWT ' + this.$cookie.getCookie('JWT')
        }
      })
      .then(response => {
        if (response.status === 201) {
          alert('연장학습이 신청에 성공하였습니다.')
          this.getMap(this.time, this.selectedClass + 1)
        } else if (response.status === 204) {
          alert('연장학습 신청 가능 시간이 아닙니다.')
        }
      }).catch(() => {
        alert('연장학습 신청에 실패하였습니다.')
      })
    },
    getMap (time, classNum) {
      this.$http.get('/student/apply/extension/' + time + '/map', {
        params: {
          classNum: classNum
        },
        headers: {
          Authorization: 'JWT ' + this.$cookie.getCookie('JWT')
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
  created: function () {
    this.getMap(this.time, this.selectedClass + 1)
  }
}
</script>

<style scoped>
#extension-apply-right-wrapper {
  width: 100%;
  height: 100%;
  background-image: url('../../assets/Study_application/bg_study_application.svg');
  background-size:cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
}

#toggle-button {
  box-sizing: content-box;
  position: absolute;
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
