<script setup lang="ts">
import { ref, computed } from "vue";
import axios from 'axios'
import Button from "@/components/Button.vue";
import Textarea from "@/components/Textarea.vue";

const content = ref("");

const isButtonDisabled = computed(() => content.value.trim().length === 0);

// 保存を実行する関数
const saveMemo = async () => {
    // 入力欄が空なら、Enterキーを押されてもここで処理を止める
    if (isButtonDisabled.value) return;

    // 【送信】awaitを使って、Laravelからの返事（保存完了）が来るまで待機する.保存ならpost、取得ならget
    // axios.post(住所, { ラベル名: 送りたい中身 })
    await axios.post('/api/memos', {
        content: content.value //content.valueを、contentという名前をつけてControllerに送る
    });

    // 【リセット】DB保存が終わったので、次の入力のために画面の文字を消す
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
