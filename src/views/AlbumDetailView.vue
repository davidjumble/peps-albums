<script setup>
import { onMounted, watch } from 'vue'
import { albumsApi } from '@/api/albums'
import { useAsyncData } from '@/composables/useAsyncData'
import ReviewItem from '@/components/ReviewItem.vue'

const props = defineProps({
  id: { type: String, required: true },
})

const album = useAsyncData((opts) => albumsApi.get(props.id, opts))
const reviews = useAsyncData((opts) => albumsApi.reviews(props.id, opts))

function load() {
  album.run()
  reviews.run()
}

onMounted(load)
watch(() => props.id, load)
</script>

<template>
  <section>
    <p class="back"><RouterLink :to="{ name: 'albums' }">← All albums</RouterLink></p>

    <p v-if="album.isLoading.value">Loading album…</p>
    <p v-else-if="album.error.value">Couldn't load album: {{ album.error.value.message }}</p>

    <article v-else-if="album.data.value">
      <h1>{{ album.data.value.title }}</h1>
      <p>{{ album.data.value.artist }} · {{ album.data.value.year }}</p>
    </article>

    <h2>Reviews</h2>

    <p v-if="reviews.isLoading.value">Loading reviews…</p>
    <p v-else-if="reviews.error.value">Couldn't load reviews: {{ reviews.error.value.message }}</p>
    <p v-else-if="reviews.data.value && reviews.data.value.length === 0">No reviews yet.</p>

    <ul v-else-if="reviews.data.value">
      <li v-for="review in reviews.data.value" :key="review.id">
        <ReviewItem :review="review" />
      </li>
    </ul>
  </section>
</template>

<style scoped>
section {
  padding: 1.5rem 1rem;
}

.back {
  display: inline-block;
  margin-bottom: 1.5rem;
}
</style>
