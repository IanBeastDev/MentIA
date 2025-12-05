<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Usuario;
use Illuminate\Support\Facades\Hash;

class UsuarioController extends Controller
{
    // REGISTRO DE USUARIO
    public function registrar(Request $request)
    {
        $request->validate([
            'usuario' => 'required|string|max:60',
            'email' => 'required|string|email|max:60|unique:usuarios',
            'contrasena' => 'required|string|min:6',
        ]);

        $usuario = Usuario::create([
            'usuario' => $request->usuario,
            'email' => $request->email,
            'contrasena' => Hash::make($request->contrasena),
        ]);

        return response()->json([
            'message' => 'Usuario registrado correctamente',
            'usuario' => $usuario
        ], 201);
    }

    // LOGIN DE USUARIO
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|string|email',
            'contrasena' => 'required|string',
        ]);

        // Buscar el usuario por su email
        $usuario = Usuario::where('email', $request->email)->first();

        if (!$usuario) {
            return response()->json(['error' => 'El usuario no está registrado'], 404);
        }

        // Verificar la contraseña
        if (!Hash::check($request->contrasena, $usuario->contrasena)) {
            return response()->json(['error' => 'Contraseña incorrecta'], 401);
        }

        return response()->json([
            'message' => 'Inicio de sesión exitoso',
            'usuario' => $usuario
        ], 200);
    }
    
}
