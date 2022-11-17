<x-layout>
    <x-slot name="header">
        {{ __('Address lookup National GeoRegister') }}
    </x-slot>

    <x-panel>
        <x-form stay class="space-y-4">

            <x-input name="address" :label="__('Lookup address (suggest)')" autocomplete="off" />

            <x-defer
                v-if="form.address.length > 2"
                url="{{ route('address.suggest') }}"
                method="post"
                request="{ address: form.address }"
                watch-value="form.address"
                watch-debounce="500"
            >

                <ul v-if="form.address && response.response">
                    <li v-for="address in response.response.docs">
                        @{{ address.weergavenaam }}

                        <Link modal :href="'/address/' + address.id">
                            <x-gmdi-open-in-new-r class="h-5 w-5 inline" />
                        </Link>
                    </li>
                </ul>

            </x-defer>
        </x-form>
    </x-panel>
</x-layout>
