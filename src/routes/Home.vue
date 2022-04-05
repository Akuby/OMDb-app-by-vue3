<template>
    <Headline />
    <!-- <Carousel class="carousel" /> -->
  <Search />
  <MovieList />
</template>

<script>
  import Headline from "~/components/Headline"
  import Search from "~/components/Search"
  import MovieList from "~/components/MovieList"
  // import Carousel from "~/components/Carousel"
  export default {
    components: {
      Headline,
      // Carousel,
      Search,
      MovieList
    },
    created(){
      this.$store.commit('movie/resetMovies')
    }
  }
</script>

<style lang="scss">
</style>