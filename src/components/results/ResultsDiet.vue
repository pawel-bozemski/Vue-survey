<template>
  <div class="interview">
    <h1>Wyniki Dieta</h1>
    <h4 style="color:orange">Sprawdź jak wypadasz na tle społeczeństwa</h4>
    <app-total></app-total>
  </div>
</template>

<script>
import Total from './diet/Total'

export default {
  components: {
    appTotal: Total
  }
}
</script>
