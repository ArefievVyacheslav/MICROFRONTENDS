<template>
  <div id="app">
    <Header />
    <StartScreen v-if="!currentFrontend" />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import StartScreen from './components/StartScreen.vue'
export default {
  name: 'App',
  components: { Header, StartScreen },
  data: () => ({ currentFrontend: window.store.currentFrontend }),
  mounted () {
    window.store.subscribe(() => this.currentFrontend = window.store.currentFrontend)
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;

  .container {
    width: 1250px;
    margin: 0 auto;
  }
  .df {
    display: flex;
  }
  .aic {
    align-items: center;
  }
  .jcsb {
    justify-content: space-between;
  }
  .w100p {
    width: 100%;
  }
  .m0auto {
    margin: 0 auto;
  }
  .ml-auto {
    margin-left: auto;
  }
  .mr17px {
    margin-right: 17px;
  }
  .mt30px {
    margin-top: 30px;
  }
  .mt100px {
    margin-top: 100px;
  }
  .mr50px {
    margin-right: 50px;
  }
  .mb100px {
    margin-bottom: 100px;
  }
  .text {
    font-family: Arial, Helvetica, sans-serif;
  }
}
</style>
