<script setup lang="ts">
import { toRefs } from 'vue'

import BaseInput from '@/components/base/BaseInput.vue'

const props = defineProps<{ modelValue: string }>()
const { modelValue } = toRefs(props)

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const handleChange = (value: string) => emit('update:modelValue', value)
</script>
<template>
  <div class="setting-wrapper">
    <span>頁面大小</span>
    <BaseInput
      :model-value="modelValue as string"
      @change="handleChange"
      type="number"
      inputmode="numeric"
      dense
      shrink
    />
  </div>
</template>
<style scoped lang="sass">
.setting-wrapper
  display: flex
  gap: .5rem
  align-items: center
</style>
