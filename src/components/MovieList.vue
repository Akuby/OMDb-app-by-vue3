<template>
  <div class="container">
    <div class="inner">
      <MovieItem 
      v-for="movie in movies" 
      :key="movie.imdbID"></MovieItem>
    </div>
  </div>
</template>

<script>
// import MovieItem from '~/component/MovieItem'
export default {
  data(){
    return{
      movies : []
    }
  }
}
</script>