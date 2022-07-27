<template>
  <button :disabled="disabled">
    โหวต {{ property }}
  </button>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';

const props = defineProps({
  disabled: Boolean,
  property: String
})
</script>