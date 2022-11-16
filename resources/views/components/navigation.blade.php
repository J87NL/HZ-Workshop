<x-data default="{ open: false }">
    <nav class="bg-white border-b border-gray-100">
        <!-- Primary Navigation Menu -->
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between h-16">
                <div class="flex">
                    <!-- Logo -->
                    <div class="shrink-0 flex items-center">
                        <a href="{{ route('home') }}">
                            <img src="/images/WebNL.png" alt="WebNL" class="h-12" />
                        </a>
                    </div>

                    <!-- Navigation Links -->
                    <div class="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                        <x-nav-link href="{{ route('home') }}" :active="request()->routeIs('home')">
                            {{ __('Home') }}
                        </x-nav-link>

                        <x-nav-link href="{{ route('address.zipcode') }}" :active="request()->routeIs('address.zipcode')">
                            {{ __('1. Address lookup (zipcode)') }}
                        </x-nav-link>

                        <x-nav-link href="{{ route('address.suggest') }}" :active="request()->routeIs('address.suggest')">
                            {{ __('2. Address suggest') }}
                        </x-nav-link>

                        <x-nav-link href="{{ route('licence') }}" :active="request()->routeIs('licence')">
                            {{ __('3. Licenceplates lookup') }}
                        </x-nav-link>

                        <x-nav-link href="{{ route('boardgames.index') }}" :active="request()->routeIs('boardgames.index')">
                            {{ __('4. Boardgame info') }}
                        </x-nav-link>

                        <x-nav-link href="{{ route('todos.index') }}" :active="request()->routeIs('todos.index')">
                            {{ __('5. Todo\'s') }}
                        </x-nav-link>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</x-data>
