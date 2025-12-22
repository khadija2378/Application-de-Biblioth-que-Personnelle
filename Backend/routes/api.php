<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\BookController;
use App\Http\Controllers\LoanController;
use App\Http\Controllers\ReadingController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::post('/register',[AuthController::class,'register']);
Route::post('/login',[AuthController::class,'login']);
Route::post('/reset',[AuthController::class,'resetPassword']);

Route::middleware('auth:sanctum')->group(function(){

//Logout

Route::post('/logout',[AuthController::class,'logout']);

//Books

Route::resource('books', BookController::class);
Route::get('/books/search', [BookController::class, 'search']);

//Reading

Route::resource('reading', ReadingController::class);
Route::get('/reading/index', [ReadingController::class, 'indexFinished']);

//loan

Route::resource('loan', LoanController::class);
Route::post('/books/{book}/loans', [LoanController::class, 'store']);
Route::get('/loan/returnBook', [LoanController::class, 'returnBook']);

});

Route::get('/user', [AuthController::class, 'index'])->middleware('auth:sanctum','role:admin');
