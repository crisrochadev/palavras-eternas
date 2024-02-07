import { useStorage } from '@vueuse/core'
import { defineStore } from 'pinia'
import { _axios } from "@/plugins/axios"

export const useConfig = defineStore('config', {
  state(){
    return{
        theme:useStorage('theme', 'light'),
        books:[]
    }
  },
  actions:{
    async getBooks(){
      const res = await _axios.get('/books').then(res => res.data).catch(err => err);
      if(Array.isArray(res)){
        this.books = res
      }
    }
  }
})