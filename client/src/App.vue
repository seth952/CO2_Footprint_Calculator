<template>
  <div id="app">
    <h1>Grant,Paul and Stephen CO2 tracker</h1>
    <footprint-running-total/>
    <forms-live-here/>
    <result/>
  </div>
</template>
<script>
import FootprintRunningTotal from '@/components/FootprintRunningTotal';
import FormsLiveHere from '@/components/FormsLiveHere';
import Result from '@/components/Result';
import {eventBus} from '@/main.js'

export default {
  name: "app",
  components: {
    'footprint-running-total': FootprintRunningTotal,
    'forms-live-here': FormsLiveHere,
    'result': Result
  },
  mounted(){
    const runningFootprint = {
      car: this.car,
      train: this.train,
      plane: this.plane
        }
      eventBus.$emit('running-total-travel', runningFootprint)
  }
}
</script>
<style lang="css" scoped>
</style>
