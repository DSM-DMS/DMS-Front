<template>
  <div id="post-wrapper">
    <div class="post-card-wrapper">
      <div class="post-card">
        <div class="post-card-header" style="background-color: rgb(246, 99, 81);">
          <p class="post-card-header-text">Notice</p>
        </div>
        <div class="post-card-body-wrapper">
          <div class="post-card-body">
            <div class="post-card-img-wrapper">
              <img class="post-card-img" src="../assets/icon/ic_notice/ic_notice.png">
            </div>
            <div class="post-card-body-text-wrapper" style="color: rgb(246, 99, 81);">
              <p class="post-card-body-text">공지사항</p>
              <p class="post-card-body-sub-text">사감부의 공지사항을 확인하세요</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="post-card-wrapper">
      <div class="post-card">
        <div class="post-card-header" style="background-color: rgb(255, 188, 71);">
          <p class="post-card-header-text">Rule</p>
        </div>
        <div class="post-card-body-wrapper">
          <div class="post-card-body">
            <div class="post-card-img-wrapper">
              <img class="post-card-img" src="../assets/icon/ic_notice/ic_rule.png">
            </div>
            <div class="post-card-body-text-wrapper" style="color: rgb(255, 188, 71);">
              <p class="post-card-body-text">기숙사 규정</p>
              <p class="post-card-body-sub-text">기숙사 관련 규정을 확인하세요</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="post-card-wrapper">
      <div class="post-card">
        <div class="post-card-header" style="background-color: rgb(53, 147, 211);">
          <p class="post-card-header-text">Question</p>
        </div>
        <div class="post-card-body-wrapper">
          <div class="post-card-body">
            <div class="post-card-img-wrapper">
              <img class="post-card-img" src="../assets/icon/ic_notice/ic_question.png">
            </div>
            <div class="post-card-body-text-wrapper" style="color: rgb(53, 147, 211);">
              <p class="post-card-body-text">자주하는 질문</p>
              <p class="post-card-body-sub-text">기숙사 관련 질문과 대답을 확인하세요</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PostSection'
}
</script>

<style>
/*post-section*/

#post-wrapper {
  width: 100%;
  height: 70vh;
  background-color: rgb(226, 226, 226);
  padding-top: 40px;
  padding-bottom: 40px;
}

.post-card-wrapper {
  width: calc(100%/3);
  height: 100%;
  float: left;
}

.post-card {
  width: 90%;
  height: 100%;
  margin: 0 auto;
  cursor: pointer;
  will-change: transform;
}

.post-card:hover{
  -webkit-transform:scale(1.05); /*  크롬 */
  -moz-transform:scale(1.05); /* FireFox */
  -o-transform:scale(1.05); /* Opera */
  transform:scale(1.05);
  transition: transform .35s;
  -o-transition: transform .35s;
  -moz-transition: transform .35s;
  -webkit-transition: transform .35s;
}

.post-card-header {
  width: 100%;
  height: 15%;
  display: table;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

.post-card-header-text {
  text-align: center;
  color: white;
  font-size: 30px;
  display: table-cell;
  vertical-align: middle;
}

.post-card-body-wrapper {
  width: 100%;
  height: 85%;
  background-color: white;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  display: table;
}

.post-card-body {
  display: table-cell;
  vertical-align: middle;
}

.post-card-img-wrapper {
  width: 35%;
  margin: 0 auto;
}

.post-card-img {
  width: 100%;
  margin: 0 auto;
}

.post-card-body-text-wrapper:nth-child(n) {
  text-align: center;
  font-weight: bold;
}

.post-card-body-text {
  font-size: 30px;
  margin: 15px;
}

.post-card-body-sub-text {
  font-size: 15px;
}
</style>
