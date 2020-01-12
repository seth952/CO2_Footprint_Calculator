<template lang="html">

  <div class="">
    <p>{{travelProp}}</p>
    <p>{{test}}</p>
  </div>
</template>

<script>
export default {
  props: ['emissionsProp', 'travelProp'],
  data(){
    return {
      please: null
    }
  },
computed: {
  test(){
    let travelArray = []
    travelArray.push(this.travelProp.car * this.emissionsProp[0].travel.car)
    travelArray.push(this.travelProp.train * this.emissionsProp[0].travel.train)
    travelArray.push(this.travelProp.plane * this.emissionsProp[0].travel.plane)

  const sumTravel = function(someArray){
    return someArray.reduce((total, travel) => {
        return total + travel
    }, 0)
}
return this.please = sumTravel(travelArray)
}
}
}
</script>

<style lang="css" scoped>
</style>
