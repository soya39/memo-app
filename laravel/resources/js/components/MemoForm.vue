<script setup lang="ts">
import { ref, computed } from "vue";
import axios from 'axios'
import Button from "@/components/Button.vue";
import { useMemoStore } from "@/stores/memo";
import Textarea from "@/components/Textarea.vue";

const store = useMemoStore();
const content = ref("");

const isButtonDisabled = computed(() => content.value.trim().length === 0);

// 保存を実行する関数
// 保存を実行する関数
const saveMemo = async () => {
    if (isButtonDisabled.value) return;

    // 【修正】axios.post を直接呼ぶのではなく、基地の担当者（addMemo）に任せる！
    // 基地の中で axios 通信も、リストへの追加（unshift）も全部やってくれます。
    await store.addMemo(content.value);

    // 【リセット】画面の文字を消す
    content.value = "";
};

</script>

<template>
    <div class="bg-white rounded-3xl p-8 shadow-lg border border-orange-50 w-full max-w-2xl mx-auto">

        <div class="flex items-center gap-4 mb-6">
            <h2 class="text-[#f08a5d] text-3xl font-bold">+</h2>
            <h2 class="font-bold text-gray-700 text-xl">新しいメモ</h2>
        </div>

        <Textarea v-model:content="content"/>

        <Button :disabled="isButtonDisabled" @click="saveMemo"/>
    </div>
</template>

<style scoped>

</style>
