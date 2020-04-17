<template>
  <div id="footerSection">
    <a
      href="#Header"
      @click="clickSmoothScroll()"
    > <img
      class="footerScrol"
      src="../assets/img/footerScrol.png"
    ></a>

    <div class="footerCopyright">
      ©Seattleconsulting
    </div>
  </div>
</template>

<script>
export default {
  name:"App",
  methods: {
    clickSmoothScroll () {
      event.preventDefault()
      this.$SmoothScroll(
        document.querySelector('#headerSection'),
        400,
        null,
        null,
        'y'
      )
    }
  }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap');

#footerSection {
  background: linear-gradient(#80e1f7, #06c1e6);
  height: auto;
  display: block;
}

.footerCopyright {
  color: #fff;
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 18pt;

  /* 影のサイズ考える */
  text-shadow: -1px -2px 3px #808080;
}

.footerScrol {
  height: 30px;
  width: 30px;
  position: relative;
  top: −10px;
}
</style>
