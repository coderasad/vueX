<template>
    <div id="table">
        <table class="table table-striped table-hover">
            <thead>
            <slot name="tableTitle">
                <tr>
                    <th v-for="tableTitle in tableTitles">{{ tableTitle }}</th>
                </tr>
            </slot>
            </thead>
            <tbody>
            <tr v-for="(row,index) in lists">
                <slot name="row" :index="index" :row="row"></slot>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name : "Table",
    props: ['lists', 'tableTitles']
}
</script>

<style scoped>

</style>