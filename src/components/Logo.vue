<template>
  <RouterLink to="/" class="logo">
  <span>OMDbAPI</span>.COM
  </RouterLink>
</template>

<style lang="scss" scoped>
@import "~/scss/main";
.logo{
  text-decoration: none;
  font-family: "Oswald", sans-serif;
  font-size: 20px;
  color: $black;
  &:hover {
    color: rgb(60, 60, 60);
  }
  span {
    color : $primary;
  }
}
</style>