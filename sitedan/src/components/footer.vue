<template>
  <footer class="text-center py-6 text-gray-500 mt-20 border-t">
    © {{ year }} — Daniel Ribeiro. Todos os direitos reservados.
  </footer>
</template>

<script setup>
const year = new Date().getFullYear()
</script>
