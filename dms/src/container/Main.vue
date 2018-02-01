<template>
  <div>
    <header-nav />
    <main-section />
    <apply-section />
    <post-section />
    <footer-section />
  </div>
</template>

<script>
import HeaderNav from '@/components/HeaderNav/HeaderNav'
import MainSection from '@/components/MainSection/MainSection'
import ApplySection from '@/components/ApplySection/ApplySection'
import PostSection from '@/components/PostSection/PostSection'
import FooterSection from '@/components/FooterSection/FooterSection'

export default {
  name: 'Main',
  components: {HeaderNav, MainSection, PostSection, ApplySection, FooterSection}
}
</script>

<style>
</style>
