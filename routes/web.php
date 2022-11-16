<?php

use App\Http\Controllers\AddressesController;
use App\Http\Controllers\BoardgamesController;
use App\Http\Controllers\LicencesController;
use App\Http\Controllers\TodoController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::middleware(['splade'])->group(function () {
    Route::view('/','home')->name('home');

    Route::view('/address/zipcode', 'address.index')->name('address.zipcode');
    Route::post('/address/zipcode', [AddressesController::class, 'zipcode'])->name('address.zipcode.post');

    Route::view('/address/suggest', 'address.suggest')->name('address.suggest');
    Route::post('/address/suggest', [AddressesController::class, 'suggest'])->name('address.suggest.post');

    Route::get('/address/{object_id}', [AddressesController::class, 'view'])->name('address.view');

    Route::view('/licence', 'licence')->name('licence');
    Route::post('/licence', [LicencesController::class, 'lookup'])->name('licence.lookup');

    Route::view('/boardgames', 'boardgames.index')->name('boardgames.index');
    Route::post('/boardgames', [BoardgamesController::class, 'search'])->name('boardgames.search');
    Route::get('/boardgames/{object_id}', [BoardgamesController::class, 'view'])->name('boardgames.view');

    Route::get('/todos', [TodoController::class, 'index'])->name('todos.index');
    Route::post('/todos', [TodoController::class, 'store'])->name('todos.store');

    Route::spladeTable();
});
