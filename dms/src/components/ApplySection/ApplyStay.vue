<template>
  <div class="apply-card" id="stay-apply-wrapper" @click="$router.push({name: 'apply', params: {category: 'stay'}})">
    <div id="stay-apply-content">
      <div id="stay-apply-img-wrapper" class="stay-apply-img-wrapper">
        <img id="stay-apply-img" :src="stayImg" />
      </div>
      <div id="stay-apply-text-wrapper">
        <p class="apply-text">잔류신청</p>
        <p class="apply-sub-text">귀가 여부를 확인하세요</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ApplyStay',
    props: ['day'],
    computed: {
      stayImg: function () {
        if (this.day === 1) {
          return require('../../assets/icon/ic_homecoming/ic_friday.png')
        } else if (this.day === 2) {
          return require('../../assets/icon/ic_homecoming/ic_saturday.png')
        } else if (this.day === 3) {
          return require('../../assets/icon/ic_homecoming/ic_saturday_back.png')
        } else if (this.day === 4) {
          return require('../../assets/icon/ic_homecoming/ic_stay.png')
        }
      }
    }
  }
</script>

<style>
@media only screen and (min-width: 1201px){
  .stay-apply-img-wrapper {
    width: 8vw;
  }
}

@media only screen and (max-width: 1200px){
  .stay-apply-img-wrapper {
    width: 120px;
  }
}
.apply-text {
  font-size: 40px;
}

.apply-sub-text {
  font-size: 20px;
}

#stay-apply-wrapper {
  background: url('../../assets/background/bg_homecoming.svg');
  background-size: 110% 110%;
  background-position: center center;
  background-repeat: no-repeat;
  -moz-transition: background-size 250ms ease;
  -o-transition: background-size 250ms ease;
  -webkit-transition: background-size 250ms ease;
  transition: background-size 250ms ease;
  cursor: pointer;
}

#stay-apply-wrapper:hover {
  background-size: 120% 120%;
}

#stay-apply-wrapper:before {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: inherit;
  content: ' ';
}

#stay-apply-content {
  display: table-cell;
  vertical-align: middle;
  position: relative;
}

#stay-apply-img-wrapper {
  margin: 0 auto;
}

#stay-apply-img {
  width: 100%
}

#stay-apply-text-wrapper:nth-child(n) {
  text-align: center;
  font-weight: bold;
  color: white;
}
</style>
