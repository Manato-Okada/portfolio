<template>
  <div id="MainSection">
    <p class="userName">
      M.Okada
    </p>
    <p class="companyName">
      Seattleconsulting
    </p>
    <img
      id="ProfilePicture"
      src="../assets/img/ProfilePicture.png"
    >
  </div>
</template>



<style scoped>
  #MainSection {
    width: 100%;
    background: linear-gradient(to bottom, #80e1f7, #06c1e6);
  }

  #ProfilePicture {
    border-radius: 50%;
    width: 64px;
    height: 64px;
  }

  .userName {
    color: #fff;
    font-weight: bold;
    font-size: 18px;
    text-shadow: 1px 1px #fff;
    font-family: 'Noto Sans JP', sans-serif;
  }

  .companyName {
    color: #fff;
    font-weight: bold;
    font-size: 18px;
    font-family: 'Noto Sans JP', sans-serif;
  }

</style>
