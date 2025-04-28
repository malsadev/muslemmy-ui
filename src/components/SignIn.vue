<script setup>
import { lemmyClient } from '@/services/lemmyService';
import { ref } from 'vue';

const username = ref('')
const password = ref('')


async function submit_sign_in() {
    console.log("submit_sign_in")
    const res = await lemmyClient.login({username_or_email: username.value,
                                      password: password.value,
    });

    console.log(res)

};

</script>


<template>
    <h1>User Sign In</h1>
    <form @submit.prevent="submit_sign_in">
        <label>Username or Email</label>
        <input v-model="username">
        <label>Password</label>
        <input v-model="password">
        <button>Sign In</button>
    </form>
</template>