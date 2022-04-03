<template>
  <div class="container">
    <div v-if="loading" class="skeletons">
      <div class="skeleton poster"></div>
      <div class="specs">
        <div class="skeleton title"></div>
        <div class="skeleton spec"></div>
        <div class="skeleton plot"></div>
        <div class="skeleton etc"></div>
        <div class="skeleton etc"></div>
        <div class="skeleton etc"></div>
      </div>
    </div>

    <div v-else class="movie-details">
      <div :style="{backgroundImage : `url(${requestDiffSizeImage(theMovie.Poster)})`}" class="poster">
      </div>
      <div class="specs">
        <div class="title">
          {{ theMovie.Title }}
        </div>
        <div class="labels">
          <span>{{ theMovie.Released }}</span>
          <span>{{ theMovie.Runtime }}</span>
          <span>{{ theMovie.Country }}</span>
        </div>
        <div class="plot">
          {{ theMovie.Plot }}
        </div>
        <div class="ratings">
          <h3>Ratings</h3>
          <div class="rating-wrap">
            <div 
            v-for="{ Source: name, Value: score } in theMovie.Ratings"
            :key="name"
            :title="name"
            class="rating">
              <img :src="`https://raw.githubusercontent.com/ParkYoungWoong/vue3-movie-app/master/src/assets/${name}.png`" :alt="name">
              <span>{{ score }}</span>
            </div>
          </div>
        </div>
        <div>
          <h3>Actors</h3>
          {{ theMovie.Actors }}
        </div>
        <div>
          <h3>Director</h3>
          {{ theMovie.Director }}
        </div>
        <div>
          <h3>Production</h3>
          {{ theMovie.Production }}
        </div>
        <div>
          <h3>Genre</h3>
          {{ theMovie.Genre }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Loader from '~/components/Loader'
export default {
  data(){
    return{
      imageLoading : true
    }
  },
  computed : { //store에서 가져올거
    theMovie(){
      return this.$store.state.movie.theMovie
    },
    loading(){
      return this.$store.state.movie.loading
    }
  },
  created(){
    this.$store.dispatch('movie/searchMovieWithId',{
      id : this.$route.params.id
    })
  },
  methods : {
    requestDiffSizeImage(url, size = 1000) {
      if(!url || url === 'N/A'){
        this.imageLoading = false
        return ''
      }
      const src = url.replace('SX300', `SX${size}`)
      this.$loadImage(src)
        .then(()=>{
          this.imageLoading = false
        })
      return src
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~/scss/main";
@keyframes shimmer {
  0% { background-position: -700px 0; }
  100% { background-position: 700px 0; }
}
.container{
  padding-top: 40px;
  .skeletons{
    display: flex;
    .poster{
      flex-shrink: 0;
      width: 500px;
      height: 500 * 3 / 2;
      margin-right: 60px;
      position: relative;
      overflow: hidden;
        &::before{
          content: '';
          position: absolute;
          height: 100%;
          width: 100%;
          background-image: linear-gradient(to right, $gray-200 0%, rgba(255, 255, 255, 0.5) 20%, $gray-200 40%, $gray-200 100%);
          background-repeat: no-repeat;
          animation : shimmer 1s linear infinite;
        }
    }
    .specs{
      flex-grow: 1;
    }
    .skeleton {
      border-radius: 10px;
      background-color: $gray-200;
      &.title{
        width: 80%;
        height: 70px;
        position: relative;
        overflow: hidden;
        &::before{
          content: '';
          position: absolute;
          height: 100%;
          width: 100%;
          background-image: linear-gradient(to right, $gray-200 0%, rgba(255, 255, 255, 0.5) 20%, $gray-200 40%, $gray-200 100%);
          background-repeat: no-repeat;
          animation : shimmer 1s linear infinite;
        }
      }
      &.spec{
        width: 60%;
        height: 30px;
        margin-top: 20px;
        position: relative;
        overflow: hidden;
        &::before{
          content: '';
          position: absolute;
          height: 100%;
          width: 100%;
          background-image: linear-gradient(to right, $gray-200 0%, rgba(255, 255, 255, 0.5) 20%, $gray-200 40%, $gray-200 100%);
          background-repeat: no-repeat;
          animation : shimmer 1s linear infinite;
        }
      }
      &.plot{
        width: 100%;
        height: 250px;
        margin-top: 20px;
        position: relative;
        overflow: hidden;
        &::before{
          content: '';
          position: absolute;
          height: 100%;
          width: 100%;
          background-image: linear-gradient(to right, $gray-200 0%, rgba(255, 255, 255, 0.5) 20%, $gray-200 40%, $gray-200 100%);
          background-repeat: no-repeat;
          animation : shimmer 1s linear infinite;
        }
      }
      &.etc{
        width: 50%;
        height: 50px;
        margin-top: 20px;
        // background-color: transparent;
        position: relative;
        overflow: hidden;
      &::before{
          content: '';
          position: absolute;
          height: 100%;
          width: 100%;
          background-image: linear-gradient(to right, $gray-200 0%, rgba(255, 255, 255, 0.5) 20%, $gray-200 40%, $gray-200 100%);
          background-repeat: no-repeat;
          animation : shimmer 1s linear infinite;
        }
      }
    }
  }
  .movie-details{
    display: flex;
    color : $gray-600;
    .poster{
      width: 500px;
      height: 500px * 3 / 2;
      margin-right: 70px;
      border-radius: 10px;
      background-color: $gray-200;
      background-size: cover;
      background-position: center;
      flex-shrink: 0;
    }
    .specs{
      flex-grow: 1;
      .title{
        color: $black;
        font-family: 'Oswald', sans-serif;
        font-size: 70px;
        line-height: 1;
        margin-bottom: 30px;
      }
      .labels{
        color: $primary;
        span{
          &::before{
            content:"\00b7";
            margin: 0 6px;
          }
          &:first-child::before{
            content: '';
            margin: 0;
          }
        }
      }
      .plot{
        margin-top : 20px;
      }
      .ratings{
        .rating-wrap{
          display: flex;
          .rating{
            display: flex;
            align-items: center;
            margin-right: 32px;
            > img{
              height: 30px;
              flex-shrink: 0;
              margin-right: 6px;
            }
          }
        }
      }
      h3{
        margin: 24px 0 6px;
        color: $black;
        font-family: "Oswald", sans-serif;
        font-size: 20px;
      }
    }
  @include media-breakpoint-down(xl){
    .poster{
      width: 300px;
      height: 300px * 3 / 2;
      margin-right: 40px;
    }
  }
  @include media-breakpoint-down(lg){
   display: block; 
    .poster{
       margin-bottom: 40px;
    } 
  }
  @include media-breakpoint-down(md){
    .ratings{
        .rating-wrap{
          display: block !important;
          .rating{
            margin-top: 10px;
          }
        }
      }
    }
  }
}
</style>