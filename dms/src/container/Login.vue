<template>
  <div id="login-wrapper">
    <login-modal />
  </div>
</template>

<script>
import LoginModal from '@/components/HeaderNav/LoginModal'

export default {
  name: 'Login',
  components: {
    LoginModal
  },
  computed: {
    isLogin: function () {
      return this.$store.getters.isLogin
    }
  },
  watch: {
    isLogin: function (val) {
      if (val) {
        this.$router.push('/')
      }
    }
  },
  mounted: function () {
    if (this.isLogin) {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
#login-wrapper {
  width: 100%;
  height: 100%;
  background-image: url('../assets/Login/bg_main.svg');
  background-size: cover;
  background-attachment: fixed;
}
</style>

