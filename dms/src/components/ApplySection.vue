<template>
  <div id="apply-wrapper">
    <div class="apply-card-wrapper">
      <div class="apply-card" id="stay-apply-wrapper">
        <div id="stay-apply-content">
          <div id="stay-apply-img-wrapper">
            <img id="stay-apply-img" src="../assets/icon/ic_homecoming/ic_friday.png" />
          </div>
          <div id="stay-apply-text-wrapper">
            <p id="stay-apply-text">잔류신청</p>
            <p id="stay-apply-sub-text">귀가 여부를 확인하세요</p>
          </div>
        </div>
      </div>
      <div class="apply-card" id="extention-apply-wrapper">
        <div id="extention-apply-content">
          <div id="extention-apply-text-wrapper">
            <p id="extention-apply-text">연장학습 신청</p>
            <p id="extention-apply-sub-text">추가 연장학습을 신청하세요</p>
          </div>
          <div id="extention-apply-img-wrapper">
            <div id="extention-apply-11-img-wrapper">
              <img class="extention-apply-img" src="../assets/icon/ic_eleven_twelve/ic_eleven.png" />
            </div>
            <div id="extention-apply-12-img-wrapper">
              <img class="extention-apply-img" src="../assets/icon/ic_eleven_twelve/ic_twelve_light.png" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="apply-card-wrapper">
      <div class="apply-card" id="goingout-apply-wrapper">
        <div id="goingout-apply-content-wrapper">
          <div class="goingout-apply-content">
            <p id="goingout-apply-text">외출신청</p>
            <p id="goingout-apply-sub-text">외출예정 요일을 확인하세요</p>
            <div id="goingout-apply-btn">
              <p id="goingout-apply-btn-text">신청</p>
            </div>
          </div>
          <div class="goingout-apply-content">
            <img class="goingout-apply-img" src="../assets/icon/ic_outing/ic_saturday_outing.png">
            <img class="goingout-apply-img" src="../assets/icon/ic_outing/ic_sunday_outing_light.png">
          </div>
        </div>
      </div>

      <div class="apply-card" id="survey-apply-wrapper">
        <div id="survey-apply-text-wrapper">
          <p id="survey-apply-text">설문조사</p>
          <p id="survey-apply-sub-text">작성된 설문조사에 응답하세요</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ApplySection'
}
</script>

<style>
#apply-wrapper {
  height: calc(100vh - 40px);
  padding: 20px;
  background-color: white;
}

.apply-card-wrapper {
  width: 100%;
  height: 50%;
  position: relative;
}

.apply-card {
  width: calc(50% - 10px);
  height: calc(100% - 10px);
  display: table;
  position: fixed;
  cursor: pointer;
  will-change: transform;
}

#apply-wrapper .apply-card {
  float: left;
}

#stay-apply-wrapper {
  background: url('../assets/background/bg_homecoming.png');
  background-color: rgba(0, 0, 0, 0.5);
  background-size: 100%;
  background-position: center center;
  background-repeat: no-repeat;
  position: relative;
  margin-right: 10px;
  margin-bottom: 10px;
  -moz-transition: background-size 250ms ease;
  -o-transition: background-size 250ms ease;
  -webkit-transition: background-size 250ms ease;
  transition: background-size 250ms ease;
}

#stay-apply-wrapper:hover{
  background-size: 110%;
}

#stay-apply-wrapper:before {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: inherit;
  content: ' ';
}

#stay-apply-content {
  display: table-cell;
  vertical-align: middle;
  position: relative;
  z-index: 100;
}

#stay-apply-img-wrapper {
  width: 8vw;
  margin: 0 auto;
}

#stay-apply-img {
  width: 100%
}

#stay-apply-text-wrapper:nth-child(n) {
  text-align: center;
  font-weight: bold;
  color: white;
}

#stay-apply-text {
  font-size: 40px;
}

#stay-apply-sub-text {
  font-size: 20px;
}

