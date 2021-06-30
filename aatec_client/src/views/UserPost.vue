<template>
  <div>
    <form class="col s12" @submit.prevent="insert">

      <fieldset  v-show="form_a">
        <legend>Dados pessoais</legend>
        <div class="row">
          <div class="col">
            <label for="name">Nome</label>
            <input v-model="associate.name" type="text" class="form-control" id="name" aria-describedby="emailHelp">
          </div>
          <div class="col">
            <label for="last_name">Sobrenome</label>
            <input v-model="associate.last_name" type="text" class="form-control" id="last_name" aria-describedby="last_name">
          </div>
        </div>

        <div class="row">
          <div class="col">
            <label for="birth_date">Data de nascimento</label>
            <input v-model="associate.birth_date" id="birth_date" type="date" class="form-control">
          </div>
      
          <div class="col">
            <label for="cpf">Cpf</label>
            <input v-mask="'####.###.###.-##'" v-model="associate.cpf" id="cpf" type="text" class="form-control">
             <span class="helper-text" data-error="Digite um cpf válido"></span>
          </div>
        </div>

        <div class="row">
          <div class="col">
            <label for="email">Email</label>
            <input v-model="associate.email" id="email" type="email" class="form-control">
             <span class="helper-text" data-error="Digite um e-mail válido"></span>
          </div>
          
      
          <div class="col">
            <label for="password">Senha</label>
            <input v-model="associate.password" id="password" type="password" class="form-control">
          </div>
        </div>
        
        <b-button class="mt-3" v-on:click.prevent="nextForm('b')" variant="outline-primary">Próximo</b-button>
      </fieldset>

      <fieldset v-show="form_b">
        <legend>Endereço</legend>
        <div class="row">
          <div class="col">
            <label for="street">Rua</label>
            <input v-model="associate.street" id="street" type="text" class="form-control">
          </div>
          <div class="col">
            <label for="number">Número</label>
            <input v-model="associate.number" id="number" type="text" class="form-control">
          </div>
        </div>
        <div class="row">
          <div class="col">
            <label for="district">Bairro</label>
            <input v-model="associate.district" id="district" type="text" class="form-control">
          </div>
      
          <div class="col">
            <label for="zip_code">Cep</label>
            <input v-mask="'#####-###'" v-model="associate.zip_code" id="zip_code" type="text" class="form-control">
          </div>
        </div>

          <b-button class="mt-4" v-on:click.prevent="nextForm('c')" variant="outline-primary">Próximo</b-button>
      </fieldset>

      <fieldset  v-show="form_c">
        <legend>Emprego</legend>
        <div class="row">
          <div class="col">
            <label for="company">Empresa</label>
            <input v-model="associate.company" id="company" type="text" class="form-control">
          </div>
          <div class="col">
            <label for="position">Cargo</label>
            <input v-model="associate.position" id="position" type="text" class="form-control">
          </div>
        </div>
        <div class="row">
          <div class="col">
            <label for="roles">Descreva suas atividades</label>
            <textarea v-model="associate.roles" id="roles" class="form-control"></textarea>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <label for="started_at">Data de inicio</label>
            <input v-model="associate.started_at" id="started_at" type="date" class="form-control">
          </div>
      
          <div class="col">
            <label for="sale">Salário</label>
            <input v-mask="'R$ ####XX##'" v-model="associate.sale" id="sale" type="text" class="form-control">
          </div>
        </div>
      </fieldset>
      <small class="error" v-show="hasError"> Por favor, Preencha todos os campos!</small>
     <nav aria-label="...">
      <ul class="pagination mt-2">
        <li class="page-item" :class="{ active: form_a}" v-on:click.prevent="nextForm('a')">
          <a class="page-link" href="#">1</a>
        </li>
        <li class="page-item" :class="{ active: form_b}" v-on:click.prevent="nextForm('b')">
          <a class="page-link" href="#">2</a>
        </li>
        <li class="page-item" :class="{ active: form_c}" v-on:click.prevent="nextForm('c')">
          <a class="page-link" href="#">3</a>
        </li>
      </ul>
    </nav>
  
 <b-button v-show="form_c" type="submit" variant="outline-primary">Cadastrar</b-button>
    <!-- <button v-show="form_c" v-on:click.prevent="nextForm" class="waves-effect waves-light btn">Cadastrar</button> -->
    
    </form>
  </div>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'
export default {
  data: function() {
    return  {
      mask_sale: [' R$ ', /\d/, /\d/, /\d/, ') ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
      form_a : true,
      form_b : false,
      form_c : false,
      hasError: false,
      associate: this.newAssociate()
    }
  },
  validations: {
    associate : {
      name: {required},
      last_name: {required},
      birth_date: {required},
      cpf: {required},
      email: {required,email},
      password: {required},
      street: {required},
      number: {required},
      district: {required},
      zip_code: {required},
      company: {required},
      position: {required},
      roles: {required},
      started_at: {required},
      sale: {required},
    }
  },
  methods: {
    nextForm(form) {
      console.log('nextform')
      if(form == 'a') {
        this.form_a = true
        this.form_b = false
        this.form_c = false
      }
      if(form == 'b') {
        this.form_a = false
        this.form_b = true
        this.form_c = false
      }
      if(form == 'c') {
        this.form_a = false
        this.form_b = false
        this.form_c = true
      }
    },
    insert() {
      console.log('insert')
      this.validate()

    },
    newAssociate() {
      return {
        name: '',
        last_name: '',
        birth_date: '',
        cpf: '',
        email: '',
        password: '',
        street: '',
        number: '',
        district: '',
        zip_code: '',
        company: '',
        position: '',
        roles: '',
        started_at: '',
        sale: '',
      }
    },
    validate() {
      if(this.$v.$invalid){
      this.hasError = true
      }
    }
  }

}
</script>

<style scoped>
  form{
    width: 60%;
    margin: 40px auto; 
  }
  .pagination {
    display: flex;
    justify-content: center;
  }

  .col {
    margin: 10px auto;
  }
  .error {
    color: red;
  }

</style>