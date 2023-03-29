<script setup>

import StatusListItem from "@/Pages/Projects/Partials/StatusListItem.vue";
import {usePage} from "@inertiajs/vue3";
import StatusFormCreateStatus from "@/Pages/Projects/Partials/StatusFormCreateStatus.vue";
import InputTabSelect from "@/Components/InputTabSelect.vue";
import {ref} from "vue";

const filters = ['Active', 'Deleted', 'All'];
let selected_filter = ref('Active');

let project = usePage().props.project;
let statuses = usePage().props.statuses;

const addStatus = ((project_id, data) => {
    if (project.id !== project_id) {
        return;
    }

    statuses.push(data);
});

const updateStatus = ((status) => {
    if (project.id !== status.project.id) {
        return;
    }

    for (let i = 0; i < statuses.length; i++) {
        if (statuses[i].id === status.id) {
            statuses[i] = status;
            return;
        }
    }
});

if (typeof window !== 'undefined') {
    window.Echo.private('App.Models.Status')
        .listen('.StatusCreated', (e) => addStatus(e.model.project.id, e.model))
        .listen('.StatusUpdated', (e) => updateStatus(e.model))
        .listen('.StatusRestored', (e) => updateStatus(e.model))
        .listen('.StatusTrashed', (e) => updateStatus(e.model))
        .listen('.StatusDeleted', (e) => updateStatus(e.model));
}

</script>

<template>

    <InputTabSelect :options="filters" v-model="selected_filter" />

    <div class="overflow-x-scroll flex items-start pb-5">

        <StatusListItem v-if="selected_filter === 'Active'" v-for="status in statuses.filter(status => status.deleted_at === null)" :key="status.id" :status="status" />
        <StatusListItem v-else-if="selected_filter === 'Deleted'" v-for="status in statuses.filter(status => status.deleted_at !== null)" :key="status.id" :status="status" />
        <StatusListItem v-else v-for="status in statuses" :key="status.id" :status="status" />

        <StatusFormCreateStatus :project_id="project.id" />

    </div>

</template>
