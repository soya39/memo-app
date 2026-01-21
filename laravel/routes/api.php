<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MemoController;

Route::post('/memo', [MemoController::class,'store']);
