<template>
  <div id="footer-wrapper">
    <p id="footer-text">©2017 Team DMS</p>
  </div>
</template>

<script>
  export default {
    name: 'Credit'
  }
</script>

<style>
@media only screen and (min-width: 1101px){
  #footer-wrapper{
    height: 10%;
  }
}

@media only screen and (max-width: 1100px){
  #footer-wrapper{
    height: 100%;
  }
}

#footer-wrapper{
  width: 100%;
  background-color: #7DB0DA;
  display: table;
}

#footer-text{
  color: white;
  text-align: center;
  font-size: 20px;
  display: table-cell;
  vertical-align: middle;
}
</style>
