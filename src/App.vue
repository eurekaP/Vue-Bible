<template>
  <div id="app">

    <app-menu></app-menu>

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
    myFunction() {    // Also drop down function
      document.getElementById("myDropdown").classList.toggle("show");
    }
  }
}
</script>

<style lang="scss">

</style>
