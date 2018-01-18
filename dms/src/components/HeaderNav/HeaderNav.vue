<template>
  <div id="header-wrapper">
    <div id="brand-wrapper">
      <img id="header-ic-logo" src="../../assets/icon/ic_logo.png" />
    </div>

    <div id="header-menu-wrapper">
      <span class="header-menu">메인화면</span>
      <span class="header-menu">신청화면</span>
      <span class="header-menu">공지사항</span>
      <span class="header-menu" @click="loginButton">{{ !$store.getters.isLogin? '로그인': '로그아웃' }}</span>
      <div id="menu-btn-wrapper" @click="menuButton">
        <span>메뉴</span>
        <img id="header-ic-menu" src="../../assets/icon/ic_menu.png" />
      </div>
    </div>

    <login-modal v-if="computedLoginModal" @close="loginModal = false"/>
  </div>
</template>

<script>
import LoginModal from '@/components/HeaderNav/LoginModal'
export default {
  name: 'HeaderNav',
  components: {
    LoginModal
  },
  data: function () {
    return {
      loginModal: false,
      menu: false
    }
  },
  methods: {
    loginButton: function () {
      if (this.$store.getters.isLogin) {
        this.$store.dispatch('logout')
        this.loginModal = false
      } else {
        this.loginModal = true
      }
    },
    menuButton: function () {
      this.$store.dispatch('setMenuStatus')
      this.menu = !this.menu
    }
  },
  computed: {
    computedLoginModal: function () {
      return this.$store.getters.isLogin ? false : this.loginModal
    }
  }
}
</script>

<style>
/*header*/
@media only screen and (min-width: 1025px){
  .header-menu {
    margin-right: 60px; 
  }
}

@media only screen and (max-width: 1024px){
  .header-menu {
    margin-right: 30px; 
  }
}

#header-wrapper {
  font-family: 'NanumSquareB';
  margin: 20px 50px 0 50px;
  position: fixed;
  top: 0;
  width: calc(100% - 100px);
  z-index: 10;
  height: 60px;
  border-radius: 10px;
  background-color: white;
  box-shadow: 3px 3px rgba(126, 126, 126, 0.3);
}

#brand-wrapper {
  display: inline-block;
  margin: 15px 10px 15px 10px;
  cursor: pointer;
}

#header-menu-wrapper {
  float: right;
  margin-right: 20px;
  margin-top: 20px;
}

#header-menu-wrapper:nth-child(n) {
  cursor: pointer;
}

#header-ic-menu {
  width: 15px;
}

#header-ic-logo {
  height: 30px;
}

#menu-btn-wrapper{
  display: inline-block;
}

#menu-btn-wrapper span {
  font-family: 'Nanum Square';
  font-weight: bold;
  font-size: 15px;  
}
</style>