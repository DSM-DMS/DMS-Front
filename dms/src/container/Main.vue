<template>
  <div>
    <header-nav/>
    <main-section/>
    <apply-section/>
    <post-section/>
    <footer-section/>
  </div>
</template>

<script>

import HeaderNav from '../components/HeaderNav'
import MainSection from '../components/MainSection'
import ApplySection from '../components/ApplySection'
import PostSection from '../components/PostSection'
import FooterSection from '../components/FooterSection'

export default {
  name: 'Main',
  components: {
    HeaderNav, 
    MainSection, 
    PostSection, 
    ApplySection, 
    FooterSection
  }
}
</script>

<style>
img {
  margin: 0;
  padding: 0;
}

p {
  margin: 0;
}

html body{
  padding: 0;
  margin: 0;
  width: 100%;
}

</style>
