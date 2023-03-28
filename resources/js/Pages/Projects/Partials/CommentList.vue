<script setup>

import CommentListItem from "@/Pages/Projects/Partials/CommentListItem.vue";
import CommentFormCreateComment from "@/Pages/Projects/Partials/CommentFormCreateComment.vue";
import {usePage} from "@inertiajs/vue3";

const current_user = usePage().props.current_user;

const props = defineProps(['task'])

let comments = props.task.comments;

const addComment = ((comment) => {
    if (comment.task_id !== props.task.id) {
        return;
    }

    comments.push(comment);

});

window.Echo.private('App.Models.Comment')
    .listen('.CommentCreated', (e) => addComment(e.model))

</script>

<template>
    <div class="border-t border-gray-200 px-4 py-5 sm:px-6">
        <h4 class="font-medium text-sm text-gray-800">Comments</h4>
        <div class="max-h-96 overflow-y-scroll">
            <ul role="list" class="divide-y divide-gray-200">
                <CommentListItem v-for="comment in comments" :key="comment.id" :comment="comment" />
            </ul>
        </div>

        <CommentFormCreateComment :user="current_user" :task="task" />
    </div>
</template>
