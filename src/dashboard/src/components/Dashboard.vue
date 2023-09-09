<template>
  <div id="dashboard-chart" class="dashboard"></div>
</template>

<script>
import * as am4core from '@amcharts/amcharts4/core'
import * as am4charts from '@amcharts/amcharts4/charts'
export default {
  name: "Dashboard",
  data: () => ({ tasks: null }),
  mounted () {
    window.store.subscribe(() => { this.currentFrontend = window.store.currentFrontend })
    const statuses = [
      { title: 'Открыта', value: 'open' },
      { title: 'В работе', value: 'process' },
      { title: 'На проверке', value: 'check' },
      { title: 'Завершена', value: 'done' }
    ]
    let chart = am4core.createFromConfig(
      {
        hiddenState: {
          opacity: 0
        },
        angle: 35
      },
      'dashboard-chart',
      am4charts.PieChart3D)

    chart.innerRadius = am4core.percent(40)
    chart.outerRadius = am4core.percent(100)

    chart.data = Object.values(window.store.tasks.reduce((acc, {status}) => {
      acc[status] = acc[status]
          ? {...acc[status], value: acc[status].value + 1}
          : {label: statuses.filter(statusObj => statusObj.value === status)[0].title, value: 1}
      return acc
    }, {}))

    let series = chart.series.push(new am4charts.PieSeries3D())
    series.dataFields.value = 'value'
    series.dataFields.category = 'label'
    series.labels.template.fill = '#46aaff'
    series.labels.template.fontSize = '18px'
    series.labels.template.fontFamily = 'Arial, Helvetica, sans-serif'
    series.labels.template.fontWeight = 'bold'
    series.ticks.template.stroke = '#0090ff'

    series.slices.template.states.getKey('hover').properties.shiftRadius = 0
    series.slices.template.states.getKey('hover').properties.scale = 1.1

    const max = chart.data.length - 1
    let activeIdx = 0

    setInterval(() => {
      disableSlice()
    }, 4000)

    function disableSlice () {
      const prevIdx = activeIdx === 0 ? max : activeIdx - 1
      const nextIdx = activeIdx === max ? 0 : activeIdx + 1
      series.slices.getIndex(prevIdx).setState('default')
      series.slices.getIndex(activeIdx).setState('active')
      activeIdx = nextIdx
    }

    series.colors.list = [
      am4core.color('#835EA2'),
      am4core.color('#6E79BD'),
      am4core.color('#4DA9EC'),
      am4core.color('#6EC2FF')
    ]
  }
}
</script>

<style>
.dashboard {
  height: 850px;
}

</style>
