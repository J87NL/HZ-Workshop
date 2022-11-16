<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class LicencesController extends Controller
{
    /*
     * Endpoint: https://opendata.rdw.nl/resource/m9d7-ebf2.json?kenteken={licenceplate}
     */
    public function lookup(Request $request)
    {
        //
    }
}
