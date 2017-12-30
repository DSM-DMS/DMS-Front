<template>
  <img class="social-icon" :src="imgPath" />
</template>

<script>
export default {
  name: 'SocialBtn',
  props: ['imgPath']
}
</script>

<style>
.social-icon {
  width: 50px;
  height: 50px;
}

.social-icon:hover{
  -webkit-transform:scale(0.9); /*  크롬 */
  -moz-transform:scale(0.9); /* FireFox */
  -o-transform:scale(0.9); /* Opera */
  transform:scale(0.9);
  transition: transform .35s;
  -o-transition: transform .35s;
  -moz-transition: transform .35s;
  -webkit-transition: transform .35s;
}
</style>

