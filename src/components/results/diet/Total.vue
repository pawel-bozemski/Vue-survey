<template>
  <div class="interview">
    <div class="jumbotron">
      <h4>Jak się odżywiasz? Najczęściej jem posiłki:</h4>
      <div class="questions">

        <div class="bar upper">
          <div class="result one" :class="{'active cont' : this.diet.diet_1 == 'zdrowe'}" style="width:25%">
            <p :class="{'visible' : this.diet.diet_1 == 'zdrowe', 'not__visible' : this.diet.diet_1 !== 'zdrowe'}">Twój wynik</p>
          </div>
          <div class="result two" :class="{'active cont' : this.diet.diet_1 == 'bezmiesne'}" style="width:16%">
            <p :class="{'visible' : this.diet.diet_1 == 'bezmiesne', 'not__visible' : this.diet.diet_1 !== 'bezmiesne'}">Twój wynik</p>
          </div>
          <div class="result one" :class="{'active cont' : this.diet.diet_1 == 'miesne'}" style="width:30%">
            <p :class="{'visible' : this.diet.diet_1 == 'miesne', 'not__visible' : this.diet.diet_1 !== 'miesne'}">Twój wynik</p>
          </div>
          <div class="result two"  :class="{'active cont' : this.diet.diet_1 == 'lowCarb'}" style="width:16%">
            <p :class="{'visible' : this.diet.diet_1 == 'lowCarb', 'not__visible' : this.diet.diet_1 !== 'lowCarb'}">Twój wynik</p>
          </div>
          <div class="result one" :class="{'active cont' : this.diet.diet_1 == 'lowSalt'}" style="width:18%">
            <p :class="{'visible' : this.diet.diet_1 == 'lowSalt', 'not__visible' : this.diet.diet_1 !== 'lowSalt'}">Twój wynik</p>
          </div>

        </div>
        <div class="bar">
          <div class="result" :class="{'active' : this.diet.diet_1 == 'zdrowe', 'one__bg' : this.diet.diet_1 !== 'zdrowe'}" style="width:20%">28%</div>
          <div class="result" :class="{'active' : this.diet.diet_1 == 'bezmiesne', 'two__bg' : this.diet.diet_1 !== 'bezmiesne'}" style="width:16%">10%</div>
          <div class="result" :class="{'active' : this.diet.diet_1 == 'miesne', 'three__bg' : this.diet.diet_1 !== 'miesne'}" style="width:30%">37%</div>
          <div class="result" :class="{'active' : this.diet.diet_1 == 'lowCarb', 'four__bg' : this.diet.diet_1 !== 'lowCarb'}" style="width:16%">10%</div>
          <div class="result" :class="{'active' : this.diet.diet_1 == 'lowSalt', 'five__bg' : this.diet.diet_1 !== 'lowSalt'}" style="width:18%">12%</div>
        </div>
        <div class="row">
          <div class="dot__content">
            <span class="dot" :class="{'active' : this.diet.diet_1 == 'zdrowe', 'one__bg' : this.diet.diet_1 !== 'zdrowe'}"></span>Skomponowane pod kątem zdrowego odżywiania
          </div>
          <div class="dot__content">
            <span class="dot" :class="{'active' : this.diet.diet_1 == 'bezmiesne', 'two__bg' : this.diet.diet_1 !== 'bezmiesne'}"></span>Bezmięsne</div>
          <div class="dot__content">
            <span class="dot" :class="{'active' : this.diet.diet_1 == 'miesne', 'three__bg' : this.diet.diet_1 !== 'miesne'}"></span>Mięsne, wysokobiałkowe</div>
          <div class="dot__content">
            <span class="dot" :class="{'active' : this.diet.diet_1 == 'lowCarb', 'four__bg' : this.diet.diet_1 !== 'lowCarb'}"></span>Unikam ryżu, makaronów i innych węglowodanów</div>
          <div class="dot__content">
            <span class="dot" :class="{'active' : this.diet.diet_1 == 'lowSalt', 'five__bg' : this.diet.diet_1 !== 'lowSalt'}"></span>Tylko z odrobiną soli lub wcale</div>
        </div>
      </div>
    </div>

    <div class="jumbotron">
      <h4>Jak często w Twojej diecie pojawiają się dania typu fast-food (hamburgery, frytki, hot-dogi itp.)?</h4>
      <div class="questions">

        <div class="bar upper">
          <div class="result one" :class="{'active cont' : this.diet.diet_2 == 'everyday2'}" style="width:10%">
            <p :class="{'visible' : this.diet.diet_2 == 'everyday2', 'not__visible' : this.diet.diet_2 !== 'everyday2'}">Twój wynik</p>
          </div>
          <div class="result two" :class="{'active cont' : this.diet.diet_2 == 'weekly2'}" style="width:15%">
            <p :class="{'visible' : this.diet.diet_2 == 'weekly2', 'not__visible' : this.diet.diet_2 !== 'weekly2'}">Twój wynik</p>
          </div>
          <div class="result one" :class="{'active cont' : this.diet.diet_2 == 'monthly2'}" style="width:25%">
            <p :class="{'visible' : this.diet.diet_2 == 'monthly2', 'not__visible' : this.diet.diet_2 !== 'monthly2'}">Twój wynik</p>
          </div>
          <div class="result two"  :class="{'active cont' : this.diet.diet_2== 'yearly2'}" style="width:30%">
            <p :class="{'visible' : this.diet.diet_2 == 'yearly2', 'not__visible' : this.diet.diet_2 !== 'yearly2'}">Twój wynik</p>
          </div>
          <div class="result one" :class="{'active cont' : this.diet.diet_2 == 'never2'}" style="width:20%">
            <p :class="{'visible' : this.diet.diet_2 == 'never2', 'not__visible' : this.diet.diet_2 !== 'never2'}">Twój wynik</p>
          </div>
        </div>
        <div class="bar">
          <div class="result" :class="{'active' : this.diet.diet_2 == 'everyday2', 'one__bg' : this.diet.diet_2 !== 'everyday2'}" style="width:10%">0%</div>
          <div class="result" :class="{'active' : this.diet.diet_2 == 'weekly2', 'two__bg' : this.diet.diet_2 !== 'weekly2'}" style="width:15%">9%</div>
          <div class="result" :class="{'active' : this.diet.diet_2 == 'monthly2', 'three__bg' : this.diet.diet_2 !== 'monthly2'}" style="width:25%">19%</div>
          <div class="result" :class="{'active' : this.diet.diet_2 == 'yearly2', 'four__bg' : this.diet.diet_2 !== 'yearly2'}" style="width:30%">59%</div>
          <div class="result" :class="{'active' : this.diet.diet_2 == 'never2', 'five__bg' : this.diet.diet_2 !== 'never2'}" style="width:20%">14%</div>
        </div>
        <div class="row">
          <div class="dot__content">
            <span class="dot" :class="{'active' : this.diet.diet_2 == 'everyday2', 'one__bg' : this.diet.diet_2 !== 'everyday2'}"></span>Codziennie
          </div>
          <div class="dot__content">
            <span class="dot" :class="{'active' : this.diet.diet_2 == 'weekly2', 'two__bg' : this.diet.diet_2 !== 'weekly2'}"></span>Kilka razy w tygodniu</div>
          <div class="dot__content">
            <span class="dot" :class="{'active' : this.diet.diet_2 == 'monthly2', 'three__bg' : this.diet.diet_2 !== 'monthly2'}"></span>Kilka razy w miesiącu</div>
          <div class="dot__content">
            <span class="dot" :class="{'active' : this.diet.diet_2 == 'yearly2', 'four__bg' : this.diet.diet_2 !== 'yearly2'}"></span>Raz w miesiącu lub rzadziej</div>
          <div class="dot__content">
            <span class="dot" :class="{'active' : this.diet.diet_2 == 'never2', 'five__bg' : this.diet.diet_2 !== 'never2'}"></span>Nigdy</div>
        </div>
      </div>
    </div>

    <div class="jumbotron">
      <h4>Jak często sięgasz po dosładzane napoje, gazowane i niegazowane?</h4>
      <div class="questions">

        <div class="bar upper">
          <div class="result one" :class="{'active cont' : this.diet.diet_3 == 'everyday3'}" style="width:10%">
            <p :class="{'visible' : this.diet.diet_3 == 'everyday3', 'not__visible' : this.diet.diet_3 !== 'everyday3'}">Twój wynik</p>
          </div>
          <div class="result two" :class="{'active cont' : this.diet.diet_3 == 'weekly3'}" style="width:25%">
            <p :class="{'visible' : this.diet.diet_3 == 'weekly3', 'not__visible' : this.diet.diet_3 !== 'weekly3'}">Twój wynik</p>
          </div>
          <div class="result one" :class="{'active cont' : this.diet.diet_3 == 'monthly3'}" style="width:20%">
            <p :class="{'visible' : this.diet.diet_3 == 'monthly3', 'not__visible' : this.diet.diet_3 !== 'monthly3'}">Twój wynik</p>
          </div>
          <div class="result two"  :class="{'active cont' : this.diet.diet_3 == 'yearly3'}" style="width:30%">
            <p :class="{'visible' : this.diet.diet_3 == 'yearly3', 'not__visible' : this.diet.diet_3 !== 'yearly3'}">Twój wynik</p>
          </div>
          <div class="result one" :class="{'active cont' : this.diet.diet_3 == 'never3'}" style="width:15%">
            <p :class="{'visible' : this.diet.diet_3 == 'never3', 'not__visible' : this.diet.diet_3 !== 'never3'}">Twój wynik</p>
          </div>
        </div>
        <div class="bar">
          <div class="result" :class="{'active' : this.diet.diet_3 == 'everyday3', 'one__bg' : this.diet.diet_3 !== 'everyday3'}" style="width:10%">13%</div>
          <div class="result" :class="{'active' : this.diet.diet_3 == 'weekly3', 'two__bg' : this.diet.diet_3 !== 'weekly3'}" style="width:25%">22%</div>
          <div class="result" :class="{'active' : this.diet.diet_3 == 'monthly3', 'three__bg' : this.diet.diet_3 !== 'monthly3'}" style="width:20%">18%</div>
          <div class="result" :class="{'active' : this.diet.diet_3 == 'yearly3', 'four__bg' : this.diet.diet_3 !== 'yearly3'}" style="width:30%">32%</div>
          <div class="result" :class="{'active' : this.diet.diet_3 == 'never3', 'five__bg' : this.diet.diet_3 !== 'never3'}" style="width:15%">15%</div>
        </div>
        <div class="row">
          <div class="dot__content">
            <span class="dot" :class="{'active' : this.diet.diet_3 == 'everyday3', 'one__bg' : this.diet.diet_3 !== 'everyday3'}"></span>Codziennie
          </div>
          <div class="dot__content">
            <span class="dot" :class="{'active' : this.diet.diet_3 == 'weekly3', 'two__bg' : this.diet.diet_3 !== 'weekly3'}"></span>Kilka razy w tygodniu</div>
          <div class="dot__content">
            <span class="dot" :class="{'active' : this.diet.diet_3 == 'monthly3', 'three__bg' : this.diet.diet_3 !== 'monthly3'}"></span>Kilka razy w miesiącu</div>
          <div class="dot__content">
            <span class="dot" :class="{'active' : this.diet.diet_3 == 'yearly3', 'four__bg' : this.diet.diet_3 !== 'yearly3'}"></span>Raz w miesiącu lub rzadziej</div>
          <div class="dot__content">
            <span class="dot" :class="{'active' : this.diet.diet_3 == 'never3', 'five__bg' : this.diet.diet_3 !== 'never3'}"></span>Nigdy</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      diet: 'diet',
      interview: 'interview'
    })
  }
}
</script>

<style scoped lang="scss">

@import '../../resultsStyle.scss';

</style>
