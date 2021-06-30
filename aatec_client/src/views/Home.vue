<template>
<div>
  <div class="flex_home">
    <div class="text">
      <h1>
        DESENVOLVENDO AMBIENTE TECNOLÓGICO NO AMAZONAS
      </h1>
    </div>
    <div class="img">
      <img 
      src="../assets/main.svg"
      alt="">
    </div>
  </div>
    <a class="btn btn-outline-primary">Seja um Associado</a>
</div>
</template>

<script>
export default {

}
</script>

<style>
div.text{
  text-align: start;
}
h1{
  color: white;
  font-size: 3.5rem;
  font-weight: 400;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
.flex_home{
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
}

.flex_home > div.text {
  width: 40%;
  background: rebeccapurple;
}

.flex_home > div.img {
  /* background: cyan; */
  width: 50%;
}

img{
  width: 500px;
  height: 400px;
}
</style>