<template>
  <div id="main-section-text">
    <span class="section-text-char">D</span>
    <span class="section-text-char">M</span>
    <span class="section-text-char">S</span>
    <p id="section-sub-text">Domitory Management System</p>
  </div>
</template>

<script>
export default {
  name: 'MainTitle'
}
</script>


<style>
#main-section-text {
  font-family: 'coolvetica rg';
  src: url("../../assets/font/coolvetica_rg.ttf") format('truetype');
  display: table-cell;
  vertical-align: middle;
  width: 100%;
  text-align: center;
}

.section-text-char {
  font-size: 150px;
  font-weight: 1000;
}

#main-section-text .section-text-char:nth-child(1) {
  color: rgb(246, 99, 81);
}

#main-section-text .section-text-char:nth-child(2) {
  color: rgb(255, 188, 71);
}

#main-section-text .section-text-char:nth-child(3) {
  color: rgb(53, 147, 211);
}

#section-sub-text {
  font-size: 25px;
  font-weight: bold;
}
</style>
