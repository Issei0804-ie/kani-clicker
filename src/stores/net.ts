import { computed } from 'vue'
import { defineStore } from 'pinia'
import { useGoldStore } from '@/stores/gold'
import { useLocalStorage } from '@vueuse/core'

export const useNetStore = defineStore('net', () => {
  const originalPower = 0.1
  const power = useLocalStorage('net/power', 0)
  const setPower = (value: number) => {
    power.value = value
  }

  const upgradeCount = useLocalStorage('net/upgradeCount', 0)
  const upgradeCost = computed(() => {
    return Math.floor(5.1 ** upgradeCount.value + 15)
  })
  const upgrade = () => {
    const cost = upgradeCost.value
    if (gold.count >= cost) {
      gold.sub(cost)
      upgradeCount.value++
      setPower(power.value + originalPower)
    }
  }

  const canUpgrade = computed(() => {
    return gold.count >= upgradeCost.value
  })

  const currentLevel = computed(() => {
    return upgradeCount.value
  })
  const gold = useGoldStore()
  const act = () => {
    gold.add(power.value)
  }

  return { act, power, setPower, upgrade, upgradeCost, canUpgrade, currentLevel }
})
