<template>
  <div class="background">
    <div class="container">
      <app-header></app-header>
      <router-view></router-view>
      <app-footer></app-footer>
    </div>
  </div>
</template>

<script>
import Header from './views/Header'
import Footer from './views/Footer'
export default {
  components: {
    appHeader: Header,
    appFooter: Footer
  }
}
</script>

<style scoped lang="scss">
  body {
  font-family: 'Roboto', sans-serif;
  }
  .background {
    margin: 50px;
    text-align: center;
    height: 100%;
  }
</style>
