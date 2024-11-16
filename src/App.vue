<script setup>
  import { RouterLink, RouterView } from 'vue-router'
  import { signOut } from 'firebase/auth'
  import { $auth } from './firebaseApp'
  import { useRouter } from 'vue-router'

  const router = useRouter()
  const handleSignOut = async () => {
    try {
      await signOut($auth)
      alert('Cerraste sesión')
      router.push({ name: 'login' })
    } catch (error) {
      console.error('Error al cerrar sesión:', error)
    }
  }
</script>
<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <RouterLink to="/" class="navbar-brand">Desafio Firebase II</RouterLink>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <RouterLink to="/" class="nav-link">Home</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink :to="{ name: 'login' }" class="nav-link">Login</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink :to="{ name: 'signup' }" class="nav-link">Sign Up</RouterLink>
          </li>
          <li class="nav-item">
            <button @click="handleSignOut" class="btn btn-outline-danger ms-3">Sign Out</button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <RouterView />
</template>
