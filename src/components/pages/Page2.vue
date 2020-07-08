<template>
  <div class="interview">
    <h1>Dieta</h1>
    <div class="jumbotron">
      <h4>
        Czy w Pana/Pani najbliższej rodzinie (dziadkowie, rodzice, rodzeństwo,
        dzieci) wystąpiła choroba nowotworowa ?
      </h4>

      <div class="questions">
        <div
          class="form-check form-check-inline question-box"
          v-for="question in heart_1Questions"
          :key="question.id"
        >
          <label class="form-check-label" :for="question.value">
            {{ question.title }}
            <span>
              <input
                class="input"
                type="radio"
                :name="question.name"
                :id="question.value"
                :value="question.value"
                v-model="heart_1"
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
        <div
          class="form-check form-check-inline question-box"
          v-for="question in heart_2Questions"
          :key="question.id"
        >
          <label class="form-check-label" :for="question.value">
            {{ question.title }}
            <span>
              <input
                class="input"
                type="radio"
                :name="question.name"
                :id="question.value"
                :value="question.value"
                v-model="heart_2"
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
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      heart_1: '',
      heart_2: ''
    }
  },
  computed: {
    ...mapGetters({
      heart_1Questions: 'heart_1',
      heart_2Questions: 'heart_2'
    })
  },

  methods: {
    setHeart () {
      const heart = {
        heart_1: this.heart_1,
        heart_2: this.heart_2
      }
      this.$store.dispatch('setHeart', heart)
    }
  }
}
</script>

<style scoped lang="scss">
.progress {
  margin: 15px;
}
@import "../questionStyle.scss";
</style>
