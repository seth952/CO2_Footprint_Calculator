<template>
  <div id="app">
    <h1>Grant,Paul and Stephen CO2 tracker</h1>
    <footprint-running-total/>
    <forms-live-here/>
  </div>
</template>
<script>
import FootprintRunningTotal from '@/components/FootprintRunningTotal';
import FormsLiveHere from '@/components/FormsLiveHere';
export default {
  name: "app",
  components: {
    'footprint-running-total': FootprintRunningTotal,
    'forms-live-here': FormsLiveHere
  }
}
</script>
<style lang="css" scoped>
</style>
