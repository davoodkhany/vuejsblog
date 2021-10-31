<template>


  <form @submit.prevent="submit" >

  <input type="email" :value="email" name="email"  @input = "changeInpute" >
  <input type="text"  :value="password" name="password" @input = "changeInpute" >

    <h1>Content</h1>

    <p>{{email}}</p>
    <p>{{password}}</p>

    <button type="submit">submit</button>


  </form>


</template>



<script>

export default { 
  data(){
    return { 
       email: 'davoodkhany@gmail.com',
       password: 'davoodkhany'       
    }
  },
  methods:{

    submit(){
      console.log(this.email, this.password);
    },
    changeInpute(e){
      this[e.target.name] = e.target.value
  
    }
  }
}

</script>





