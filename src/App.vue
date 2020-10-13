<template>
  <div class="background">
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
</script>

<style scoped lang="scss">
  body {
  font-family: 'Roboto', sans-serif;
  box-sizing: border-box
  }
  .background {
    margin: 50px;
    text-align: center;
    height: 100%;
  }
  @media (max-width: 500px) {
  .background {
    margin: 0;
  }
  }
</style>
