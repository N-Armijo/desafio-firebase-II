<script setup>
  import { ref } from 'vue'
  import { $auth } from '@/firebaseApp'
  import { createUserWithEmailAndPassword } from 'firebase/auth'
  import { useRouter } from 'vue-router'
  import SignWithGoogle from '@/components/SignWithGoogle.vue'

  const email = ref('')
  const password = ref('')
  const router = useRouter()

  const handleRegister = async () => {
    try {
      await createUserWithEmailAndPassword($auth, email.value, password.value)
      email.value = ''
      password.value = ''
      router.push({ name: 'home' })
    } catch (error) {
      console.error(error)
    }
  }
</script>
<template>
  <div class="container mt-5">
    <h1 class="mb-4 text-center">Regístrate</h1>
    <form @submit.prevent="handleRegister" class="card p-4 shadow col-6 mx-auto">
      <div class="mb-3">
        <label for="email" class="form-label">Ingrese Correo</label>
        <input
          required
          type="email"
          id="email"
          v-model="email"
          class="form-control"
          placeholder="nombre@ejemplo.com"
        />
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Ingrese Contraseña</label>
        <input
          required
          type="password"
          id="password"
          v-model="password"
          class="form-control"
          placeholder="Contraseña"
        />
      </div>
      <button type="submit" class="btn btn-primary w-100">Registrarse</button>
      <SignWithGoogle />
    </form>
  </div>
</template>
