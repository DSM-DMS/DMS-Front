<template>
  <div id="main-section">
    <main-title/>
    <meal :meal="meal" :selectedMeal="selectedMeal" @preMeal="preMeal" @nextMeal="nextMeal"/>
    <div id="social-wrapper">
      <social-btn :imgPath="require('../../assets/icon/ic_git_facebook/ic_facebook.png')"/>
      <social-btn :imgPath="require('../../assets/icon/ic_git_facebook/ic_github.png')"/>
    </div>
  </div>
</template>

<script>
import MainTitle from '@/components/MainSection/MainTitle'
import Meal from '@/components/MainSection/Meal'
import SocialBtn from '@/components/MainSection/SocialBtn'
import axios from 'axios'

export default {
  name: 'MainSection',
  components: {MainTitle, Meal, SocialBtn},
  methods: {
    preMeal: function () {
      let selectedMeal = this.selectedMeal

      switch (selectedMeal.selected) {
        case 'BreakFast':
          selectedMeal.selected = 'Dinner'
          selectedMeal.date.setDate(selectedMeal.date.getDate() - 1)
          this.getMeal(selectedMeal.date)
          break
        case 'Lunch':
          selectedMeal.selected = 'BreakFast'
          break
        case 'Dinner':
          selectedMeal.selected = 'Lunch'
          break
      }
    },
    nextMeal: function () {
      let selectedMeal = this.selectedMeal

      switch (selectedMeal.selected) {
        case 'BreakFast':
          selectedMeal.selected = 'Lunch'
          break
        case 'Lunch':
          selectedMeal.selected = 'Dinner'
          break
        case 'Dinner':
          selectedMeal.selected = 'BreakFast'
          selectedMeal.date.setDate(selectedMeal.date.getDate() + 1)
          this.getMeal(selectedMeal.date)
          break
      }
    },
    getMeal: function (date) {
      axios({
        method: 'GET',
        url: 'http://dsm2015.cafe24.com:3001/meal/' + this.$dateFormmater(date)
      }).then(res => {
        this.meal.BreakFast = res.data.breakfast
        this.meal.Lunch = res.data.lunch
        this.meal.Dinner = res.data.dinner
        console.log(this.meal)
      }).catch(err => {
        console.log(err)
      })
    }
  },
  data: function () {
    return {
      selectedMeal: {
        date: new Date(),
        selected: 'BreakFast'
      },
      meal: {}
    }
  },
  created () {
    this.getMeal(this.selectedMeal.date)
  }
}
</script>


<style>
@media only screen and (min-width: 1271px){
  #main-section {
    width: 100%
  }
}

@media only screen and (max-width: 1270px){
  #main-section {
    width: 1270px
  }
}
#main-section {
  background: url('../../assets/background/bg_main.png');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  height: 100vh;
  display: table;
  position: fixed;
  z-index: -1;
  top: 0;
}

#social-wrapper {
  cursor: pointer;
  position: absolute;
  right: 100px;
  bottom: 50px;
}

#social-wrapper img:first-child {
  margin-right: 50px;
}
</style>
