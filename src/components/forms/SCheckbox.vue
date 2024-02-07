<template>
    <div>
        <i class="fa-solid fa-square-check text-primary" v-if="checked" ></i>
        <i class="fa-solid fa-square text-strong-bottom" v-else></i>
    </div>
</template>
<script>
export default {
    name:'s-checkbox',
    props:{
        check:{
            type:Boolean,
            default:false
        }
    },
    emits:['update:check'],
    computed:{
        checked:{
            get(){
                return this.check
            },
            set(newvalue){
                this.$emit('update:check',newvalue)
            }
        }
    }
}
</script>