#extention-apply-wrapper {
  background: url('../assets/background/bg_study.png');
  background-color: rgba(0, 0, 0, 0.5);
  background-size: 100%;
  background-position: center center;
  background-repeat: no-repeat;
  position: relative;
  margin-left: 10px;
  margin-bottom: 10px;
  -moz-transition: background-size 250ms ease;
  -o-transition: background-size 250ms ease;
  -webkit-transition: background-size 250ms ease;
  transition: background-size 250ms ease;
}

#extention-apply-wrapper:hover{
  background-size: 110%;
}

#extention-apply-wrapper:before {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: inherit;
  content: ' ';
}

#extention-apply-content {
  display: table-cell;
  vertical-align: middle;
  position: relative;
  z-index: 100;
}

#extention-apply-text-wrapper:nth-child(n) {
  text-align: center;
  font-weight: bold;
  color: white;
}

#extention-apply-text {
  font-size: 40px;
}

#extention-apply-sub-text {
  font-size: 20px;
}

#extention-apply-img-wrapper {
  width: 60%;
  margin-left: 20%;
  margin-right: 20%;
}

#extention-apply-11-img-wrapper {
  width: 40%;
  float: left;
}

#extention-apply-12-img-wrapper {
  width: 40%;
  float: right;
}

.extention-apply-img {
  width: 100%;
}

#goingout-apply-wrapper {
  background: url('../assets/background/bg_outing.png');
  background-color: rgba(0, 0, 0, 0.5);
  background-size: 100%;
  background-position: center center;
  background-repeat: no-repeat;
  position: relative;
  margin-right: 10px;
  margin-top: 10px;
  -moz-transition: background-size 250ms ease;
  -o-transition: background-size 250ms ease;
  -webkit-transition: background-size 250ms ease;
  transition: background-size 250ms ease;
}

#goingout-apply-wrapper:hover{
  background-size: 110%;
}

#goingout-apply-wrapper:before {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: inherit;
  content: ' ';
}

#goingout-apply-content-wrapper {
  display: table-cell;
  vertical-align: middle;
  position: relative;
  z-index: 100;
  width: 100%;
}

.goingout-apply-content{
  float: left;
  width: 50%;
  position: relative;
}

.goingout-apply-content:nth-child(n) {
  text-align: center;
  font-weight: bold;
  color: white;
}

#goingout-apply-text {
  font-size: 40px;
}

#goingout-apply-sub-text {
  font-size: 20px;
}

#goingout-apply-btn{
  margin-top: 20px;
  font-size: 20px;
  width: 35%;
  height: 40px;
  border: 5px solid white;
  border-radius: 30px;
  display: table;
  position: absolute;
  left: 32%;
}

#goingout-apply-btn:hover{
  -webkit-transform:scale(0.9); /*  크롬 */
  -moz-transform:scale(0.9); /* FireFox */
  -o-transform:scale(0.9); /* Opera */
  transform:scale(0.9);
  transition: transform .35s;
  -o-transition: transform .35s;
  -moz-transition: transform .35s;
  -webkit-transition: transform .35s;
}

#goingout-apply-btn-text{
  display: table-cell;
  vertical-align: middle;
}

.goingout-apply-img {
  width: 8vw;
  float: left;
}

.goingout-apply-img:first-child{
  margin-right: 30px;
}

#survey-apply-wrapper {
  background: url('../assets/background/bg_poll.png');
  background-color: rgba(0, 0, 0, 0.5);
  background-size: 100%;
  background-position: center center;
  background-repeat: no-repeat;
  position: relative;
  margin-left: 10px;
  margin-top: 10px;
  -moz-transition: background-size 250ms ease;
  -o-transition: background-size 250ms ease;
  -webkit-transition: background-size 250ms ease;
  transition: background-size 250ms ease;
}


#survey-apply-wrapper:hover{
  background-size: 110%;
}

#survey-apply-wrapper:before {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: inherit;
  content: ' ';
}

#survey-apply-text-wrapper {
  display: table-cell;
  vertical-align: middle;
  position: relative;
  z-index: 100;
}

#survey-apply-text-wrapper:nth-child(n) {
  text-align: center;
  font-weight: bold;
  color: white;
}

#survey-apply-text {
  font-size: 40px;
}

#survey-apply-sub-text {
  font-size: 20px;
}


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
