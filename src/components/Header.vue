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
  </header>
</template>

<script>
import Logo from '~/components/Logo'
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
          href: '/movie/tt4520988',
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
    }
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
  }
</style>