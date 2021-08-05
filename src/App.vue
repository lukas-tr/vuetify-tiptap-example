<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      tiptap + vuetify demo
    </v-app-bar>

    <v-main>
      <v-container>
        <Editor />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Editor from "./components/Editor";

export default {
  name: "App",
  components: {
    Editor,
  },
};
</script>
