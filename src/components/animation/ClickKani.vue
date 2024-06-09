<script setup lang="ts">
</script>

<template>
  <div class="click-kani">
    <p> +1 </p>
    <img
      src="@/assets/kani/clicked.jpg"
      width="20px"
      height="20px"
    />
  </div>
</template>

<style scoped lang="scss">
.click-kani {
  animation: clicker 1.5s ;
  @keyframes clicker {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-100px);
      opacity: 0;
    }
  }
}

</style>
