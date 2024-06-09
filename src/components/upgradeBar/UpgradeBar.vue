<script setup lang="ts">
import { useNetStore } from '@/stores/net'
import { useClickerStore } from '@/stores/clicker'
import ItemUpgradeBar from '@/components/upgradeBar/ItemUpgradeBar.vue'

const clicker = useClickerStore()
const net = useNetStore()
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
</template>
