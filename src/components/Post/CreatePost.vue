<script setup>
import { ref } from 'vue';
import { lemmyClient } from '@/services/lemmyService';

const post_name = ref('');
const community_id = ref('');
const post_body = ref('');

async function submit_post() {
    const res = await lemmyClient.createPost({
        name: post_name.value,
        community_id: Number(community_id.value),
        body: post_body.value});

    console.log(res)
    }
</script>


<template>

    <form @submit.prevent="submit_post">
        <label>Name</label>
        <input v-model="post_name">
        <label>Body</label>
        <!-- v-model are automatically type casted to strings -->
         <!-- https://vuejs.org/guide/essentials/forms.html#number -->
        <textarea v-model="post_body"></textarea>
        <label>Community ID</label>
        <input v-model="community_id">
        <button>Post</button>
    </form>

</template>