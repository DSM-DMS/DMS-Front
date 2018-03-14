<template>
  <div id="left-section-wrapper">
    <div id="meal-wrapper">
      <div id="meal-header-date"> 
        {{ selectedMeal.date.getFullYear()}}년 
        {{ selectedMeal.date.getMonth()+1 }}월
        {{ selectedMeal.date.getDate() }}일 
        {{ this.$getDayOfWeek(selectedMeal.date) }}
      </div>
      <div id="meal-content-wrapper">
        <div class="meal">
          <img class="meal-img" src="../../assets/Main/ic_breakfast.png">
          <div class="meal-content">
            <p class="meal-content-title">Breakfast</p>
            <food :meal="meal.BreakFast"
                  :mealLength="meal.BreakFast.length"/>
          </div>
        </div>
        <div class="meal">
          <img class="meal-img" src="../../assets/Main/ic_lunch.png">
          <div class="meal-content">
            <p class="meal-content-title">Lunch</p>
            <food :meal="meal.Lunch"
                  :mealLength="meal.Lunch.length"/>
          </div>
        </div>
        <div class="meal">
          <img class="meal-img" src="../../assets/Main/ic_dinner.png">
          <div class="meal-content">
            <p class="meal-content-title">Dinner</p>
            <food :meal="meal.Dinner"
                  :mealLength="meal.Dinner.length"/>
          </div>
        </div>
        <div id="meal-img-wrapper">
          <img @click="preMeal" class="meal-btn" src="../../assets/Main/ic_up.png" />
          <img @click="nextMeal" class="meal-btn" src="../../assets/Main/ic_down.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Food from '@/components/MainSection/Food'

export default {
  name: 'Meal',
  components: {Food},
  props: ['meal', 'selectedMeal'],
  methods: {
    preMeal: function () {
      this.$emit('preMeal')
    },
    nextMeal: function () {
      this.$emit('nextMeal')
    }
  }
}
</script>
<style>
#left-section-wrapper {
  font-family: 'NanumSquareRoundB';
  width: 600px;
  height: 100%;
  background-color: #589AC6;
  color: white;
  padding: 0 60px 0 60px;
  overflow: auto;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
}

#meal-wrapper{
  height: 650px;
  overflow: auto;
}

#meal-header-date {
  font-size: 25px;
  text-align: center;
  font-weight: 800;
  margin-bottom: 70px;
  height: 30px;
}

#meal-content-wrapper{
  height: calc(100% - 100px);
}

.meal{
  width: 90%;
  height: calc(100% / 3);
  display: inline-block;
  float: left;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
}

.meal-img{
  width: 120px;
  margin-right: 20px;
}

.meal-content{
  width: calc(100% - 120px);
  height: 100%;
  overflow: auto;
}

.meal-content-title{
  font-size: 30px;
  height: 30px;
  margin-top: 25px;
  margin-bottom: 10px;
  font-weight: 700;
}

#meal-img-wrapper{
  width: 10%;
  height: 100%;
  display: inline-flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
}

.meal-btn{
  width: 40px;
  float: left;
  margin-bottom: 50px;
  cursor: pointer;
}

.meal-btn:hover{
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

