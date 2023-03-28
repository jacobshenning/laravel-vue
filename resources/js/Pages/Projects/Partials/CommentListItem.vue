<script setup>

const props = defineProps(['comment'])

</script>

<template>
    <li class="py-4">
        <div class="flex space-x-3">
            <span class="inline-block h-6 w-6 overflow-hidden rounded-full bg-gray-100">
                <svg class="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
            </span>
            <div class="flex-1 space-y-1">
                <div class="flex items-center justify-between">
                    <h3 class="text-sm font-medium">{{ props.comment.user.name }}</h3>
                    <p class="text-sm text-gray-500">{{ props.comment.posted_at }}</p>
                </div>
                <p class="text-sm text-gray-500">{{ props.comment.content }}</p>
            </div>
        </div>
    </li>
</template>
