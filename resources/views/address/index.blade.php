<x-layout>
    <x-slot name="header">
        {{ __('Address lookup National GeoRegister') }}
    </x-slot>

    <x-panel>
        <x-form stay class="space-y-4">

            <x-input name="zipcode" label="Zipcode" autocomplete="off" maxlength="7" style="text-transform: uppercase;" />
            <x-input name="housenumber" label="Housenumber" type="number" min="1" autocomplete="off" />

            <x-defer
                manual
                url="{{ route('address.zipcode.post') }}"
                method="post"
                request="{ zipcode: form.zipcode, housenumber: form.housenumber }"
            >
                <button class="btn btn-primary" @click.prevent="reload">Submit</button>

                <div v-if="response.straatnaam" class="space-y-4">
                    <x-input name="straatnaam" label="Street" v-model="response.straatnaam" />
                    <x-input name="woonplaatsnaam" label="City" v-model="response.woonplaatsnaam" />


                    <x-toggle>
                        <button @click.prevent="toggle" class="btn btn-primary mt-5">Show data</button>

                        <pre v-show="toggled">
                            <p v-text="response" />
                        </pre>
                    </x-toggle>
                </div>

            </x-defer>
        </x-form>

    </x-panel>
</x-layout>
