<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useMemoStore } from "@/stores/memo";
import DocumentSvg from "@/components/svgs/DocumentSvg.vue";
import TrashSvg from "@/components/svgs/TrashSvg.vue";

const store = useMemoStore();

// 現在「全文表示」しているメモのIDを保持する（初期値はnull）
const expandedId = ref<number | null>(null);

// クリック時に開閉を切り替える関数
const toggleExpand = (id: number) => {
    if (expandedId.value === id) {
        expandedId.value = null; // すでに開いていたら閉じる
    } else {
        expandedId.value = id; // 閉じていたらそのIDを開く
    }
};

const onClickDelete = (id: number) => {
    if (confirm('本当に削除してもよろしいですか？')) {
        store.deleteMemo(id);
    }
};

onMounted(() => {
    store.fetchMemos();
});

</script>

<template>
    <div class="max-w-2xl mx-auto mt-12">
        <div class="flex items-center gap-2 mb-6">
            <DocumentSvg class="w-6 h-6 text-gray-600" />
            <h2 class="text-xl font-bold text-gray-800">保存されたメモ</h2>
            <span class="ml-auto bg-orange-100 text-orange-600 text-xs font-bold px-2 py-0.5 rounded-full">
                {{ store.memos.length }}件
            </span>
        </div>

        <div class="space-y-4">
            <div
                v-for="memo in store.memos" :key="memo.id"
                @click="toggleExpand(memo.id)"
                class="bg-white p-5 rounded-2xl shadow-sm border border-gray-100
                hover:shadow-md group relative cursor-pointer"
            >
                <button
                    @click.stop="onClickDelete(memo.id)"
                    class="absolute top-4 right-4 p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full
                           opacity-0 group-hover:opacity-100"
                >
                    <TrashSvg class="h-5 w-5" />
                </button>

                <div class="flex flex-col gap-1">
                    <p
                        class="text-gray-800 font-medium"
                        :class="{ 'line-clamp-2': expandedId !== memo.id }"
                    >
                        {{ memo.content }}
                    </p>
                    <span class="text-xs text-gray-400">
                        {{ memo.created_at }}
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>
