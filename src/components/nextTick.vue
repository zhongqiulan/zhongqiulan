<template>
    <div>
        <multiselect v-model="value" :options="options" :multiple="true"></multiselect>
        <p @click="aa">{{value}}</p>
    </div>
</template>

<script>
// import Multiselect from "vue-multiselect";

export default {
  // components: { Multiselect },
  data() {
    return {
      value: "",
      options: [
        "Select option",
        "options",
        "selected",
        "mulitple",
        "label",
        "searchable",
        "clearOnSelect",
        "hideSelected",
        "maxHeight",
        "allowEmpty",
        "showLabels",
        "onChange",
        "touched"
      ]
    };
  },
  methods:{
    aa:function(){
     
      console.log(this.value)
    }
  }

};
</script>

<style src="../../dist/vue-multiselect.min.css"></style>



