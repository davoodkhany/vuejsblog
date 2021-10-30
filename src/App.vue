<template>


  <form >

  <input type="email" :value="email" name="email"  @input = "changeInpute" >
  <input type="text"  :value="password" >

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
    changeInpute(){

        // console.log(e.target.changeInpute);
      this[event.target.name] = event.target.data
  
    }
  }
}

</script>





