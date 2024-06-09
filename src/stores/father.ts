import { computed } from 'vue'
import { defineStore } from 'pinia'
import { useGoldStore } from '@/stores/gold'
import { useLocalStorage } from '@vueuse/core'

export const useFatherStore = defineStore('father', () => {
  const originalPower = 1
  const power = useLocalStorage('father/power', 0)
  const setPower = (value: number) => {
    power.value = value
  }

  const upgradeCount = useLocalStorage('father/upgradeCount', 0)
  const upgradeCost = computed(() => {
    return Math.floor(3.3 ** upgradeCount.value + 15)
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
