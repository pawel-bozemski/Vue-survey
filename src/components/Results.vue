<template>
  <div class="interview">
    <h1>Wyniki</h1>
    <h4 style="color:orange">Sprawdź jak wypadasz na tle społeczeństwa</h4>
    <app-age35 v-if="age=35-45"></app-age35>
  </div>
</template>

<script>
import Age35 from './results/Age35.vue'
export default {
  data () {
    return {
      age: '35-44'
    }
  },
  components: {
    appAge35: Age35
  }
}
</script>
