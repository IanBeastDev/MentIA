<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Contacto;

class ContactoController extends Controller
{
    public function index($id)
    {
        return Contacto::where('user_id', $id)->get();
    }

    public function store(Request $request)
    {
        return Contacto::create($request->all());
    }


}
