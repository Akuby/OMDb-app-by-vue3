<template>
  <div class="inner">
<swiper 
:effect="'coverflow'" 
:grabCursor="true" 
:centeredSlides="true" 
:slidesPerView="5" 
:coverflowEffect="{
      rotate: 50,
      stretch: 20,
      depth: 50,
      modifier: 1,
      slideShadows: true,
    }" 
:pagination="true"
:loop="true" 
:modules="modules"
class="mySwiper">
    <swiper-slide><img src="../assets/poster-1.png" alt=""></swiper-slide>
    <swiper-slide><img src="../assets/poster-2.png" alt=""></swiper-slide>
    <swiper-slide><img src="../assets/poster-3.png" alt=""></swiper-slide>
    <swiper-slide><img src="../assets/poster-4.png" alt=""></swiper-slide>
    <swiper-slide><img src="../assets/poster-5.png" alt=""></swiper-slide>
    <swiper-slide><img src="../assets/poster-6.png" alt=""></swiper-slide>
    <swiper-slide><img src="../assets/poster-7.png" alt=""></swiper-slide>
    <swiper-slide><img src="../assets/poster-8.png" alt=""></swiper-slide>
    <swiper-slide><img src="../assets/poster-9.png" alt=""></swiper-slide>
  </swiper>
  </div>
  
</template>

<script>
  // Import Swiper Vue.js components
  import {
    Swiper,
    SwiperSlide
  } from "swiper/vue";

  // Import Swiper styles
  import "swiper/css";
  import "swiper/css/effect-coverflow";
  import "swiper/css/pagination";
  import "swiper/css/autoplay"


  // import required modules
  import {
    EffectCoverflow,
    Pagination
  } from "swiper";

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [EffectCoverflow, Pagination],
      };
    },
  };
</script>

<style lang="scss" scoped>
	.swiper-slide {

		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
		font-weight: bold;
	}
</style>