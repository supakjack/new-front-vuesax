<template>
  <Bar :labels="labels" :datasets="datasets" />
</template>
<script>
import Bar from '@/components/Charts/Bar'

export default {
  layout: 'modern',
  components: {
    Bar
  },
  data() {
    return {
      labels: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
      ],
      datasets: [
        {
          label: 'GitHub Commits',
          backgroundColor: '#f87979',
          data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
        }
      ]
    }
  }
}
</script>

<style></style>
