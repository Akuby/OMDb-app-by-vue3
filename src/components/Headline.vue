<template>
  <div class="container">
    <h1>
      <span>OMDb API</span><br />
      THE OPEN<br />
      MOVIE DATABASE
    </h1>
    <!-- <div class="wave">
      <div class="butterfly">
        <div class="wing">
          <div class="fly"></div>
          <div class="fly"></div>
        </div>
        <div class="wing">
          <div class="fly"></div>
          <div class="fly"></div>
        </div>
      </div>
      </div> -->
    <p>
      The OMDb API is a RESTful web service to obtain movie information, all content and images on the site are
      contributed and maintained by our users.<br />
      If you find this service useful, please consider making a one-time donation or become a patron.
    </p>
  </div>
</template>

<script>
export default {
}
</script>


<style lang="scss" scoped>
  @keyframes myOrbit {
    from { transform: rotate(0deg) translateX(150px) rotate(0deg); }
    to   { transform: rotate(360deg) translateX(150px) rotate(-360deg); }
}
  @keyframes left {
    0% {
        transform: rotateY(-60deg);
    }
    100% {
        transform: rotateY(50deg);
    }
}
  @keyframes right {
    0% {
        transform: rotateY(180deg);
    }
    100% {
        transform: rotateY(80deg);
    }
}
  .container {
    padding-top: 30px;
  }

  h1 {
    line-height: 1;
    font-family: "Oswald", sans-serif;
    font-size: 80px;

    span {
      color: $primary;
    }
  }
    .wave{
    position: absolute;
    align-items: center;
    display: flex;
    justify-content: center;
    filter: drop-shadow(30px 10px 4px #c4c4c4);
}
.butterfly {
    position: relative;
    transform-style: preserve-3d;
    transform: rotateX(60deg) rotateY(30deg) rotateZ(-50deg);
    width: 60px;
    
    &::before {
        background: orange;
        border-radius: 40%;
        content: '';
        display: block;
        margin-left:-10px;
        position: absolute;
        top: -15px;
        transform: rotatey(100deg);
        width: 10px;
        height: 40px;
        right: 5%;
        z-index: 2;
    }
}
.wing {
    display: block;
    position: absolute;
    top: -18px;
    right: 28%;
    
    &:first-child {
        animation: left 1s infinite;
        animation-direction: alternate;
        animation-fill-mode: reverse;
        z-index: 3;
    }
    
    &:last-child {
        animation: right 1s infinite;
        animation-direction: alternate;
        animation-fill-mode: reverse;
        right:0;
        z-index: 1;
    }
    
    .fly, .fly::after {
        background: $primary;
        transform-origin: 100% 50%;
        overflow: hidden;
        position: absolute;
        border-radius: 50%;
        right: 0;
        top: 0;
    }
    
    .fly:first-child {
        height: 35px;
        text-align: center;
        top: 2px;
        transform: rotateZ(30deg);
        width: 50px;
    }
    
    .fly:last-child {
        height: 48px;
        transform: rotateZ(-30deg);
        width: 30px;
    }
}

  p {
    font-family: "Roboto Slab", sans-serif;
    margin: 30px 0;
    color: $gray-600;
  }
</style>