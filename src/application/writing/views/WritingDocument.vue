<template>
  <div class="flex text-gray-700">
    <div class="flex flex-col flex-grow">
      <nav class="bg-grey-light px-6 py-2 rounded font-sans w-full">
        <ol class="flex text-grey-dark text-xs">
          <li class="py-1 px-2 hover:bg-greyone"><a href="#" class="text-one font-semibold underline">{{ project.name }}</a></li>
          <li class="py-1"><span class="mx-1">/</span></li>
          <li class="py-1 px-2 hover:bg-greyone"><a class="text-blue font-normal">Library</a></li>
        </ol>
      </nav>
      <div class="flex-grow p-6 overflow-auto">
        <div class="grid grid-cols-3 gap-6">
          <div class="h-screen col-span-3 bg-white">
            <writing-editor :EditorContent="document"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import WritingEditor from "../components/WritingEditor.vue";
export default {
  name: "WritingDocument",
  data: () => ({
    
  }),
  components: {
    WritingEditor
  },
  computed: {
    document() {
      return this.$store.getters["writing/getSelectedDocument"];
    },
    project() {
      return this.$store.getters["application/getProjectSelected"];
    }
  },
  methods: {
    updateDocumentName (e) {
      this.$store.commit('writing/documentUpdateName', e.target.value)
    }
  }
}
</script>