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
import Credit from '@/components/FooterSection/Credit'
import DeveloperIntro from '@/components/FooterSection/DeveloperIntro'

export default {
  name: 'FooterSection',
  components: {Credit, DeveloperIntro}
}
</script>

<style>
@media only screen and (min-width: 1101px){
  #footer-section-wrapper{
    height: 610px;
  }

  #dev-intro-img-wrapper{
    height: 20%;
  }

  #dev-intro-logo-img-wrapper{
    width: calc(50% - 70px);
    height: calc(100% - 50px);
    float: left;
    margin-left: 20px; 
    margin-right: 50px;
    margin-bottom: 50px;
  }
  
  #dev-intro-logo-img{
    height: 100%;
  }

  #dev-intro-category-img-wrapper{
    width: calc(50% - 50px);
    height: calc(100% - 50px);
    float: left;
    margin-right: 50px;
    margin-bottom: 50px;
  }

  .dev-intro-category-img{
    float: right;
    margin-right: 80px;
    height: 100%;
  }
}

@media only screen and (max-width: 1100px){
  #footer-section-wrapper{
    height: 10vh;
  }

  #dev-intro-wrapper{
    display: none;
  }

  #dev-intro-img-wrapper{
    display: none;
  }
}

#footer-section-wrapper{
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

#dev-intro-img-wrapper{
  width: 100%;
}

#footer-wrapper{
  width: 100%;
  height: 10%;
  background-color: #7DB0DA;
  display: table;
}
</style>
