<template>
  <div id="app">
    <h1>CO/2/BY/U</h1>
    <br>
    <p>CO/2/BY/U footprint calculator is based on emissions from your previous week activities.</p>
      <p>If you would like to calculate your carbon footprint please enter all relevant details in boxes below.
    </p><p>Thank you.</p>
    <br>
    <footprint-running-total/>
    <forms-live-here/>
    <result />
  </div>
</template>
<script>
import CombinedRunningTotal from '@/components/CombinedRunningTotal';
import EmissionFactorsService from '@/services/UserDataService.js';
import FootprintRunningTotal from '@/components/FootprintRunningTotal';
import FormsLiveHere from '@/components/FormsLiveHere';
import Result from '@/components/Result';
import {eventBus} from '@/main.js'

export default {
  name: "app",
  data() {
    return {

    }
  },
  components: {
    'footprint-running-total': FootprintRunningTotal,
    'forms-live-here': FormsLiveHere,
    'result': Result
  },
  mounted(){


      // this.getUserData()
      //   eventBus.$on('emission-added', (emission) => {
      //     this.emission.push(emission)
      //   });
  }
}
</script>
<style lang="css" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;


}

.heading {
  padding: 10px;
  text-align: center;
  background: lightslategrey;
  color: white;
  font-size: 30px;
}
</style>
