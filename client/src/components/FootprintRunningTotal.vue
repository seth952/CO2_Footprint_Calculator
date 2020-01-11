<template lang="html">
  <div class="running-total-container">
      <h3 id="travelrunningtotal">Travel Total:</h3>
      <h3 id="energyrunningtotal">Energy Total:</h3>
      <h3 id="dietrunningtotal">Diet Total:</h3>
      <h2 id="combinedrunningtotal">Combined Running Total:</h2>
    </div>
</template>

<script>

import { eventBus } from '../main.js';

export default {
  name: 'footprint-running-total',
  data(){
    return {
      travelrunningtotal: null,
      energyrunningtotal: null,
      dietrunningtotal: null,
      combinedrunningtotal: null
    }
  },
  computed: {
    
  }
}
</script>

<style lang="css" scoped>
</style>
