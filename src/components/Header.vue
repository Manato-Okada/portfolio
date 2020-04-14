<template>
  <div id="headerSection">
    <button
      class="btn"
      @click="toggle"
    >
      <img
        id="headerButton"
        src="../assets/img/humbergerMenu.png"
      >
    </button>
    <Drawer
      align="left"
      :closeable="true"
      @close="toggle"
    >
      <p v-if="open">
        <Menu />
        content
      </p>
    </Drawer>
  </div>
</template>

<script>
  import Menu from './Menu';
  import Drawer from 'vue-simple-drawer';
  export default {
  components: {
      Menu,
      Drawer
    },
    data() {
    return {
      open: false
      }
    } ,
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



<style scoped>
  #headerSection {
    background-color: #f3f3f3;
    width: 100%;
    height: auto;
    text-align: left;
  }

  #headerButton {
    font-family: 'Avenir', Arial, Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width: 100%;
    height: auto;
  }
</style>
