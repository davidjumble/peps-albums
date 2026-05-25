import { request } from './http'

export const albumsApi = {
  list: (options) => request('/albums', options),
  get: (id, options) => request(`/albums/${id}`, options),
  reviews: (id, options) => request(`/albums/${id}/reviews`, options),
}
