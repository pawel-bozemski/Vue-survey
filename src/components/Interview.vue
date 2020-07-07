<template>
  <div class="interview">
    <h1>Metryka</h1>
    <p>Prosimy o podanie podstawowych danych statystycznych</p>
    <div class="jumbotron">
      <h4>Płeć</h4>
      <div class="questions">
        <div class="form-check form-check-inline question-box">
          <label class="form-check-label" for="female"
            >Kobieta
            <span>
              <input
                class="input"
                type="radio"
                name="gender"
                id="female"
                value="female"
                v-model="gender"
              />
            </span>
          </label>
        </div>
        <div class="form-check form-check-inline question-box">
          <label class="form-check-label" for="male">
            Mężczyzna
            <span>
              <input
                class="input"
                type="radio"
                name="gender"
                id="male"
                value="male"
                v-model="gender"
              />
            </span>
          </label>
        </div>
      </div>
    </div>

    <div class="jumbotron">
      <h4>Wiek</h4>
      <div class="questions">
        <div class="form-check form-check-inline question-box">
          <label class="form-check-label" for="18-24"
            >18-24
            <span>
              <input
                class="input"
                type="radio"
                name="age"
                id="18-24"
                value="18-24"
                v-model="age"
              />
            </span>
          </label>
        </div>
        <div class="form-check form-check-inline question-box">
          <label class="form-check-label" for="25-34">
            25-34
            <span>
              <input
                class="input"
                type="radio"
                name="age"
                id="25-34"
                value="25-34"
                v-model="age"
              />
            </span>
          </label>
        </div>
        <div class="form-check form-check-inline question-box">
          <label class="form-check-label" for="35-44">
            35-44
            <span>
              <input
                class="input"
                type="radio"
                name="age"
                id="34-44"
                value="34-44"
                v-model="age"
              />
            </span>
          </label>
        </div>
        <div class="form-check form-check-inline question-box">
          <label class="form-check-label" for="45-54">
            45-54
            <span>
              <input
                class="input"
                type="radio"
                name="age"
                id="45-54"
                value="45-54"
                v-model="age"
              />
            </span>
          </label>
        </div>
        <div class="form-check form-check-inline question-box">
          <label class="form-check-label" for="55-64">
            55-64
            <span>
              <input
                class="input"
                type="radio"
                name="age"
                id="55-65"
                value="55-65"
                v-model="age"
              />
            </span>
          </label>
        </div>
        <div class="form-check form-check-inline question-box">
          <label class="form-check-label" for="65+">
            65+
            <span>
              <input
                class="input"
                type="radio"
                name="age"
                id="65+"
                value="65"
                v-model="age"
              />
            </span>
          </label>
        </div>
      </div>
    </div>

    <div class="jumbotron">
      <h4>Wielkość miejscowości zamieszkania</h4>
      <div class="questions">
        <div class="form-check form-check-inline question-box">
          <label class="form-check-label" for="cottage"
            >wieś
            <span>
              <input
                class="input"
                type="radio"
                name="location"
                id="cottage"
                value="cottage"
                v-model="location"
              />
            </span>
          </label>
        </div>
        <div class="form-check form-check-inline question-box">
          <label class="form-check-label" for="city19k">
            miasto do 19 tys. <br> mieszkańców
            <span>
              <input
                class="input"
                type="radio"
                name="location"
                id="city19k"
                value="city19k"
                v-model="location"
              />
            </span>
          </label>
        </div>
        <div class="form-check form-check-inline question-box">
          <label class="form-check-label" for="city20k">
            miasto 20-49 tys. <br> mieszkańców
            <span>
              <input
                class="input"
                type="radio"
                name="location"
                id="city20k"
                value="city20k"
                v-model="location"
              />
            </span>
          </label>
        </div>
        <div class="form-check form-check-inline question-box">
          <label class="form-check-label" for="city50k">
            miasto 50-99 tys. <br> mieszkańców
            <span>
              <input
                class="input"
                type="radio"
                name="location"
                id="city50k"
                value="city50k"
                v-model="location"
              />
            </span>
          </label>
        </div>
        <div class="form-check form-check-inline question-box">
          <label class="form-check-label" for="city100k">
            miasto 100-199 tys. <br> mieszkańców
            <span>
              <input
                class="input"
                type="radio"
                name="location"
                id="city100k"
                value="city100k"
                v-model="location"
              />
            </span>
          </label>
        </div>
        <div class="form-check form-check-inline question-box">
          <label class="form-check-label" for="city200k">
            miasto 200-499 tys. <br> mieszkańców
            <span>
              <input
                class="input"
                type="radio"
                name="location"
                id="city200k"
                value="city200k"
                v-model="location"
              />
            </span>
          </label>
        </div>
        <div class="form-check form-check-inline question-box">
          <label class="form-check-label" for="city500k">
            miasto 500 tys. + <br> mieszkańców
            <span>
              <input
                class="input"
                type="radio"
                name="location"
                id="city500k"
                value="city500k"
                v-model="location"
              />
            </span>
          </label>
        </div>
      </div>
    </div>
    <div class="jumbotron">
      <h4>Wykształcenie</h4>
      <div class="questions">
        <div class="form-check form-check-inline question-box">
          <label class="form-check-label" for="elementary"
            >podstawowe
            <span>
              <input
                class="input"
                type="radio"
                name="education"
                id="elementary"
                value="elementary"
                v-model="education"
              />
            </span>
          </label>
        </div>
        <div class="form-check form-check-inline question-box">
          <label class="form-check-label" for="secondary">
            średnie
            <span>
              <input
                class="input"
                type="radio"
                name="education"
                id="secondary"
                value="secondary"
                v-model="education"
              />
            </span>
          </label>
        </div>
        <div class="form-check form-check-inline question-box">
          <label class="form-check-label" for="higher">
            wyższe
            <span>
              <input
                class="input"
                type="radio"
                name="education"
                id="higher"
                value="higher"
                v-model="education"
              />
            </span>
          </label>
        </div>
      </div>
    </div>
    <div class="jumbotron">
      <router-link to="/page1">
      <button
        class="btn btn-warning"
        @click="setInterview">
          Dalej >>>>
        </button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      gender: '',
      age: '',
      location: '',
      education: ''
    }
  },
  methods: {
    setInterview () {
      const interview = {
        gender: this.gender,
        age: this.age,
        location: this.location,
        education: this.education
      }
      this.$store.dispatch('setInterview', interview)
    }
  }
}

</script>

<style scoped lang="scss">
.interview {
  margin-bottom: 50px;
}
.questions {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: start;
}
.question-box {
  background-color: white;
  width: 20%;
  height: 50px;
  margin: 15px;
  border-radius: 10px;
  flex: 30%;
  flex-grow: initial;
}
.jumbotron {
  position: relative;
  margin: 30px;
  height: 50%;
  padding: 10px;
}
label {
  position: relative;
  padding: 5px;
  width: 100%;
  text-align: left;
  opacity: 0.7;
}
span {
  position: absolute;
  right: 2%;
  top: 20%;
}
</style>
