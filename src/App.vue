<template>
  <div id="app">

    <app-menu></app-menu>
   
    <!-- <nav class="navbar navbar-expand-lg navbar-light bg-light mb-5">
      <router-link class="navbar-brand" to="/"><img src="/assets/college_search.png" style="height:50px"/></router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <router-link class="navbar-brand" to="/"><li style="font-size: 30px;color: #002a5c;font-weight: bold;">CollegeSearch</li></router-link>
          <router-link class="btn btn-info my-2 my-sm-0 mr-2" to="/card" style="margin-left:20px; padding-top:15px;">Search</router-link>
        </ul>
        <router-link v-if="!authenticated" class="btn btn-info my-2 my-sm-0 mr-2" to="/login">Login</router-link>
        <router-link v-if="!authenticated" class="btn btn-outline my-2 my-sm-0 mr-2" to="/signup">Signup</router-link>

        

        <div class="dropdown">
          <span class="dropbtn" v-if="authenticated" v-on:click="myFunction" style="cursor:pointer;">
            <i class="fa fa-user" style="font-size: 25px; margin-right:10px;"></i>{{ userEmail }}
          </span>
          <div id="myDropdown" class="dropdown-content" style="">
            <router-link to="/like"><i class="fa fa-star-o" style="font-size: 25px; margin-right:10px; padding-top:15px;"></i>Favourites</router-link>
            <a @click="logout"><i class="fa fa-sign-out" style="font-size: 25px; margin-right:10px;"></i>Log Out</a>
          </div>
        </div>
      </div>
    </nav> -->

    <div class="container" style="padding-top: 39px;">
      <router-view/>
    </div>

    <!-- <div id="footer" class="text-center mt-5">CollegeSearch. (c) 2020.</div> -->
  </div>
</template>

<script>
import AppMenu from './views/components/Menu.vue';

export default {
  name: 'App',
  components: {
      AppMenu,
  },
  data () {
    return {
      authenticated : localStorage.getItem('authenticated'),  // login flag
      userEmail : localStorage.getItem('userEmail'),          // loggedin user email
      userId : localStorage.getItem('userId')                 // loggedin user ID
    }
  },
  updated(){
    this.authenticated = localStorage.getItem('authenticated'),
    this.userEmail = localStorage.getItem('userEmail'),
    this.userId = localStorage.getItem('userId')

    window.onclick = function(event) {                    // This is the sciprt for dropdown menu
      if (!event.target.matches('.dropbtn')) {            // Sample code of w3school
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
      }
    }
  },
  methods: {
    logout() {      // Log out action
      localStorage.removeItem('authenticated'); // Remove All localstorage variables.
      localStorage.removeItem('userEmail');
      localStorage.removeItem('userId');

      this.$router.push({ name: 'login' })
      
      // store.authenticated = false;
      // store.userId = 0;
    },
    myFunction() {    // Also drop down function
      document.getElementById("myDropdown").classList.toggle("show");
    }
  }
}
</script>

<style lang="scss">

</style>
