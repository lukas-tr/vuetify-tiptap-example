import { Node, mergeAttributes, nodeInputRule } from "@tiptap/core";
import { VueNodeViewRenderer } from "@tiptap/vue-2";
import Component from "./Component.vue";

export default Node.create({
  name: "vueComponent",
  group: "inline",
  inline: true,
  selectable: false,
  atom: true,

  addAttributes() {
    return {
      days: {
        default: 1,
      },
    };
  },

  parseHTML() {
    return [
      {
        tag: "vue-component",
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return ["vue-component", mergeAttributes(HTMLAttributes)];
  },

  addNodeView() {
    return VueNodeViewRenderer(Component);
  },

  addInputRules() {
    return [
      nodeInputRule(/in (\d+) day(\s|s)$/, this.type, (match) => ({
        days: Number(match[1]),
      })),
    ];
  },
});
