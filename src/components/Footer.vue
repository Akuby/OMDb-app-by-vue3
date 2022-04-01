<template>
  <footer>
    <Logo></Logo>
    <div class="c">
    (c){{ new Date().getFullYear() }} Akuby
    </div>
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
@import "~/scss/main";
footer{
  padding: 70px 0;
  text-align: center;
  opacity: .3;
  .logo{
    display: block;//Logo 컴포넌트의 RouterLink는 a태그로 변환된다.
    margin-bottom: 4px;
  }
  .c{
    color : $primary;
    text-decoration: underline;
    margin-top: -5px;
  }
}
</style>