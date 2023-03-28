<script setup>

import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import TextInput from '@/Components/TextInput.vue';

import PrimaryButton from "@/Components/PrimaryButton.vue";
import SecondaryButton from "@/Components/SecondaryButton.vue";

import Modal from '@/Components/Modal.vue';
import { ref } from "vue";
import { useForm } from "@inertiajs/vue3";

const props = defineProps(['project']);

const modalOpen = ref(false);

const toggleModal = (value) => {
    modalOpen.value = ! modalOpen.value;
}

const form = useForm({
    name: props.project.name,
    description: props.project.description,
});


function submit() {
    form.patch(route('projects.update', props.project.id), {
        onSuccess: () => {
            form.reset();
            toggleModal(false);
        }
    });
}

</script>

<template>

    <a @click.prevent="toggleModal" href="#" class="block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out">Edit</a>

    <Modal :show="modalOpen" @close="toggleModal">

        <form class="project_form_create_project" @submit.prevent="submit">

            <h3 class="title">Edit project</h3>

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


            <div class="actions">
                <SecondaryButton @click="toggleModal"> Cancel </SecondaryButton>
                <PrimaryButton :disabled="form.processing" class="ml-3">
                    Update Project
                </PrimaryButton>
            </div>
        </form>
    </Modal>
</template>

<style scoped lang="scss">
.project_form_create_project {
    @apply p-6;
    .title {
        @apply font-semibold text-xl text-gray-800 leading-tight;
    }
    .actions {
        @apply mt-6 flex justify-end;
    }
}
</style>
