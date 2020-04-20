<template>
  <div id="app">
    <Header />
    <Main />
    <div>{{ this.skills }}</div>
    <About />
    <Skill />
    <Vision />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Main from './components/Main.vue'
import About from './components/About.vue'
import Skill from './components/Skill.vue'
import Vision from './components/Vision.vue'
import Footer from './components/Footer.vue'






export default {
  name: 'App',

  components: {
    Header,
    Main,
    About,
    Skill,
    Vision,
    Footer,

  },
  data() {
    return {
      skills: []
    }
  },
  mounted () {
    this.getSkills();
  },
  methods: {
    getSkills() {
      // dataのスキルを初期化する
      this.skills = [];
      // this.skillsを一時変数のitemsに参照コピーする
      let items = this.skills;
      // axios.getを用いてデプロイ済のfunctionにアクセスする
      this.axios.get('https://us-central1-portfolio-1b6d7.cloudfunctions.net/users')
        .then((response) => {
          response.data.forEach(function(skill) {
            // 取得したデータを１件ずつ配列に設定する
            items.push(skill);
          })
        })
        .catch((e) => {
          alert(e);
        });
        console.log('item')
    }
  }
}

</script>

<style lang="scss">
@import "~bootstrap/scss/bootstrap-reboot",
  "~bootstrap/scss/buttons";
</style>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap');

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0 auto;
  width: 800px;
}

</style>
