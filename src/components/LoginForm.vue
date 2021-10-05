<template>
  <form @submit.prevent="handleSubmit">
      <input type="text" required placeholder="email" v-model="email">
      <input type="password" required placeholder="password" v-model="password">
      <div class="error">{{ error }}</div>
      <button>Login</button>
  </form>
</template>

<script>
import { ref } from 'vue'
import useLogin from '../composables/useLogin'

export default {
    setup(props, context) {
        //refs
        const email = ref('')
        const password = ref('')

        const { error, login } = useLogin()

        const handleSubmit = async () => {
            await login(email.value, password.value)
            if(!error.value) {
                console.log('User logged in')
                // emit custom event that user is logged in so it can redirect the user to the correct view
                context.emit('login')
            }
        }

        return { email, password, handleSubmit, error }
    }

}
</script>

<style>

</style>