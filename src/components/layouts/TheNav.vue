<template>
             <!-- Responsive navbar-->
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container">
                <a class="navbar-brand" href="#!">Start Bootstrap</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="mb-2 navbar-nav ms-auto mb-lg-0">
                        <li class="nav-item">
                        
                        <!-- <a class="nav-link" :class="{ 'active' : page == 'home'}" @click="$emit('changePage' , 'home')" href="#" >Home</a> -->
                            <router-link class="nav-link" to="/">Home</router-link>
                        </li>
                        <li class="nav-item">

                        <!-- <a class="nav-link" :class="{ 'active' : page == 'about'}" @click="$emit('changePage' , 'about')" href="#!">About</a> -->
                        <router-link class="nav-link" to="/about">About</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/contact">Contact</router-link>
                        <!-- <a class="nav-link" :class="{ 'active' : page == 'contact'}" @click="$emit('changePage' , 'contact')" href="#!">Contact</a> -->

                        </li>
                    </ul>
                </div>
            </div>
        </nav>
</template>

<script>
export default {
    props : ['page']
}
</script>