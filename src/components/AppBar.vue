<script setup lang="ts">
import { ref } from 'vue'
import { storeToRefs } from 'pinia'

import NotificationButton from '@/components/NotificationButton.vue'
import NotificationList from '@/components/NotificationList.vue'
import { useNotificationStore } from '@/stores/notification'

import logo from '@/assets/logo.png'

const notificationStore = useNotificationStore()
const { notifications } = storeToRefs(notificationStore)

const notificationOpen = ref(false)

const toggleNotificationOpen = () =>
  (notificationOpen.value = !notificationOpen.value)
</script>

<template>
  <div class="container">
    <img :src="logo" alt="logo" class="logo" />
    <NotificationButton
      icon="bell"
      @click="toggleNotificationOpen"
      :hasNotification="notifications.length > 0"
    />
    <NotificationList :notificationOpen="notificationOpen" />
  </div>
</template>

<style scoped lang="sass">
@import "@/assets/_variables"

.container
  display: flex
  width: 100vw
  justify-content: space-between
  align-items: center
  position: relative
  padding: .5rem 1rem
  @extend %app-bar

.logo
  height: 40px
  width: auto
  max-width: 100%
</style>
