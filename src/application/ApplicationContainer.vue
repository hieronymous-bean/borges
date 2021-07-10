<template>
  <div class="select-none font-nunito">
    <main class="w-full h-screen">
      <div class="flex flex-no-wrap">
        <application-sidebar></application-sidebar>
        <router-view/>
      </div>
    </main>
  </div>
</template>

<script>
import ApplicationSidebar from './general/components/ApplicationSidebar.vue';
export default {
  name: 'ApplicationContainer',
  data: () => ({
  }),
  components: {
    ApplicationSidebar
  },
  computed: {
    
  },
  methods: {
    
  },
  beforeMount() {
    this.$store.dispatch('writing/getProjects');
  }
}
</script>