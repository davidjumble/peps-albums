<script setup>
import { onMounted } from 'vue'
import { albumsApi } from '@/api/albums'
import { useAsyncData } from '@/composables/useAsyncData'
import AlbumCard from '@/components/AlbumCard.vue'

const { data: albums, error, isLoading, run } = useAsyncData(albumsApi.list)

onMounted(run)
</script>

<template>
  <section>
    <header>
      <img src="/peprecord.png" alt="Pep Guardiola" />
    </header>

    <p v-if="isLoading">Loading albums…</p>
    <p v-else-if="error">Couldn't load albums: {{ error.message }}</p>
    <p v-else-if="albums && albums.length === 0">No albums yet.</p>

    <ul v-else-if="albums">
      <li v-for="album in albums" :key="album.id">
        <AlbumCard :album="album" />
      </li>
    </ul>
  </section>
</template>

<style scoped>
header {
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
  background-color: black;
}

img {
  max-width: 280px;
  width: 100%;
}
</style>
