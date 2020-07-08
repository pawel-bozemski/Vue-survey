<template>
  <div class="interview">
    <div class="jumbotron">
      <h4>Kiedy ostatnio robił(-a) pan ponizsze badania <br>-Pomiar ciśnienia krwi</h4>
      <div class="questions">
        <div class="form-check form-check-inline question-box">
          <h6>Wiek: {{ age }} lata</h6>
        </div>
        <div class="bar">
          <div class="result one" style="width:65%">
            <p class="not__visible">Twój wynik</p>
          </div>
          <div class="result two" style="width:15%">
            <p class="not__visible">Twój wynik</p>
          </div>
          <div class="result three active" style="width:11%">
            <p class="visible">Twój wynik</p>
          </div>
          <div class="result four" style="width:9%">
            <p class="not__visible">Twój wynik</p>
          </div>
        </div>
        <div class="bar">
          <div class="result one__bg" style="width:65%">65%</div>
          <div class="result two__bg" style="width:15%">15%</div>
          <div class="result active" style="width:11%">11%</div>
          <div class="result four__bg" style="width:9%">9%</div>
        </div>
        <div class="row">
          <div class="dot__content"><span class="dot one__bg"></span>Mniej niż 12 m-cy temu</div>
          <div class="dot__content"><span class="dot two__bg"></span>Rok-dwa temu</div>
          <div class="dot__content"><span class="dot active"></span>Dawniej niż dwa lata temu</div>
          <div class="dot__content"><span class="dot four__bg"></span>Nigdy</div>
        </div>
      </div>
    </div>

    <div class="jumbotron">
      <h4>Czy zdiagnozowano u Pana/Pani którąś z poniższych chorób/dolegliwości? <br>-Alergia lub astma</h4>
      <div class="questions">
        <div class="form-check form-check-inline question-box">
          <h6>Wiek: {{ age }} lata</h6>
        </div>
        <div class="bar">
          <div class="result one active" style="width:18%">
            <p class="visible">Twój wynik</p>
          </div>
          <div class="result four" style="width:82%">
            <p class="not__visible">Twój wynik</p>
          </div>
        </div>
        <div class="bar">
          <div class="result active" style="width:18%">18%</div>
          <div class="result two__bg" style="width:82%">82%</div>
        </div>
        <div class="row">
          <div class="dot__content"><span class="dot active"></span>Tak</div>
          <div class="dot__content"><span class="dot two__bg"></span>Nie</div>
        </div>
      </div>
    </div>

    <div class="jumbotron">
      <div class="icons">
      <ul class="list-inline brands">
        <li class="list-inline-item"><i class="fas fa-print"></i>Drukuj</li>
        <li class="list-inline-item"><i class="far fa-envelope"></i>Wyślij</li>
        <li class="list-inline-item"><i class="fas fa-external-link-alt"></i>Udostępnij</li>
      </ul>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      age: '35-44'
    }
  }
}
</script>

<style scoped lang="scss">
.brands {
  margin: 0;
  font-size: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.jumbotron {
  padding: 15px;
}
.bar {
  width: 100%;
  background-color: #ddd;
  margin: 10px 0;
  display: inline-block;
}

.result {
  padding-top: 10px;
  padding-bottom: 10px;
  color: white;
  height: 50px;
  float: left;
  display: block;
}
.active {
  background-color: orange;
  display: inline;
}
.not__visible {
  background-color: orange;
  display: none;
}
.visible {
  display: inline;
}
.one__bg {
  background-color: #7d8597;
}
.two__bg {
  background-color: #979dac;
}
.three__bg {
  background-color: #5c677d;
}
.four__bg {
  background-color: #33415c;
}
.dot {
  height: 25px;
  width: 25px;
  border-radius: 50%;
  display: inline-block;
  margin: 0 25px;
}
.dot__content {
  width: 25%;
}
</style>
