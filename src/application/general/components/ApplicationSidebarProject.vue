<template>
  <router-link @click="this.$store.commit('application/projectSelected', ProjectData)" :to=" '/writing/' + ProjectData.id" :class="'bg-' + ProjectData.color" class="flex items-center justify-center flex-shrink-0 w-10 h-10 mt-4 rounded border border-lightgrey text-dark hover:text-primary cursor-pointer">
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

  },
  props: [
    "ProjectData"
  ]
}
</script>