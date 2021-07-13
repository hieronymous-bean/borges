<template>
  <div class="flex w-screen h-screen text-gray-700">
    <writing-sidebar v-on:OpenTemplateModal="this.templateModalActive = true" v-on:OpenImportModal="this.importModalActive = true" v-on:OpenTrashModal="this.trashModalActive = true"/>
    <div class="flex flex-col flex-grow">
      <router-view/>
    </div>
  </div>
  <writing-templates-modal v-show="templateModalActive" v-on:CloseTemplateModal="this.templateModalActive = false" />
  <writing-import-modal v-show="importModalActive" v-on:CloseImportModal="this.importModalActive = false" />
  <writing-trash-modal v-show="trashModalActive" v-on:CloseTrashModal="this.trashModalActive = false"/>
</template>

<script>
import WritingSidebar from './components/WritingSidebar.vue';
import WritingTemplatesModal from './components/WritingTemplatesModal.vue';
import WritingImportModal from './components/WritingImportModal.vue';
import WritingTrashModal from './components/WritingTrashModal.vue';

export default {
  name: 'Writing',
  data: () => ({
    importModalActive: false,
    templateModalActive: false,
    trashModalActive: false
  }),
  components: {
    WritingSidebar,
    WritingImportModal,
    WritingTemplatesModal,
    WritingTrashModal
  },
  computed: {

  },
  methods: {

  },
  beforeMount() {
    this.$store.getters["writing/getDocuments"];
  },
  updated() {
    this.$store.getters["writing/getDocuments"];
  }
}
</script>