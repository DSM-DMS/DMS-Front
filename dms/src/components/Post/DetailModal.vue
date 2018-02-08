<template>
  <div id="detail-modal-wrapper" @click.self="$emit('close')">
    <div id="detail-modal">
      <p>{{ detail.author }}</p>
      <p>{{ detail.title }}</p>
      <div id="detail-content" v-html="detail.content"></div>
      <img id="modal-close-btn" src="../../assets/Post_detail_modal/closeBtn.png" @click.self="$emit('close')">
    </div>
  </div>
</template>

<script scoped>
export default {
  name: 'DetailModal',
  props: ['detail']
}
</script>

<style>
#detail-modal-wrapper{
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
}

#detail-modal{
  position: fixed;
  width: 1000px;
  height: 700px;
  top: 51%;
  left: 50%;
  opacity: 0.9;
  background-color: white;
  transform: translate(-50%, -50%);
  border-radius: 15px;
}

#detail-modal > p {
  color: rgb(53, 147, 211);
  text-align: center;
}

#detail-modal > p:nth-child(1){
  margin-top: 10px;
  font-size: 40px;
  margin-bottom: 20px;
}
#detail-modal > p:nth-child(2){
  font-size: 20px;
  margin-bottom: 20px;
}

#detail-content{
  width: 900px;
  height: 500px;
  overflow: auto;
  margin: 0 auto;
}

#detail-content >>> table{
  margin: 0 auto;
}

#detail-content >>> td, th {
  border: 0.5px solid black;
  padding: 10px;
}

#modal-close-btn{
  position: absolute;
  top: -25px;
  right: -25px;
  cursor: pointer;
}
</style>