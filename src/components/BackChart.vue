<script>
import { Radar } from '../../../portfolio/node_modules/vue-chartjs';

export default {
  name: 'Chart',
  extends: Radar,
  data () {
    return {
      data: {
        labels: ['Java', 'Ruby', 'RubyOnRails', 'MySQL'],
        datasets: [
          {
            label: 'Bar Dataset',
            data: [3, 2, 2, 1],
            backgroundColor: [
              'rgba(63, 123, 191, 0.2)',
            ],
            borderColor: [
              'rgba(63, 123, 191, 1)',
              'rgba(63, 123, 191, 1)',
              'rgba(63, 123, 191, 1)',
              'rgba(63, 123, 191, 1)',

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
