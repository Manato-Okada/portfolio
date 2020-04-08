<template>
  <div id="app">
    <button @click="toggle" class="btn btn-success">toggle</button>
    <Drawer @close="toggle" align="left" :closeable="true">
      <div v-if="open">content here</div>
    </Drawer>
    <Header />
    <Main />
    <About />
    <Skill />
    <Vision />
    <Footer />
    <Menu />
  </div>
</template>

<script>
import Drawer from 'vue-simple-drawer'
import Header from './components/Header.vue'
import Main from './components/Main.vue'
import About from './components/About.vue'
import Skill from './components/Skill.vue'
import Vision from './components/Vision.vue'
import Footer from './components/Footer.vue'
import Menu from './components/Footer.vue'



export default {
  name: 'App',
  components: {
    Header,
    Main, 
    About,
    Skill,
    Vision,
    Footer, 
    Menu,
    Drawer
  },
  data() {
    return {
      open: false
    }
  },
  methods: {
    toggle() {
      this.open = !this.open
    }
  }
}
</script>

<style lang="scss">
@import "~bootstrap/scss/bootstrap-reboot",
"~bootstrap/scss/buttons";
</style>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  padding-top: 150px;
  margin: 0 auto;
  width: 800px;
}

</style>
