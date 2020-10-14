<template>
  <div class="row">
    <img
      class="image"
      src="../imgs/start/start.png"
      alt="people with mask"
    />
    <div class="text">
      <div class="header">
        <h6>
          Sprawdź się w teście Zdrowia
        </h6>
      </div>
      <div class="content">
        <p>
        Wiemy, że choć życie nieustająco przyśpiesza, dbasz o wszystko, co dla Ciebie ważne.<br>
        Ale czy odpowiednio troszczysz się też o swoje zdrowie? Pomożemy Ci to ocenić.
        </p>
      </div>
      <div class="footer">
        <p>
          Sprawdź jak wypadasz na tle ponad 400 000 osób, któe wzięły udział w Narodowym Teście Zdrowia portalu Medonet<br>
           i odbierz dostęp do Poratalu Dietetycznego
        </p>
      </div>
    </div>
    <div class="jumbotron">
      <router-link
      to="/interview"
      tag="button"
      class="btn btn-warning"
      >
        Rozpocznij >>>
      </router-link>
    </div>
  </div>
</template>

<script></script>

<style scoped lang="scss">
.image {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.jumbotron {
  height: 60px;
  padding: 10px;
  align-items: center;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 70%;
}
.text {
  width: 100%;
  margin: 10px;
  text-align: center;
}
.footer {
  font-weight: 600;
}
h6 {
  color: #f57921;
  font-size: 25px;
  font-weight: bold;
}
.btn {
  color: white;
  background-color: #f57921;
}

@media (max-width: 1024px) {
  .image {
    max-width: 500px;
  }

}

@media (max-width: 500px) {
  .image {
    max-width: 340px;
  }

}
</style>
