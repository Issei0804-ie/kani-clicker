<script setup lang="ts">
import { useGoldStore } from '@/stores/gold'
import { useNetStore } from '@/stores/net'
import { computed } from 'vue'
const gold = useGoldStore()

function floor(target: number, n: number) {
  return Math.floor(target * Math.pow(10, n)) / Math.pow(10, n)
}

// 困ったらあとでどこかにまとめる
const net = useNetStore()

const kaniPerSec = computed(() => {
  return net.power
})
</script>

<template>
  <div class="gold-status">
    <p>{{ floor(gold.count, 1) }}</p>
    <p>+ {{ floor(kaniPerSec, 1) }}sec</p>
  </div>
</template>

<style scoped lang="scss">
.gold-status {
  display: flex;
  flex-direction: row;
  gap: 8px;
}
</style>
