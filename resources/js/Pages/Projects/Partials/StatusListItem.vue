<script setup>

import TaskList from "@/Pages/Projects/Partials/TaskList.vue";
import Dropdown from "@/Components/Dropdown.vue";
import StatusFormEditStatus from "@/Pages/Projects/Partials/StatusFormEditStatus.vue";
import StatusFormDeleteStatus from "@/Pages/Projects/Partials/StatusFormDeleteStatus.vue";
import StatusFormRestoreStatus from "@/Pages/Projects/Partials/StatusFormRestoreStatus.vue";

const props = defineProps(['status'])

</script>

<template>
    <div class="status_list_item">

        <div class="header">
            <div>
                <h2 class="name">{{ status.name }}</h2>
                <p class="description">{{ status.description }}</p>
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
                        <StatusFormEditStatus :status="status" />
                        <StatusFormDeleteStatus v-if="status.deleted_at === null" :status="status" />
                        <StatusFormRestoreStatus v-else :status="status" />
                    </template>

                </Dropdown>
            </div>
        </div>

        <TaskList :status="props.status" />

    </div>
</template>

<style scoped lang="scss">
    .status_list_item {
        @apply overflow-hidden bg-white shadow sm:rounded-md w-96 mr-5 shrink-0;
        .header {
            @apply px-4 py-5 sm:px-6 border-b border-gray-200 flex justify-between;
            .name {
                @apply font-semibold text-xl leading-8 text-gray-900;
            }
            .description {
                @apply mt-1 max-w-2xl text-sm text-gray-500;
            }
        }
    }
</style>
