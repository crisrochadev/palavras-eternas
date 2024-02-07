<template>
    <div class="w-full h-full">
      <div class="p-2 w-full flex justify-between items-center">
        <s-button
          class="fa-solid fa-arrow-left"
          flat
          @click="$router.back()"
        ></s-button>
        <logo-component inline size="20" />
        <s-button
          class="fa-solid fa-circle-half-stroke text-primary"
          flat
          @click="toggleTheme"
        ></s-button>
      </div>
      <router-view :key="$forceUpdate.path" />
    </div>
  </template>
  <script>
  import { useConfig } from "@/store/config";
  import SButton from "../components/forms/SButton.vue";
  import LogoComponent from "../components/LogoComponent.vue";
  export default {
    components: { LogoComponent, SButton },
    data() {
      const config = useConfig();
      return {
        config,
      };
    },
    methods: {
      toggleTheme() {
        if (this.config.theme.includes("-l")) {
          this.config.theme = this.config.theme.replace("-l", "-d");
        } else if (this.config.theme.includes("-d")) {
          this.config.theme = this.config.theme.replace("-d", "-l");
        } else {
          this.config.theme = this.theme == "dark" ? "light" : "dark";
        }
      },
    },
  };
  </script>
  <style lang=""></style>
  