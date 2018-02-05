<template>
  <div id="main-section">
    <main-title/>
    <meal :meal="meal" 
          :selectedMeal="selectedMeal" 
          @preMeal="preMeal"
          @nextMeal="nextMeal"/>
    <div id="social-wrapper">
      <social-btn v-for="socialBtn in socialBtns" :key="socialBtn.id" :imgPath="socialBtn.imgPath" :redirectPath="socialBtn.redirectPath"/>
    </div>
  </div>
</template>

<script>
import MainTitle from '@/components/MainSection/MainTitle'
import Meal from '@/components/MainSection/Meal'
import SocialBtn from '@/components/MainSection/SocialBtn'

export default {
  name: 'MainSection',
  components: {MainTitle, Meal, SocialBtn},
  data: function () {
    return {
      selectedMeal: {
        date: new Date(),
        selected: 'BreakFast'
      },
      meal: {
        BreakFast: ['급식이 없습니다.'],
        Lunch: ['급식이 없습니다.'],
        Dinner: ['급식이 없습니다.']
      },
      socialBtns: [
        {
          id: 1,
          imgPath: require('../../assets/icon/ic_git_facebook/ic_facebook.png'),
          redirectPath: 'https://www.facebook.com/DMSforDSM/'
        },
        {
          id: 2,
          imgPath: require('../../assets/icon/ic_git_facebook/ic_github.png'),
          redirectPath: 'https://github.com/DSM-DMS'
        }
      ]
    }
  },
  beforeMount: function () {
    this.getMeal(this.selectedMeal.date)

    let hours = this.selectedMeal.date.getHours()

    if (hours < 9 && hours >= 18) {
      this.selectedMeal.selected = 'BreakFast'
    } else if (hours < 13 && hours >= 9) {
      this.selectedMeal.selected = 'Lunch'
    } else {
      this.selectedMeal.selected = 'Dinner'
    }
  },
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
      this.$http({
        method: 'GET',
        url: '/meal/' + this.$dateFormmater(date)
      }).then(res => {
        if (res.status === 204) {
          this.meal.BreakFast = ['급식이 없습니다']
          this.meal.Lunch = ['급식이 없습니다']
          this.meal.Dinner = ['급식이 없습니다']
        } else {
          this.meal.BreakFast = res.data.breakfast
          this.meal.Lunch = res.data.lunch
          this.meal.Dinner = res.data.dinner
        }
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>


<style>
@media only screen and (min-width: 1271px){
  #main-section {
    position: fixed;
    z-index: -1;
  }
}

@media only screen and (max-width: 1270px){
  #main-section {
    position: relative;
  }
}

#main-section {
  background: url('../../assets/background/bg_main.png');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh;
  display: table;
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
