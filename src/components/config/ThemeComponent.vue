<template>
  <page-component>
    <h1 class="text-2xl uppercase font-bold text-primary">escolher Thema</h1>
    <div class="grid grid-cols-2 w-full bg-light-accent">
      <div class="w-full p-2 rounded" v-for="theme in themes" :key="theme.id">
        <h2 :class="`uppercase font-extrabold my-2 text-text`">
          {{ theme.label }}
        </h2>
        <div class="grid md:grid-cols-2 w-full gap-4">
          <button
            @click="checkItem(child,theme)"
            :data-theme="i == 0 ? theme.type : child.type + theme.sufix"
            :class="{
              'border-primary ': child.checked,
              'border-2': child.checked,
            }"
            class="bg-bottom hover:opacity-100 hover:scale-105 opacity-85 active:scale-95 transition-all w-full h-full p-2 rounded shadow-md"
            v-for="(child, i) in theme.children"
            :key="child.id"
          >
            <div class="w-full flex">
              <s-checkbox v-model:check="child.checked" />
            </div>
            <h2 class="uppercase font-bold text-text">
              {{ child.label }}
            </h2>
            <div class="flex w-full flex-wrap justify-start gap-2 my-4">
              <div class="bg-primary w-4 md:w-6 h-4 md-h-6 rounded-full shadow-md"></div>
              <div class="bg-secondary w-4 md:w-6 h-4 md-h-6 rounded-full shadow-md"></div>
              <div class="bg-accent w-4 md:w-6 h-4 md-h-6 rounded-full shadow-md"></div>
              <div class="bg-box-bottom w-4 md:w-6 h-4 md-h-6 rounded-full shadow-md"></div>
              <div
                class="bg-strong-bottom w-4 md:w-6 h-4 md-h-6 rounded-full shadow-md"
              ></div>
              <div
                :class="`bg-link`"
                class="bg-link w-4 md:w-6 h-4 md-h-6 rounded-full shadow-md"
              ></div>
              <div
                :class="`bg-success`"
                class="bg-success w-4 md:w-6 h-4 md-h-6 rounded-full shadow-md"
              ></div>
              <div
                :class="`bg-danger`"
                class="bg-danger w-4 md:w-6 h-4 md-h-6 rounded-full shadow-md"
              ></div>
              <div
                :class="`bg-alert`"
                class="bg-alert w-4 md:w-6 h-4 md-h-6 rounded-full shadow-md"
              ></div>
              <div
                :class="`bg-info`"
                class="bg-info w-4 md:w-6 h-4 md-h-6 rounded-full shadow-md"
              ></div>
            </div>
          </button>
        </div>
      </div>
    </div>
  </page-component>
</template>
<script>
import { useConfig } from "@/store/config";
import SCheckbox from "../forms/SCheckbox.vue";
import PageComponent from "../PageComponent.vue";
export default {
  components: { PageComponent, SCheckbox },
  name: "theme-component",
  data() {
    const config = useConfig();
    return {
      config,
      themes: [
        {
          id: 1,
          type: "dark",
          sufix: "-d",
          label: "Temas Escuros",
          children: [
            {
              checked: false,
              id: 11,
              type: "",
              label: "Padrão",
            },
            {
              checked: false,
              id: 13,
              type: "purple",
              label: "Roxo",
            },
            {
              checked: false,
              id: 14,
              type: "pink",
              label: "Rosa",
            },
            {
              checked: false,
              id: 15,
              type: "fuchsia",
              label: "Fúcsia",
            },
            {
              checked: false,
              id: 16,
              type: "emerald",
              label: "Esmeralda",
            },
            {
              checked: false,
              id: 17,
              type: "teal",
              label: "Cerceta",
            },
            {
              checked: false,
              id: 18,
              type: "sky",
              label: "Céu",
            },
            {
              checked: false,
              id: 19,
              type: "amber",
              label: "Âmbar",
            },
          ],
        },
        {
          id: 2,
          type: "light",
          label: "Temas Claros",
          sufix: "-l",
          children: [
            {
              chacked: false,
              id: 2,
              type: "",
              label: "Padrão",
            },
            {
              chacked: false,
              id: 23,
              type: "purple",
              label: "Roxo",
            },
            {
              chacked: false,
              id: 24,
              type: "pink",
              label: "Rosa",
            },
            {
              chacked: false,
              id: 25,
              type: "fuchsia",
              label: "Fúcsia",
            },
            {
              chacked: false,
              id: 26,
              type: "emerald",
              label: "Esmeralda",
            },
            {
              chacked: false,
              id: 27,
              type: "teal",
              label: "Cerceta",
            },
            {
              chacked: false,
              id: 28,
              type: "sky",
              label: "Céu",
            },
            {
              chacked: false,
              id: 29,
              type: "amber",
              label: "Âmbar",
            },
          ],
        },
      ],
    };
  },
  mounted() {
    this.themes = this.themes.map((theme) => {
      let newtheme = { ...theme };
      newtheme.children = newtheme.children.map((child) => {
        let newchild = { ...child };
        if (
          child.type + theme.sufix == this.config.theme ||
          (theme.type == this.config.theme && child.type == "")
        ) {
          newchild.checked = true;
        }
        return newchild;
      });
      return newtheme;
    });
  },
  methods: {
    checkItem(item, theme) {
      this.themes = this.themes.map((theme) => {
        let newtheme = { ...theme };
        newtheme.children = newtheme.children.map((child) => {
          let newchild = { ...child };
          newchild.checked = false;
          return newchild;
        });
        const index = newtheme.children.findIndex(it=>it.id==item.id)
        // console.log(item)
        if(index != -1) newtheme.children[index].checked = true
        return newtheme;
      });
      
      if(item.type == ''){
        this.config.theme = theme.type
      }else{
        this.config.theme = item.type+theme.sufix
      }
    },
  },
};
</script>
<style lang=""></style>
