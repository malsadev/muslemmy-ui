<script setup>
import { ref } from 'vue';
import { lemmyClient } from '@/services/lemmyService';

const post_name = ref('');
const community_id = ref('');

async function submit_post() {
    console.log(localStorage.getItem("lemmy_token"))
    const res = await lemmyClient.createPost({
        name: post_name.value,
        community_id: community_id.value,});

    console.log(res)
    }
</script>


<template>

    <form @submit.prevent="submit_post">
        <label>Name</label>
        <input v-model="post_name">
        <label>Community ID</label>
        <input v-model="community_id">
        <button>Post</button>
    </form>

</template>