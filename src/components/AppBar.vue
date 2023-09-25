<script setup lang="ts">
import logo from '@/assets/logo.png'
import { ref } from 'vue'
import { useNotificationStore } from '@/stores/notification'
import { storeToRefs } from 'pinia'

const notificationStore = useNotificationStore()
const { notification } = storeToRefs(notificationStore)

const open = ref(false)

const toggleOpen = () => {
  open.value = !open.value
}

const cancel = (id: number) => {
  if (notification.value) {
    notification.value = notification.value.filter(
      (_notification) => _notification.id !== id
    )
  }
}
</script>

<template>
  <div class="container">
    <img :src="logo" alt="logo" class="logo" />
    <div class="notification" @click="toggleOpen">
      <span class="mdi mdi-bell"></span>
      <span class="mdi mdi-circle-medium" v-if="notification"></span>
    </div>
    <div class="notification-container" v-show="open">
      <div
        class="notification-item"
        v-for="_notification in notification"
        :key="_notification.id"
      >
        <img :src="_notification.cover" alt="cover" class="cover" />
        <div class="notification-info">
          <div class="flex">
            <p>{{ _notification.title }}</p>
            <span
              class="mdi mdi-close"
              @click="cancel(_notification.id)"
            ></span>
          </div>
          <div class="progress">
            <div class="bar" style="width: 50%"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="sass">
@import "@/assets/_variables"

%app-bar
  background: $surface-container-high
  box-shadow: $shadow-2

.container
  display: flex
  width: 100vw
  justify-content: space-between
  align-items: center
  position: relative
  padding: .5rem 1rem
  @extend %app-bar

.notification-container
  position: absolute
  right: 0
  top: 56px
  padding: 0 .5rem 4.75rem .5rem
  min-width: 400px
  @extend %app-bar

.notification-item
  display: flex
  gap: 1rem
  padding: .5rem 1rem .5rem .5rem
  border-bottom: 1px solid $outline

.notification-info
  display: flex
  flex-direction: column
  justify-content: space-between
  width: 100%

.flex
  display: flex
  justify-content: space-between
  margin-bottom: .75rem

.cover
  width: 40px
  height: 56px
  object-fit: cover
  object-position: center center

.logo
  height: 40px
  width: auto

.mdi-bell
  font-size: 40px
  @extend %icon

.notification
  position: relative

.mdi-circle-medium
  font-size: 40px
  color: $error
  position: absolute
  right: -18px
  top: -18px
  @extend %icon

.mdi-close
  font-size: 32px
  @extend %icon

.progress
  border-radius: 10px
  border: 1px solid $outline
  width: 100%

.bar
  height: 8px
  background: $primary
</style>
