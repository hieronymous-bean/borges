<template>
  <div class="flex flex-col w-64 bg-lightblue border-r border-greyone py-2">
    <div class="flex flex-col flex-grow">
      <writing-sidebar-document v-for="(document, index) in this.documents" :key="index" :DocumentData="document"/>
    </div>
    <div @click="createDefaultDocument" class="bg-greyone border-t border-greyone p-2 text-sm text-dark text-center hover:underline cursor-pointer">+ Add Page</div>
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
    createDefaultDocument() {
      const user = this.$store.getters["authentication/getUser"];
      const project = this.$store.getters["application/getProjectSelected"];
      const newDocument = {
        name: 'New Document',
        uid: user.uid,
        body: '',
        type: 'Page',
        color: 'primary',
        project: project.id
      }
      this.$store.commit("writing/documentCreate", newDocument);
    }
  },
  computed: {
    documents() {
      const allDocuments = this.$store.getters['writing/getDocuments'];
      const selectedProject = this.$store.getters["application/getProjectSelected"];
      const documentData = [];

      for (let i = 0;i < allDocuments.length;i++) {
        if (allDocuments[i].project == selectedProject.id) documentData.push(allDocuments[i]);
      }

      return documentData;
    },
    project() {
      const projectData = this.$store.getters["application/getProjectSelected"];
      return projectData;
    }
  },
  updated() {
    this.$store.getters["writing/getDocuments"];
  }
}
</script>