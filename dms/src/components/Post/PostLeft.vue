<template>
  <div id="post-left-wrapper">
    <img v-if="selected === ''" src="../../assets/Question/ic_please_select.png">
    <div v-else id="post-detail-content">
      <p>{{ detail.author }}</p>
      <p>{{ detail.title }}</p>
      <div id="post-detail-wrapper" v-html="detail.content"></div>
      <!-- <div id="more-info">
        자세히
        <img src="">
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'PostLeft',
  props: ['selected', 'category'],
  data: function () {
    return {
      detail: []
    }
  },
  methods: {
    getDetail: function () {
      this.$http({
        methods: 'GET',
        url: '/' + this.category + '/' + this.selected,
        headers: {
          Authorization: 'JWT ' + this.$cookie.getCookie('JWT')
        }
      })
      .then(res => {
        this.detail = res.data
      }).catch(error => {
        console.log(error)
      })
    }
  },
  watch: {
    selected: function () {
      this.getDetail()
    }
  }
}
</script>

<style scoped>

@media only screen and (min-width: 1801px){
  #post-detail-wrapper{
    width: 550px;
  }
}

@media only screen and (max-width: 1800px){
  #post-detail-wrapper{
    width: 400px;
  }
}

#post-left-wrapper{
  position: relative;
  background-color: rgb(53, 147, 211);
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: row nowrap;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-align-items: center;
  align-items: center;
}

#post-detail-content{
  text-align: center;
  color: white;
}

#post-detail-content p:nth-child(1){
  font-size: 40px;
  margin-bottom: 20px;
}
#post-detail-content p:nth-child(2){
  font-size: 20px;
  margin-bottom: 70px;
}

#more-info{
  position: absolute;
  right: 70px;
  bottom: 70px;
  font-size: 25px;
  cursor: pointer;
}

#post-detail-wrapper{
  height: 500px;
  overflow-y: auto;
}
</style>