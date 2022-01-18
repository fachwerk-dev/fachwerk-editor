<script setup lang="ts">
import { onMounted, ref, watchEffect } from "vue";

import Editor from "./components/Editor.vue";
import Compiler from "./components/Compiler.vue";
import Debug from "./components/Debug.vue";

function utoa(data: string): string {
  return btoa(unescape(encodeURIComponent(data)));
}

function atou(base64: string): string {
  return decodeURIComponent(escape(atob(base64)));
}

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
:root {
  --sans-serif: "IBM Plex Sans", sans-serif;
  --mono: Cousine, monospace;
}
body {
  margin: 0;
  font-family: var(--sans-serif);
  color: #2c3e50;
}
pre,
code {
  font-family: var(--mono);
  font-feature-settings: "liga" 0, "calt" 0;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  margin-top: 0;
  font-weight: 600;
}
p {
  margin: 0 0 1rem 0;
  line-height: 1.7;
}
svg,
input {
  display: block;
}
</style>
