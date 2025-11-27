<template>
  <div class="bg-gray-50 min-h-screen text-gray-900">
    <Header />

    <Home />

    <Footer />
  </div>
</template>

<script setup>
import Header from "./components/header.vue"
import Footer from "./components/footer.vue"
import Home from "./pages/home.vue"
</script>
