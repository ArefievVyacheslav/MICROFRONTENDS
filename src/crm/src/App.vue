<template>
  <div id="app" class="container" v-if="currentFrontend === 'crm'">
    <CrmAction @change="status => tableData = [ ...tableData, generateRow(status) ]" />
    <CrmTable :table-data="tableData" class="mt100px" />
  </div>
</template>

<script>
import CrmAction from './components/CrmAction.vue'
import CrmTable from './components/CrmTable.vue'
export default {
  name: 'App',
  components: { CrmTable, CrmAction },
  data: () => ({
    currentFrontend: window.store.currentFrontend,
    tableData: []
  }),
  methods: {
    generateRow: status => ({
      name: [ ...Array(100) ].map(() => (~~(Math.random() * 36)).toString(36)).join(''),
      status, date: new Date().toLocaleString('ru-RU').replace(/,/, '')
    })
  },
  mounted () {
    window.store.subscribe(() => this.currentFrontend = window.store.currentFrontend)
  }
}
</script>
