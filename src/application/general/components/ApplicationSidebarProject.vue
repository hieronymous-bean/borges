<template>
  <router-link @click="this.$store.commit('application/projectSelected', ProjectData)" :to=" '/writing/' + ProjectData.id + '/' + projectInitialDocument.id" :class="{ 'bg-greyone': projectIsSelected }" class="flex items-center justify-center flex-shrink-0 mt-4 mx-3 py-2 rounded hover:bg-greytwo text-dark hover:text-one cursor-pointer">
    <div v-html="ProjectData.icon"></div>
  </router-link>
</template>

<script>
export default {
  name: 'ApplicationSidebarProject',
  data: () => ({

  }),
  components: {

  },
  methods: {

  },
  computed: {
    projectIsSelected() {
      const projectSelected = this.$store.getters['application/getProjectSelected'];
      return this.ProjectData.id == projectSelected.id;
    },
    projectInitialDocument() {
      const project = this.ProjectData;
      const documents = this.$store.getters['writing/getDocuments'];
      const result = documents.find(obj => {
        return obj.project === project.id;
      });
      return result;
    }
  },
  props: [
    "ProjectData"
  ]
}
</script>