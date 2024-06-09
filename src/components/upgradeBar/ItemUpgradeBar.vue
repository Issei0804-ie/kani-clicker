<script setup lang="ts">
import clickSe from '@/assets/se/click.mp3'
// @ts-expect-error
import { useSound } from '@vueuse/sound'

const props = defineProps({
  objectName: {
    type: String,
    required: true
  },
  currentLevel: {
    type: Number,
    required: true
  },
  upgradeCost: {
    type: Number,
    required: true
  },
  updateObject: {
    type: Function,
    required: true
  },
  isUpdateButtonDisabled: {
    type: Boolean,
    required: true
  }
})

const { play } = useSound(clickSe, { volume: 0.3 })
const onClickUpdateButton = () => {
  play()
  props.updateObject()
}
</script>

<template>
  <div class="upgrade-clicker">
    <p>{{ objectName }}のレベル</p>
    <p>{{ currentLevel }}</p>
    <p>アップデートコスト</p>
    <p>{{ upgradeCost }}</p>
    <button class="button" @click="onClickUpdateButton" :disabled="!isUpdateButtonDisabled">
      アップデートする
    </button>
  </div>
</template>

<style scoped lang="scss">
.upgrade-clicker {
  display: flex;
  flex-direction: row;
  gap: 40px;
}
.button {
  width: 200px;
  height: 56px;
}
</style>
