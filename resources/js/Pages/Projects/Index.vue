<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import { Head } from '@inertiajs/vue3';

import ProjectList from "@/Pages/Projects/Partials/ProjectList.vue";
import ProjectFormCreateProject from "@/Pages/Projects/Partials/ProjectFormCreateProject.vue";

</script>

<template>
    <Head title="Projects" />

    <AppLayout>
        <template #header>
            <div class="project_index_header">
                <h1 class="title">Projects</h1>

                <ProjectFormCreateProject />
            </div>
        </template>

        <ProjectList />
    </AppLayout>
</template>

<style scoped lang="scss">

    .project_index_header {
        @apply flex items-center justify-between;
        .title {
            @apply text-3xl font-bold tracking-tight text-gray-900;
        }
    }

</style>
