<template>
  <div class="interview">
    <h1>Wyniki</h1>
    <h4 style="color:orange">Sprawdź jak wypadasz na tle społeczeństwa</h4>
    <app-total></app-total>
  </div>
</template>

<script>
import Total from './results/diet/Total'

export default {
  components: {
    appTotal: Total
  }
}
</script>
