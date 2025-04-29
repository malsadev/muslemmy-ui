<script setup>
</script>

<template>
    <nav>
        <RouterLink to="/">Site name</RouterLink>
        <RouterLink to="/Communities">Communities</RouterLink>
        <RouterLink to="/CreatePost">Create Post</RouterLink>
        <RouterLink to="/CreateCommunity">Create Community</RouterLink>
        <!-- Only when Admin is signed in -->
        <RouterLink to="/AdminDashboard">Setting</RouterLink>
        <label for="dropdown">Username</label>
        <select id="dropdown" name="dropdown">
            <option value="option1">Settings</option>
            <option value="option2">Log out</option>
        </select>

    </nav>
    <main>
        <RouterView></RouterView>
    </main>
</template>

<style scoped></style>
