<script setup>

import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import TextInput from '@/Components/TextInput.vue';

import PrimaryButton from "@/Components/PrimaryButton.vue";
import SecondaryButton from "@/Components/SecondaryButton.vue";

import Modal from '@/Components/Modal.vue';
import { ref } from "vue";
import { useForm } from "@inertiajs/vue3";

const props = defineProps(['project_id']);

const modalOpen = ref(false);

const toggleModal = (value) => {
    modalOpen.value = ! modalOpen.value;
}

const form = useForm({
    name: '',
    description: '',
    project_id: props.project_id
});


function submit() {
    form.post(route('statuses.store'), {
        onSuccess: () => {
            form.reset();
            toggleModal(false);
        }
    });
}


</script>

<template>
    <div class="block w-96 overflow-hidden shrink-0">

            <button @click="toggleModal" type="button" class="relative block w-full h-full rounded-lg border-2 border-dashed border-gray-300 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mx-auto h-12 w-12 text-gray-400">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z" />
                </svg>
                <span class="mt-2 block text-sm font-semibold text-gray-900">Add Status</span>
            </button>


    </div>

    <Modal :show="modalOpen" @close="toggleModal">

        <form class="p-6" @submit.prevent="submit">

            <div>
                <h3 class="font-semibold text-xl text-gray-800 leading-tight">Create new status</h3>
            </div>

            <div class="pt-6">
                <div class="mb-8">
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

                <div>
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

            </div>


            <div class="mt-6 flex justify-end">
                <SecondaryButton @click="toggleModal"> Cancel </SecondaryButton>
                <PrimaryButton :disabled="form.processing" class="ml-3">
                    Create Status
                </PrimaryButton>
            </div>
        </form>
    </Modal>
</template>
