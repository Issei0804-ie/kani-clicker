<script setup lang="ts">
import { useEbiStore } from '@/stores/ebi'

const ebi = useEbiStore()
</script>

<template>
  <div class="upgrade-clicker">
    <p>ebi-level</p>
    <p>{{ ebi.currentLevel }}</p>
    <p>upgrade-cost</p>
    <p>{{ ebi.upgradeCost }}</p>
    <button @click="ebi.upgrade" :disabled="!ebi.canUpgrade">Upgrade</button>
  </div>
</template>

<style scoped lang="scss">
.upgrade-clicker {
  display: flex;
  flex-direction: row;
  gap: 8px;
}
</style>
