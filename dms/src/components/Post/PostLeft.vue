<template>
  <div id="post-left-wrapper">
    <img v-if="selected === ''" src="../../assets/Question/ic_please_select.png">
    <div v-else id="post-detail-wrapper">
      <p>{{ detail.author }}</p>
      <p>{{ detail.title }}</p>
      <div id="post-detail-content" v-html="detail.content"></div>
      <div id="more-info" @click="detailModal">
        <p>자세히</p>
        <img src="../../assets/Post_detail_modal/openBtn.png">
      </div>
    </div>
    
    <detail-modal v-if="isDetailModal" @close="isDetailModal = false" :detail="detail"/>
  </div>
</template>

<script>
import DetailModal from '@/components/Post/DetailModal'

export default {
  name: 'PostLeft',
  props: ['selected', 'category'],
  data: function () {
    return {
      detail: [],
      isDetailModal: false
    }
  },
  components: { DetailModal },
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
    },
    detailModal: function () {
      this.isDetailModal = !this.isDetailModal
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
  #post-detail-content{
    width: 550px;
  }
}

@media only screen and (max-width: 1800px){
  #post-detail-content{
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

#post-detail-wrapper{
  text-align: center;
  color: white;
}

#post-detail-wrapper > p:nth-child(1){
  font-size: 40px;
  margin-bottom: 20px;
}
#post-detail-wrapper > p:nth-child(2){
  font-size: 20px;
  margin-bottom: 70px;
}

#more-info{
  position: absolute;
  right: 50px;
  bottom: 50px;
  font-size: 25px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

#more-info > p{
  display: inline-block;
  margin-right: 50px;
}

#post-detail-content{
  height: 500px;
  overflow: auto;
}

#post-detail-content td, th{
  border: 0.5px solid white;
  padding: 10px;
}
</style>