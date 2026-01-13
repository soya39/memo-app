<script setup lang="ts">
import DocumentSvg from "@/components/svgs/DocumentSvg.vue";
</script>

<template>
    <header class="flex flex-col items-center py-8 bg-white shadow-sm">
        <div class="flex items-center gap-2 text-[#f08a5d]">
            <DocumentSvg class="w-8 h-8 text-[#f08a5d]" />
            <h1 class="text-2xl font-bold">
                かんたんメモ
            </h1>
        </div>

        <p class="text-gray-500 mt-2 text-sm">
            思いついたことをサッと記録しよう
        </p>
    </header>
</template>
