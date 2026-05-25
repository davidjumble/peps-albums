<script setup>
defineProps({
  review: { type: Object, required: true },
})
</script>

<template>
  <article>
    <header>
      <strong>{{ review.author }}</strong>
    </header>
    <p>{{ review.review_text }}</p>
  </article>
</template>

<style scoped>
article {
  padding: 1.25rem 1rem;
}

p {
  margin-top: 0.5rem;
}
</style>
