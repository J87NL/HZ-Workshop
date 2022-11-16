<x-layout>
    <x-slot name="header">
        {{ __('Boardgame info') }}
    </x-slot>

    <x-panel>
        <x-modal>
            <table class="space-y-4">
                @foreach($data as $key => $value)
                    @if(is_string($value))
                        <tr>
                            <td>{{ $key }}</td>
                            <td>
                                @if($key == 'image')
                                    <img src="{{ $value }}" />
                                @else
                                    {!! $value !!}
                                @endif
                            </td>
                        </tr>
                    @endif
                @endforeach
            </table>
        </x-modal>
    </x-panel>
</x-layout>
