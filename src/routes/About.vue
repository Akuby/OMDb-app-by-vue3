<template>
  <div class="about">
    <div
    target="_blank"
    class= "medal">
      <img :src="image" :alt="name" class="front"/>
      <div class="back">
        <a href="https://github.com/Akuby" class="name"> {{ name }} </a>
        <div> {{ email }} </div>
        <div> {{ blog }}</div>
        <div> {{ phone }}</div>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  data(){
    return {
      imageLoading : true
    }
  },
  computed : {
    image() {
      return this.$store.state.about.image
    },
    name() {
      return this.$store.state.about.name
    },
    email(){
      return this.$store.state.about.email
    },
    blog() {
      return this.$store.state.about.blog
    },
    phone() {
      return this.$store.state.about.phone
    },
    //라이프사이클에서는 비동기 사용 불가 
    mounted(){
      this.init()
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~/scss/main";
.about{
  padding-top: 50px;
  text-align: center;
  .medal{
    display: flex;
    width: 250px;
    height: 250px;
    justify-content: center;
    align-items: center;
    margin: 40px auto 20px;
    padding: 20px 30px 40px;
    position: relative;
    perspective: 600px;
    > .front, .back{
      width: 250px;
      height: 250px;
      box-sizing: border-box;
      border: 10px solid $gray-200;
      border-radius: 50%;
      backface-visibility: hidden;
      transition: 1s;
    }

    .front{
      position: absolute;
      transform: rotateY(0deg);
    }
    .back{
      transform: rotateY(-180deg);
	    position: relative;
      flex-shrink: 0;
    }

    &:hover{
      .front{
        transform: rotateY(180deg);
      }
      .back{
        transform: rotateY(0deg);
      }
    }
  }
  .name{
      font-family: 'Oswald', sans-serif;
      font-size: 40px;
      margin: 40px 0 18px;
      display: block;
      text-decoration: none;
    }
}
</style>