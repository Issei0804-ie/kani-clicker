<script setup lang="ts">
import GoldStatus from '@/components/GoldStatus.vue'
import { useClickerStore } from '@/stores/clicker'
import UpgradeBar from '@/components/upgradeBar/UpgradeBar.vue'
// https://github.com/vueuse/sound/issues/42
// @ts-expect-error
import { useSound } from '@vueuse/sound'
import clickSe from '@/assets/se/click.mp3'

const clicker = useClickerStore()
const {play} = useSound(clickSe, {volume: 0.3})

const clickKani = () => {
  play()
  clicker.click()
}
</script>

<template>
  <gold-status />
  <img
    class="clicker"
    src="@/assets/kani/clicked.jpg"
    width="200px"
    height="200px"
    @click="clickKani"
  />
  <upgrade-bar />
</template>

<style scoped lang="scss">
.clicker {
  cursor: pointer;
  transform: scale(1);
  &:hover {
    transform: scale(1.05);
  }
}
</style>
