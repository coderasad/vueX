<template>
    <div class="card mb-3">
        <div class="d-flex justify-content-between align-items-center card-header">
            <div class="fw-bold">
                {{ list.name }}
            </div>
            <div class="d-flex gap-2">
                <a @click="$router.push(`view/${list.id}`)" class="btn btn-info"><i class="fa fa-eye"></i></a>
                <a @click="$router.push(`edit/${list.id}`)" class="btn btn-warning"><i class="fa fa-edit"></i></a>
                <a @click="$emit('deleteList', list.id)" class="btn btn-danger"><i class="fa fa-trash"></i></a>
            </div>
        </div>
        <div class="card-body">
            <img :src="list.avatar" alt="">
        </div>
    </div>
</template>

<script>
export default {
    name: "ProfileCard",
    props: ['list']
}
</script>

<style scoped>

</style>