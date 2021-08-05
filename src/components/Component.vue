<template>
  <node-view-wrapper as="span" class="vue-component">
    <v-chip small close @click:close="close">in {{node.attrs.days}} days</v-chip>
  </node-view-wrapper>
</template>

<script>
import { NodeViewWrapper, nodeViewProps } from '@tiptap/vue-2'

export default {
  components: {
    NodeViewWrapper,
  },

  props: nodeViewProps,

  methods: {
    close() {
      this.deleteNode();
    },
  },
}
</script>

<style lang="scss" scoped>
</style>
