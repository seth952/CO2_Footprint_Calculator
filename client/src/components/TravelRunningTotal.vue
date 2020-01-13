<template lang="html">

  <div v-if="emissionsProp && travelProp" class="travelProp">
    <p>{{travelProp.to_s}}</p>
    <h3>Travel Total: {{travelTotal}}</h3>
  </div>
</template>

<script>
export default {
  name: 'travel-running-total',
  props: ['emissionsProp', 'travelProp'],
computed: {
  travelTotal(){
    let travelArray = []
    console.log(this.travelProp.car);
    travelArray.push(this.travelProp.car * this.emissionsProp[0].travel.car)
    travelArray.push(this.travelProp.train * this.emissionsProp[0].travel.train)
    travelArray.push(this.travelProp.plane * this.emissionsProp[0].travel.plane)

  const sumTravel = function(someArray){
    return someArray.reduce((total, travel) => {
        return total + travel
    }, 0)
  }
return sumTravel(travelArray)
}

}
}
</script>


<style lang="css" scoped>

</style>
