<template>
    <div id="menu-section" class="py-2 shadow">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <nav class="navbar navbar-brand navbar-expand-lg navbar-light">
                        <div class="container-fluid">
                            <router-link to="/" class="navbar-brand" href="#">
                                <img class="w-50" src="../assets/logo.svg" alt="">
                            </router-link>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="mb-2 mb-lg-0 ms-auto navbar-nav">
                                    <li class="nav-item">
                                        <router-link to="/" class="nav-link fw-bold text-uppercase" aria-current="page" >Home</router-link>
                                    </li>
                                    <li class="nav-item">
                                        <router-link to="/about" class="nav-link fw-bold text-uppercase" aria-current="page" >About</router-link>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link fw-bold text-uppercase" href="#">Contact Us</a>
                                    </li>
                                </ul>
                                <div class="d-flex ms-auto">
                                    <a href="#" class="nav-link fw-bold text-uppercase text-dark">Log In</a>
                                </div>
                                <div class="d-flex">
                                    <a href="#" class="nav-link fw-bold text-uppercase text-dark">Sign Up</a>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Nav"
}
</script>

<style scoped>

</style>