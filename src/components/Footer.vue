<template>
  <footer>
    <Logo></Logo>
    <a href="https://github.com/Akuby"
    target="_blank">
    (c){{ new Date().getFullYear() }} Akuby
    </a>
  </footer>
</template>

<script>
import Logo from '~/components/Logo'
export default {
  components:{
    Logo
  }
}
</script>

<style lang="scss" scoped>
footer{
  padding: 70px 0;
  text-align: center;
  opacity: .3;
  .logo{
    display: block;//Logo 컴포넌트의 RouterLink는 a태그로 변환된다.
    width: 120px;
    height: 30px;
    margin: auto;
    margin-bottom: 4px;
  }
}
</style>