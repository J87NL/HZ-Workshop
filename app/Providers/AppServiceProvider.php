<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use ProtoneMedia\Splade\Facades\Splade;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Splade::defaultToast(function ($toast) {
            $toast->autoDismiss(5);
        });
    }
}
