<template>
  <div class="container">
      <!-- <Navbar @loggedout="redirectLoggedout" /> -->
      <Navbar />
      <ChatWindow />
      <NewChatForm />
  </div>
</template>

<script>
import NewChatForm from '../components/NewChatForm.vue'
import ChatWindow from '../components/ChatWindow.vue'
import { watch } from 'vue'
import Navbar from '../components/Navbar.vue'
import { useRouter } from 'vue-router'
import getUser from '../composables/getUser'

export default {
    components: { Navbar, NewChatForm, ChatWindow },

    setup() {
        const router = useRouter()
        const { user } = getUser()

        const redirectLoggedout = () => {
            router.push({ name: 'Welcome' })
        }

        watch(user, () => {
            // if the user is logged out, redirect them to the welcome (login/signup) page
            if (!user.value) {
                router.push({ name: 'Welcome' })
            }
        })

        return { redirectLoggedout }
    }

}
</script>

<style>
</style>