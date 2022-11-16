<x-layout>
    <x-slot name="header">
        {{ __("Todo's") }}
    </x-slot>

    <x-panel>
        <Link class="btn btn-primary" href="#add">
            Add
        </Link>

        <div class="grid gap-4 grid-cols-3 grid-rows-3">
            @foreach($data as $item)
                <div class="p-3">
                    <div class="block rounded-lg shadow-lg bg-white max-w-sm text-center">
                        <div class="py-3 px-6 border-b border-gray-300">
                            {{ $item['title'] }}
                        </div>
                        <div class="p-6">
                            <h5 class="text-gray-900 text-xl font-medium mb-2">{{ $item['title'] }}</h5>
                            <p class="text-gray-700 text-base mb-4">
                                {{ $item['value'] }}
                            </p>
                            <p class="text-gray-600 text-xs">{{ $item['user'] }}</p>
                        </div>
                        <div class="py-3 px-6 border-t border-gray-300 text-gray-600">
                            {{ \Carbon\Carbon::parse($item['due_date'])->format('Y-m-d H:i') }}
                        </div>
                    </div>
                </div>
            @endforeach
        </div>

        <x-modal name="add">
            <x-form action="{{ route('todos.store') }}" class="space-y-4">
                <x-input name="user" label="Author" autocomplete="off" />
                <x-input name="title" label="Title" autocomplete="off" />
                <x-textarea name="value" label="Content" autocomplete="off" autosize />
                <x-input name="due_date" label="Due date" date time />
                <x-submit label="Save" :spinner="true" />
            </x-form>
        </x-modal>
    </x-panel>
</x-layout>
