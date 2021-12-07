export default {
    namespaced: true,
    state    : {
        bookList: []
    },
    getters  : {
        books(state) {
            return state.bookList;
        },
        totalBooks(state) {
            return state.bookList.length;
        }
    },
    mutations: {
        ADD_BOOK(state, data) {
            state.bookList.push(data)
        },
        DELETE_BOOK(state, index) {
            state.bookList.splice(index, 1)
        }
    },
    actions  : {
        addBook({commit}, data) {
            commit("ADD_BOOK", data)
        },
        deleteBook({commit}, index) {
            commit("DELETE_BOOK", index)
        }
    }
}