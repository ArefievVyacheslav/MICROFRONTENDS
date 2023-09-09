<template>
  <main class="main df jcsb">
    <div class="fdc cp">
      <img
        src="https://i.imgur.com/Cbifaji.png" class="crm-screenshot"
        alt="Скриншот CRM приложения" title="Скриншот CRM приложения"
        height="550" width="750"
      >
      <h4 class="mt30px text">Приложение CRM, написанное на отдельном фронтенде</h4>
    </div>
    <div class="fdc cp">
      <img
        src="https://i.imgur.com/CD5vSnX.png" class="dashboard-screenshot"
        alt="Скриншот DASHBOARD приложения" title="Скриншот DASHBOARD приложения"
        height="550" width="750"
      >
      <h4 class="mt30px text">Приложение DASHBOARD, написанное на другом фронтенде</h4>
    </div>
  </main>
</template>

<script>
export default {
  name: "StartScreen",
  data: () => ({ currentFrontend: window.store.currentFrontend }),
  watch: {
    currentFrontend: (nV) => window.store.setFrontend(nV)
  },
  mounted () {
    window.store.subscribe(() => this.currentFrontend = window.store.currentFrontend)
  }
}
</script>

<style>
.main {
  padding: 100px 200px;
  transition: .9s;
}
</style>
