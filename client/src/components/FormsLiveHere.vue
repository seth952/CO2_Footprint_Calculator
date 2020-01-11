<template lang="html">

</template>

<script>
import FootPrintService from '@/services/FootprintService.js'

export default {
  name: 'test',
  data(){
    return {
      emissions: []
    }
  },
  mounted() {
    FootPrintService.getEmissionFactors()
    .then(emissions => this.emissions = emissions)
  }
}
</script>

<style lang="css" scoped>
</style>
