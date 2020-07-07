<template>
  <div class="interview">
    <h1>Dieta</h1>
    <div class="jumbotron">
      <h4>
        Czy w Pana/Pani najbliższej rodzinie (dziadkowie, rodzice, rodzeństwo,
        dzieci) wystąpiła choroba nowotworowa ?
      </h4>
      <div class="questions">
        <div class="form-check form-check-inline question-box">
          <label class="form-check-label" for="lorem">
            Lorem ipsum dolor sit amet
            <span>
              <input
                class="input"
                type="radio"
                name="question_1"
                id="lorem"
                value="lorem"
                v-model="question_1"
              />
            </span>
          </label>
        </div>
        <div class="form-check form-check-inline question-box">
          <label class="form-check-label" for="consectetur">
            consectetur adipiscing elit
            <span>
              <input
                class="input"
                type="radio"
                name="question_1"
                id="consectetur"
                value="consectetur"
                v-model="question_1"
              />
            </span>
          </label>
        </div>
        <div class="form-check form-check-inline question-box">
          <label class="form-check-label" for="sed">
            sed do eiusmod tempor
            <span>
              <input
                class="input"
                type="radio"
                name="question_1"
                id="sed"
                value="sed"
                v-model="question_1"
              />
            </span>
          </label>
        </div>
        <div class="form-check form-check-inline question-box">
          <label class="form-check-label" for="labore">
            incididunt ut labore
            <span>
              <input
                class="input"
                type="radio"
                name="question_1"
                id="labore"
                value="labore"
                v-model="question_1"
              />
            </span>
          </label>
        </div>
      </div>
    </div>

    <div class="jumbotron">
      <h4>
        Czy w Pana/Pani najbliższej rodzinie (dziadkowie, rodzice, rodzeństwo,
        dzieci)<br />
        pojawił się we wczesnym wieku <br />
        (u kobiet przed 65., u mężczyzn przed 55. rokiem życia) <br />
        choroby sercowo-naczyniowe?
      </h4>
      <div class="questions">
        <div class="form-check form-check-inline question-box">
          <label class="form-check-label" for="ipsum">
            Lorem ipsum dolor sit amet
            <span>
              <input
                class="input"
                type="radio"
                name="question_2"
                id="ipsum"
                value="ipsum"
                v-model="question_2"
              />
            </span>
          </label>
        </div>
        <div class="form-check form-check-inline question-box">
          <label class="form-check-label" for="adipiscing">
            consectetur adipiscing elit
            <span>
              <input
                class="input"
                type="radio"
                name="question_2"
                id="adipiscing"
                value="adipiscing"
                v-model="question_2"
              />
            </span>
          </label>
        </div>
        <div class="form-check form-check-inline question-box">
          <label class="form-check-label" for="eiusmod">
            sed do eiusmod tempor
            <span>
              <input
                class="input"
                type="radio"
                name="question_2"
                id="eiusmod"
                value="eiusmod"
                v-model="question_2"
              />
            </span>
          </label>
        </div>
        <div class="form-check form-check-inline question-box">
          <label class="form-check-label" for="incididunt">
            incididunt ut labore
            <span>
              <input
                class="input"
                type="radio"
                name="question_2"
                id="incididunt"
                value="incididunt"
                v-model="question_2"
              />
            </span>
          </label>
        </div>
      </div>
    </div>

    Wywiad 6/10
    <div class="progress">
      <div
        class="progress-bar bg-danger"
        role="progressbar"
        style="width: 60%"
        aria-valuenow="25"
        aria-valuemin="0"
        aria-valuemax="100"
      ></div>
    </div>
    <router-link to="/page1" tag="a" class="backBtn">
      <i class="fas fa-chevron-circle-left"></i>
    </router-link>
    <div class="jumbotron">
      <router-link to="/results">
        <button class="btn btn-warning" @click="setHeart">
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
      question_1: '',
      question_2: '',
      question_3: ''
    }
  },
  methods: {
    setHeart () {
      const heart = {
        question_1: this.question_1,
        question_2: this.question_2,
        question_3: this.question_3
      }
      this.$store.dispatch('setHeart', heart)
    }
  }
}
</script>

<style scoped lang="scss">
.interview {
  margin-bottom: 50px;
}
.progress {
  margin: 15px;
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
