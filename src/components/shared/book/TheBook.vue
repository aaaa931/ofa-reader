<script setup lang="ts">
import BaseButton from '@/components/shared/base/BaseButton.vue'
import { computed, toRefs } from 'vue'

interface BookProps {
  cover: string
  type: 'upload' | 'download' | 'loading'
  onClick: () => void
  onSelect: () => void
  disabled?: boolean
}

const props = defineProps<BookProps>()
const { cover, type, disabled } = toRefs(props)

const handleIcon = computed(() => {
  if (type.value === 'upload' || type.value === 'download') {
    return `mdi-cloud-${type.value}`
  } else if (type.value === 'loading') {
    return `mdi-${type.value} mdi-spin`
  }
  return `mdi-${type.value}`
})
</script>

<template>
  <button class="container" :class="{ disabled }" @click="onSelect">
    <div class="cover-container">
      <img :src="cover" class="cover" />
      <BaseButton class="upload" type="icon" @click.stop="onClick">
        <template #icon>
          <span class="mdi" :class="[handleIcon]" />
        </template>
      </BaseButton>
    </div>
    <p class="title ellipsis">
      <slot />
    </p>
  </button>
</template>

<style scoped lang="sass">
.container
  transition: .3s all
  background: none
  padding: .5rem
  border-radius: 10px
  border: 1px solid rgba($outline, 0)
  font-size: 1rem
  cursor: pointer

  &:hover
    border-color: $outline

  &:focus
    border-color: $primary

.cover-container
  position: relative

.cover
  width: 140px
  height: 196px
  object-fit: cover

.title
  color: $on-surface
  width: 124px
  text-align: center
  margin: 0 auto

.upload
  position: absolute
  left: .5rem
  bottom: 1rem

.mdi
  color: $on-primary

.mdi-loading:hover
  &::before
    content: "\F0156"
    animation: none

.disabled.container
  border: none

.disabled .cover, .disabled .title
  opacity: .7
</style>
