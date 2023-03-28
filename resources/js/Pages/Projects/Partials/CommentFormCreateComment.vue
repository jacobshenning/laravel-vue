<script setup>

import InputError from '@/Components/InputError.vue';
import {useForm} from "@inertiajs/vue3";

const props = defineProps(['task', 'user'])

const form = useForm({
    content: '',
    task_id: props.task.id,
    user_id: props.user.id
});

function submit() {
    form.post(route('comments.store'), {
        onSuccess: () => {
            form.reset();
        }
    });
}

</script>

<template>
    <form action="#" @submit.prevent="submit">
        <div class="flex items-start space-x-4 mt-6">
            <div class="flex-shrink-0">
                <span class="inline-block h-10 w-10 overflow-hidden rounded-full bg-gray-100">
                    <svg class="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                </span>
            </div>
            <div class="min-w-0 flex-1">
                <div class="border-b border-gray-200 focus-within:border-teal-600">
                    <label for="comment" class="sr-only">Add your comment</label>
                    <textarea v-model="form.content" rows="3" name="comment" id="comment" class="block w-full resize-none border-0 border-b border-transparent p-0 pb-2 text-gray-900 placeholder:text-gray-400 focus:border-teal-600 focus:ring-0 sm:text-sm sm:leading-6" placeholder="Add your comment..."></textarea>
                </div>
            </div>

            <InputError class="mt-2" v-for="error in form.errors" :message="error" />
        </div>

        <div class="mt-2 flex justify-end">
            <button type="submit" class="inline-flex items-center rounded-md bg-teal-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600">Post</button>
        </div>
    </form>
</template>
