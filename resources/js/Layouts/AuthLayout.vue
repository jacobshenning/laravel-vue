<script setup>
    import { Link } from '@inertiajs/vue3';
</script>

<template>
    <div class="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-md">
            <a href="/" class="block w-20 py-4 mx-auto items-center font-black bg-teal-600 px-3 text-right text-gray-50 -mb-2 shadow">
                Laravel<br>Vue
            </a>
            <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Sign in to your account</h2>
            <p class="mt-2 text-center text-sm text-gray-600">
                <Link :href="route('marketing.home')" class="font-medium text-teal-600 hover:text-teal-500"><span class="text-sm font-semibold leading-6">&#8592;</span> Back to home page</Link>
            </p>
        </div>

        <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                <slot />
            </div>
        </div>
    </div>
</template>
