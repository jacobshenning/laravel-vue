<script setup>

import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import TextInput from '@/Components/TextInput.vue';

import PrimaryButton from "@/Components/PrimaryButton.vue";
import SecondaryButton from "@/Components/SecondaryButton.vue";

import Modal from '@/Components/Modal.vue';
import { ref } from "vue";
import {useForm, usePage} from "@inertiajs/vue3";

const users = usePage().props.users;
const current_user = usePage().props.current_user;

const props = defineProps(['status_id']);

const modalOpen = ref(false);

const toggleModal = (value) => {
    modalOpen.value = ! modalOpen.value;
}

const form = useForm({
    name: '',
    description: '',
    due: '',
    complete: false,
    status_id: props.status_id,
    user_id: current_user.id
});


function submit() {
    form.post(route('tasks.store'), {
        onSuccess: () => {
            form.reset();
            toggleModal(false);
        }
    });
}


</script>

<template>
    <button @click="toggleModal" type="button" class="px-4 py-4 sm:px-6 flex items-center justify-between hover:bg-gray-50">
        <span class="block text-sm font-medium text-gray-900">Add Task</span>
        <svg class="h-5 w-5 text-gray-400 group-hover:text-gray-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
        </svg>
    </button>

    <Modal :show="modalOpen" @close="toggleModal">

        <form class="p-6" @submit.prevent="submit">

            <div>
                <h3 class="font-semibold text-xl text-gray-800 leading-tight">Create new task</h3>
            </div>

            <div class="pt-6">
                <div class="mb-6">
                    <InputLabel for="name" value="Name" />

                    <TextInput
                        id="name"
                        type="text"
                        class="mt-1 block w-full"
                        v-model="form.name"
                        required
                        autofocus
                        autocomplete="name"
                    />

                    <InputError class="mt-2" :message="form.errors.name" />
                </div>

                <div class="mb-6">
                    <InputLabel for="description" value="Description" />

                    <TextInput
                        id="description"
                        type="text"
                        class="mt-1 block w-full"
                        v-model="form.description"
                        required
                        autofocus
                        autocomplete="description"
                    />

                    <InputError class="mt-2" :message="form.errors.description" />
                </div>

                <div class="mb-6">
                    <label for="location" class="block text-sm font-medium leading-6 text-gray-900">User</label>
                    <select v-model="form.user_id" id="location" name="location" class="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-teal-600 sm:text-sm sm:leading-6">
                        <option v-for="user in users" :value="user.id">{{ user.name }}</option>
                    </select>
                </div>


                <div>
                    <InputLabel for="due" value="Due Date" />

                    <TextInput
                        id="due"
                        type="date"
                        class="mt-1 block w-full"
                        v-model="form.due"
                        required
                        autofocus
                        autocomplete="due"
                    />

                    <InputError class="mt-2" :message="form.errors.description" />
                </div>


            </div>


            <div class="mt-6 flex justify-end">
                <SecondaryButton @click="toggleModal"> Cancel </SecondaryButton>
                <PrimaryButton :disabled="form.processing" class="ml-3">
                    Create Task
                </PrimaryButton>
            </div>
        </form>
    </Modal>
</template>
