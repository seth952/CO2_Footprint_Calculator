<template>

<div class="">

  <template>
      <div>
          <ul>
              <li v-for="index in list" :key="index._id">

                  <button @click="contentVisible === index._id ? contentVisible = false : contentVisible = index._id">{{ index.title }}</button>

                  <p v-if='contentVisible === index._id'>{{ index.item }}</p>

              </li>
          </ul>
      </div>
  </template>

  <script>
      export default {
          name: "sameName",
          data() {
              return {
                  contentVisible: false,
                  list: [
                      {
                      _id: id1,
                      title: title1,
                      item: item1
                      },
                      {
                      _id: id2,
                      title: title2,
                      item: item2
                      }
                  ]
              };
          },
      };

</div>


</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
