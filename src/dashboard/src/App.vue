<template>
  <div class="m0auto" v-if="currentFrontend === 'dashboard'">
    <Dashboard />
  </div>
</template>

<script>
import Dashboard from './components/Dashboard.vue'
export default {
  name: 'App',
  components: { Dashboard },
  data: () => ({ currentFrontend: window.store.currentFrontend }),
  mounted () {
    window.store.subscribe(() => this.currentFrontend = window.store.currentFrontend)
  }
}
</script>

<style>
</style>

