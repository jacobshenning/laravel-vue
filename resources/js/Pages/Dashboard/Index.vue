<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import {Head, usePage} from '@inertiajs/vue3';
import Task from "@/Pages/Dashboard/Partials/Task.vue";

const tasks = usePage().props.tasks;
const current_user = usePage().props.current_user;

const addTask = ((user_id, data) => {
    if (current_user.id !== user_id) {
        return;
    }

    tasks.push(data);
});

const updateTask = ((task_id, data) => {
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].id === task_id) {
            tasks[i] = data;
            return;
        }
    }
});

window.Echo.private('App.Models.Task')
    .listen('.TaskCreated', (e) => addTask(e.model.user.id, e.model))
    .listen('.TaskUpdated', (e) => updateTask(e.model.id, e.model));

</script>

<template>
    <Head title="Dashboard" />

    <AppLayout>
        <template #header>
            <h1 class="text-3xl font-bold tracking-tight text-gray-900">Dashboard</h1>
        </template>

        <div class="overflow-hidden bg-white shadow sm:rounded-lg mb-5">

            <div class="px-4 py-5 sm:px-6">
                <h3 class="font-semibold leading-8 text-gray-900 mb-2">My tasks</h3>

                <Task v-for="task in tasks.filter(task => task.complete == 0)" :key="task.id" :task="task" />

            </div>
        </div>

    </AppLayout>
</template>
