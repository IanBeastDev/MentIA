<?php 

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\Chat;

class ChatController extends Controller
{
        // Listar todos los mensajes
    public function index()
    {
        // Eager load del usuario
        return Chat::with('usuario:id,usuario')->orderBy('created_at', 'desc')->get();
    }

public function store(Request $request)
{
    $request->validate([
        'user_id' => 'required|exists:usuarios,id',
        'chat' => 'required|string|max:255'
    ]);

    $chat = Chat::create([
        'user_id' => $request->user_id,
        'chat' => $request->chat,
        'like' => 0
    ]);

    return response()->json($chat->load('usuario:id,usuario'), 201);
}

public function like($id)
{
    $chat = Chat::findOrFail($id);
    $chat->increment('like');

    return response()->json([
        'message' => 'Like agregado',
        'likes' => $chat->like
    ]);
}

}