<template lang="html">
    <div class="">
      <p>{{dietProp.to_s}}</p>
      <h3>Diet Total: {{dietTotal}}</h3>
    </div>
</template>

<script>
export default {
  props: ['emissionsProp', 'dietProp'],
  computed:{
    dietTotal(){
      let dietArray =[]
      dietArray.push(this.dietProp.meat * this.emissionsProp[0].diet.meat)
      dietArray.push(this.dietProp.veg * this.emissionsProp[0].diet.veg)

      const sumDiet = function(someArray){
        return someArray.reduce((total, diet) => {
            return total + diet
        }, 0)
    }
    return sumDiet(dietArray)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
