<script setup>
  import { ref, onMounted } from 'vue'
  import { onAuthStateChanged } from 'firebase/auth'
  import { $auth } from '@/firebaseApp'

  const user = ref(null)  
  onMounted(() => {
    onAuthStateChanged($auth, (currentUser) => {
      if (currentUser) {
        user.value = currentUser
      } else {
        user.value = null
      }
    })
  })
</script>
<template>
  <main class="container">
    <h1 class="text-center my-5">HomeView</h1>
    <div class="mx-2">
      <h3 v-if="user">
        Bienvenido, {{ user.email }}
      </h3>
      <h3 v-else>
        No estás autenticado.
      </h3>
    </div>
  </main>
</template>
