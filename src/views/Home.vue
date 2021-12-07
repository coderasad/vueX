<template>
    <div class="home">
        <div class="container">
            <div class="row mt-5">
                <div class="col-6 mb-3">
                    <div class="input-group">
                        <input v-model="bookName.title" type="text" class="form-control" placeholder="📝 Write Here...">
                        <button @click="addBook()" class="btn btn-primary">Save</button>
                    </div>
                </div>
                <div class="col-6"></div>
                <div class="col-12">
                    <div class="badge bg-warning w-100 mb-3 py-2 fs-5">
                        Total Book {{ totalBook }}
                    </div>
                </div>
                <div class="col-4 mb-3" v-for="(bookList,index) in bookLists">
                    <div class="card">
                        <div class="card-header">
                            Title <b>{{ index + 1 }}</b>
                        </div>
                        <div class="card-body d-flex justify-content-between">
                            <h5 class="card-title">{{ bookList.title }}</h5>
                            <button @click="deleteBook(index)" class="btn btn-danger">Delete</button>
                        </div>
                        <div class="card-footer text-muted">
                            {{ bookList.time | diffForHumans }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import {mapState, mapActions, mapGetters} from "vuex"

export default {
    name: 'Home',
    data() {
        return {
            bookName: {
                title: '',
                time : ''
            }
        }
    },
    computed: {
        ...mapState({
            bookLists: "bookList"
        }),
        ...mapGetters({
            totalBook: 'totalBook'
        })
    },
    methods : {
        ...mapActions({
            deleteBook: 'deleteBook'
        }),
        addBook() {
            // this.bookName.title =  this.bookName.title
            // this.bookName.time = (new Date()).getTime()
            this.$store.dispatch("addBook", this.bookName);
        },
    },

}
</script>
