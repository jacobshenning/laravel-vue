<script setup>

const props = defineProps(['options', 'modelValue']),
      emit = defineEmits(['update:modelValue', 'change']);

const updateModelValue = ((value) => {
    emit('update:modelValue', value);
    emit('change');
});

</script>

<template>
    <div class="input_tab_select">
        <div class="select">
            <label for="current-tab">Select a tab</label>
            <select id="current-tab" name="current-tab" :value="modelValue" @input="updateModelValue($event.target.value)">
                <option v-for="option in props.options" :value="option">{{ option }}</option>
            </select>
        </div>
        <div class="tabs">
            <nav>
                <a v-for="option in props.options" href="#" @click.prevent="updateModelValue(option)" :class="{ active: option === modelValue }">{{ option }}</a>
            </nav>
        </div>
    </div>
</template>

<style scoped lang="scss">

    .input_tab_select {
        @apply mt-3 sm:mt-4 py-3;

        .select {
            @apply sm:hidden;
            label {
                @apply sr-only;
            }
            select {
                @apply block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-teal-500 focus:outline-none focus:ring-teal-500 sm:text-sm cursor-pointer;
            }
        }

        .tabs {
            @apply hidden sm:block;
            nav {
                @apply -mb-px flex space-x-8;
                a {
                    @apply whitespace-nowrap px-1 pb-4 text-sm font-medium;
                    &:not(.active) {
                        @apply text-gray-500 hover:text-gray-700;
                    }
                    &.active {
                        @apply text-teal-600;
                    }
                }
            }
        }
    }

</style>
