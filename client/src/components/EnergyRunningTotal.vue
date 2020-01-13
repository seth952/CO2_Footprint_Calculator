<template lang="html">
  <div class="">
    <p>{{energyProp.to_s}}</p>
    <h3>Energy Total: {{energyTotal}}</h3>
  </div>
</template>

<script>
export default {
  props: ['emissionsProp', 'energyProp'],
  computed:{
    energyTotal(){
      let energyArray = []
      energyArray.push(this.energyProp.electricity * this.emissionsProp[0].energy.electricity)
      energyArray.push(this.energyProp.gas * this.emissionsProp[0].energy.gas)
      energyArray.push(this.energyProp.hybrid * this.emissionsProp[0].energy.hybrid)

    const sumTravel = function(someArray){
      return someArray.reduce((total, energy) => {
          return total + energy
      }, 0)
  }
  return sumTravel(energyArray)

    }
  }
}
</script>

<style lang="css" scoped>
</style>
