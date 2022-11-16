<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class BoardgamesController extends Controller
{
    protected $api = 'https://api.geekdo.com/xmlapi';

    /*
     * Endpoint: /search?search={boardgame}
     */
    public function search(Request $request)
    {
        //
    }

    /*
     * Endpoint: /boardgame/{id}
     */
    public function view(string $object_id)
    {
        //
    }
}
