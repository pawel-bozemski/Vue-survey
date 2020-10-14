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

/* first for IE 4–8 */
@font-face {
  font-family: NNDagnyTextWeb;
  src: url("./fonts/NNDagnyTextWeb.eot");
}

/* then for WOFF-capable browsers */
@font-face {
  font-family: NNDagnyTextWeb;
  src: url("./fonts/NNDagnyTextWeb.woff") format("woff");
}

/* go on with normal style definitions */

  body {
  font-family: NNDagnyTextWeb, sans-serif;
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
