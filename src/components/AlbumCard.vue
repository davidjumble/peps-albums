<script setup>
defineProps({
  album: { type: Object, required: true },
})
</script>

<template>
  <RouterLink :to="{ name: 'album-detail', params: { id: album.id } }">
    <article>
      <h2>{{ album.title }}</h2>
      <p>{{ album.artist }} · {{ album.year }}</p>
    </article>
  </RouterLink>
</template>

<style scoped>
article {
  padding: 1.25rem 1rem;
}

p {
  margin-top: 0.5rem;
}
</style>
