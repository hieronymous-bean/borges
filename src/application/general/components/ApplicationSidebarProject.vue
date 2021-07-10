<template>
  <router-link @click="this.$store.commit('application/projectSelected', ProjectData)" :to=" '/writing/' + ProjectData.id" :class="{ border: projectIsSelected, borderDark: projectIsSelected, shadow: projectIsSelected }" class="flex items-center justify-center flex-shrink-0 w-10 h-10 mt-4 rounded text-dark hover:text-primary cursor-pointer">
    <img :src="ProjectData.icon"/>
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
    }
  },
  props: [
    "ProjectData"
  ]
}
</script>