<script setup>
// define props

defineProps({
    title: String,
    author: String,
    datePosted: String,
    content: String,
    upvotes: Number,
    downvotes: Number,
})

</script>

<!-- implement upvote count, downvote count, and buttons on the post listing -->

<template>

<!-- Apply Active State on hover Only -->
<BListGroupItem href="#" class="flex-column align-items-start">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">{{ title }}</h5>
      <small>{{ datePosted }}</small>
    </div>
    <p class="mb-1">
        {{ content }}
    </p>
    <!-- We should put small buttons here -->
    <small>Donec id elit non mi porta.</small>
  </BListGroupItem>

</template>