<template>
  <div id="MainSection">
    <p class="userName">
      M.Okada
    </p>
    <hr>
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
    width: 80px;
    height: 80px;
  }

  .userName {
    color: #fff;
    font-weight: bold;
    font-size: 26px;
    text-shadow: 1px 1px #fff;
    font-family: 'Noto Sans JP', sans-serif;
    padding-top: 10px;
  }

  .companyName {
    color: #fff;
    font-weight: bold;
    font-size: 22px;
    font-family: 'Noto Sans JP', sans-serif;
    padding-bottom: 14px;
  }

</style>
