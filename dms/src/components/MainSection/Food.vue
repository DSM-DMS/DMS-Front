<template>
  <div id="food-wrapper">
    <p class="food" :key="index" v-for="(food, index) in meal">{{ mealLength === index + 1 ? food : food + ',' }}</p>
  </div>
</template>

<script>
  export default {
    name: 'Food',
    props: ['meal', 'mealLength']
  }
</script>

<style>
  #food-wrapper{
    font-family: 'NanumSquareRoundL';
    font-weight: 600;
    width: 100%;
    height: calc(100% - 75px);
    float: left;
  }
  .food {
    display: inline-block;
    font-size: 20px;
    font-weight: 100;
    line-height: 1.2em;
  }
</style>
