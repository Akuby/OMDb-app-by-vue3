<template>
  <div 
  :style="{ backgroundImage : `url(${movie.Poster})` }"
  class="movie">
  <Loader
  v-if="imageLoading"
  :size="1.5"
  absolute></Loader>
    <div class="info">
      <div class="year">
        {{movie.Year}}
      </div>
      <div class="title">
        {{movie.Title}}
      </div>
    </div>
  </div>
</template>

<script>
import Loader from '~/components/Loader'
export default {
  props : {
    movie : {
      type : Object,
      default : () => ({})
    }
  },
  components : {
    Loader
  },
  data(){
    return{
      imageLoading : true
    }
  },
  mounted(){
    this.init()
  },
  methods : {
    init(){
      const img = document.createElement('img')
      img.src = this.movie.Poster
      img.addEventListener('load', () => {
        this.imageLoading = false
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~/scss/main";
.movie{
  $width : 200px;
  width: $width;
  height: $width * 3/2;
  position: relative;
  margin: 10px;
  border-radius: 4px;
  background-color: $gray-400;
  background-size: cover;
  overflow: hidden;
  cursor: pointer;
  &:hover::after{
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    border: 6px solid $primary;
  }
  .info{
    padding: 10px;
    background-color: rgba($black, .3);
    position: absolute;
    left: 0;
    bottom: 0;
    font-size: 14px;
    text-align: center;
    width: 100%;
    backdrop-filter: blur(10px);
    .year{
      color: $primary;
    }
    .title{
      color : $white;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}
</style>