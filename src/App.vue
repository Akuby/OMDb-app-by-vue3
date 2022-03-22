<template>
  <Header /> <!-- 헤더 -->
  <RouterView /> <!-- 헤더에 따른 페이지 컨텐츠 영역 -->
</template>

<script>
import Header from '~/components/Header'
export default {
  components : {
    Header
  }
}
</script>

<style lang="scss">
@import "~/scss/main";
</style>