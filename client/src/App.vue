<template>
  <div id="app">
    <h1>CO/2/BY/U</h1>
    <footprint-running-total/>
    <forms-live-here/>
  </div>
</template>
<script>
import EmissionFactorsService from '@/services/UserDataService.js';
import FootprintRunningTotal from '@/components/FootprintRunningTotal';
import FormsLiveHere from '@/components/FormsLiveHere';
import {eventBus} from '@/main.js'

export default {
  name: "app",
  data() {
    return {
      emissions: []
    }
  },
  components: {
    'footprint-running-total': FootprintRunningTotal,
    'forms-live-here': FormsLiveHere
  },
  mounted(){
    const runningFootprint = {
      car: this.car,
      train: this.train,
      plane: this.plane
        }
      eventBus.$emit('running-total-travel', runningFootprint)

      this.getUserData()
        eventBus.$on('emission-added', (emission) => {
          this.emission.push(emission)
        });
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
