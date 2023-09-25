<script setup lang="ts">
import logo from '@/assets/logo.png'
import NotificationButton from '@/components/NotificationButton.vue'
import NotificationList from '@/components/NotificationList.vue'
import { computed, ref } from 'vue'
import { useNotificationsStore } from '@/stores/notifications'
import { storeToRefs } from 'pinia'

const notificationStore = useNotificationsStore()
const { notifications } = storeToRefs(notificationStore)

const open = ref(false)

const toggleOpen = () => (open.value = !open.value)

const isAlert = computed(() => {
  if (notifications.value) return true
  return false
})
</script>

<template>
  <div class="container">
    <img :src="logo" alt="logo" class="logo" />
    <NotificationButton icon="bell" @click="toggleOpen" :alert="isAlert" />
    <NotificationList :open="open" />
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
</style>
