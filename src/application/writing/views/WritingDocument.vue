<template>
  <div class="flex text-gray-700">
    <div class="flex flex-col flex-grow">
      <div class="flex flex-row justify-between">
        <nav class="flex px-6 py-2">
          <ol class="flex flex-row text-grey-dark text-sm">
            <li class="py-1 px-2 hover:bg-greyone"><a href="#" class="text-one font-semibold underline">{{ project.name }}</a></li>
            <li class="py-1"><span class="mx-1">/</span></li>
            <li class="py-1 px-2 hover:bg-greyone"><a class="text-blue font-normal">Library</a></li>
          </ol>
        </nav>
        <nav class="flex px-6 py-2">
          <div class="flex flex-row text-one text-sm align-middle">
            <a href="" class="flex py-1 px-2 hover:bg-greyone">Share</a>
            <a href="" class="flex py-1 px-2 hover:bg-greyone">Favorite</a>
            <a href="" class="flex text-one px-2 hover:bg-greyone">
              <svg class="w-4 fill-current text-one" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><circle cx="7" cy="7" r="4"></circle><circle cx="17" cy="7" r="4" opacity=".35"></circle><circle cx="17" cy="17" r="4"></circle><circle cx="7" cy="17" r="4" opacity=".35"></circle></svg>
            </a>
          </div>
        </nav>

      </div>
      <div class="flex-grow p-6 overflow-auto">
        <div class="text-4xl outline-none font-black" style="word-wrap: initial; -webkit-nbsp-mode: initial;white-space: pre;" :contenteditable="true" @input="updateDocumentName">{{document.name}}</div>
      </div>
      <div class="flex-grow p-6 overflow-auto">
        <div class="grid grid-cols-3 gap-6">
          <div class="bg-white">
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
      this.$store.commit('writing/documentUpdateName', e.target.innerHTML)
    }
  }
}
</script>