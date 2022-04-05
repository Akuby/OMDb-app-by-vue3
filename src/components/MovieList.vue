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
  import { mapState } from 'vuex'
  export default {
    components: {
      MovieItem,
      Loader
    },
    computed: {
      ...mapState('movie', [
        'movies',
        'message',
        'loading'
      ])
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