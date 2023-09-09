<template>
  <div class="df">
    <template v-if="type === 'header'">
      <button
        v-for="tab in tabs" :key="tab.title" class="header__tab text"
        :class="{ header__tab_active: currentFrontend === tab.value, header__tab_main: tab.main }"
        v-text="tab.title" @click="currentFrontend = tab.value"
      />
    </template>
    <template v-if="type === 'tabs'">
      <button
        v-for="tab in tabs" :key="tab.title" :class="'header__tab ' + tab.value + ' text'"
        v-text="tab.title" @click="$emit('change', tab.value)"
      />
    </template>
  </div>
</template>

<script>
export default {
  name: "Tabs",
  props: {
    tabs: { type: Array, required: true },
    type: { type: String, default: 'header' }
  },
  data: () => ({ currentFrontend: window.store.currentFrontend }),
  mounted () {
    window.store.subscribe(() => this.currentFrontend = window.store.currentFrontend)
    if (this.type) this.$watch('currentFrontend', nV => window.store.setFrontend(nV))
  }
}
</script>

<style>
.header__tab {
  display: flex;
  padding: 14px 28px;
  margin-right: 5px;
  align-items: flex-start;
  gap: 10px;
  color: #6A7380;
  background-color: transparent;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  border: none;
  border-radius: 100px;
  outline: none;
  cursor: pointer;
  transition: .3s;
}

.header__tab:hover,
.header__tab_active {
  background: #488FF9 !important;
  color: white;
  transition: .3s;
}

.header__tab_main {
  background: #e0e0e0;
  transition: .3s;
}

.open {
  border: 1px solid #C286E9;
}
.process {
  border: 1px solid #6EC2FF;
}
.check {
  border: 1px solid #FFC356;
}
.done {
  border: 1px solid #5BD06F;
}
.open:hover {
  background-color: #C286E9 !important;
  color: white;
}
.process:hover {
  background-color: #6EC2FF !important;
  color: white;
}
.check:hover {
  background-color: #FFC356 !important;
  color: white;
}
.done:hover {
  background-color: #5BD06F !important;
  color: white;
}

</style>
