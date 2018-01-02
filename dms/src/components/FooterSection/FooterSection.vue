<template>
  <div id="footer-section-wrapper">
    <div id="dev-intro-wrapper">
      <developer-intro/>
    </div>
    <div id="dev-intro-img-wrapper">
      <div id="dev-intro-logo-img-wrapper">
        <img id="dev-intro-logo-img" src="../../assets/icon/ic_footer/ic_footer_logo.png" />
      </div>
      <div id="dev-intro-category-img-wrapper">
        <img class="dev-intro-category-img" src="../../assets/icon/ic_footer/ic_ios.png" />
        <img class="dev-intro-category-img" src="../../assets/icon/ic_footer/ic_android.png" />
        <img class="dev-intro-category-img" src="../../assets/icon/ic_footer/ic_window.png" />
      </div>
    </div>
    <credit/>
  </div>
</template>

<script>
import Credit from './Credit'
import DeveloperIntro from './DeveloperIntro'

export default {
  name: 'FooterSection',
  components: {Credit, DeveloperIntro}
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
