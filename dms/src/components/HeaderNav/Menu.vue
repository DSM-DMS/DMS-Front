<template>
  <div id="menu-wrapper">
    <div id="menu-student-info">
      <div id="menu-student-number-info">

      </div>
      <div id="menu-student-name-info">
        <p>김동규 </p>
        <p>님 환영합니다</p>
      </div>
      <div id="menu-student-point-info">
        <p>상점</p>
        <div class="menu-student-point">
          20
        </div>
      </div>
    </div>
    <div id="menu-apply">
      <div >

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Menu'
}
</script>

<style>
#menu-wrapper{
  float: right;
  min-width: 300px;
  height: 100vh;
  position: fixed;
}

#menu-student-info{
  background-color: rgb(53, 147, 211);
  height: 30%;
}

#menu-apply{
  height: 70%;
}
</style>