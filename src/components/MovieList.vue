<template>
  <div class="container">
    <div :class="{'no-result' : !movies.length}" class="inner">
      <Loader v-if="loading"></Loader>
      <div v-if="message" class="message">
        {{ message }}
      </div>
      <div v-else class="movies">
        <MovieItem v-for="movie in movies" :key="movie.imdbID" :movie="movie" />
        <!--prop 명을 movie로, "movie" 객체를 넘겨주겠다. -->
      </div>
    </div>
  </div>
</template>

<script>
  import MovieItem from '~/components/MovieItem'
  import Loader from '~/components/Loader'
  export default {
    components: {
      MovieItem,
      Loader
    },
    computed: {
      movies() {
        return this.$store.state.movie.movies //여기서 this는 정확히 어딜 가리키나..? src폴더? 그리고 왜 모듈명이 아닌 state를 먼저 적나?
      },
      message() {
        return this.$store.state.movie.message
      },
      loading() {
        return this.$store.state.movie.loading
      }
    }
  }
</script>

<style lang="scss" scoped>

  .container {
    margin-top: 30px;
    padding-bottom: 10px;

    .inner {
      background-color: $gray-200;
      padding: 10px 0;
      border-radius: 4px;
      text-align: center;

      &.no-result {
        padding: 70px 0;
      }
      .message {
        color: $gray-400;
        font-size: 20px;
        font-family: "Roboto Slab", sans-serif;
      }

      .movies {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
      }
    }
  }
</style>