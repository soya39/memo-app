<?php

namespace App\Http\Controllers;

use App\Models\Memo; // ← Memoモデルをインポート！
use Illuminate\Http\Request;

class MemoController extends Controller
{
    public function store(Request $request)
    {
        // 1. 荷物を受け取る（Vueから届いたデータ）
        // 2. 倉庫に保存する（データベースへ入れる）
        $memo = Memo::create([
            "content" => $request->get('content'),
        ]);

        // 3. 完了報告をする（Vueへ結果を返す）
        return response()->json($memo);
    }
}
