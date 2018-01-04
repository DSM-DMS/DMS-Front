<template>
  <div id="extension-apply-right-wrapper">
    <extension-map :rows="rows" @extensionApply="apply"/>
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
    selectedClass: {type: Number},
    selectedTime: {type: Number}
  },
  watch: {
    selectedClass: function (val) {
      this.$http.get('/extension/map/' + String(this.selectedTime), {
        params: {
          class_num: this.selectedClass + 1
        }
      }).then(response => {
        this.rows = response.data
      }).catch(error => {
        console.log(error)
      })
    },
    selectedTime: function (val) {
      this.$http.get('/extension/map/' + String(this.selectedTime), {
        params: {
          class_num: this.selectedClass + 1
        }
      }).then(response => {
        this.rows = response.data
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
      this.$http.post('/extension/' + String(this.selectedTime), fd, {
        headers: {
          Authorization: 'JWT ' + this.$cookie.getCookie('JWT')
        }
      })
      .then(response => {
        console.log(response)
        this.$http.get('/extension/map/' + String(this.selectedTime), {
          params: {
            class_num: this.selectedClass + 1
          }
        }).then(response => {
          this.rows = response.data
        }).catch(error => {
          console.log(error)
        })
      }).catch(error => {
        console.log(error)
      })
    }
  },
  created: function () {
    this.$http.get('/extension/map/' + String(this.selectedTime), {
      params: {
        class_num: this.selectedClass + 1
      }
    }).then(response => {
      this.rows = response.data
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
</style>
