<!-- We need this because post listings could be part of homefeed, community posts, user posts.. etc -->
<script setup>
import PostListing from './PostListing.vue';
defineProps({
    posts: {
        type: Array,
        required: true
    }
})



</script>

<template>

    <BListGroup>
        <template v-for="post in posts">
            <!-- <h1>{{ post.post.name }}</h1> -->
            <PostListing :title="post.post.name" :author="post.creator.name" :content="post.post.body"
                :datePosted="post.post.published" :upvotes="post.post.upvotes" :downvotes="post.post.downvotes" />
        </template>
    </BListGroup>

</template>