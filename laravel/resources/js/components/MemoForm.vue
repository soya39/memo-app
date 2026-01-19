<script setup lang="ts">
import { ref, computed } from "vue";
import Button from "@/components/Button.vue";
import Textarea from "@/components/Textarea.vue";

const content = ref("");

const isButtonDisabled = computed(() => content.value.trim().length === 0);
</script>

<template>
    <div class="bg-white rounded-3xl p-8 shadow-lg border border-orange-50 w-full max-w-2xl mx-auto">

        <div class="flex items-center gap-4 mb-6">
            <h2 class="text-[#f08a5d] text-3xl font-bold">+</h2>
            <h2 class="font-bold text-gray-700 text-xl">新しいメモ</h2>
        </div>

        <Textarea v-model:content="content"/>

        <Button :disabled="isButtonDisabled"/>
    </div>
</template>

<style scoped>

</style>
