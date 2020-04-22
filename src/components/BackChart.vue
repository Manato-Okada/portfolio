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
        label: [],
        datasets: [
          {
            label: 'Bar Dataset',
            data: [],
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
 this.getSkill()
 this.renderChart(this.data, this.options)
 },
 /*計算式何をするのか*/
 methods:{
 getSkill(){
 const names = this.$store.getters.skillName(1)
 this.data.labels = names
 const score = this.$store.getters.skillScore(1)
 this.data.datasets[0].data = score
 }
 }

}
</script>
