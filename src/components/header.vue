<template>
 <div>
    <p>{{msg}}</P> 
    <p>{{$store.state.Header.count}}</P> 
    <a href="javascript:;" @click="$store.commit('Count',10)">click</a>
    <a href="javascript:;" @click="$store.dispatch('Acount')">click</a>
    <a href="javascript:;" @click="Revis()">click</a>
 </div>
</template>
 
<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      msg: "wwwwwwwwwwwwwwww"
    };
  },
  computed: {
    ...mapState({
      count: state => state.Header.count
    })
  },
  methods: {
    
      Revis() {
        this.$store.dispatch("Acount");
      }
    
  },
  created() {
    this.msg = this.count;
  }
};
</script>