<script setup lang="ts">
import { useClickerStore } from '@/stores/clicker'

const clicker = useClickerStore()
</script>

<template>
  <div class="upgrade-clicker">
    <p>kani-clicker-level</p>
    <p>{{ clicker.currentLevel }}</p>
    <p>upgrade-cost</p>
    <p>{{ clicker.upgradeCost }}</p>
    <button @click="clicker.upgrade" :disabled="!clicker.canUpgrade">Upgrade</button>
  </div>
</template>

<style scoped lang="scss">
.upgrade-clicker {
  display: flex;
  flex-direction: row;
  gap: 8px;
}
</style>
