<script setup lang="ts">
import { ref, watchEffect } from "vue";
import {
  utoa,
  atou,
  Content,
  Compiler,
  compileMarkdown,
  isScriptSetup,
} from "fachwerk/internal";

import Monaco from "./components/Monaco.vue";
import Debug from "./components/Debug.vue";

const content = ref(atou(location.hash.slice(1)));

watchEffect(() => {
  history.replaceState({}, "", "#" + utoa(content.value));
});

const onError = (e: any) => console.log(e);
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2">
    <Monaco class="h-[80vh] md:h-screen" v-model="content" />
    <Content class="p-4" :class="{ 'h-screen w-full': isScriptSetup(content) }">
      <Compiler :source="compileMarkdown(content)" @error="onError" />
    </Content>
  </div>
  <Debug />
</template>

<style>
/*
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
*/
</style>
