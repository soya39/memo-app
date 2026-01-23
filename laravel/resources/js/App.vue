<script setup lang="ts">
import Header from '@/components/Header.vue';
import MemoForm from '@/components/MemoForm.vue';
import MemoList from "@/components/MemoList.vue";
</script>

<template>
    <div class="min-h-screen bg-[#fffcf0]">
        <Header />

        <main class="container mx-auto py-8">
            <MemoForm />
            <MemoList />
        </main>

    </div>
</template>
