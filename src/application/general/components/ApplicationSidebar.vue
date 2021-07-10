<template>
  <div class="flex flex-col items-center w-16 pb-4 overflow-auto bg-white border-r border-mediumgrey">
    <a class="flex items-center justify-center flex-shrink-0 w-full h-16 bg-primary" href="#">
      <svg class="w-8 h-8 stroke-current text-white"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    </a>
    <application-sidebar-project v-for="(project, index) in projects" :key="index" :ProjectData="project"/>
    <a @click="this.createNewProjectWindowActive = !this.createNewProjectWindowActive" class="flex items-center justify-center cursor-pointer flex-shrink-0 w-10 h-10 mt-4 rounded border border-white bg-white hover:bg-lightgrey text-dark hover:text-secondary">
      <svg class="w-3 stroke-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">    <path d="M 11 3 L 11 11 L 3 11 L 3 13 L 11 13 L 11 21 L 13 21 L 13 13 L 21 13 L 21 11 L 13 11 L 13 3 L 11 3 z"></path></svg>
    </a>
  </div>
  <application-create-new-project v-show="createNewProjectWindowActive" v-on:CloseCreateProjectWindow="this.createNewProjectWindowActive = false"/>
</template>

<script>
import ApplicationCreateNewProject from './ApplicationCreateNewProject.vue';
import ApplicationSidebarProject from './ApplicationSidebarProject.vue';

export default {
  name: 'ApplicationSidebar',
  data: () => ({
    createNewProjectWindowActive: false
  }),
  components: {
    ApplicationCreateNewProject,
    ApplicationSidebarProject
  },
  methods: {

  },
  computed: {
    projects() {
      const projectData = this.$store.getters['application/getProjects'];
      return projectData;
    }
  }
}
</script>