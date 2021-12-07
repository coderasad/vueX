<template>
    <router-link :to="{ name: to_name}" class="btn text-light me-2" :class="cName">
        {{ title }}
    </router-link>
</template>

<script>
export default {
    name: "Action-btn",
    props: ['to_name', 'title','cName']
}
</script>

<style scoped>

</style>