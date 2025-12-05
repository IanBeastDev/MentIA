<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Chat extends Model
{
    use HasFactory;

    protected $table = 'chats';

    protected $fillable = ['user_id', 'chat', 'like'];


    public $timestamps = true;
    public function usuario()
    {
        return $this->belongsTo(Usuario::class, 'user_id');
    }

}
