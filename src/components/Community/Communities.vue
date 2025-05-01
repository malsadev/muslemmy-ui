<script setup>
import { lemmyClient } from '@/services/lemmyService';
import { ref } from 'vue';



// let communities = ref([])
// const cms  = await lemmyClient.listCommunities()
async function getCommunities() {
    // const communities = ref([])
    const cms = await lemmyClient.listCommunities()
    // communities.value = cms.communities
    return cms
}

const communities = ref([])
getCommunities().then((res) => {
    console.log(res.communities)
    communities.value = res.communities
})

async function join_community(community_id) {
    const res = await lemmyClient.followCommunity({
        community_id: community_id,
        follow: true,
    })

    console.log(res)
}



// console.log(communities)

// we need to call the api to get the communities

</script>

<template>

    <h1>Communities</h1>

    <ul>
        <li v-for="communityObj in communities">
            <h2>{{ communityObj.community.name }}</h2>
            <p>{{ communityObj.community.title }}</p>
            <p>Members: {{ communityObj.community.subscribers }}</p>
            <p>Posts: {{ communityObj.community.posts }}</p>
            <span>Community id: {{ communityObj.community.id }}</span>
            <Button @click="join_community(communityObj.community.id)">Join</Button>
        </li>

    </ul>




</template>