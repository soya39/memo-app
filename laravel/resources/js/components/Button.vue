<script setup lang="ts">
import PlusSvg from "@/components/svgs/PlusSvg.vue";
defineProps<{
    disabled: boolean
}>();
</script>

<template>
    <button :disabled="disabled" class="flex justify-center items-center
    gap-2 w-full mt-6 text-white py-3 rounded-xl font-bold
    transition" :class="disabled ? 'bg-[#f08a5d]/50' : 'bg-[#f08a5d]'">
        <PlusSvg class="text-white" />メモを保存
    </button>
</template>

<style scoped>

</style>
