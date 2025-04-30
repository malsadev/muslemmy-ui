<script setup>
import { lemmyClient } from '@/services/lemmyService';
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';


//TODO: form validations and error handling
// TODO: implemennt extra fields
const username = ref('')
const password = ref('')
const router = useRouter()
const route = useRoute()


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

    // Redirect to the original page or default to '/'
    console.log(route)
    const redirectPath = route.query.redirect || '/';
    router.push(redirectPath);

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