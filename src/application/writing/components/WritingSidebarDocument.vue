<template>
  <router-link @mouseenter="menuItemHover = true" @mouseleave="menuItemHover = false" @click="this.$store.commit('writing/documentSelected', DocumentData)" :to="'/writing/' + this.$route.params.project + '/' + DocumentData.id" :class="this.menuItemActive ? 'bg-white' : ''" class="flex relative items-center justify-between w-full h-8 px-1 text-xs text-dark font-bold rounded hover:bg-greyone hover:underline">
    <div @click="this.menuItemActive = !this.menuItemActive" :class="this.menuItemActive ? 'transform rotate-0' : 'transform -rotate-90'" class="absolute left-1 transition duration-200 ease-in-out">
      <svg class="w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">    <path d="M5.707,10.707l5.586,5.586c0.391,0.391,1.024,0.391,1.414,0l5.586-5.586C18.923,10.077,18.477,9,17.586,9H6.414 C5.523,9,5.077,10.077,5.707,10.707z"></path></svg>
    </div>
    <div @click="this.menuItemActive = !this.menuItemActive" class="flex items-center h-8 overflow-hidden">
      <div class="w-4 mr-1 ml-4 bg-white hover:bg-lightgrey">
        <svg class="w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="M 12.5 4 C 10.032499 4 8 6.0324991 8 8.5 L 8 39.5 C 8 41.967501 10.032499 44 12.5 44 L 35.5 44 C 37.967501 44 40 41.967501 40 39.5 L 40 8.5 C 40 6.0324991 37.967501 4 35.5 4 L 12.5 4 z M 12.5 7 L 35.5 7 C 36.346499 7 37 7.6535009 37 8.5 L 37 39.5 C 37 40.346499 36.346499 41 35.5 41 L 12.5 41 C 11.653501 41 11 40.346499 11 39.5 L 11 8.5 C 11 7.6535009 11.653501 7 12.5 7 z M 16.5 11 A 1.50015 1.50015 0 1 0 16.5 14 L 31.5 14 A 1.50015 1.50015 0 1 0 31.5 11 L 16.5 11 z M 16.5 20 A 1.5 1.5 0 0 0 16.5 23 A 1.5 1.5 0 0 0 16.5 20 z M 22.5 20 A 1.50015 1.50015 0 1 0 22.5 23 L 31.5 23 A 1.50015 1.50015 0 1 0 31.5 20 L 22.5 20 z M 16.5 26 A 1.5 1.5 0 0 0 16.5 29 A 1.5 1.5 0 0 0 16.5 26 z M 22.5 26 A 1.50015 1.50015 0 1 0 22.5 29 L 31.5 29 A 1.50015 1.50015 0 1 0 31.5 26 L 22.5 26 z M 16.5 32 A 1.5 1.5 0 0 0 16.5 35 A 1.5 1.5 0 0 0 16.5 32 z M 22.5 32 A 1.50015 1.50015 0 1 0 22.5 35 L 31.5 35 A 1.50015 1.50015 0 1 0 31.5 32 L 22.5 32 z"></path></svg>
      </div>
      <span class="truncate mr-auto pr-1 font-normal">{{ DocumentData.name }}</span>
    </div>
    <div v-show="menuItemHover" class="flex-none pt-1">
      <writing-sidebar-document-options />
      <writing-sidebar-document-add-document/>
    </div>
  </router-link>
  <div v-show="menuItemActive" class="flex relative bg-white items-center justify-between h-8 px-2 text-xs text-primary font-normal">
    No Pages Inside
  </div>
</template>



<script>
import WritingSidebarDocumentAddDocument from './WritingSidebarDocumentAddDocument.vue';
import WritingSidebarDocumentOptions from './WritingSidebarDocumentOptions.vue';
export default {
  name: "WritingSidebarMenuItem",
  data: () => ({
    menuItemActive: false,
    menuItemHover: false,
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