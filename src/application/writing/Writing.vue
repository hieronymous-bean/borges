<template>
  <div class="flex w-screen h-screen text-gray-700">
    <writing-sidebar />
    <div class="flex flex-col flex-grow">
      <router-view/>
    </div>
  </div>
</template>

<script>
import WritingSidebar from './components/WritingSidebar.vue';

export default {
  name: 'Writing',
  data: () => ({
  }),
  components: {
    WritingSidebar
  },
  computed: {
    currentDocument() {
      return this.$store.getters['writing/getSelectedDocument'];
    },
    currentProject() {
      return this.$store.getters['writing/getSelectedProject'];
    }
  },
  methods: {
  },
  beforeMount() {
    this.$store.dispatch('writing/getDocuments');
  }
}
</script>