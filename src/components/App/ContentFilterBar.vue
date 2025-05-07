<script setup>
// This should emit events to the parent component which the parent compoenent then should use to customize the post listing

</script>


<template>
    <div class="content-filter-bar d-inline">
        <BButtonGroup aria-label="Content Type Selection">
            <BButton @click="$emit('changeToPosts')">Posts</BButton>
            <BButton @click="$emit('changeToComments')">Comments</BButton>
        </BButtonGroup>
    </div>

    <div class="community-filter-bar d-inline">
        <BButtonGroup aria-label="Community List Type Selection">
            <BButton @click="$emit('changeToSubscribed')">Subscribed</BButton>
            <BButton @click="$emit('changeToLocal')">Local</BButton>
            <BButton @click="$emit('changeToAll')">All</BButton>
        </BButtonGroup>
    </div>


</template>