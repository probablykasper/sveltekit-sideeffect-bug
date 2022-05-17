import { writable } from 'svelte/store'
import { parseError } from './helpers'

type Message = string | null
export const messages = (() => {
  const store = writable([] as Message[])

  function show(message: string, delay = 3000) {
    store.update((messages) => {
      const i = messages.length
      messages.push(message)
      hide(i, delay)
      return messages
    })
  }

  function error(error: unknown, delay = 3000) {
    console.error(error)
    console.error(new Error(parseError(error)))
    show(parseError(error), delay)
  }

  function hide(index: number, delay: number) {
    setTimeout(() => {
      store.update((messages) => {
        messages[index] = null
        return messages
      })
    }, delay)
  }

  return {
    subscribe: store.subscribe,
    show,
    error,
  }
})()
