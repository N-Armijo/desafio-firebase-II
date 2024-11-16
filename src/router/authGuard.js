import { onAuthStateChanged } from 'firebase/auth'
import { $auth } from '@/firebaseApp'

export const authGuard = (to, from, next) => { //para que sirve from?
  onAuthStateChanged($auth, (user) => {
    if (!user && to.name !== 'signup' && to.name !== 'login') {
      next({ name: 'signup' })
    } else if (user && (to.name === 'signup' || to.name === 'login')) {
      next({ name: 'home' })
    } else {
      next() 
    }
  })
}