<script lang="ts">
import {
  computed,
  defineComponent,
  h,
  onErrorCaptured,
  toRefs,
  watch,
} from "vue";
import { Content } from "fachwerk/internal";

import { useCompiledMarkdown } from "../lib";

export default defineComponent({
  props: { markdown: { type: String, default: "" } },
  setup(props) {
    onErrorCaptured((e) => console.log(e));
    const { markdown } = toRefs(props);
    const compiledMarkdown = useCompiledMarkdown(markdown);
    return () => h(Content, () => h(compiledMarkdown.value));
  },
});
</script>
