<template>
  <div id="skillSection">
    <div id="skillTitle">
      Skill set
    </div>
    <div id="skillExplain">
      スキルをまとめました。
    </div>
    <p class="gitHublabel">
      <a href="https://github.com/Manato-Okada/portfolio">https://github.com/Manato-Okada/portfolio</a>
    </p>

    <div id="skillList">
      <div id="Front-end">
        Front-end
      </div>
      <div id="Back-end">
        Back-end
      </div>
      <div id="DevOps">
        DevOps
      </div>
      <ul class="Front-end">
        <li>HTML</li>
        <li>CSS</li>
        <li>javascript</li>
        <li>SCSS</li>
        <li>vue</li>
      </ul>

      <ul class="Back-end">
        <li>Java</li>
        <li>Ruby</li>
        <li>RubyOnRails</li>
        <li>MySQL</li>
      </ul>

      <ul class="DevOps">
        <li>Linux</li>
        <li>Node</li>
        <li>Git</li>
        <li>GitHub</li>
        <li>Firebase</li>
      </ul>
    </div>
    <graf />
  </div>
</template>

<script>
  import graf from './graf.vue'

  export default {
    components: {
      graf
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
}

.Front-end {
  color: #ff7d6e;
}

.Back-end {
  color: #00bcd4;
}

.DevOps {
  color: #5d627b;
}

#Front-end {
  color: #ff7d6e;
  display: inline-block;
  margin: 5px 5px;
}

#Back-end {
  color: #00bcd4;
  display: inline-block;
  margin: 5px 5px;
}

#DevOps {
  color: #5d627b;
  display: inline-block;
  margin: 5px 5px;
}

</style>
