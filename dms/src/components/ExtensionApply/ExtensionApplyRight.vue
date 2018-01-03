<template>
  <div id="extension-apply-right-wrapper">
    <extension-map :rows="rows"/>
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
          class: this.selectedClass + 1
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
          class: this.selectedClass + 1
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
    }
  },
  created: function () {
    this.$http.get('/extension/map/' + String(this.selectedTime), {
      params: {
        class: this.selectedClass + 1
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
