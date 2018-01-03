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
        case 'breakFast':
          selectedMeal.selected = 'dinner'
          selectedMeal.date.setDate(selectedMeal.date.getDate() - 1)
          this.getMeal(selectedMeal.date)
          break
        case 'lunch':
          selectedMeal.selected = 'breakFast'
          break
        case 'dinner':
          selectedMeal.selected = 'lunch'
          break
      }
    },
    nextMeal: function () {
      let selectedMeal = this.selectedMeal

      switch (selectedMeal.selected) {
        case 'breakFast':
          selectedMeal.selected = 'lunch'
          break
        case 'lunch':
          selectedMeal.selected = 'dinner'
          break
        case 'dinner':
          selectedMeal.selected = 'breakFast'
          selectedMeal.date.setDate(selectedMeal.date.getDate() + 1)
          this.getMeal(selectedMeal.date)
          break
      }
    },
    getMeal: function (date) {
      axios({
        method: 'GET',
        url: 'dsm2015.cafe24.com:3001/meal/' + this.$dateFormmater(date)
      }).then(res => {
        this.meal = res
      }).catch(err => {
        console.log(err)
      })
    }
  },
  data: function () {
    return {
      selectedMeal: {
        date: new Date(),
        selected: 'breakFast'
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
#main-section {
  background: url('../../assets/background/bg_main.png');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  width: 100%;
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
