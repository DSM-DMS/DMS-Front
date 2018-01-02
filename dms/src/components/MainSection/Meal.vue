<template>
  <div id="meal-wrapper">
    <div id="meal-header-wrapper">
      <p id="meal-date">{{ this.$dateFormmater(selectedMeal.date) }}</p>
      <p id="meal">{{ selectedMeal.selected }}</p>
    </div>
    <div id="meal-body-wrapper">
      <food :meal="meal[selectedMeal.selected]"/>
      <div id="meal-btn-wrapper">
        <div id="meal-img-wrapper">
          <div id="meal-up-img-wrapper">
            <img @click="preMeal" id="meal-up-img" src="../../assets/icon/ic_up_down/ic_up.png" />
          </div>
            <img @click="nextMeal" id="meal-down-img" src="../../assets/icon/ic_up_down/ic_down.png" />
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
#meal-wrapper {
  position: absolute;
  left: 100px;
  bottom: 70px;
  width: 25vw;
}

#meal-header-wrapper{
  width: 100%;
}

#meal-date {
  font-size: 25px;
}

#meal {
  font-size: 70px;
}

#meal-body-wrapper{
  width: 100%;
  display: inline-block;
}

#meal-btn-wrapper{
  width: 30%;
  height: 100%;
  float: left;
  display: table;
}

#meal-img-wrapper{
  display: table-cell;
  vertical-align: middle;
}

#meal-up-img-wrapper{
  height: 50px;
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

