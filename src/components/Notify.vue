<template>
    <div>
        <transition name="fade">
            <div @click="notifyObj.show = !notifyObj.show" v-if="notifyObj.show"
                 :class="types[notifyObj.type].background"
                 class="px-3 py-3 rounded-3 text-white position-fixed top-0 end-0 ar-notify" type="button">
                <div class="d-flex gap-3 ">
                    <i :class="types[notifyObj.type].icon" class="align-self-baseline"></i>
                    <div class="title align-self-baseline">
                        <strong class="me-2">
                            {{ types[notifyObj.type].title }}
                        </strong>
                        {{ notifyObj.text ? notifyObj.text : types[notifyObj.type].text }}
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    props: {
        notifyObj: {
            required: true,
            default : {
                type: '',
                text: '',
                show: false,
            }
        },
    },
    name : "Notify",
    data : () => ({
        types: {
            success: {
                background: 'bg-success',
                icon      : 'fa fa-check-circle',
                title     : 'Success!',
                text      : 'This is lorem Success!',
            },
            delete : {
                background: 'bg-danger',
                icon      : 'fa fa-times-circle',
                title     : 'Delete!',
                text      : 'This is lorem Error!',
            },
            warning: {
                background: 'bg-warning',
                icon      : 'fa fa-exclamation-triangle',
                title     : 'Warning!',
                text      : 'This is lorem Warning!',
            },
            info   : {
                background: 'bg-info',
                icon      : 'fa fa-exclamation-circle',
                title     : 'Warning!',
                text      : 'This is lorem Info!',
            },
            default: {
                background: 'bg-dark',
                icon      : 'fa fa-exclamation-circle',
                title     : 'Default!',
                text      : 'This is lorem Default!',
            },
        },
        time : 3000,
    }),
    methods: {
        async changeTime() {
            await (this.time = this.notifyObj.time ? this.notifyObj.time : this.time)
        },
    },
    watch  : {
        "notifyObj.show": function (newVal, oldVal) {
            if (newVal) {
                // Changing time if user provides a duration of the notify. Default: 3000
                this.changeTime();

                setTimeout(() => {
                    this.notifyObj.show = false;
                }, this.time);
            }
        }
    }
}
</script>

<style scoped>
.ar-notify {
    max-width  : 400px;
    transform  : translate(0, 10%);
    transition : transform .5s
}

.fade-enter-active, .fade-leave-active {
    /*transform: translate(0, 10%);*/
    transition : transform .5s
}

.fade-enter, .fade-leave-to {
    transform  : translate(0, -100%);
    transition : transform .5s
}
</style>