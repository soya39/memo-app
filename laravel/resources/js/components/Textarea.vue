<script setup lang="ts">
const content = defineModel<string>("content");
</script>

<template>
<textarea
    v-model="content"
    class="w-full h-40 p-4 bg-white rounded-2xl border border-gray-230 focus:outline-none focus:ring-2
            focus:ring-blue resize-none text-gray-600 placeholder-gray-500"
    placeholder="メモを保存してください...&#10;(Enterで改行)"
></textarea>
</template>

<style scoped>

</style>
