<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import { Head } from '@inertiajs/vue3';

import { usePage } from "@inertiajs/vue3";
import StatusList from "@/Pages/Projects/Partials/StatusList.vue";
import Dropdown from "@/Components/Dropdown.vue";
import ProjectFormEditProject from "@/Pages/Projects/Partials/ProjectFormEditProject.vue";
import ProjectFormDeleteProject from "@/Pages/Projects/Partials/ProjectFormDeleteProject.vue";
import ProjectFormRestoreProject from "@/Pages/Projects/Partials/ProjectFormRestoreProject.vue";

let project = usePage().props.project;

const updateProject = ((id, data) => {
    if (project.id !== id) {
        return;
    }

    for (const i in data) {
        project[i] = data[i];
    }
});

window.Echo.private('App.Models.Project')
    .listen('.ProjectRestored', (e) => updateProject(e.model.id, e.model))
    .listen('.ProjectDeleted', (e) => updateProject(e.model.id, e.model))
    .listen('.ProjectUpdated', (e) => updateProject(e.model.id, e.model));

</script>

<template>
    <Head title="Projects" />

    <AppLayout>
        <template #header>
            <h1 class="projects_show_header">Project</h1>
        </template>


        <div class="projects_show">
            <div class="details">
                <h2 class="title">{{ project.name }}</h2>
                <p class="description">{{ project.description }}</p>
            </div>
            <div class="actions">
                <Dropdown>

                    <template #trigger>
                        <button type="button" class="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white bg-transparent text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2">
                            <span class="sr-only">Open options</span>
                            <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path d="M10 3a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM10 8.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM11.5 15.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z" />
                            </svg>
                        </button>
                    </template>


                    <template #content>
                        <ProjectFormEditProject :project="project" />
                        <ProjectFormDeleteProject v-if="project.deleted_at === null" :project="project" />
                        <ProjectFormRestoreProject v-else :project="project" />
                    </template>

                </Dropdown>
            </div>
        </div>


        <StatusList />

    </AppLayout>
</template>

<style scoped lang="scss">
    .projects_show_header {
        @apply text-3xl font-bold tracking-tight text-gray-900;
    }

    .projects_show {
        @apply bg-white shadow sm:rounded-lg mb-5 flex justify-between items-start;
        .details {
            @apply px-4 py-5 sm:px-6 border-gray-200;
            .title {
                @apply font-semibold text-xl leading-8 text-gray-900;
            }
            .description {
                @apply mt-1 max-w-2xl text-sm text-gray-500;
            }
        }
        .actions {
            @apply px-4 py-5 sm:px-6 border-gray-200
        }
    }
</style>
