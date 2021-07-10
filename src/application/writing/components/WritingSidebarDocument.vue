<template>
  <router-link @click="this.$store.commit('writing/documentSelected', DocumentData)" :to="'/writing/' + this.$route.params.project + '/' + DocumentData.id" :class="this.menuItemActive ? 'bg-white' : ''" class="flex relative items-center justify-between w-full h-10 mt-5 px-1 text-xs text-dark font-bold rounded hover:bg-white hover:underline">
    <div @click="this.menuItemActive = !this.menuItemActive" :class="this.menuItemActive ? 'transform rotate-0' : 'transform -rotate-90'" class="absolute left-1 transition duration-200 ease-in-out">
      <svg class="w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">    <path d="M5.707,10.707l5.586,5.586c0.391,0.391,1.024,0.391,1.414,0l5.586-5.586C18.923,10.077,18.477,9,17.586,9H6.414 C5.523,9,5.077,10.077,5.707,10.707z"></path></svg>
    </div>
    <div @click="this.menuItemActive = !this.menuItemActive" class="flex items-center h-10 overflow-hidden">
      <div :style="true ? 'background-color:#000000':''" class="w-8 mr-1 ml-4 p-2 bg-white hover:bg-lightgrey"></div>
      <span class="truncate mr-auto pr-1">{{ DocumentData.name }}</span>
    </div>
    <div class="flex-none">
      <writing-sidebar-document-options/>
      <writing-sidebar-document-add-document/>
    </div>
  </router-link>
  <div v-show="menuItemActive" class="flex relative bg-white items-center justify-between h-10 px-2 text-xs text-primary font-normal">
    No Pages Inside
  </div>
</template>



<script>
import WritingSidebarDocumentAddDocument from './WritingSidebarDocumentAddDocument.vue';
import WritingSidebarDocumentOptions from './WritingSidebarDocumentOptions.vue';
export default {
  name: "WritingSidebarMenuItem",
  data: () => ({
    menuItemActive: false
  }),
  components: {
    WritingSidebarDocumentAddDocument,
    WritingSidebarDocumentOptions
  },
  methods: {
  },
  computed: {
  },
  props: [
    "DocumentData"
  ]
};
</script>