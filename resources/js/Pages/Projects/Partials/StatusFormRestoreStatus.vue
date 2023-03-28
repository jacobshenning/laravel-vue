<script setup>

import SecondaryButton from "@/Components/SecondaryButton.vue";

import Modal from '@/Components/Modal.vue';
import { ref } from "vue";
import { useForm } from "@inertiajs/vue3";
import PrimaryButton from "@/Components/PrimaryButton.vue";

const props = defineProps(['status']);

const modalOpen = ref(false);

const toggleModal = (value) => {
    modalOpen.value = ! modalOpen.value;
}

const form = useForm({});

function submit() {
    form.post(route('statuses.restore', props.status.id), {
        onSuccess: () => {
            form.reset();
            toggleModal(false);
        }
    });
}

</script>

<template>

    <a @click.prevent="toggleModal" href="#" class="block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out">Restore</a>

    <Modal :show="modalOpen" @close="toggleModal">

        <form class="status_form_create_status" @submit.prevent="submit">

            <h3 class="title">Restore status</h3>

            <p class="text-sm text-gray-600 py-2">This status has been deleted, but you can restore it. </p>

            <div class="actions">
                <SecondaryButton @click="toggleModal"> Cancel </SecondaryButton>
                <PrimaryButton :disabled="form.processing" class="ml-3">
                    Restore this status
                </PrimaryButton>
            </div>
        </form>
    </Modal>
</template>

<style scoped lang="scss">
.status_form_create_status {
    @apply p-6;
    .title {
        @apply font-semibold text-xl text-gray-800 leading-tight;
    }
    .actions {
        @apply mt-6 flex justify-end;
    }
}
</style>
