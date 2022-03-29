<template>
  <Header /> <!-- 헤더 -->
  <RouterView /> <!-- 헤더에 따른 페이지 컨텐츠 영역 -->
  <Footer /> <!-- 푸터 -->
</template>

<script>
import Header from '~/components/Header'
import Footer from '~/components/Footer'
export default {
  components : {
    Header,
    Footer
  }
}
</script>

<style lang="scss">
@import "~/scss/main";
body{
  font-family: 'Roboto Slab', sans-serif;
}
</style>