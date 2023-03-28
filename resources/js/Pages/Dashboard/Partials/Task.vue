<script setup>
import Modal from "@/Components/Modal.vue";
import {ref} from "vue";
import CommentList from "@/Pages/Projects/Partials/CommentList.vue";
import TextInput from "@/Components/TextInput.vue";
import InputLabel from "@/Components/InputLabel.vue";
import InputError from "@/Components/InputError.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import SecondaryButton from "@/Components/SecondaryButton.vue";
import {useForm, usePage} from "@inertiajs/vue3";

const props = defineProps(['task'])

const users = usePage().props.users;
const projects = usePage().props.projects;
let project = null;

for (let i = 0; i < projects.length; i++) {
    if (props.task.status.project.id === projects[i].id) {
        project = projects[i];
    }
}

let editMode = ref(false);
const modalOpen = ref(false);

const form = useForm({
    name: props.task.name,
    description: props.task.description,
    due: props.task.due,
    status_id: props.task.status_id,
    user_id: props.task.user_id,
});

const completeForm = useForm({
    complete: ! props.task.complete
});

const completeTask = (() => {
    completeForm.put(route('tasks.toggle', props.task.id), {
    });
});

const toggleModal = () => {
    closeEdit();

    modalOpen.value = ! modalOpen.value;
}

const closeEdit = (() => {
    editMode.value = false;
    form.reset();
});

const submit = (() => {
    form.patch(route('tasks.update', props.task.id), {
        onSuccess: () => {
            closeEdit();
        }
    });
});

</script>

<template>
    <div @click="toggleModal" class="px-4 py-4 sm:px-6 hover:bg-gray-50 cursor-pointer">
        <div class="flex items-center pt-2 pb-1">
            <input :checked="task.complete" @click.prevent="" id="complete" name="complete" type="checkbox" class="cursor-pointer h-4 w-4 mr-2 rounded border-gray-300 text-teal-600 focus:ring-0">
            <h3 class="text-sm font-medium">{{ task.name }}</h3>
        </div>
        <p class="text-xs text-gray-600 whitespace-normal">{{ task.description }}</p>
    </div>

    <Modal :show="modalOpen" @close="toggleModal">
        <div class="overflow-hidden bg-white shadow sm:rounded-lg">

            <form v-if="editMode" @submit.prevent="submit" class="py-2">

                <div class="px-4 py-5 sm:px-6">
                    <h3 class="text-base font-semibold leading-3 text-gray-900">Edit Task</h3>
                    <p class="mt-2 max-w-2xl text-sm text-gray-500">Modify the task</p>
                </div>

                <div class="border-t border-gray-200 px-4 py-5 sm:px-6">

                    <div>

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

                        <div class="mb-6">
                            <label for="location" class="block text-sm font-medium leading-6 text-gray-900">Statuses</label>
                            <select v-model="form.status_id" id="location" name="location" class="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-teal-600 sm:text-sm sm:leading-6">
                                <option v-for="status in project.statuses.filter(status => status.deleted_at === null)" :value="status.id">{{ status.name }}</option>
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
                </div>


                <div class="border-t border-gray-200 px-4 py-5 sm:px-6 mt-6 flex justify-end">

                    <SecondaryButton @click="closeEdit"> Cancel </SecondaryButton>
                    <PrimaryButton :disabled="form.processing" class="ml-3">
                        Update status
                    </PrimaryButton>
                </div>


            </form>
            <div v-else>
                <div class="px-4 py-5 sm:px-6">
                    <div class="flex items-center pt-2 pb-1">
                        <input @click.prevent="completeTask" :checked="task.complete" id="checked" name="checked" type="checkbox" class="cursor-pointer h-4 w-4 mr-2 rounded border-gray-300 text-teal-600 focus:ring-teal-600">
                        <h3 class="text-base font-semibold leading-3 text-gray-900">{{ task.name }}</h3>
                        <a href="#" @click="editMode = !editMode" class="ml-auto">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 text-gray-600 hover:text-gray-800">
                                <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
                                <path d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
                            </svg>
                        </a>
                    </div>
                    <p class="mt-1 max-w-2xl text-sm text-gray-500">{{ task.description }}</p>
                </div>
                <div class="border-t border-gray-200 px-4 py-5 sm:px-6">
                    <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                        <div class="sm:col-span-1">
                            <dt class="text-sm font-medium text-gray-500">Assigned to</dt>
                            <dd class="mt-1 text-sm text-gray-900">{{ task.user.name }}</dd>
                        </div>
                        <div class="sm:col-span-1">
                            <dt class="text-sm font-medium text-gray-500">Due</dt>
                            <dd class="mt-1 text-sm text-gray-900">{{ task.due_date }}</dd>
                        </div>
                    </dl>
                </div>

                <CommentList :task="task"  />

            </div>

        </div>

    </Modal>
</template>
