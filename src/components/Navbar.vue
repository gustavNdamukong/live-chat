<template>
  <nav v-if="user">
      <div>
          <p>Hey there {{ user.displayName }}</p>
          <p class="email">Currently logged in as  {{ user.email }}</p>
      </div>  
      <button @click="handleClick">Logout</button>  
  </nav>
</template>

<script>
import { ref } from 'vue'
import useLogout from '../composables/useLogout'
import getUser from '../composables/getUser'

export default {
    setup(props, context) {
        const { error, logout } = useLogout()
        const { user } = getUser()

        const handleClick = async () => {
            await logout()
            if (!error.value) {
                console.log('User logged out')
                // emit custom event about user being signed so user can be redirected away from chatroom
                context.emit('loggedout')
            }
        }

        return { handleClick, user }
    }
}
</script>

<style>
    nav {
    padding: 20px;
    border-bottom: 1px solid #eee;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  nav p {
    margin: 2px auto;
    font-size: 16px;
    color: #444;
  }
  nav p.email {
    font-size: 14px;
    color: #999;
  }
</style>