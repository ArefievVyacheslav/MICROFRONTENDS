<template>
  <div class="crm-action df aic ml-auto mt30px">
    <span class="crm-action__header text mr17px">Добавить задачу в статусе: </span>
    <Tabs :tabs="tabs" type="tabs" @change="data => $emit('change', data)" />
  </div>
</template>

<script>
import Tabs from '../../../general/src/components/Tabs.vue'
export default {
  name: "CrmAction",
  components: { Tabs },
  data: () => ({
    tabs: [
      { title: 'Открыта', value: 'open' },
      { title: 'В работе', value: 'process' },
      { title: 'На проверке', value: 'check' },
      { title: 'Завершена', value: 'done' }
    ]
  }),
}
</script>

<style>
.crm-action {
  max-width: 810px;

  .crm-action__header {
    color: #6A7380;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
}
</style>
