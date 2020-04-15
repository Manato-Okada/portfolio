<template>
  <div id="skillSection">
    <div id="skillTitle">
      Skill set
    </div>

    <div id="skillExplain">
      スキルをまとめました。
    </div>
    <label id="gitHublabel">
      <a
        id="gitHubLink"
        href="https://github.com/Manato-Okada/portfolio"
      >https://github.com/Manato-Okada/portfolio</a>
    </label>

    <div id="skillCategories">
      <ul>
        <li>
          <span
            id="front"
            @click="setCurrentChart('front')"
          >
            Front-end
          </span>
        </li>
        <li>
          <span
            id="back"
            @click="setCurrentChart('back')"
          >
            Back-end
          </span>
        </li>
        <li>
          <span
            id="DevOps"
            @click="setCurrentChart('devOps')"
          >
            DevOps
          </span>
        </li>
      </ul>
    </div>

    <div id="skillList">
      <ul
        id="front-end"
        :class="{'front-change': isFrontActive}"
      >
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
        <li>SCSS</li>
        <li>Vue</li>
      </ul>
      <ul
        id="back-end"
        :class="{'back-change': isBackActive}"
      >
        <li>Java</li>
        <li>Ruby</li>
        <li>RubyOnRails</li>
        <li>MySQL</li>
      </ul>
      <ul
        id="devops"
        :class="{'dev-change': isDevOpsActive}"
      >
        <li>Linux</li>
        <li>Node</li>
        <li>Git</li>
        <li>GitHub</li>
        <li>Firebase</li>
      </ul>
    </div>
    <div v-if="isFrontActive">
      <FrontChart />
    </div>
    <div v-if="isBackActive">
      <BackChart />
    </div>
    <div v-if="isDevOpsActive">
      <DevChart />
    </div>
  </div>
</template>

<script>
  import FrontChart  from './FrontChart .vue'
  import BackChart from './BackChart.vue'
  import DevChart from './DevChart.vue'

  export default {
    components: {
      FrontChart,
      BackChart,
      DevChart
    },
    data(){
     return {

       currentChart: 'front'
     }
   },

   computed: {
     isFrontActive() {
       return this.currentChart=='front';
     },
     isBackActive() {
       return this.currentChart=='back';
     },

     isDevOpsActive() {
       return this.currentChart=='devOps';
     },

   },
   methods: {
     setCurrentChart(chart) {
       this.currentChart = chart;
     }
   }
 }

</script>



<style scoped>
#skillSection {
  background-color: #fff;
  width: 100%;
}

#skillTitle {
  color: #20879f;
  font-weight: bold;
  font-size: 18px;
  text-shadow: 1px 1px #fff;
}

li {
  margin: 2px 2px;
  padding: 0 10px;
  display: inline-block;
  list-style: none;
  box-shadow: 0 1px 2px;
  font-family: 'Noto Sans JP', sans-serif;
}

#front {
  color: #ff7d6e;
}

#back {
  color: #00bcd4;
}

#DevOps {
  color: #5d627b;
}

#front-end {
  display: block;
  margin: 0 5px;
}

#front-end li {
  color: #ff7d6e;
  display: inline-block;
}

#back-end {
  display: block;
  margin: 0 5px;
}

#back-end li {
  color: #00bcd4;
  display: inline-block;
}

#devops {
  display: block;
  margin: 0 5px;
}

#devops li {
  color: #5d627b;
  display: inline-block;
}

#skillList {
  display: block;
  width: auto;
}

</style>
