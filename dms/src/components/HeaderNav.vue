<template>
  <div id="header-wrapper">
    <div id="brand-wrapper">
      <img id="header-ic-logo" src="../assets/icon/ic_logo.png" />
    </div>

    <div id="header-menu-wrapper">
      <span class="header-menu">메인화면</span>
      <span class="header-menu">신청화면</span>
      <span class="header-menu">공지사항</span>
      <span class="header-menu">로그인</span>
      <span>메뉴</span>
      <img id="header-ic-menu" src="../assets/icon/ic_menu.png" />
    </div>

  </div>
</template>

<script>
export default {
  name: 'HeaderNav'
}
</script>


<style>
/*header*/

#header-wrapper {
  margin: 20px 50px 0 50px;
  position: fixed;
  top: 0;
  width: calc(100% - 100px);
  z-index: 10000;
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

#header-menu-wrapper span {
  font-family: 'Nanum Square';
  font-weight: bold;
  font-size: 15px;
}

.header-menu {
  margin-right: 60px;
}
</style>
