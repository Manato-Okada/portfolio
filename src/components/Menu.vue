<template>
  <div id="drawerSection">
    <div class="drawerMenuSection">
      <a
        class="menu"
        href="#headerSection"
      >Home</a>
      <a
        class="menu"
        href="#aboutSection"
      >AboutMe</a>
      <a
        class="menu"
        href="#skillSection"
      >Skillsets</a>
      <a
        class="menu"
        href="#visionSection"
      >Vision</a>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

  #drawerSection {
    font-family: 'Noto Sans JP', sans-serif;
    background-color: #f3f3f3;
    width: 100px;
    height: auto;
  }

  .drawerMenuSection a {
    background-color: #fff;
    width: 100px;
    height: auto;
    display: block;
  }

  .menu {
    display: block;
  }
</style>
