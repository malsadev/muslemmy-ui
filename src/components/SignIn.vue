<script setup>
import { lemmyClient } from '@/services/lemmyService';
import { ref } from 'vue';


//TODO: form validations and error handling
// TODO: implemennt extra fields
const username = ref('')
const password = ref('')


async function submit_sign_in() {
    console.log("submit_sign_in")
    const res = await lemmyClient.login({
        username_or_email: username.value,
        password: password.value,
    });


    // in case I need the token
    localStorage.setItem("lemmy_token", res.jwt);

    lemmyClient.setHeaders({
        Authorization: `Bearer ${res.jwt}`,
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