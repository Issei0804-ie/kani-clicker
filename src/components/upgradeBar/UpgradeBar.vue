<script setup lang="ts">
import { useNetStore } from '@/stores/net'
import { useClickerStore } from '@/stores/clicker'
import ItemUpgradeBar from '@/components/upgradeBar/ItemUpgradeBar.vue'
import { useFatherStore } from '@/stores/father'

const clicker = useClickerStore()
const net = useNetStore()
const father = useFatherStore()
</script>

<template>
  <item-upgrade-bar
    objectName="クリック"
    :currentLevel="clicker.currentLevel"
    :upgradeCost="clicker.upgradeCost"
    :updateObject="clicker.upgrade"
    :isUpdateButtonDisabled="clicker.canUpgrade"
  />
  <item-upgrade-bar
    objectName="網"
    :currentLevel="net.currentLevel"
    :upgradeCost="net.upgradeCost"
    :updateObject="net.upgrade"
    :isUpdateButtonDisabled="net.canUpgrade"
  />
  <item-upgrade-bar
    object-name="お父さん"
    :currentLevel="father.currentLevel"
    :upgradeCost="father.upgradeCost"
    :updateObject="father.upgrade"
    :isUpdateButtonDisabled="father.canUpgrade"
  />
</template>
