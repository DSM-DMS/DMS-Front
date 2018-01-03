<template>
  <div>
    <p id="goingout-apply-text">{{ text }}</p>
    <p id="goingout-apply-sub-text">{{ subText }}</p>
  </div>
</template>

<script>
export default {
  name: 'ApplyText',
  props: ['text', 'subText']
}
</script>

<style>
#apply-text {
  font-size: 40px;
}

#apply-sub-text {
  font-size: 20px;
}
</style>

