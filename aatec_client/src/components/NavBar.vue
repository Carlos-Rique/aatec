<template>
  <nav class="nav">
    <div class="logo">
      <img src="" alt="AATEC">
    </div>
    <div class="items">
      <router-link :to="{ name: 'Home'}">
          <span>Home</span>
      </router-link>

      <router-link class="options" :to="{ name: 'Login'}">
          <span>Login</span>
      </router-link>

      <router-link class="options" :to="{ name: 'Insert'}">
          <span>Cadastrar</span>
      </router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a.brand-logo{
  float: left;
  position: relative;
}
  .nav {
    margin: 0px 20px;
    padding: 0;
    display: flex;
    justify-content: space-between;
    width: 98%;
    background: cadetblue;
    margin: 0 auto;
  }
  .nav > div{
    padding: 15px;
    margin: 10px;
  }

  div.items > a{
    padding: 10px;
  }
</style>


