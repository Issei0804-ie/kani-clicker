<script setup lang="ts">
import GoldStatus from '@/components/GoldStatus.vue'
import { useClickerStore } from '@/stores/clicker'
import UpgradeBar from '@/components/upgradeBar/UpgradeBar.vue'
// https://github.com/vueuse/sound/issues/42
// @ts-expect-error
import { useSound } from '@vueuse/sound'
import clickSe from '@/assets/se/click.mp3'
import clickRareSe from '@/assets/se/rare-click.mp3'
import ClickKani from '@/components/animation/ClickKani.vue'
import { ref } from 'vue'
import { rand } from '@vueuse/core'

const clicker = useClickerStore()
const { play: playNormalClickSe } = useSound(clickSe, { volume: 0.3 })
const { play: playRareClickSe } = useSound(clickRareSe, { volume: 0.5 })

const kaniAnimations = ref<number[]>([])

const onClickKani = () => {
  if (Math.random() < 0.03) {
    playRareClickSe()
  } else {
    playNormalClickSe()
  }

  const randomId = rand(0, 10000000)
  kaniAnimations.value.push(randomId)
  setTimeout(() => {
    kaniAnimations.value.shift()
  }, 1500)
  clicker.click()
}
</script>

<template>
  <gold-status />
  <div class="click-animation-position">
    <img
      class="clicker"
      src="@/assets/kani/clicked.jpg"
      width="200px"
      height="200px"
      @click="onClickKani"
    />
    <click-kani v-for="id in kaniAnimations" :key="id" class="click-kani-animation" />
  </div>
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
.click-animation-position {
  position: relative;
}
.click-kani-animation {
  position: absolute;
  top: 60px;
  left: 200px;
}
</style>
