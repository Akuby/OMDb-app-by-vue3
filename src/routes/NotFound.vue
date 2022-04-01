<template>
<div class="not-found">
  <div class="status">404</div>
  <div class="message">Page Not Found!</div>
  </div>
</template>

<style lang="scss" scoped>
@import '~/scss/main';
.not-found{
  padding: 80px 20px;
  line-height: 1.2;
  font-family: 'Oswald', sans-serif;
  text-align: center;
  .status{
    color: $primary;
    font-size: 160px;
  }
  .message { 
    font-size: 50px;
  }
}
</style>