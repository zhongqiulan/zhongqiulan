<template>
    <div>
        <ul v-for="(item,index) in list" :key="index">
            <li >{{item}}<li/>
        </ul>
        <p v-on:click = 'push'>click me</p>
    </div>
</template>
<script>
export default {
  data() {
    return {
      list: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    }
  },
  methods:{
    push:function(){
            this.list.push(11);
            // this.nextTick(function(){
            //     alert('数据已经更新')
            // });
            this.$nextTick(function(){
                alert('v-for渲染已经完成')
            })
        }
  }
}
</script>


