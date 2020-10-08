<template>
  <div class="interview">
    <h1>Wyniki Sport</h1>
    <h4 style="color:orange">Sprawdź jak wypadasz na tle społeczeństwa</h4>
    <app-total></app-total>
  </div>
</template>

<script>
import Total from './sport/Total'

export default {
  components: {
    appTotal: Total
  }
}
</script>
