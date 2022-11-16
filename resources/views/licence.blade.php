<x-layout>
    <x-slot name="header">
        {{ __('Dutch car info') }}
    </x-slot>

    <x-panel>
        <x-form stay class="space-y-4">

            <x-input name="licenceplate" :label="__('Licenceplate')" autocomplete="off" maxlength="8" style="text-transform: uppercase;" />

            <x-defer
                manual
                url="{{ route('licence.lookup') }}"
                method="post"
                request="{ licenceplate: form.licenceplate }"
            >
                <button class="btn btn-primary" @click.prevent="reload">Submit</button>

                <table v-if="response" class="space-y-4">
                    <tr v-for="(item, key) in response">
                        <td>@{{ key.replaceAll('_', ' ') }}</td>
                        <td>
                            @{{ item }}

                            <a v-if="key.startsWith('api_')" :href="item + '?kenteken=' + response.kenteken" target="_blank">
                                <x-gmdi-open-in-new-r class="h-5 w-5 inline" />
                            </a>
                        </td>
                    </tr>
                </table>

            </x-defer>
        </x-form>

    </x-panel>
</x-layout>
