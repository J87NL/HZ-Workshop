<x-layout>
    <x-slot name="header">
        {{ __('Boardgame info') }}
    </x-slot>

    <x-panel>
        <x-form stay class="space-y-4">

            <x-input name="boardgame" :label="__('Boardgame')" autocomplete="off" />

            <x-defer
                manual
                url="{{ route('boardgames.search') }}"
                method="post"
                request="{ boardgame: form.boardgame }"
            >
                <button class="btn btn-primary" @click.prevent="reload">Submit</button>

                <table v-if="response.boardgame" class="space-y-4">
                    <tr>
                        <th>{{ __('Game') }}</th>
                        <th>{{ __('Year published') }}</th>
                        <th>{{ __('More info') }}</th>
                    </tr>
                    <tr v-for="item in response.boardgame">
                        <td>@{{ item.name }}</td>
                        <td>@{{ item.yearpublished }}</td>
                        <td>
                            <Link modal :href="'/boardgames/' + item['@attributes'].objectid">
                                <x-gmdi-open-in-new-r class="h-5 w-5 inline" />
                            </Link>
                        </td>
                    </tr>
                </table>

            </x-defer>
        </x-form>

    </x-panel>
</x-layout>
