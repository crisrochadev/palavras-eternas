<template>
  <div class="w-[100svw] h-[100svh] overflow-hidden bg-bottom" :data-theme="theme" >
    <div class="w-full h-full">
      <router-view />
    </div>
    <div
      class="grid grid-cols-2 w-full bg-light-accent"
      style="display:none"
    >
      <div class="w-full p-2 rounded">
        <h2 class="text-dark-text uppercase font-extrabold my-2">
          Temas Escuros
        </h2>
        <div class="grid grid-cols-2 w-full gap-4">
          <div class="bg-dark-bottom w-full h-full p-2 rounded shadow-md">
            <h2 class="text-dark-text uppercase font-bold">Padrão</h2>
            <div class="flex w-full justify-between gap-2 my-4">
              <div class="bg-dark-primary w-6 h-6 rounded-full shadow-md"></div>
              <div
                class="bg-dark-secondary w-6 h-6 rounded-full shadow-md"
              ></div>
              <div class="bg-dark-accent w-6 h-6 rounded-full shadow-md"></div>
              <div
                class="bg-dark-box-bottom w-6 h-6 rounded-full shadow-md"
              ></div>
              <div
                class="bg-dark-strong-bottom w-6 h-6 rounded-full shadow-md"
              ></div>
              <div class="bg-link w-6 h-6 rounded-full shadow-md"></div>
              <div class="bg-success w-6 h-6 rounded-full shadow-md"></div>
              <div class="bg-danger w-6 h-6 rounded-full shadow-md"></div>
              <div class="bg-alert w-6 h-6 rounded-full shadow-md"></div>
              <div class="bg-info w-6 h-6 rounded-full shadow-md"></div>
            </div>
          </div>
          <div class="bg-purple-d-bottom w-full h-full p-2 rounded shadow-md">
            <h2 class="text-purple-d-text uppercase font-bold">Roxo</h2>
            <div class="flex w-full justify-between gap-2 my-4">
              <div
                class="bg-purple-d-primary w-6 h-6 rounded-full shadow-md"
              ></div>
              <div
                class="bg-purple-d-secondary w-6 h-6 rounded-full shadow-md"
              ></div>
              <div
                class="bg-purple-d-accent w-6 h-6 rounded-full shadow-md"
              ></div>
              <div
                class="bg-purple-d-box-bottom w-6 h-6 rounded-full shadow-md"
              ></div>
              <div
                class="bg-purple-d-strong-bottom w-6 h-6 rounded-full shadow-md"
              ></div>
              <div class="bg-link w-6 h-6 rounded-full shadow-md"></div>
              <div class="bg-success w-6 h-6 rounded-full shadow-md"></div>
              <div class="bg-danger w-6 h-6 rounded-full shadow-md"></div>
              <div class="bg-alert w-6 h-6 rounded-full shadow-md"></div>
              <div class="bg-info w-6 h-6 rounded-full shadow-md"></div>
            </div>
          </div>
          <div class="bg-pink-d-bottom w-full h-full p-2 rounded shadow-md">
            <h2 class="text-pink-d-text uppercase font-bold">Rosa</h2>
            <div class="flex w-full justify-between gap-2 my-4">
              <div
                class="bg-pink-d-primary w-6 h-6 rounded-full shadow-md"
              ></div>
              <div
                class="bg-pink-d-secondary w-6 h-6 rounded-full shadow-md"
              ></div>
              <div
                class="bg-pink-d-accent w-6 h-6 rounded-full shadow-md"
              ></div>
              <div
                class="bg-pink-d-box-bottom w-6 h-6 rounded-full shadow-md"
              ></div>
              <div
                class="bg-pink-d-strong-bottom w-6 h-6 rounded-full shadow-md"
              ></div>
              <div class="bg-link w-6 h-6 rounded-full shadow-md"></div>
              <div class="bg-success w-6 h-6 rounded-full shadow-md"></div>
              <div class="bg-danger w-6 h-6 rounded-full shadow-md"></div>
              <div class="bg-alert w-6 h-6 rounded-full shadow-md"></div>
              <div class="bg-info w-6 h-6 rounded-full shadow-md"></div>
            </div>
          </div>
          <div class="bg-fuchsia-d-bottom w-full h-full p-2 rounded shadow-md">
            <h2 class="text-fuchsia-d-text uppercase font-bold">Fúcsia</h2>
            <div class="flex w-full justify-between gap-2 my-4">
              <div
                class="bg-fuchsia-d-primary w-6 h-6 rounded-full shadow-md"
              ></div>
              <div
                class="bg-fuchsia-d-secondary w-6 h-6 rounded-full shadow-md"
              ></div>
              <div
                class="bg-fuchsia-d-accent w-6 h-6 rounded-full shadow-md"
              ></div>
              <div
                class="bg-fuchsia-d-box-bottom w-6 h-6 rounded-full shadow-md"
              ></div>
              <div
                class="bg-fuchsia-d-strong-bottom w-6 h-6 rounded-full shadow-md"
              ></div>
              <div class="bg-link w-6 h-6 rounded-full shadow-md"></div>
              <div class="bg-success w-6 h-6 rounded-full shadow-md"></div>
              <div class="bg-danger w-6 h-6 rounded-full shadow-md"></div>
              <div class="bg-alert w-6 h-6 rounded-full shadow-md"></div>
              <div class="bg-info w-6 h-6 rounded-full shadow-md"></div>
            </div>
          </div>
          <div class="bg-emerald-d-bottom w-full h-full p-2 rounded shadow-md">
            <h2 class="text-emerald-d-text uppercase font-bold">Esmeralda</h2>
            <div class="flex w-full justify-between gap-2 my-4">
              <div
                class="bg-emerald-d-primary w-6 h-6 rounded-full shadow-md"
              ></div>
              <div
                class="bg-emerald-d-secondary w-6 h-6 rounded-full shadow-md"
              ></div>
              <div
                class="bg-emerald-d-accent w-6 h-6 rounded-full shadow-md"
              ></div>
              <div
                class="bg-emerald-d-box-bottom w-6 h-6 rounded-full shadow-md"
              ></div>
              <div
                class="bg-emerald-d-strong-bottom w-6 h-6 rounded-full shadow-md"
              ></div>
              <div class="bg-link w-6 h-6 rounded-full shadow-md"></div>
              <div class="bg-success w-6 h-6 rounded-full shadow-md"></div>
              <div class="bg-danger w-6 h-6 rounded-full shadow-md"></div>
              <div class="bg-alert w-6 h-6 rounded-full shadow-md"></div>
              <div class="bg-info w-6 h-6 rounded-full shadow-md"></div>
            </div>
          </div>
          <div class="bg-teal-d-bottom w-full h-full p-2 rounded shadow-md">
            <h2 class="text-teal-d-text uppercase font-bold">Cerceta</h2>
            <div class="flex w-full justify-between gap-2 my-4">
              <div
                class="bg-teal-d-primary w-6 h-6 rounded-full shadow-md"
              ></div>
              <div
                class="bg-teal-d-secondary w-6 h-6 rounded-full shadow-md"
              ></div>
              <div
                class="bg-teal-d-accent w-6 h-6 rounded-full shadow-md"
              ></div>
              <div
                class="bg-teal-d-box-bottom w-6 h-6 rounded-full shadow-md"
              ></div>
              <div
                class="bg-teal-d-strong-bottom w-6 h-6 rounded-full shadow-md"
              ></div>
              <div class="bg-link w-6 h-6 rounded-full shadow-md"></div>
              <div class="bg-success w-6 h-6 rounded-full shadow-md"></div>
              <div class="bg-danger w-6 h-6 rounded-full shadow-md"></div>
              <div class="bg-alert w-6 h-6 rounded-full shadow-md"></div>
              <div class="bg-info w-6 h-6 rounded-full shadow-md"></div>
            </div>
          </div>
          <div class="bg-sky-d-bottom w-full h-full p-2 rounded shadow-md">
            <h2 class="text-sky-d-text uppercase font-bold">Céu</h2>
            <div class="flex w-full justify-between gap-2 my-4">
              <div
                class="bg-sky-d-primary w-6 h-6 rounded-full shadow-md"
              ></div>
              <div
                class="bg-sky-d-secondary w-6 h-6 rounded-full shadow-md"
              ></div>
              <div class="bg-sky-d-accent w-6 h-6 rounded-full shadow-md"></div>
              <div
                class="bg-sky-d-box-bottom w-6 h-6 rounded-full shadow-md"
              ></div>
              <div
                class="bg-sky-d-strong-bottom w-6 h-6 rounded-full shadow-md"
              ></div>
              <div class="bg-link w-6 h-6 rounded-full shadow-md"></div>
              <div class="bg-success w-6 h-6 rounded-full shadow-md"></div>
              <div class="bg-danger w-6 h-6 rounded-full shadow-md"></div>
              <div class="bg-alert w-6 h-6 rounded-full shadow-md"></div>
              <div class="bg-info w-6 h-6 rounded-full shadow-md"></div>
            </div>
          </div>
          <div class="bg-amber-d-bottom w-full h-full p-2 rounded shadow-md">
            <h2 class="text-amber-d-text uppercase font-bold">Âmber</h2>
            <div class="flex w-full justify-between gap-2 my-4">
              <div
                class="bg-amber-d-primary w-6 h-6 rounded-full shadow-md"
              ></div>
              <div
                class="bg-amber-d-secondary w-6 h-6 rounded-full shadow-md"
              ></div>
              <div
                class="bg-amber-d-accent w-6 h-6 rounded-full shadow-md"
              ></div>
              <div
                class="bg-amber-d-box-bottom w-6 h-6 rounded-full shadow-md"
              ></div>
              <div
                class="bg-amber-d-strong-bottom w-6 h-6 rounded-full shadow-md"
              ></div>
              <div class="bg-link w-6 h-6 rounded-full shadow-md"></div>
              <div class="bg-success w-6 h-6 rounded-full shadow-md"></div>
              <div class="bg-danger w-6 h-6 rounded-full shadow-md"></div>
              <div class="bg-alert w-6 h-6 rounded-full shadow-md"></div>
              <div class="bg-info w-6 h-6 rounded-full shadow-md"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full p-2 rounded">
        <h2 class="text-light-text uppercase font-extrabold my-2">
          Temas Claros
        </h2>
        <div class="grid grid-cols-2 w-full gap-4">
          <div class="bg-light-bottom w-full h-full p-2 rounded shadow-md">
            <h2 class="text-light-text uppercase font-bold">Padrão</h2>
            <div class="flex w-full justify-between gap-2 my-4">
              <div
                class="bg-light-primary w-6 h-6 rounded-full shadow-md"
              ></div>
              <div
                class="bg-light-secondary w-6 h-6 rounded-full shadow-md"
              ></div>
              <div class="bg-light-accent w-6 h-6 rounded-full shadow-md"></div>
              <div
                class="bg-light-box-bottom w-6 h-6 rounded-full shadow-md"
              ></div>
              <div
                class="bg-light-strong-bottom w-6 h-6 rounded-full shadow-md"
              ></div>
              <div class="bg-link w-6 h-6 rounded-full shadow-md"></div>
              <div class="bg-success w-6 h-6 rounded-full shadow-md"></div>
              <div class="bg-danger w-6 h-6 rounded-full shadow-md"></div>
              <div class="bg-alert w-6 h-6 rounded-full shadow-md"></div>
              <div class="bg-info w-6 h-6 rounded-full shadow-md"></div>
            </div>
          </div>
          <div class="bg-purple-l-bottom w-full h-full p-2 rounded shadow-md">
            <h2 class="text-purple-l-text uppercase font-bold">Roxo</h2>
            <div class="flex w-full justify-between gap-2 my-4">
              <div
                class="bg-purple-l-primary w-6 h-6 rounded-full shadow-md"
              ></div>
              <div
                class="bg-purple-l-secondary w-6 h-6 rounded-full shadow-md"
              ></div>
              <div
                class="bg-purple-l-accent w-6 h-6 rounded-full shadow-md"
              ></div>
              <div
                class="bg-purple-l-box-bottom w-6 h-6 rounded-full shadow-md"
              ></div>
              <div
                class="bg-purple-l-strong-bottom w-6 h-6 rounded-full shadow-md"
              ></div>
              <div class="bg-link w-6 h-6 rounded-full shadow-md"></div>
              <div class="bg-success w-6 h-6 rounded-full shadow-md"></div>
              <div class="bg-danger w-6 h-6 rounded-full shadow-md"></div>
              <div class="bg-alert w-6 h-6 rounded-full shadow-md"></div>
              <div class="bg-info w-6 h-6 rounded-full shadow-md"></div>
            </div>
          </div>
          <div class="bg-pink-l-bottom w-full h-full p-2 rounded shadow-md">
            <h2 class="text-pink-l-text uppercase font-bold">Rosa</h2>
            <div class="flex w-full justify-between gap-2 my-4">
              <div
                class="bg-pink-l-primary w-6 h-6 rounded-full shadow-md"
              ></div>
              <div
                class="bg-pink-l-secondary w-6 h-6 rounded-full shadow-md"
              ></div>
              <div
                class="bg-pink-l-accent w-6 h-6 rounded-full shadow-md"
              ></div>
              <div
                class="bg-pink-l-box-bottom w-6 h-6 rounded-full shadow-md"
              ></div>
              <div
                class="bg-pink-l-strong-bottom w-6 h-6 rounded-full shadow-md"
              ></div>
              <div class="bg-link w-6 h-6 rounded-full shadow-md"></div>
              <div class="bg-success w-6 h-6 rounded-full shadow-md"></div>
              <div class="bg-danger w-6 h-6 rounded-full shadow-md"></div>
              <div class="bg-alert w-6 h-6 rounded-full shadow-md"></div>
              <div class="bg-info w-6 h-6 rounded-full shadow-md"></div>
            </div>
          </div>
          <div class="bg-fuchsia-l-bottom w-full h-full p-2 rounded shadow-md">
            <h2 class="text-fuchsia-l-text uppercase font-bold">Fúcsia</h2>
            <div class="flex w-full justify-between gap-2 my-4">
              <div
                class="bg-fuchsia-l-primary w-6 h-6 rounded-full shadow-md"
              ></div>
              <div
                class="bg-fuchsia-l-secondary w-6 h-6 rounded-full shadow-md"
              ></div>
              <div
                class="bg-fuchsia-l-accent w-6 h-6 rounded-full shadow-md"
              ></div>
              <div
                class="bg-fuchsia-l-box-bottom w-6 h-6 rounded-full shadow-md"
              ></div>
              <div
                class="bg-fuchsia-l-strong-bottom w-6 h-6 rounded-full shadow-md"
              ></div>
              <div class="bg-link w-6 h-6 rounded-full shadow-md"></div>
              <div class="bg-success w-6 h-6 rounded-full shadow-md"></div>
              <div class="bg-danger w-6 h-6 rounded-full shadow-md"></div>
              <div class="bg-alert w-6 h-6 rounded-full shadow-md"></div>
              <div class="bg-info w-6 h-6 rounded-full shadow-md"></div>
            </div>
          </div>
          <div class="bg-emerald-l-bottom w-full h-full p-2 rounded shadow-md">
            <h2 class="text-emerald-l-text uppercase font-bold">Esmeralda</h2>
            <div class="flex w-full justify-between gap-2 my-4">
              <div
                class="bg-emerald-l-primary w-6 h-6 rounded-full shadow-md"
              ></div>
              <div
                class="bg-emerald-l-secondary w-6 h-6 rounded-full shadow-md"
              ></div>
              <div
                class="bg-emerald-l-accent w-6 h-6 rounded-full shadow-md"
              ></div>
              <div
                class="bg-emerald-l-box-bottom w-6 h-6 rounded-full shadow-md"
              ></div>
              <div
                class="bg-emerald-l-strong-bottom w-6 h-6 rounded-full shadow-md"
              ></div>
              <div class="bg-link w-6 h-6 rounded-full shadow-md"></div>
              <div class="bg-success w-6 h-6 rounded-full shadow-md"></div>
              <div class="bg-danger w-6 h-6 rounded-full shadow-md"></div>
              <div class="bg-alert w-6 h-6 rounded-full shadow-md"></div>
              <div class="bg-info w-6 h-6 rounded-full shadow-md"></div>
            </div>
          </div>
          <div class="bg-teal-l-bottom w-full h-full p-2 rounded shadow-md">
            <h2 class="text-teal-l-text uppercase font-bold">Cerceta</h2>
            <div class="flex w-full justify-between gap-2 my-4">
              <div
                class="bg-teal-l-primary w-6 h-6 rounded-full shadow-md"
              ></div>
              <div
                class="bg-teal-l-secondary w-6 h-6 rounded-full shadow-md"
              ></div>
              <div
                class="bg-teal-l-accent w-6 h-6 rounded-full shadow-md"
              ></div>
              <div
                class="bg-teal-l-box-bottom w-6 h-6 rounded-full shadow-md"
              ></div>
              <div
                class="bg-teal-l-strong-bottom w-6 h-6 rounded-full shadow-md"
              ></div>
              <div class="bg-link w-6 h-6 rounded-full shadow-md"></div>
              <div class="bg-success w-6 h-6 rounded-full shadow-md"></div>
              <div class="bg-danger w-6 h-6 rounded-full shadow-md"></div>
              <div class="bg-alert w-6 h-6 rounded-full shadow-md"></div>
              <div class="bg-info w-6 h-6 rounded-full shadow-md"></div>
            </div>
          </div>
          <div class="bg-sky-l-bottom w-full h-full p-2 rounded shadow-md">
            <h2 class="text-sky-l-text uppercase font-bold">Céu</h2>
            <div class="flex w-full justify-between gap-2 my-4">
              <div
                class="bg-sky-l-primary w-6 h-6 rounded-full shadow-md"
              ></div>
              <div
                class="bg-sky-l-secondary w-6 h-6 rounded-full shadow-md"
              ></div>
              <div class="bg-sky-l-accent w-6 h-6 rounded-full shadow-md"></div>
              <div
                class="bg-sky-l-box-bottom w-6 h-6 rounded-full shadow-md"
              ></div>
              <div
                class="bg-sky-l-strong-bottom w-6 h-6 rounded-full shadow-md"
              ></div>
              <div class="bg-link w-6 h-6 rounded-full shadow-md"></div>
              <div class="bg-success w-6 h-6 rounded-full shadow-md"></div>
              <div class="bg-danger w-6 h-6 rounded-full shadow-md"></div>
              <div class="bg-alert w-6 h-6 rounded-full shadow-md"></div>
              <div class="bg-info w-6 h-6 rounded-full shadow-md"></div>
            </div>
          </div>
          <div class="bg-amber-l-bottom w-full h-full p-2 rounded shadow-md">
            <h2 class="text-amber-l-text uppercase font-bold">Âmber</h2>
            <div class="flex w-full justify-between gap-2 my-4">
              <div
                class="bg-amber-l-primary w-6 h-6 rounded-full shadow-md"
              ></div>
              <div
                class="bg-amber-l-secondary w-6 h-6 rounded-full shadow-md"
              ></div>
              <div
                class="bg-amber-l-accent w-6 h-6 rounded-full shadow-md"
              ></div>
              <div
                class="bg-amber-l-box-bottom w-6 h-6 rounded-full shadow-md"
              ></div>
              <div
                class="bg-amber-l-strong-bottom w-6 h-6 rounded-full shadow-md"
              ></div>
              <div class="bg-link w-6 h-6 rounded-full shadow-md"></div>
              <div class="bg-success w-6 h-6 rounded-full shadow-md"></div>
              <div class="bg-danger w-6 h-6 rounded-full shadow-md"></div>
              <div class="bg-alert w-6 h-6 rounded-full shadow-md"></div>
              <div class="bg-info w-6 h-6 rounded-full shadow-md"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { useConfig } from "@/store/config";
export default {
  data() {
    const config = useConfig();
    return {
      config,
    };
  },
  computed:{
    theme(){
      return this.config.theme
    }
  }
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
