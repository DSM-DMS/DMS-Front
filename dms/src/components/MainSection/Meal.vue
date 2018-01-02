<template>
  <div id="meal-wrapper">
    <div id="meal-header-wrapper">
      <p id="meal-date">{{ meal.today.date }}</p>
      <p id="meal">{{ meal.today.BreakFast.name }}</p>
    </div>
    <div id="meal-body-wrapper">
      <food :meal="meal.today.BreakFast.food"/>
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
import Food from './Food'

export default {
  name: 'Meal',
  components: {Food},
  props: ['meal']
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

