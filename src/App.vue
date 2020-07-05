<template>
  <div class="container">
      <app-header></app-header>
      <router-view></router-view>
      <app-footer></app-footer>
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

<style lang="scss">

</style>
