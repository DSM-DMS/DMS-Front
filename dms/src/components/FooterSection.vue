<template>
  <div id="footer-section-wrapper">
    <div id="dev-intro-wrapper">
      <div id="dev-intro-developer-wrapper">
        <div class="category">
          <p class="category-title">App</p>
          <p class="category-member">이병찬</p>
          <p class="category-member">윤정현</p>
          <p class="category-member">이성현</p>
        </div>
        <div class="category">
          <p class="category-title">Server</p>
          <p class="category-member">조민규</p>
          <p class="category-member">인상민</p>
        </div>
        <div class="category">
          <p class="category-title">Web Front</p>
          <p class="category-member">서윤호</p>
          <p class="category-member">김 건</p>
          <p class="category-member">김형규</p>
          <p class="category-member">오인서</p>
          <p class="category-member">윤효상</p>
        </div>
        <div class="category">
          <p class="category-title">Desktop</p>
          <p class="category-member">김동현</p>
          <p class="category-member">이종현</p>
          <p class="category-member">류근찬</p>
        </div>
        <div class="category">
          <p class="category-title">Design</p>
          <p class="category-member">김동규</p>
        </div>
      </div>
    </div>
    <div id="dev-intro-img-wrapper">
      <div id="dev-intro-logo-img-wrapper">
        <img id="dev-intro-logo-img" src="../assets/icon/ic_footer/ic_footer_logo.png" />
      </div>
      <div id="dev-intro-category-img-wrapper">
        <img class="dev-intro-category-img" src="../assets/icon/ic_footer/ic_ios.png" />
        <img class="dev-intro-category-img" src="../assets/icon/ic_footer/ic_android.png" />
        <img class="dev-intro-category-img" src="../assets/icon/ic_footer/ic_window.png" />
      </div>
    </div>
    <div id="footer-wrapper">
      <p id="footer-text">©2017 Team DMS</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterSection'
}
</script>

<style>
#footer-section-wrapper{
  height: 80vh;
  width: 100%;
  background-color: #CCD8DD;
}

#dev-intro-wrapper{
  height: 70%;
  width:100%;
  background-color: #CCD8DD;
}

#dev-intro-developer-wrapper{
  height: calc(100% - 50px);
  width: calc(100% - 160px);
  padding: 50px 80px 0 80px;
}

.category{
  height: 100%;
  margin-right: 80px;
  float: left;
}

.category-title{
  color: #4D7E99;
  margin-bottom: 30px;
  font-size: 30px;
  font-weight: bold;
}

.category-member{
  color: #5E97B7;
  margin-bottom: 30px;
  font-size: 20px;
}

#dev-intro-logo-img-wrapper{
  width: calc(50% - 80px);
  height: calc(100% - 80px);
  float: left;
  padding-left: 80px;
  padding-bottom: 80px;
}

#dev-intro-logo-img{
  height: 100%;
}

#dev-intro-category-img-wrapper{
  width: calc(50% - 50px);
  height: calc(100% - 80px);
  float: left;
  padding-right: 50px;
  padding-bottom: 80px;
}

.dev-intro-category-img{
  float: right;
  margin-right: 80px;
  height: 100%;
}

#dev-intro-img-wrapper{
  height: 20%;
  width: 100%;
}

#footer-wrapper{
  width: 100%;
  height: 10%;
  background-color: #7DB0DA;
  display: table;
}

#footer-text{
  color: white;
  text-align: center;
  font-size: 20px;
  display: table-cell;
  vertical-align: middle;
}

</style>
