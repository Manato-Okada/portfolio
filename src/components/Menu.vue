<template>
  <div id="drawerSection">
    <div id="batsuMark">
      <label
        class="labelBatsu"
        for="nav-input"
      >
        <img
          id="batsuClose"
          src="../assets/img/batsu.png"
          alt="閉じる"
        >
      </label>
    </div>

    <div class="drawerMenuSection">
      <ul>
        <li>
          <a
            href="#headerSection"
            @click="close"
          >Home</a>
        </li>
        <li>
          <a
            href="#aboutSection"
            @click="close"
          >About Me</a>
        </li>
        <li>
          <a
            href="#skillSection"
            @click="close"
          >Skill Set</a>
        </li>
        <li>
          <a
            href="#visionSection"
            @click="close"
          >Vision</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    close(){
      this.$emit('sample')
    }
  }

}
</script>

<style scoped>

  #drawerSection {
    font-family: 'Noto Sans JP', sans-serif;
    background-color: #f3f3f3;
    width: 100%;
    height: auto;
  }

  .drawerMenuSection {
    background-color: #fff;
    width: 100%;
    height: auto;
  }

  li {
    display: block;
    padding: 10px 10px;
    border-bottom: 1px solid gray;
  }

  #batsuMark {
    text-align: right;
  }
</style>
