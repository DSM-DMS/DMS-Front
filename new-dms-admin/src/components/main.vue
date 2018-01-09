<template>
<div id="main-page">
    <div id="main-bg"></div>
    <div class="top">
        <img id="logo"  src="../assets/logo/logo.png">
        <div id="admin-account">
            <div id="account-contents">
                <img id="admin-create" src="../assets/icon/ic_create_account.png">
                <p id="account-title">관리자 계정 삭제</p> 
            </div> 
            <div id="account-contents" @click="showAdminAccount()">
                <img id="admin-delete" src="../assets/icon/ic_return_account.png">
                <p id="account-title">관리자 계정 생성</p>
            </div> 
        </div>
    </div>
    <div id="contents">
        <div id="download-title">
            <h3 id="title">Download</h3>
        </div>
        <div id="download-contents">
            <div class="download-bg">
                <img class="icon" src="../assets/icon/ic_stay.png">
                <h3 class="conetnets-title">잔류신청</h3>
                <p class="sentence">잔류 신청 결과를 다운로드합니다.</p>
            </div>
            <div class="download-bg">
                <img class="icon" src="../assets/icon/ic_goingout.png">
                <h3 class="conetnets-title">외출신청</h3>
                <p class="sentence">외출 신청 결과를 다운로드합니다.</p>
            </div>
            <div class="download-bg">
                <img class="icon" src="../assets/icon/ic_broken.png">
                <h3 class="conetnets-title">시설고장</h3>
                <p class="sentence">시설 고장 목록을 다운로드합니다.</p>
            </div>
            <div class="download-bg">
                <img class="icon" src="../assets/icon/ic_eleven.png">
                <h3 class="conetnets-title">11시연장</h3>
                <p class="sentence">연장 신청 목록을 다운로드합니다.</p>
            </div>
            <div class="download-bg">
                <img class="icon" src="../assets/icon/ic_twelve.png">
                <h3 class="conetnets-title">12시연장</h3>
                <p class="sentence">연장 신청 목록을 다운로드합니다.</p>
            </div>
        </div>
        <div id="management-title">
            <h3 id="title">Management</h3>
        </div>
         <div id="management-contents">
            <div class="management-bg" @click="changeView('manage')">
                <img class="icon" src="../assets/icon/ic_notice.png">
                <h3 class="conetnets-title">공지사항</h3>
                <p class="sentence">공지사항을 작성,관리합니다.</p>
            </div>
            <div class="management-bg" @click="changeView('survey')">
                <img class="icon" src="../assets/icon/ic_rule.png">
                <h3 class="conetnets-title">기숙사규칙</h3>
                <p class="sentence">기숙사규칙을 작성,관리합니다.</p>
            </div>
            <div class="management-bg" @click="changeView('survey')">
                <img class="icon" src="../assets/icon/ic_question.png">
                <h3 class="conetnets-title" >자주하는 질문</h3>
                <p class="sentence">자주하는 질문을 작성,관리합니다.</p>
            </div>
            <div class="management-bg" @click="changeView('survey')">
                <img class="icon" src="../assets/icon/ic_poll.png">
                <h3 class="conetnets-title">설문조사</h3>
                <p class="sentence">설문조사를 작성,관리합니다.</p>
            </div>
        </div>
    </div>
    <component :is="adminView" v-if="isAdminAccount"></component>
</div>
</template>

<script>
import adminAccount from './adminAccount'

export default {
  name: 'index',
  component: {adminAccount},
  data: function () {
    return {
      isAdminAccount: false,
      adminView: adminAccount
    }
  },
  methods: {
    changeView: function (view) {
      this.$router.push(view)
    },
    showAdminAccount: function () {
      this.isAdminAccount = !this.isAdminAccount
    }
  }
}
</script>
<style scoped>
@import url(http://fonts.googleapis.com/earlyaccess/notosanskr.css);
  html, body {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Noto Sans KR', sans-serif;
  }
  
  #main-page {
      width: 100vw;
      height: 100vh;
  }

  #main-bg {
      width: 100vw;
      height: 100vh;
      background-image: url("../assets/background/bg_notice.png");
      position: absolute;
  }

  .top {
      width: 100%;
      height: 100px;
      position: fixed;
  }

  #admin-account {
      width: 500px;
      height: 100px;
      position: relative;
      top: 20px;
      right: 30px;
      float: right;
  }

  #account-title {
      display: inline-block;
      font-weight: 800;
  }

  #admin-create, #admin-delete {
      vertical-align: middle;
      margin-right: 10px;
  }
  
  #account-contents {
      display: inline-block;
      margin-left: 50px;
      cursor: pointer;
  }

  img#logo {
      position: relative;
      float: left;
      top: 30px;
      left: 30px;
  }

  #contents {
      width: 100%;
      height: 88vh;
      position: absolute;
      margin-top: 100px;
  }
  
  #download-title {
      width: 220px;
      height: 50px;
      border-radius: 100px;
      background-color: rgba(202,182,177, 0.8);
      margin-top: 100px;
      margin-left: 100px;
  }
  #management-title {
      width: 220px;
      height: 50px;
      border-radius: 100px;
      background-color: rgba(202,182,177, 0.8);
      margin-top: 80px;
      margin-left: 100px;
  }

  h3#title {
      font-size: 20px;
      padding-top: 15px;
      color: #675094;
  }

  h3.conetnets-title {
      font-size: 30px;
      color: #675094;
      margin-top: 10px;
    }
  
  .download-bg, .management-bg {
      width: 300px;
      height: 200px;
      background-color: white;
      margin-left: 30px;
      border-radius: 10px;
      display: inline-block;
      margin-top: 50px;
      cursor: pointer;
  }

  img.icon {
      margin-top: 20px;
  }

  p.sentence {
      font-weight: 600;
      font-size: 12px;
      margin-top: -15px;
  }


</style>
