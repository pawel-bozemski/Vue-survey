<template>
  <div class="container">
    Etap 15/15
    <div class="progress">
      <div
        class="progress-bar"
        role="progressbar"
        style="width: 100%"
        aria-valuenow="25"
        aria-valuemin="0"
        aria-valuemax="100"
      ></div>
    </div>

    <div class="row">
      <div class="col">
        <h1>Dziękujemy za wykonanie Testu Zdrowia.</h1>
        <p>
          Zależy nam na Twoim zdrowiu, dlatego mamy dla Ciebie kod dający Ci
          darmowy dostęp <br />
          do Portalu Dietetycznego Nationale-Nederlandem. Dzięki portalowi:
        </p>
        <img class="image" src="../imgs/finish/perks.png" alt="perks" />
      </div>
    <img class="image__icon-1" src="../imgs/finish/family.png" alt="">
    </div>
    <div class="row"></div>
    <img class="image__icon-2" src="../imgs/finish/man.png" alt="">
    <div class="jumbotron">
      <p>Twój kod to :</p>
      <div class="form-group">
        <input
          type="text"
          class="form-control"
          placeholder="Example input"
        />
      </div>
      <p><strong>Uwaga! Zapisz swój kod, bo po zamknięciu tej strony <br> nie będzie możliwości jego ponownego wyświetlenia.</strong></p>
    </div>
    <div class="col text">
      <p>Korzystanie z Portalu Dietetycznego to kolejny krok do jeszcze większego dbania o siebie, <br>
      kolejnym krokiem może być wybór odpowiedniego ubezpieczenia.<br>
      Nationale-Nederlanden od lat ubezpiecza klientów na wypadek raka,<br>
      zawału serca, udaru, a teraz - także na wypadek cukrzycy.
      </p>
      <h6>Poznaj nasze produkty związane z chorobami cywilizacyjnymi</h6>
    </div>
  </div>
</template>

<script></script>

<style scoped lang="scss">
.container {
  width: 90%;
}
.image {
  margin: 20px 0;
  z-index: 999;
  position: relative;
}
.image__icon-1 {
  z-index: -2;
  position: absolute;
  right: 15%;
  top: 30%;
}
.image__icon-2 {
  z-index: -2;
  position: absolute;
  left: 8%;
}
.jumbotron {
  position: relative;
}

.text {
  margin: 20px 0;
}
h6 {
  color: #f57921;
  text-decoration: underline;
}
.progress {
  margin: 15px;
  .progress-bar {
    background-color: #f57921;
  }
}

@media (max-width: 1024px) {
  .image {
    max-width: 500px;
  }
  .image__icon-1 {
    top: 19%;
    right: 0%;
  }
  .image__icon-2 {
    left: 5%;
    top: 60%;

  }
}

@media (max-width: 500px) {
  h1 {
    font-size: 25px;
  }
  p {
    font-size: 13px;
  }
  .image {
    width: 100%;
  }
  .image__icon-1 {
    display: none;
  }
  .image__icon-2 {
    display: none;
  }
}

</style>
