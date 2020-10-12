<template>
  <div class="interview">
    Etap 5/8
    <div class="progress">
      <div
        class="progress-bar bg-warning"
        role="progressbar"
        style="width: 63%"
        aria-valuenow="25"
        aria-valuemin="0"
        aria-valuemax="100"
      ></div>
    </div>
    <h1>Problemy zdrowotne</h1>
    <div class="jumbotron">
      <h4>
        Czy cierpi Pan/Pani jakieś przewlekłe (trwające, lub mające trwać przynajmniej 6 miesięcy) problemy ze zdrowiem?
      </h4>
      <div class="questions">
        <div
          class="form-check form-check-inline question-box"
          v-for="question in health_1Questions"
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
                v-model="health_1"
              />
            </span>
          </label>
        </div>
        <img class="image1" src="../../imgs/health/heart.png" alt="">
      </div>
    </div>
    <div class="jumbotron">
      <h4>
        Czy stwierdzono u Pana/Pani kiedyś lub obecnie następujące choroby?
      </h4>
      <div class="questions">
        <div
          class="form-check form-check-inline question-box"
          v-for="question in health_2Questions"
          :key="question.id"
        >
          <label class="form-check-label" :for="question.value">
            {{ question.title }}
            <span>
              <input
                class="input"
                type="checkbox"
                :name="question.name"
                :id="question.value"
                :value="question.value"
                v-model="health_2"
              />
            </span>
          </label>
        </div>
      </div>
    </div>

    <div class="jumbotron">
      <h4>
        Czy któraś z tych dolegliwości pojawia się u Pan/Pani co najmniej kilka razy w miesiącu?
      </h4>
      <img class="image2" src="../../imgs/health/med.png" alt="">
      <div class="questions">
        <div
          class="form-check form-check-inline question-box"
          v-for="question in health_3Questions"
          :key="question.id"
        >
          <label class="form-check-label" :for="question.value">
            {{ question.title }}
            <span>
              <input
                class="input"
                type="checkbox"
                :name="question.name"
                :id="question.value"
                :value="question.value"
                v-model="health_3"
              />
            </span>
          </label>
        </div>
      </div>
    </div>
    <div class="jumbotron buttons">
      <router-link to="/sport" tag="a" class="backBtn">
        <button class="btn btn-warning">
          Wstecz
        </button>
      </router-link>
      <router-link to="/prevention">
        <button
        :disabled="this.disable"
        class="btn btn-warning"
        @click="setHealth">
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
      health_1: '',
      health_2: [],
      health_3: [],
      disable: true
    }
  },
  computed: {
    ...mapGetters({
      health_1Questions: 'health_1',
      health_2Questions: 'health_2',
      health_3Questions: 'health_3'
    })
  },
  watch: {
    health_1: function () {
      this.disable = false
    }
  },

  methods: {
    setHealth () {
      const health = {
        health_1: this.health_1,
        health_2: this.health_2,
        health_3: this.health_3
      }
      this.$store.dispatch('setHealth', health)
    }
  }
}
</script>

<style scoped lang="scss">

@import "../questionStyle.scss";

.image1 {
  left: -15%;
}
.image2 {
  right: -20%;
}
</style>
