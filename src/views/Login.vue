<template>
   
    <div class="container clean-block clean-form dark">
        <div class="block-heading">
            <h2 class="text-info">Log In</h2>
        </div>
        <form>
            <p v-show="!login_success" class="text-danger">The credential is incorrect. </br> Please check your username and password.</p>
            <div class="mb-3"><label class="form-label" for="email">Username</label><input class="form-control item" type="text" id="email" v-model="email"></div>
            <div class="mb-3"><label class="form-label" for="password">Password</label><input class="form-control" type="password" id="password" v-model="password"></div>
            <div class="mb-3"><a href="https://worshify.com/create/account">Sign Up</a></div>
            <button class="btn btn-primary" type="button" @click="onSubmit">Log In</button>
            <router-link to="/">
              <button class="btn btn-secondary" type="button" style="margin-left:50px;"><i class="fa fa-home"></i>Home</button>
            </router-link>
        </form>
    </div>
</template>

<script>
import config from "../config"


export default {
  data() {
      return {
        email: '',
        password: '',
        login_success: true,
      };
  },
  methods: {
    onSubmit () {
      let self = this;

      const params = new URLSearchParams(); // Add params for api endpoint
      params.append('username', this.email);   // Add email
      params.append('password', this.password); // Add password

      // Call Sign In API to check credentials and perform login module

      this.axios.post('https://worshify.com/login/biblify', params, {headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      }})
      .then((response) => {
          console.log("Response: ", response);
          localStorage.setItem('authenticated', true);
          localStorage.setItem('accessToken', response.data.token);
          localStorage.setItem('avatar', response.data.img);
          localStorage.setItem('username', response.data.username);
          localStorage.setItem('userID', response.data.userID);

          this.$root.$emit('refreshAuthenticate');
          
          self.login_success = true;
          self.$router.push({ name: 'home' });    // After finish login, go to home page

          // if(response.data != "failed") // if log in success set variables in Local storage
          // {
          //   localStorage.setItem('authenticated', true);  // authenticated flag
          //   localStorage.setItem('userEmail', this.email);  // current logged in user email
          //   localStorage.setItem('userId', response.data);  // currently logged in user id
          //   this.$router.push({ name: 'card' });    // After finish login, go to card page
          // }else{
          //   alert("Wrong Credentials!");
          // }
      })
      .catch(function (error) {
          if(error.response.status === 401)
          {
            console.log("This credential is not matched");
            localStorage.setItem('authenticated', true);
            self.login_success = false;
          }
          console.log(error.response);
      });
    }
  }
}
</script>
