<template>
    <div class="login-section">
        <div class="container-fluid">
            <div class="justify-content-center row">
                <div class="col-4 m-5 p-5 rounded shadow">
                    <div class="text-center mb-4">
                        <h2 class="fw-bolder text-info">Hey, Good to see you again!</h2>
                        <p>Log in to get going with our recruitment process!</p>
                        <hr>
                    </div>
                    <form>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1"
                                   aria-describedby="emailHelp">
                            <!--  <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>-->
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1">
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Login"
}
</script>

<style scoped>

</style>