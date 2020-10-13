<template>
  <div class="row">
    <img
      class="image"
      src="../imgs/start/start.png"
      alt="people with mask"
    />
    <div class="text">
      <div class="header">
        <p>
          Dołącz do ponad 400 000 osób, które wzięły udział w Narodowym Teście
          Zdrowia Polaków <br />
          organizowanym przez Medonet, którego partnerem strategicznym jest
          Nationale Nederlanden.
        </p>
      </div>
      <div class="content">
        <h6>
          Opowiedz na proste pytania o swój styl życia <br />
          i zobacz, jak wypadasz na tle innych.
        </h6>
      </div>
      <div class="footer">
        <p>
          Odkryj, jak wielkie znaczenie dla naszego zdrowia, mają nawet drobne
          rzeczy, <br />
          które robimy każdego dnia.
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
