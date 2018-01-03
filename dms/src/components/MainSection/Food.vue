<template>
  <div id="food-wrapper">
    <p class="food" :key="index" v-for="(food, index) in meal">{{ food }}</p>
  </div>
</template>

<script>
  export default {
    name: 'Food',
    props: ['meal']
  }
</script>

<style>
  #food-wrapper{
    width: 90%;
    float: left;
  }
  .food {
    font-size: 25px;
    font-weight: 100;
    line-height: 1.7em;
  }
</style>
