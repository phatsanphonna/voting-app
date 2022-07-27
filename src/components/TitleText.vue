<template>
  <h1>{{ title }}</h1>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';

defineProps({ title: String })
</script>