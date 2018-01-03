<template>
  <div class="post-card-wrapper">
    <div class="post-card">
      <div class="post-card-header" :style="{backgroundColor: mainColor}">
        <p class="post-card-header-text">{{ headerText }}</p>
      </div>
      <div class="post-card-body-wrapper">
        <div class="post-card-body">
          <div class="post-card-img-wrapper">
            <img class="post-card-img" :src="imgPath">
          </div>
          <div class="post-card-body-text-wrapper" :style="{color: mainColor}">
            <p class="post-card-body-text">{{ bodyText }}</p>
            <p class="post-card-body-sub-text">{{ bodySubText }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PostCard',
  props: ['headerText', 'bodyText', 'bodySubText', 'mainColor', 'imgPath']
}
</script>

<style>
  .post-card-body-text {
    font-size: 30px;
    margin: 15px;
  }

  .post-card-body-sub-text {
    font-size: 15px;
  }
  .post-card-header-text {
    text-align: center;
    color: white;
    font-size: 30px;
    display: table-cell;
    vertical-align: middle;
  }

.post-card-wrapper {
  width: calc(100%/3);
  height: 100%;
  float: left;
}

.post-card {
  width: 90%;
  height: 100%;
  margin: 0 auto;
  cursor: pointer;
  will-change: transform;
}

.post-card:hover{
  -webkit-transform:scale(1.05); /*  크롬 */
  -moz-transform:scale(1.05); /* FireFox */
  -o-transform:scale(1.05); /* Opera */
  transform:scale(1.05);
  transition: transform .35s;
  -o-transition: transform .35s;
  -moz-transition: transform .35s;
  -webkit-transition: transform .35s;
}

.post-card-header {
  width: 100%;
  height: 15%;
  display: table;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

.post-card-body-wrapper {
  width: 100%;
  height: 85%;
  background-color: white;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  display: table;
}

.post-card-body {
  display: table-cell;
  vertical-align: middle;
}

.post-card-img-wrapper {
  width: 35%;
  margin: 0 auto;
}

.post-card-img {
  width: 100%;
  margin: 0 auto;
}

.post-card-body-text-wrapper:nth-child(n) {
  text-align: center;
  font-weight: bold;
}
</style>

