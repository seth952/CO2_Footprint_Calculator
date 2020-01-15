<template>
  <div id="app">
    <div class="header">
      <h1>CO/2/BY/U</h1>
    </div>
    <div class="about">
      <p>CO/2/BY/U is a daily activity tracker designed to help you keep track of your carbon footprint.</p>
      <p>To calculate your carbon footprint enter all relevant details in boxes below.</p>
    </div>
    <br>
    <div class="main">
      <forms-live-here/>
      <footprint-running-total/>
    </div>
      <result/>
    </div>
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
  background-color: #BFB783
}

.main {
  background-color:;
  display:flex;
  justify-content: space-between;
}


</style>
