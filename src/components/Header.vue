<template>
  <header>
    <Logo />
    <div class="nav nav-pills">
      <div 
      v-for="nav in navigations" 
      :key="nav.name"
      class="nav-item">
        <RouterLink 
        :to="nav.href"
        active-class="active"
        :class="{ active: isMatch(nav.path) }"
        class="nav-link">
        {{ nav.name }}
        </RouterLink>
      </div>
    </div>
    <div
    @click="toAbout"
    class="user">
      <img 
      src="https://avatars.githubusercontent.com/u/96938229?v=4" 
      :alt="name" />
    </div>
  </header>
</template>

<script>
import Logo from '~/components/Logo'
import { mapState } from 'vuex'
export default {
  data(){
    return {
      navigations : [
        {
          name:'Search',
          href: '/'
        },
        {
          name:'Movie',
          href: '/movie/tt0118799',
          path: /^\/movie/
        },
        {
          name:'About',
          href: '/about'
        }
      ]
    }
  },
  components : {
    Logo
  },
  methods : {
    isMatch(path){
      if(!path) return false //Search와 About 탭의 경우 (path 속성이 없음)
      else return path.test(this.$route.fullPath) //test()로 RegExp을 만족하는지 Boolean으로 반환
    },
    toAbout(){
      this.$router.push('/about')
    }
  },
  computed : {
    ...mapState('about', [
      'image',
      'name'
    ])
  }
}
</script>

<style lang="scss" scoped>
  header {
    height: 70px;
    padding: 0 40px;
    display: flex;
    align-items: center;
    position: relative;
  .logo {
    margin-right: 40px;
  }
  .user{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    padding: 6px;
    border: 4px solid $gray-200;
    box-sizing: border-box;
    cursor: pointer;
    position: absolute;
    top: 0;
    bottom: 0;
    left : 1400px;
    margin: auto;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    transition : .3s;
    &:hover{
      border-color: $primary;
  }
    img{
      width: 145%;

    }
  }
  @include media-breakpoint-down(sm){
    .nav{
      display: none;
    }
  }
}
</style>