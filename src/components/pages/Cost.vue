<template>
  <div class="interview">
    Etap 8/8
    <div class="progress">
      <div
        class="progress-bar bg-warning"
        role="progressbar"
        style="width: 100%"
        aria-valuenow="25"
        aria-valuemin="0"
        aria-valuemax="100"
      ></div>
    </div>
    <h1>Koszty leczenia</h1>
    <div class="jumbotron">
      <h4>
        Czy kiedykolwiek ze względu na koszty zrezygnował/a Pan/Pani z wizyty u lekarza?
      </h4>
      <div class="questions">
        <div
          class="form-check form-check-inline question-box"
          v-for="question in cost_1Questions"
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
                v-model="cost_1"
              />
            </span>
          </label>
        </div>
      </div>
    </div>
    <img class="image2" src="../../imgs/cost/gold.png" alt="">
    <img class="image1" src="../../imgs/cost/hospital.png" alt="">
    <div class="jumbotron">
      <h4>
        Czy kiedykolwiek nie było stać Pana/Pani na wykupienie leku na receptę?
      </h4>
      <div class="questions">
        <div
          class="form-check form-check-inline question-box"
          v-for="question in cost_2Questions"
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
                v-model="cost_2"
              />
            </span>
          </label>
        </div>
      </div>
    </div>

    <div class="jumbotron">
      <h4>
        Czy miał(a)by Pan/Pani problem z dojazdem do lekarza na umówioną wizytę?
      </h4>
      <div class="questions">
        <div
          class="form-check form-check-inline question-box"
          v-for="question in cost_3Questions"
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
                v-model="cost_3"
              />
            </span>
          </label>
        </div>
      </div>
    </div>
    <div class="jumbotron buttons">
      <router-link to="/doctor" tag="a" class="backBtn">
        <button class="btn btn-warning">
          Wstecz
        </button>
      </router-link>
      <router-link to="/resultsdiet">
        <button
        class="btn btn-warning"
        :class="{'disabled' : this.cost_1 === '' || this.cost_2 === '' || this.cost_3 === ''}"
        @click="setCost">
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
      cost_1: '',
      cost_2: '',
      cost_3: ''
    }
  },
  computed: {
    ...mapGetters({
      cost_1Questions: 'cost_1',
      cost_2Questions: 'cost_2',
      cost_3Questions: 'cost_3'
    })
  },
  methods: {
    setCost () {
      const cost = {
        cost_1: this.cost_1,
        cost_2: this.cost_2,
        cost_3: this.cost_3
      }
      this.$store.dispatch('setCost', cost)
    }
  }
}
</script>

<style scoped lang="scss">

@import '../questionStyle.scss';

.image1 {
  left: -10%;
  bottom: 10%;
}
.image2 {
  right: -10%;
}
</style>
