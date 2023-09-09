<template>
  <header class="header df jcsb">
    <Tabs :tabs="tabs" type="header" />
    <div class="header__tab header__tab_active text">Общее кол-во задач: {{ taskCount }}</div>
  </header>
</template>

<script>
import Tabs from './Tabs.vue'
export default {
  name: "Header",
  components: { Tabs },
  data: () => ({
    currentFrontend: window.store.currentFrontend,
    taskCount: window.store.taskCount,
    tabs: [
      { title: 'Главная', value: null, main: true },
      { title: 'CRM', value: 'crm' },
      { title: 'DASHBOARD', value: 'dashboard' }
    ]
  }),
  watch: { currentFrontend: (nV) => window.store.setFrontend(nV) },
  mounted () {
    window.store.subscribe(() => {
      this.currentFrontend = window.store.currentFrontend
      this.taskCount = window.store.taskCount
    })
  }
}
</script>

<style>
.header {
  padding: 15px 100px;
  background: #EFEFEF;
  box-shadow: 0 5px 8px 0 #d1d1d1;
}

</style>
