import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'

export const useGoldStore = defineStore('gold', () => {
  const count = useLocalStorage('gold', 0)

  function add(value: number) {
    count.value += value
  }
  function sub(value: number) {
    count.value -= value
  }

  return { count, add, sub }
})
