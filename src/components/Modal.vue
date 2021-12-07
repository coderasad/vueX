<template>
    <div class="modal-wrapper">
        <div class="btn btn-primary mt-4 m-auto" @click="show = !show">
            <slot name="mainTitle"></slot>
        </div>
        <transition name="fade">
            <div v-if="show" class="modal d-block">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">
                                <slot name="title"></slot>
                            </h5>
                            <button @click="show = !show" type="button" class="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <slot name="body"></slot>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    name: "Modal",
    data: () => ({
        // modalShow: false,
        show     : false
    })

}
</script>

<style scoped>
.modal {
    background : #000000b8;
}

.fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
}
</style>