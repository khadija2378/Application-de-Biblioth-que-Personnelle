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

Route::get('/books/search', [BookController::class, 'search']);
Route::resource('books', BookController::class);


//Reading

Route::resource('reading', ReadingController::class);
Route::post('/books/{book}/reading', [ReadingController::class, 'store']);

//loan

Route::resource('loan', LoanController::class);
Route::post('/books/{book}/loans', [LoanController::class, 'store']);
Route::put('/loan/returnBook/{loan}', [LoanController::class, 'returnBook']);

});
Route::middleware('auth:sanctum','role:admin')->group(function(){
Route::get('/users', [AuthController::class, 'index']);
Route::delete('/user/{user}', [AuthController::class, 'destroy']);


});
