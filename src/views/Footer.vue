<template>
  <div class="row">
    <div class="col-sm info">
      Infolinia Help Desk: 801 20 30 40
    </div>
    <div class="col-sm info icons">
      <p>Udostępnij test:</p>
      <ul class="list-inline brands">
        <li class="list-inline-item"><i class="fab fa-twitter-square"></i></li>
        <li class="list-inline-item"><i class="fab fa-facebook-square"></i></li>
        <li class="list-inline-item"><i class="fab fa-instagram-square"></i></li>
      </ul>
    </div>
    <div class="col-sm info">
      @2020 Nationale-Nederlanden Wszelkie prawa zastrzeżone
    </div>
  </div>
</template>

<style scoped lang="scss">
.row {
  border-top: 1px solid grey;
  font-size: 12px;
}
.info {
  margin-top: 20px;
  padding: 5px;
}
.icons {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.brands {
  margin: 0;
  font-size: 20px;
  color: gray;
}
</style>
