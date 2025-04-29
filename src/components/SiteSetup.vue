<script setup>
import { ref } from 'vue';
import { lemmyClient } from '@/services/lemmyService';

//TODO: form validations and error handling
// TODO: implemennt extra fields
const site_name = ref('')


async function submit_site_setup() {
    console.log(localStorage.getItem("lemmy_token"))
    console.log(lemmyClient.getHeaders())
    const res = await lemmyClient.createSite({
        name: site_name.value,
    });
    console.log(res)
}

</script>


<template>
    <h1>Site Setup</h1>
    <form @submit.prevent="submit_site_setup">
        <label>Site Name</label>
        <input v-model="site_name">
        <button>Create Site</button>
    </form>
    
</template>