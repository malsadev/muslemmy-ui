<!-- Bascially here, I need to the list to change based on how I want to sorting of posts, comments to be,  now all changing the
sort type neciistates an an api call but the view remains the same -->
<!-- Also the path could math queries or options wi -->

<script setup>
import { lemmyClient } from '@/services/lemmyService';
import { ref, watch} from 'vue';
import CustomizeBar from './App/ContentFilterBar.vue';
import PostListings from './Post/PostListings.vue';

// How to deal with pagination cursors?
const postContentType = "posts";
const commentContentType = "comments";

const localCommunityListType = "Local";
const subscribedCommunityListType = "Subscribed"
const allCommunityListType = "All"

const posts = ref([]);
const comments = ref([]);
const currentContentType = ref(postContentType); // 'posts' or 'comments'
const currentCommunityListType = ref(localCommunityListType)

async function fetchPosts() { //Change browser URl to indicate current query?
    console.log("fetching posts in ", currentCommunityListType.value)    
    currentContentType.value = postContentType;
    try {
        const response = await lemmyClient.getPosts({
            type_: currentCommunityListType.value,
        })
        posts.value = response.posts;
    } catch (error) {
        console.error('Error fetching posts:', error);
    }
    return posts;
}

// https://vuejs.org/guide/essentials/watchers.html
watch(currentCommunityListType, () => {
    fetchPosts();
});

async function fetchComments() {
    console.log("fetching comments in ", currentCommunityListType.value)
    currentContentType.value = commentContentType;
    try {
        const response = await lemmyClient.getComments();
        comments.value = response.comments;
    } catch (error) {
        console.error('Error fetching posts:', error);
    }
}

fetchPosts();

</script>


<template >
    <CustomizeBar @changeToPosts="fetchPosts" @changeToComments="fetchComments" 
        @changeToLocal=" currentCommunityListType = localCommunityListType"
        @changeToSubscribed=" currentCommunityListType = subscribedCommunityListType "
        @changeToAll=" currentCommunityListType = allCommunityListType "/>
    <PostListings v-if="currentContentType == 'posts'" :posts="posts"/>
    <!-- TODO -->
    <!-- <CommentListings v-else-if="currentContentType == comments" :comments="comments"/> -->

</template>