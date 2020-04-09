<template>
  <div id="headerSection">
    <button @click="toggle" class="btn btn-success">toggle</button>
    <Drawer @close="toggle" align="left" :closeable="true">
      <p v-if="open">content here</p>
    </Drawer>
  </div>
</template>

<script>
  import Drawer from 'vue-simple-drawer'
  export default {
      name: 'App',
  components: {
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
  background-color: #F3F3F3;
  width:100%;
  }
</style>