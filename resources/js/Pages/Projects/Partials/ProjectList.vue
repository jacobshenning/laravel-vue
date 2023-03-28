<script setup>

import { usePage } from "@inertiajs/vue3";
import ProjectListItem from "@/Pages/Projects/Partials/ProjectListItem.vue";
import InputTabSelect from "@/Components/InputTabSelect.vue";
import { ref } from "vue";

const projects = usePage().props.projects;
const filters = ['Active', 'Deleted', 'All'];
let selected_filter = ref('Active');

const addProject = ((project) => {
    projects.push(project);
});

const updateProject = ((id, data) => {
    const index = projects.findIndex(project => project.id === id);

    projects[index] = data;
});


window.Echo.private('App.Models.Project')
    .listen('.ProjectCreated', (e) => addProject(e.model))
    .listen('.ProjectRestored', (e) => updateProject(e.model.id, e.model))
    .listen('.ProjectDeleted', (e) => updateProject(e.model.id, e.model))
    .listen('.ProjectTrashed', (e) => updateProject(e.model.id, e.model))
    .listen('.ProjectUpdated', (e) => updateProject(e.model.id, e.model));

</script>

<template>
    <InputTabSelect :options="filters" v-model="selected_filter" />

    <ul role="list" class="project_list">
        <ProjectListItem v-if="selected_filter === 'Deleted'" v-for="project in projects.filter(project => project.deleted_at !== null)" :key="project.id" :project="project" />
        <ProjectListItem v-else-if="selected_filter === 'Active'" v-for="project in projects.filter(project => project.deleted_at === null)" :key="project.id" :project="project" />
        <ProjectListItem v-else v-for="project in projects" :key="project.id" :project="project" />
    </ul>
</template>

<style scoped lang="scss">
    .project_list {
        @apply mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3;
    }
</style>


