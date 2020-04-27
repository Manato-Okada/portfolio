<script>
import { Radar } from 'vue-chartjs';
export default {
  name: 'FrontChart',
  extends: Radar,
  data () {
    return {
      data: {
        labels: [],
        datasets: [
          {
            data: [],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(255, 99, 132, 1)',
              'rgba(255, 99, 132, 1)',
              'rgba(255, 99, 132, 1)',
              'rgba(255, 99, 132, 1)',
              'rgba(255, 99, 132, 1)'
            ],
            borderWidth: 1
          }
        ]
      },
      options:{
        scale:{
          ticks:{
            beginAtZero:true,
            max:5,
            min:0,
            stepSize: 1
		}
  },
  legend: {
    display:false
  }
}
    }
  },
  /*computed:{
    skills : function(){
      return this.$store.state.skills
      }
  },*/
  // async created () {
  // },
 mounted () {
 this.getSkill()
 this.renderChart(this.data, this.options)
 },
 /*計算式何をするのか*/
 methods:{
 getSkill(){
 const names = this.$store.getters.skillName(0)
 this.data.labels = names
 const score = this.$store.getters.skillScore(0)
 this.data.datasets[0].data = score
 }
 }
}
</script>















