<template>
  <div id="card-table-wrapper">
    <span class="content-title">시설 고장 신고</span>
    <div id="card-box">
      <card-view @goDetail="alertGoDetail" @deleteCard="alertDeleteCard" v-for="(card,index) in cardList" :key="index" :index ="index" :cardData="card"></card-view>
    </div>
  </div>
</template>

<script>
import cardView from './failureCardView.vue'

export default {
  props: ['cardList'],
  data: function () {
    return {
    }
  },
  components: {
    'card-view': cardView
  },
  methods: {
    alertGoDetail: function (index) {
      this.$emit('alertGoDetail', index)
    },
    alertDeleteCard: function (id) {
      this.$emit('alertDeleteCard', id)
    }

  }
}
</script>

<style scoped>
#card-table-wrapper {
  height: 100%;
  box-sizing: border-box;
}

.content-title {
  height: 100%;
  font-size: 20px;
  color: #675094;
  padding: 15px 90px;
  border-bottom: 1px solid #675094;
  box-sizing: border-box;
  position: relative;
}

#card-box {
  display: flex;
  flex-wrap: wrap;
  justify-content:space-between;
  padding: 10px 10%;
  box-sizing: border-box;
  position: relative;
  top: 50px;
  height: 80%;
  text-align:initial;
  overflow-y: auto;
  overflow-x: hidden;
}

#card-box::-webkit-scrollbar-track
{
  border-radius: 10px;
	background-color: white
}

#card-box::-webkit-scrollbar
{
	width: 10px;
	background-color: white;
}

#card-box::-webkit-scrollbar-thumb
{
	border-radius: 10px;
	background-color: gray
}
</style>
