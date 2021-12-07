<template>
    <div class="registration-section">
        <div class="container-fluid">
            <div class="justify-content-center row">
                <div class="col-4 m-5 p-5 rounded shadow">
                    <div class="text-center mb-4">
                        <h2 class="fw-bolder text-info">Hey, Good to see you again!</h2>
                        <p>Log in to get going with our recruitment process!</p>
                        <hr>
                    </div>
                    <form enctype="multipart/form-data">
                        <div class="mb-3">
                            <label for="fullName" class="form-label">Full Name</label>
                            <input v-model="form.fullName" type="text" class="form-control" id="fullName">
                        </div>

                        <div class="mb-3">
                            <label for="email" class="form-label">Email address</label>
                            <input v-model="form.email" type="email" class="form-control" id="email">
                        </div>
                        <div class="mb-3">
                            <label for="password" class="form-label">Password</label>
                            <input v-model="form.password" type="password" class="form-control" id="password">
                        </div>
                        <div class="mb-3">
                            <label for="phone" class="form-label">Phone</label>
                            <input v-model="form.phone" type="text" class="form-control" id="phone">
                        </div>
                        <div class="mb-3">
                            <label for="avatar" class="form-label">Profile Picture</label>
                            <input ref="profilePictureInput" type="file" class="form-control" id="avatar">
                        </div>
                        <div class="mb-3">
                            <label for="cv" class="form-label">Your CV</label>
                            <input ref="files" @change="getFile()" type="file" class="form-control" id="cv">
                        </div>
                        <button @click.prevent="handleSubmit" type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Registration",

    data() {
        return {
            form: {
                fullName: '',
                email   : '',
                password: '',
                phone   : '',
                avatar  : '',
                cv      : '',
            }
        }
    },
    methods: {
        getFile() {
            this.form.cv = this.$refs.files.files[0];
        },
        handleSubmit() {
            if (!this.form.fullName) {
                console.log('Full name is required')
                return
            }

            let formData = new FormData();
            formData.append('cv', this.form.cv);
            formData.append('full_name', this.form.fullName);
            formData.append('email', this.form.email);
            formData.append('phone', this.form.phone);
            formData.append('password', this.form.password);
            console.log(formData, 'formData')
            console.log(this.form, 'this.form')

            axios.post('https://hr.mediusware.xyz/api/register-candidate/', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }
            ).then(function () {
                console.log('SUCCESS!!');
            }).catch(function () {
                console.log('FAILURE!!');
            });
        },
    }
}
</script>

<style scoped>

</style>