<script setup>
import { ref } from 'vue';
import { lemmyClient } from '@/services/lemmyService';

const community_name = ref('');
const community_title = ref('');

async function submit_community() {
    const res = await lemmyClient.createCommunity({
        name: community_name.value,
        title: community_title.value,
    });

    console.log(res);
}


</script>

<template>
    <form @submit.prevent="submit_community">
        <label>Community Name</label>
        <input v-model="community_name">
        <label>Community Title</label>
        <input v-model="community_title">
        <button>Create Community</button>
    </form>
</template>