<script setup>

import TaskListItem from "@/Pages/Projects/Partials/TaskListItem.vue";
import TaskFormCreateTask from "@/Pages/Projects/Partials/TaskFormCreateTask.vue";

const props = defineProps(['status']);
const tasks = props.status.tasks;

const addTask = ((status_id, data) => {
    if (props.status.id !== status_id) {
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


if (typeof window !== 'undefined') {
    window.Echo.private('App.Models.Task')
        .listen('.TaskCreated', (e) => addTask(e.model.status.id, e.model))
        .listen('.TaskUpdated', (e) => updateTask(e.model.id, e.model));
}

</script>

<template>

    <div class="grid grid-cols-1 divide-y">

        <TaskListItem v-for="task in tasks" :key="task.id" :task="task" />

        <TaskFormCreateTask :status_id="props.status.id" />
    </div>
</template>
