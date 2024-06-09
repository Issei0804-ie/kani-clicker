import { computed } from 'vue'
import { defineStore } from 'pinia'
import { useGoldStore } from '@/stores/gold'
import { useLocalStorage } from '@vueuse/core'

export const useClickerStore = defineStore('clicker', () => {
  const originalPower = 1
  const power = useLocalStorage('clicker/power', originalPower)
  const setPower = (value: number) => {
    power.value = value
  }

  const upgradeCount = useLocalStorage('clicker/upgradeCount', 1)
  const upgradeCost = computed(() => {
    return 5 ** upgradeCount.value + 5
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
  const click = () => {
    gold.add(power.value)
  }

  return { click, power, setPower, upgrade, upgradeCost, canUpgrade, currentLevel }
})
