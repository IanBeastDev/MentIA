<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UsuarioController;
use App\Http\Controllers\ChatController;
use App\Http\Controllers\ContactoController;

Route::post('/usuarios/registrar', [UsuarioController::class, 'registrar']);
Route::post('/usuarios/login', [UsuarioController::class, 'login']);

Route::get('/chats', [ChatController::class, 'index']);
Route::post('/chats', [ChatController::class, 'store']);
Route::post('/chats/{id}/like', [ChatController::class, 'like']);
Route::get('/contactos/{id}', [ContactoController::class, 'index']);
Route::post('/contactos', [ContactoController::class, 'store']);
