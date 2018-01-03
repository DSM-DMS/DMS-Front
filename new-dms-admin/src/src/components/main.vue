<template>
<div id="main-page">
    <div id="main-bg"></div>
    <img id="logo"  src="../assets/logo.png">
    <div id="contents">
        <div id="download-title">
            <h3 id="title">Download</h3>
        </div>
        <div id="download-contents">
            <div id="download-bg">
                <img id="icon" src="../assets/ic_stay.png">
                <h3 id="conetnets-title">잔류신청</h3>
                <p id="sentence">잔류 신청 결과를 다운로드합니다.</p>
            </div>
            <div id="download-bg">
                <img id="icon" src="../assets/ic_goingout.png">
                <h3 id="conetnets-title">외출신청</h3>
                <p id="sentence">외출 신청 결과를 다운로드합니다.</p>
            </div>
            <div id="download-bg">
                <img id="icon" src="../assets/ic_broken.png">
                <h3 id="conetnets-title">시설고장</h3>
                <p id="sentence">시설 고장 목록을 다운로드합니다.</p>
            </div>
            <div id="download-bg">
                <img id="icon" src="../assets/ic_eleven.png">
                <h3 id="conetnets-title">11시연장</h3>
                <p id="sentence">연장 신청 목록을 다운로드합니다.</p>
            </div>
            <div id="download-bg">
                <img id="icon" src="../assets/ic_twelve.png">
                <h3 id="conetnets-title">12시연장</h3>
                <p id="sentence">연장 신청 목록을 다운로드합니다.</p>
            </div>
        </div>
        <div id="management-title">
            <h3 id="title">Management</h3>
        </div>
         <div id="management-contents">
            <div id="management-bg">
                <img id="icon" src="../assets/ic_notice.png">
                <h3 id="conetnets-title">공지사항</h3>
                <p id="sentence">공지사항을 작성,관리합니다.</p>
            </div>
            <div id="management-bg">
                <img id="icon" src="../assets/ic_rule.png">
                <h3 id="conetnets-title">기숙사규칙</h3>
                <p id="sentence">기숙사규칙을 작성,관리합니다.</p>
            </div>
            <div id="management-bg">
                <img id="icon" src="../assets/ic_question.png">
                <h3 id="conetnets-title" >자주하는 질문</h3>
                <p id="sentence">자주하는 질문을 작성,관리합니다.</p>
            </div>
            <div id="management-bg">
                <img id="icon" src="../assets/ic_poll.png">
                <h3 id="conetnets-title">설문조사</h3>
                <p id="sentence">설문조사를 작성,관리합니다.</p>
            </div>
        </div>
    </div>
</div>
</template>

<script>
    export default {

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
      background-image: url("../assets/main-page.png");
      position: absolute;
  }
  
  img#logo {
      position: relative;
      float: left;
      top: 30px;
      left: 40px;
  }

  #contents {
      width: 100%;
      height: 100%;
      position: absolute;
  }
  
  #download-title, #management-title {
      width: 220px;
      height: 50px;
      border-radius: 100px;
      background-color: rgba(202,182,177, 0.8);
      margin-top: 150px;
      margin-left: 100px;
  }

  h3#title {
      font-size: 20px;
      padding-top: 15px;
      color: #675094;
  }

  h3#conetnets-title {
      font-size: 30px;
      color: #675094;
      margin-top: 10px;
    }
  
  #download-bg, #management-bg {
      width: 300px;
      height: 200px;
      background-color: white;
      margin-left: 30px;
      border-radius: 10px;
      display: inline-block;
      margin-top: 50px;
  }

  img#icon {
      margin-top: 20px;
  }

  p#sentence {
      font-weight: 600;
      font-size: 12px;
      margin-top: -15px;
  }


</style>
