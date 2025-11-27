<template>
  <form @submit.prevent="sendEmail" class="space-y-4">
    <input v-model="name" type="text" placeholder="Seu nome" class="input" />
    <input v-model="email" type="email" placeholder="Seu email" class="input" />
    <textarea v-model="message" placeholder="Mensagem" class="input"></textarea>

    <button class="bg-blue-600 text-white rounded px-4 py-2">
      Enviar
    </button>
  </form>
</template>

<script setup>
import { ref } from "vue";

const name = ref("");
const email = ref("");
const message = ref("");

const sendEmail = async () => {
  const response = await fetch("http://localhost:3001/send", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: name.value,
      email: email.value,
      message: message.value
    })
  });

  const data = await response.json();
  alert(data.status === "ok" ? "Email enviado!" : "Erro ao enviar.");
};
</script>

<style>
.input {
  @apply w-full border p-3 rounded bg-gray-100 outline-none;
}
</style>
