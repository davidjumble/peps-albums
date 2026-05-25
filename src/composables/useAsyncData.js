import { onScopeDispose, shallowRef } from 'vue'

export function useAsyncData(fetcher) {
  const data = shallowRef(null)
  const error = shallowRef(null)
  const isLoading = shallowRef(false)

  let controller = null

  async function run(...args) {
    controller?.abort()
    controller = new AbortController()
    const localController = controller

    isLoading.value = true
    error.value = null

    try {
      const result = await fetcher({ signal: localController.signal }, ...args)
      if (!localController.signal.aborted) data.value = result
    } catch (err) {
      if (err.name !== 'AbortError') error.value = err
    } finally {
      if (controller === localController) {
        isLoading.value = false
        controller = null
      }
    }
  }

  onScopeDispose(() => controller?.abort())

  return { data, error, isLoading, run }
}
