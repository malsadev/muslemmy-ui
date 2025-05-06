<script setup>
import { lemmyClient } from '@/services/lemmyService';
import { UserService } from '@/services/UserService';
import { ref } from 'vue';
import { useRouter } from 'vue-router';


//TODO: form validations and error handling
// TODO: implemennt extra fields
const username = ref('')
const password = ref('')
const vpassword = ref('')
const answer = ref('')

const router = useRouter()

async function submit_admin_registration() {
    const res = await lemmyClient.register({username: username.value,
                                      password: password.value,
                                      password_verify: vpassword.value,
                                      answer: answer.value,
    });

    console.log(res)

    UserService.Instance.login(res);

    

    router.push("/SiteSetup")


};

</script>

<template>

    <h1>Admin Registration</h1>
    <form @submit.prevent="submit_admin_registration">
        <label>Username</label>
        <input v-model="username">
        <label>Password</label>
        <input v-model="password">
        <label>Password Verify</label>
        <input v-model="vpassword">
        <label>answer</label>
        <input v-model="answer">
        <button>Register</button>
    </form>

</template>