<template>
  <div class="interview">
    <h1>Zdrowie fizyczne</h1>
    <div class="jumbotron">
      <h4>
        Ile średnio Pan/Pani codziennie spaceruje – wliczając w to czas poświęcony nie tylko na relaks, ale również na dotarcie np. do pracy?      </h4>
      <div class="questions">
        <div
          class="form-check form-check-inline question-box"
          v-for="question in sport_1Questions"
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
                v-model="sport_1"
              />
            </span>
          </label>
        </div>
      </div>
    </div>

    <div class="jumbotron">
      <h4>
        Jak często uprawia Pan/Pani sport?
      </h4>
      <div class="questions">
        <div
          class="form-check form-check-inline question-box"
          v-for="question in sport_2Questions"
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
                v-model="sport_2"
              />
            </span>
          </label>
        </div>
      </div>
    </div>

    <div class="jumbotron">
      <h4>
        Jak ocenia Pan/Pani swoją kondycję fizyczną w porównaniu z innymi osobami w tym samym wieku ?
      </h4>
      <div class="questions">
        <div
          class="form-check form-check-inline question-box"
          v-for="question in sport_3Questions"
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
                v-model="sport_3"
              />
            </span>
          </label>
        </div>
      </div>
    </div>

    Wywiad 4/8
    <div class="progress">
      <div
        class="progress-bar bg-danger"
        role="progressbar"
        style="width: 50%"
        aria-valuenow="25"
        aria-valuemin="0"
        aria-valuemax="100"
      ></div>
    </div>
    <div class="jumbotron buttons">
      <router-link to="/psych" tag="a" class="backBtn">
        <button class="btn btn-warning">
          Wstecz
        </button>
      </router-link>
      <router-link to="/health">
        <button class="btn btn-warning" @click="setSport">
          Dalej
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
      sport_1: '',
      sport_2: '',
      sport_3: ''
    }
  },
  computed: {
    ...mapGetters({
      sport_1Questions: 'sport_1',
      sport_2Questions: 'sport_2',
      sport_3Questions: 'sport_3'
    })
  },

  methods: {
    setSport () {
      const sport = {
        sport_1: this.sport_1,
        sport_2: this.sport_2,
        sport_3: this.sport_3
      }
      this.$store.dispatch('setSport', sport)
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
