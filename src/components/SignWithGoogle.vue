<script setup>
  import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
  import { $auth } from '@/firebaseApp'
  import { useRouter } from 'vue-router'

  const router = useRouter()

  const signInWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider()
      provider.setCustomParameters({
        prompt: 'select_account'  
      })
      
      await signInWithPopup($auth, provider)
      router.push({ name: 'home' })
    } catch (error) {
      console.error('Error al iniciar sesión con Google:', error)
    }
  }
</script>
<template>
  <button @click="signInWithGoogle" class="btn btn-secondary w-100 mt-2">Acceder con Google</button>
</template>