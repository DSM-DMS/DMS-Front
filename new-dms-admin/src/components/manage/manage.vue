<template>
  <div id="manage">
    <div id="main">

      <div id="upper-part">
        <img id="logo" src="../../assets/logo/logo.png" alt="">
        <span id="back">
          <span id="back-text">돌아가기</span>
          <img id="back-icon" src="../../assets/icon/ic_back.png" alt="">
        </span>
      </div>

      <div id="table-cont">
        <nav>
          <div id="look-up" class="chk-btn">{{ title }}
          </div><div id="writing" class="chk-btn">글작성</div>
        </nav>
        <div id="content">
          <table>

          </table>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: '공지사항'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
  font-size: 32px;
  margin: 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

#main {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('../../assets/background/bg_notice.png');
}

#upper-part {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 40px;
  padding-left: 50px;
  padding-right: 70px;
}

#back {
  color: #fff;
  font-size: 19px;
  line-height: 1;
  display: table;
}

#back:hover {
    border-radius: 20px;
    background-color: #e4e5e8;
}

#back-text {
  display: table-cell;
  vertical-align: middle;
  padding-right: 30px;
}

.chk-btn {
  display: inline;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 30px;
  padding-right: 30px;
  background-color: #fff;
}
</style>