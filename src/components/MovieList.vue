<template>
  <div class="container">
    <div class="inner">
      <div class="message">
        {{ message }}
      </div>
      <div class="movies">
        <MovieItem 
         v-for="movie in movies" 
         :key="movie.imdbID"
         :movie = "movie" /> <!--prop 명을 movie로, movie 객체를 넘겨주겠다. -->
      </div>
    </div>
  </div>
</template>

<script>
import MovieItem from '~/components/MovieItem'
export default {
  components : {
    MovieItem
  },
  computed : {
    movies() {
      return this.$store.state.movie.movies //여기서 this는 정확히 어딜 가리키나..? src폴더? 그리고 왜 모듈명이 아닌 state를 먼저 적나?
    },
    message() {
      return this.$store.state.movie.message
    }
  }
}
</script>

<style lang="scss" scoped>
.container{
  .movies{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>