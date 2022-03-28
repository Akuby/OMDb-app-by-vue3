<template>
  <div class="container">
    <div class="skeletons">
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
  </div>
</template>

<script>
export default {
  created(){
    this.$store.dispatch('movie/searchMovieWithId',{
      id : this.$route.params.id
    })
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
}
</style>