<script setup lang="ts">
import { ref, watchEffect } from "vue";
import {
  utoa,
  atou,
  Content,
  CompileMd,
  CompileVue,
  compileMarkdown,
} from "fachwerk/internal";

import Editor from "./components/Editor.vue";
import Debug from "./components/Debug.vue";

const content = ref(atou(location.hash.slice(1)));

watchEffect(() => {
  history.replaceState({}, "", "#" + utoa(content.value));
});

const onError = (e: any) => console.log(e);
</script>

<template>
  <div style="display: grid; grid-template-columns: 1fr 1fr; height: 100vh">
    <Editor v-model="content" />
    <Content style="padding: 0px">
      <CompileVue
        style="width: 100%; height: 100%; border: 1px solid red"
        :source="compileMarkdown(content)"
        @error="onError"
      />
    </Content>
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
