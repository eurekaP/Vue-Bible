<template>
    <nav class="navbar navbar-light navbar-expand-md navigation-clean fixed-top" style="box-shadow: 0px 4px 5px #6e6d6d;">
        <div class="container">
            <router-link to="/" class="navbar-brand">
                Biblify
            </router-link>
            <button data-bs-toggle="collapse" class="navbar-toggler" data-bs-target="#navcol-1"><span class="visually-hidden">Toggle navigation</span><span class="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse" id="navcol-1">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link" v-bind:class="{active1: layoutMode == 1}" v-on:click="clickTwoLayout(1)">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" class="bi bi-square ">
                                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"></path>
                            </svg>
                        </a>
                    </li>
                    <li class="nav-item  d-none d-sm-flex">
                        <a class="nav-link" v-bind:class="{active1: layoutMode == 2}" v-on:click="clickTwoLayout(2)">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" class="bi bi-layout-split">
                                <path d="M0 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3zm8.5-1v12H14a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H8.5zm-1 0H2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h5.5V2z"></path>
                            </svg>
                        </a>
                    </li>
                    <li class="nav-item d-none d-md-flex">
                        <a class="nav-link" v-bind:class="{active1: layoutMode == 3}" v-on:click="clickTwoLayout(3)">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" class="bi bi-layout-three-columns">
                                <path d="M0 1.5A1.5 1.5 0 0 1 1.5 0h13A1.5 1.5 0 0 1 16 1.5v13a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 14.5v-13zM1.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 .5.5H5V1H1.5zM10 15V1H6v14h4zm1 0h3.5a.5.5 0 0 0 .5-.5v-13a.5.5 0 0 0-.5-.5H11v14z"></path>
                            </svg>
                        </a>
                    </li>
                    <li class="nav-item  d-none d-md-flex">
                        <a class="nav-link" v-bind:class="{active1: toolMode == 1}" v-on:click="clickToolLayout(1)">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" class="bi bi-layout-sidebar-inset-reverse">
                                <path d="M2 2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2zm12-1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h12z"></path>
                                <path d="M13 4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V4z"></path>
                            </svg>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" v-bind:class="{active1: toolMode == 2}" v-on:click="clickToolLayout(2)">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" class="bi bi-layout-sidebar-inset-reverse" style="transform: rotate(90deg);">
                                <path d="M2 2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2zm12-1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h12z"></path>
                                <path d="M13 4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V4z"></path>
                            </svg>
                        </a>
                    </li>
                    <router-link v-if="!authenticated" class="btn btn-info my-2 mr-2" to="/login">Login</router-link>
                    <router-link v-if="!authenticated" class="btn btn-outline my-2  mr-2" to="/">Signup</router-link>
                    <li v-if="authenticated" class="nav-item dropdown">
                        <a class="dropdown-toggle nav-link" aria-expanded="false" data-bs-toggle="dropdown" href="#">{{username}}
                            <img :src="avatar" style="width:40px; height: 40px; border-radius: 50%; margin-left: 10px;">
                        </a>
                        <div class="dropdown-menu">
                            <a @click="logout" class="dropdown-item">Log out</a>
                        </div>
                    </li>
                    <!-- <li class="nav-item dropdown"><a class="dropdown-toggle nav-link" aria-expanded="false" data-bs-toggle="dropdown" href="#">Dropdown </a>
                        <div class="dropdown-menu"><a class="dropdown-item" href="#">First Item</a><a class="dropdown-item" href="#">Second Item</a><a class="dropdown-item" href="#">Third Item</a></div>
                    </li> -->
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>    // Home screen vue - no scripts (There are only UI)
    export default {
        data() {
            return  {
                layoutMode: 1,
                toolMode: 0,
                authenticated: localStorage.getItem('authenticated'),
                avatar: localStorage.getItem('avatar'),
                username: localStorage.getItem('username'),
            };
        },
        name: 'Menu',
        components: {

        },
        mounted() {
            this.$root.$on('refreshAuthenticate', ()=>{
                this.authenticated = localStorage.getItem('authenticated');
            })
        },
        methods: {
            clickTwoLayout: function(_layoutMode){
                this.layoutMode = _layoutMode;
                this.$root.$emit('layoutChangeEvent', _layoutMode);
            },
            clickToolLayout: function(_toolMode){
                this.toolMode = this.toolMode == _toolMode ? 0 : _toolMode;
                this.$root.$emit('toolModeChangeEvent', this.toolMode);
            },
            logout() {      // Log out action
                localStorage.removeItem('authenticated'); // Remove All localstorage variables.
                localStorage.removeItem('accessToken');
                localStorage.removeItem('avatar');
                localStorage.removeItem('username');
                this.authenticated = false;

                this.$router.push({ name: 'login' })
            },
        }           
    }
</script>

<style lang="scss">
    .nav-link.active1 {
        color: var(--bs-blue) !important;
    }
    .nav-item {
        display: flex;
    }
    .nav-item .nav-link {
        margin: auto;
    }
    @media (min-width:992px) {
        .navbar {
            padding-top: 0px;
            padding-bottom: 0px;
        }
    }
</style>

