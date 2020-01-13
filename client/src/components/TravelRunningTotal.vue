<template lang="html">

  <div v-if="emissionsProp && travelProp" class="travelProp">
    <h3>Travel Total: {{travelTotal}}</h3>
  </div>
</template>

<script>
import {eventBus} from "@/main.js"

export default {
  name: 'travel-running-total',
  props: ['emissionsProp', 'travelProp'],
computed: {
  travelTotal(){
    let travelArray = []
    travelArray.push(this.travelProp.car * this.emissionsProp[0].travel.car)
    travelArray.push(this.travelProp.train * this.emissionsProp[0].travel.train)
    travelArray.push(this.travelProp.plane * this.emissionsProp[0].travel.plane)

  const sumTravel = function(someArray){
    return someArray.reduce((total, travel) => {
        return total + travel
    }, 0)
  }
  eventBus.$emit('travel-calculated', sumTravel(travelArray))
  return sumTravel(travelArray)
}

}
}
</script>


<style lang="css" scoped>

</style>
