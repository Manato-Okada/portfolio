<script>
import { Radar } from '../../../portfolio/node_modules/vue-chartjs';

export default {
  name: 'Chart',
  extends: Radar,
  data () {
    return {
      data: {
        labels: ['Linux', 'Node', 'Git', 'GitHub', 'Firebase'],
        datasets: [
          {
            label: 'Bar Dataset',
            data: [3, 2, 3, 4, 2],
            backgroundColor: [
              'rgba(191, 63, 187, 0.2)',
            ],
            borderColor: [
              'rgba(191, 63, 187, 1)',
              'rgba(191, 63, 187, 1)',
              'rgba(191, 63, 187, 1)',
              'rgba(191, 63, 187, 1)',
              'rgba(191, 63, 1875, 1)',
              'rgba(191, 63, 187, 1)'
            ],
            borderWidth: 1

          },
        ]
      },
      options: {
        scale: {
          ticks:{
      beginAtZero:true,
      max:5,
      min:0
    }
        },
        legend:{
          display:false,
        }
      }
    }
  },
  mounted () {
    this.renderChart(this.data, this.options)
  }
}
</script>
