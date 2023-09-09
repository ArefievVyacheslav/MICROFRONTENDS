<template>
  <div class="mb100px">
    <div v-if="tableData.length" class="crm-table__row df">
      <div v-for="header,idx in headers" :key="header" :class="'crm-table__header_' + (idx + 1) + ' text'">{{ header }}</div>
    </div>
    <div v-for="row in tableData" :key="row.name" :class="'crm-table__row ' + row.status + ' df'">
      <span v-for="key of Object.keys(row)" :key="key" :class="'crm-table__row_' + key + ' text'">{{ row[ key ] }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "CrmTable",
  props: {
    tableData: { type: Array, required: true }
  },
  data: () => ({ headers: [ 'Название задачи', 'Статус', 'Дата создания' ] }),
  watch: {
    tableData: {
      deep: true,
      handler: nV => {
        window.store.setTaskCount(nV.length)
        window.store.setTasks(nV)
      }
    }
  },
  mounted () {
    window.store.subscribe(() => this.taskCount = window.store.taskCount)
  }
}
</script>

<style>
.crm-table__row {
  margin-top: 10px;
  padding: 10px 25px;
  border-radius: 16px;
  cursor: pointer;
}
.crm-table__header_1,
.crm-table__row_name {
  width: 950px;
}
.crm-table__header_2,
.crm-table__row_status {
  width: 140px;
}
.crm-table__header_3,
.crm-table__row_date {
  width: 160px;
}

</style>
