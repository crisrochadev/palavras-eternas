t<template>
  <page-component>
    <div class="w-full flex justify-center ">
      <s-input v-model:value="search" placeholder="Pequise um livro"/>
    </div>
    <div class="w-full h-[calc(100%_-_130px)] mt-2 overflow-y-auto flex flex-col gap-2 px-2">
      <div v-for="(book,i) in books" :key="book.name" class="w-full rounded shadow-md p-4 flex text-primary bg-box-bottom font-bold uppercase justify-between items-center">
        <p>{{ book.name }}</p>
        <p>{{ book.abbrev.pt }}</p>
      </div>
    </div>
  </page-component>
</template>
<script>
import SInput from '../components/forms/SInput.vue'
import PageComponent from '../components/PageComponent.vue'
import { useConfig } from '@/store/config'
export default {
  components:{ PageComponent, SInput},
  data(){
    const config = useConfig()
    return{
      search:'',
      config
    }
  },
  computed:{
    books(){
      return this.config.books.filter(book => book.name.toLowerCase().includes(this.search.toLowerCase()))
    }
  },
  async mounted(){
    await this.config.getBooks()
  }
}
</script>