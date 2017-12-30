<template>
  <div class="background">
    <div class="modal">
      <div class="modal-img-wrapper">
        <img src="../../../assets/icon/ic_error.png"> 
      </div>
      <div class="modal-text-wrapper">
          <p class="modal-title">게시글 작성에 실패했습니다.</p>
          <p class="modal-subtitle">올바른 접근인지 확인해주세요.</p>
          <button class="modal-ok-button" @click="modalClose">확인</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'modal',
  methods: {
    modalClose: function () {
      this.$emit('modalClose')
    }
  }
}
</script>
<style scoped>
.background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.6)
}
.modal {
    position: absolute;
    width: 40vw;
    height: 45vh;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background-color: white;
    border-radius: 10px;
}
.modal-img-wrapper {
    height: 55%;
}
.modal-img-wrapper > img {
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 28%;
}
.modal-text-wrapper {
    text-align: center;
}
.modal-title {
    font-weight: bold;
    font-size: 30px;
    margin-bottom: 0;
}
.modal-subtitle {
    font-weight: 450;
    color: #a4a4a4;
    margin-top: 0;
}
.modal-ok-button {
    position: relative;
    width: 25%;
    color: white;
    border:none;
    background-color: #675094;
    border-radius: 10px;
    font-size:20px;
}
.modal-ok-button:before {
    content: "";
    display: block;
    padding-top: 4%;
}
.modal-ok-button::after {
    content: "";
    display: block;
    padding-bottom: 4%;
}
</style>
