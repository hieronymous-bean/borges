<template>
  <div class="flex flex-col w-64 bg-lightblue border-r border-mediumgrey">
    <div class="flex flex-col flex-grow">
      <writing-sidebar-document v-for="(document, index) in this.documents" :key="index" :DocumentData="document"/>
    </div>
    <div @click="createDocument" class="bg-lightblue border-t p-2 text-sm text-dark text-center hover:underline cursor-pointer">+ Add Page</div>
  </div>
</template>

<script>
import WritingSidebarDocument from './WritingSidebarDocument.vue';
import { addNewDocument } from '../utilities/DocumentUtilities.js';

export default {
  name: "WritingSidebar",
  data: () => ({

  }),
  components: {
    WritingSidebarDocument
  },
  methods: {
    createDocument() {
      const user = this.$store.getters['authentication/getUser'];
      addNewDocument(user.uid).then(() => {
        this.$store.dispatch('writing/getDocuments');
      });
    }
  },
  computed: {
    documents() {
      const documentData = this.$store.getters['writing/getDocuments'];
      return documentData;
    }
  }
}
</script>