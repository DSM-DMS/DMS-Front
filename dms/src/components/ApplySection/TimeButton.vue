<template>
  <div class="time-button-wrapper">
    <img class="time-img" :src="timeImg" alt="">
    <img class="pm-img" :src="lightImg" alt="">
  </div>
</template>

<script>
export default {
  name: 'TimeButton',
  props: {
    light: {type: Boolean},
    eleven: {type: Boolean}
  },
  computed: {
    timeImg: function () {
      if (this.light) {
        return this.eleven ? require('@/assets/icon/ic_eleven_twelve/ic_eleven.svg') : require('@/assets/icon/ic_eleven_twelve/ic_twelve.svg')
      } else {
        return this.eleven ? require('@/assets/icon/ic_eleven_twelve/ic_eleven_non.svg') : require('@/assets/icon/ic_eleven_twelve/ic_twelve_non.svg')
      }
    },
    lightImg: function () {
      return this.light ? require('@/assets/icon/ic_eleven_twelve/ic_pm.svg') : require('@/assets/icon/ic_eleven_twelve/ic_pm_non.svg')
    }
  }
}
</script>

<style scoped>
.time-button-wrapper {
  display: inline-block;
}

.time-img {
  height: 90px;
  margin-right: 15px;
}

.pm-img {
  height: 40px;
}
</style>

