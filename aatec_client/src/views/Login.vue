<template>
  <div>
    <!-- <form class="form_login">
      <div class="text">
       <h1>Login</h1>
      </div>

      <div class="container">

        <div class="input-field col s6">
          <input id="email" type="text" class="validate">
          <label for="email">email</label>
        </div>

        <div class="input-field col s6">
          <input id="password" type="text" class="validate">
          <label for="password">senha</label>
        </div>
            
        <button type="submit">Logar</button>
        <button type="submit">Criar Conta</button>
        <label>
          <input type="checkbox" checked="checked" name="remember"> Lembrar
        </label>
      </div>
    </form> -->
<form class="login-form">
        <div class="row">
        </div>
        <div class="row">
          <div class="input-field col s12">
            <i class="material-icons prefix">mail_outline</i>
            <input class="validate" id="email" type="email">
            <label for="email" data-error="wrong" data-success="right">Email</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <i class="material-icons prefix">lock_outline</i>
            <input id="password" type="password">
            <label for="password">Password</label>
          </div>
        </div>
        <div class="row">          
          <div class="input-field col s12 m12 l12  login-text">
              <input type="checkbox" id="remember-me" />
              <label for="remember-me">Remember me</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <a href="#" class="btn waves-effect waves-light col s12">Login</a>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s6 m6 l6">
            <p class="margin medium-small"><a href="#">Register Now!</a></p>
          </div>
          <div class="input-field col s6 m6 l6">
              <p class="margin right-align medium-small"><a href="#">Forgot password?</a></p>
          </div>          
        </div>

      </form>

  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
body {font-family: Arial, Helvetica, sans-serif;}
form {
  border: 3px solid #f1f1f1;
  width: 30%;
  margin: 0 auto;
  margin-top: 30px;
}

/* input[type=text], input[type=password] {
  width: 60%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
} */

button {
  background-color: #04AA6D;
  display: block;
  color: white;
  padding: 14px 20px;
  margin: 8px auto;
  border: none;
  cursor: pointer;
  width: 60%;
}

button:hover {
  opacity: 0.8;
}

.cancelbtn {
  width: auto;
  padding: 10px 18px;
  background-color: #f44336;
}

.container {
  padding: 16px;
}

span.psw {
  float: right;
  padding-top: 16px;
}

/* Change styles for span and cancel button on extra small screens */
@media screen and (max-width: 300px) {
  span.psw {
     display: block;
     float: none;
  }
  .cancelbtn {
     width: 100%;
  }
}
</style>