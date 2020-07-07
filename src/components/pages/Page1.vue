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
      <router-link
      to="/page2"
      tag="button"
      class="btn btn-warning"
      @click="setInterview"
      >
        Dalej >>>>
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
