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
        <div class="drop-down">
            <button>username</button>
            <div class="menue">
                <RouterLink to="/users/username">
                    <option>Profile</option>
                </RouterLink>
                <RouterLink to="/settings">
                    <option>Settings</option>
                </RouterLink>
                <RouterLink to="/logout">
                    <option>Log out</option>
                </RouterLink>

            </div>

        </div>

    </nav>
    <main>
        <RouterView></RouterView>
    </main>
</template>

<style scoped></style>
