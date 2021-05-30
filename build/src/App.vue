<template>
  <div id="app">
    
    <router-view/>
  </div>
</template>

<style  lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300&display=swap');
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Rubik', sans-serif;
}

#app {
  max-width: 1920px;
  overflow: hidden;
  margin: auto;
}
@media (max-width: 700px) {
  p {
    font-size: 1rem;
  }
}


</style>
