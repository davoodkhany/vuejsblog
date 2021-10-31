<template>
  <form @submit.prevent="submit">
    <input type="email" :value="email" name="email" @input="changeInpute" />
    <span :class="{ 'danger': !isValidEmail }" v-show="!isValidEmail" >Email is valid</span>
    <input
      type="text"
      :value="password"
      name="password"
      @input="changeInpute"
    />
    <span :class="{ 'danger': !isValidPassword }" v-show="!isValidPassword" >password is valid</span>

    <h1>Content</h1>

    <p>{{ email }}</p>
    <p>{{ password }}</p>

    <button type="submit">submit</button>
  </form>
</template>



<script>
export default {
  data() {
    return {
      email: "davoodkhany@gmail.com",
      password: "davoodkhany",
    };
  },
  computed: {
    isValidEmail() {
      if (this.emailIsValid(this.email)) {
        return true;
      } else {
        return false;
      }
    },
    isValidPassword() {
      let i = this.password.length

      if (i > 8) {
        return true;
      }else{
        return false;
      }

    }
  },
  methods: {
    submit() {
      console.log(this.email, this.password)
    },

    changeInpute(e) {
      this[e.target.name] = e.target.value;
    },
    emailIsValid(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    },
  },
};
</script>




<style>
.danger {
  background-color: red;
}
</style>
