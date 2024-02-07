<template>
  <label tabIndex="1" class="w-full bg-transparent text-primary relative">
    <input
      :type="t"
      v-model="val"
      @input="update"
      :placeholder="p"
      class="w-full px-2 py-4 pr-8 bg-transparent border-b-2 border-primary focus:outline-none focus:border-secondary focus:placeholder:text-primary placeholder:text-primary placeholder:font-bold text-xl"
    />
    <div class="absolute top-1 right-1 ">
        <slot name="after"/>
    </div>
  </label>
</template>
<script>
export default {
  name: "s-input",
  props: {
    type: {
      type: String,
      default: "text",
    },
    value: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "Digite aqui",
    },
  },
  emits: ["update:type","update:placeholder", "update:value", "update"],
  computed: {
    t: {
      get() {
        return this.type;
      },
      set(newvalue) {
        this.$emit("update:type", newvalue);
      },
    },
    val: {
      get() {
        return this.value;
      },
      set(newvalue) {
        this.$emit("update:value", newvalue);
      },
    },
    p: {
      get() {
        return this.placeholder;
      },
      set(newvalue) {
        this.$emit("update:placeholder", newvalue);
      },
    },
  },
  methods:{
    update(){
        console.log(this.val)
        this.$emit('update', this.val)
    }
  }
};
</script>
<style lang=""></style>
