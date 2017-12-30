<template>
  <div id="meal-wrapper">
    <div id="meal-header-wrapper">
      <p id="meal-date">2017년 12월 15일</p>
      <p id="meal">BreakFast</p>
    </div>
    <div id="meal-body-wrapper">
      <div id="food-wrapper">
        <p class="food">흰밥(쌀밥)</p>
        <p class="food">새알심만두국</p>
        <p class="food">안동찜닭</p>
        <p class="food">양배추오이초무침</p>
        <p class="food">파래돌김자반</p>
        <p class="food">열무김치</p>
      </div>
      <div id="meal-btn-wrapper">
        <div class="meal-img-wrapper">
          <img id="meal-up-img" src="../../assets/icon/ic_up_down/ic_up.png" />
        </div>
        <div class="meal-img-wrapper">
          <img id="meal-down-img" src="../../assets/icon/ic_up_down/ic_down.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Meal'
}
</script>

<style>
#meal-wrapper {
  position: absolute;
  left: 100px;
  bottom: 50px;
  width: 25vw;
}

#meal-header-wrapper{
  width: 100%;
}

#meal-date {
  font-size: 25px;
  font-weight: 100;
  line-height: 0;
}

#meal {
  font-size: 70px;
  font-weight: 100;
}

#meal-body-wrapper{
  width: 100%;
  display: inline-block;
}

#food-wrapper{
  width: 70%;
  float: left;
}

.food {
  font-size: 25px;
  font-weight: 100;
  line-height: 1.7em;
}

#meal-btn-wrapper{
  width: 30%;
  height: 100%;
  float: left;
}

.meal-img-wrapper{
  height: 50%;
  width:100%;
}

.meal-img-wrapper:first-child{
  padding-top: calc(100% - 70px);
  height: 70px;
}

#meal-up-img{
  width: 30px;
  float: left;
  cursor: pointer;
}

#meal-up-img:hover{
  -webkit-transform:scale(0.9); /*  크롬 */
  -moz-transform:scale(0.9); /* FireFox */
  -o-transform:scale(0.9); /* Opera */
  transform:scale(0.9);
  transition: transform .35s;
  -o-transition: transform .35s;
  -moz-transition: transform .35s;
  -webkit-transition: transform .35s;
}

#meal-down-img{
  width: 30px;
  float: left;
  cursor: pointer;
}

#meal-down-img:hover{
  -webkit-transform:scale(0.9); /*  크롬 */
  -moz-transform:scale(0.9); /* FireFox */
  -o-transform:scale(0.9); /* Opera */
  transform:scale(0.9);
  transition: transform .35s;
  -o-transition: transform .35s;
  -moz-transition: transform .35s;
  -webkit-transition: transform .35s;
}
</style>

