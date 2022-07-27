<template>
  <main>
    <TitleText title="ใครงามเลิศในปฐพี" />
    <VoteCard
    :disabled="voteDisabled"
    property="เก่ง"
    />
  </main>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { auth } from './utils/firebase';

import TitleText from './components/TitleText.vue';
import VoteCard from './components/VoteCard.vue';


const voteDisabled = ref(true)

const init = () => {
  const user = auth.currentUser

  if (user) {
    voteDisabled.value = false
  } else {
    voteDisabled.value = true
  }
}

init()
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
