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
        name: ['HTML', 'CSS', 'Javascript', 'SCSS', 'Vue'],
        datasets: [
          {
            label: 'Bar Dataset',
            score: [3, 4, 2, 1, 2],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(255, 99, 132, 1)',
              'rgba(255, 99, 132, 1)',
              'rgba(255, 99, 132, 1)',
              'rgba(255, 99, 132, 1)',

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

