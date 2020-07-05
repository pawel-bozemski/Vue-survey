<template>
  <div class="container">
    <img
      class="image"
      src="https://images.pexels.com/photos/3957987/pexels-photo-3957987.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
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
        Dalej >>>>
      </router-link>
    </div>
  </div>
</template>

<script></script>

<style scoped lang="scss">
.image {
  height: 250px;
  width: 600px;
  object-fit: cover;
  margin: 15px;
}
.jumbotron {
  height: 60px;
  padding: 10px;
  align-items: center;
}
.text {
  width: 100%;
  margin: 10px;
  text-align: center;
}
h6 {
  color: orange;
  font-size: 25px;
  font-weight: bold;
}
</style>
