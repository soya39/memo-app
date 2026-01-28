import { defineStore } from 'pinia'; // Piniaという「管理システム」を使うための準備
import { ref } from 'vue';           // Vueの「反応する変数」を作るための準備
import axios from 'axios';           // Laravelと「通信」するための道具

// ① export const useMemoStore : 「この基地の名前は useMemoStore です」という宣言
// ② defineStore('memo', ...) : Piniaの中でこのデータに 'memo' というIDをつけます
export const useMemoStore = defineStore('memo', () => {

    // --- 1. 状態（State）：データの置き場 ---
    // [例えるなら] お店の「在庫棚」です。
    // 最初は空っぽの [] ですが、ここにLaravelから届いたデータが入ります。
    const memos = ref<any[]>([]);

    // --- 2. 実行する処理（Actions）：動く仕組み ---
    // [例えるなら] 「仕入れ担当者」です。
    // Laravel（倉庫）に行って、データを取ってくる役割です。
    const fetchMemos = async () => {
        try {
            // async/await : 「通信が終わるまで待ってね」という魔法の言葉
            // axios.get : Laravelの /api/memos という窓口に「データください」と頼む
            const response = await axios.get('/api/memos');

            // 届いた荷物（response.data）を、さっきの在庫棚（memos）に並べ替える
            memos.value = response.data;
        } catch (error) {
            // もし倉庫が閉まっていたり、道が混んでいたらエラーを出す
            console.error('メモの取得に失敗しました:', error);
        }
    };

    // --- 【新しく追加】保存処理（Actions）：動く仕組み ---
    // [例えるなら] 「配送担当者」です。
    // お客さんが書いたメモを、Laravel（倉庫）に届けて保存してもらう役割です。
    const addMemo = async (content: string) => {
        try {
            // axios.post : Laravelの窓口に「これ保存しておいて！」とデータを渡す
            const response = await axios.post('/api/memos', { content });

            // 無事に保存できたら、倉庫から「正式な番号(ID)付きのメモ」が返ってくるので
            // それを在庫棚（memos）の一番上（unshift）に並べます。
            memos.value.unshift(response.data);

            console.log('保存成功！');
        } catch (error) {
            console.error('メモの保存に失敗しました:', error);
        }
    };

    // --- 3. 公開（Return） ---
    // 最後に、他のファイル（Vue）からも見えるように「お店のカウンター」に並べます。
    return {
        memos,
        fetchMemos,
        addMemo
    };
});
