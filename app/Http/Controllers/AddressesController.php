<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class AddressesController extends Controller
{
    protected $api = 'https://geodata.nationaalgeoregister.nl/locatieserver/v3';

    /*
     * Endpoint: /free?q=postcode:{zipcode} AND huisnummer:{housenumber}
     */
    public function zipcode(Request $request)
    {
        //
    }

    /*
     * Endpoint: /suggest?q={address}
     */
    public function suggest(Request $request)
    {
        //
    }

    /*
     * Endpoint: /lookup?id={id}
     */
    public function view(string $object_id)
    {
        //
    }
}
