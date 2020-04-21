<script>
import { Radar } from '../../../portfolio/node_modules/vue-chartjs';
import store from '../store'
import skills from '../../skills.json'
export default {
  name: 'Chart',
  extends: Radar,
  store,
  skills ,
  data () {
    return {
      data: {
        name: ['Linux', 'Node', 'Git', 'GitHub', 'Firebase'],
        datasets: [
          {
            label: 'Bar Dataset',
            score: [3, 2, 3, 4, 2],
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
      min:0,
      stepSize: 1
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
