<script setup lang="ts">
import { onMounted, ref, watchEffect } from "vue";
//@ts-ignore
import { utoa, atou } from "fachwerk/internal";
import "fachwerk/internal/style.css";

import Editor from "./components/Editor.vue";
import Compiler from "./components/Compiler.vue";
import Debug from "./components/Debug.vue";

// function utoa(data: string): string {
//   return btoa(unescape(encodeURIComponent(data)));
// }

// function atou(base64: string): string {
//   return decodeURIComponent(escape(atob(base64)));
// }

const content = ref(atou(location.hash.slice(1)));

watchEffect(() => {
  history.replaceState({}, "", "#" + utoa(content.value));
});
</script>

<template>
  <div style="display: grid; grid-template-columns: 1fr 1fr; height: 100vh">
    <Editor v-model="content" />
    <Compiler :markdown="content" />
  </div>
  <Debug />
</template>

<style>
svg {
  display: block;
}
</style>
