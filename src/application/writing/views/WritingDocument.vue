<template>
  <div class="flex w-full items-center flex-shrink-0 h-16 px-8 border-b border-gray-300">
    <input type="text" :value="documentName" @input="updateDocumentName" class="w-full text-lg text-dark font-bold outline-none">
  </div>
  <div class="flex text-gray-700">
    <div class="flex flex-col flex-grow">
      <div class="flex-grow p-6 overflow-auto">
        <div class="grid grid-cols-3 gap-6">
          <div class="h-24 col-span-3 bg-white border border-gray-300"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  
  name: "WritingDocument",
  data: () => ({
    
  }),
  components: {
    
  },
  computed: mapState({
    documentName: state => state.writing.documentSelected.name
  }),
  methods: {
    updateDocumentName (e) {
      this.$store.commit('writing/documentUpdateName', e.target.value)
    }
  }
}
</script>