<template>
  <div class="flex text-gray-700">
    <div class="flex flex-col flex-grow">
      <div class="flex-grow p-6 overflow-auto">
        <div class="grid grid-cols-3 gap-6">
          <div class="h-24 col-span-3 bg-white border border-gray-300">{{ currentDocument.id }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WritingDocument',
  data: () => ({

  }),
  components: {
    
  },
  computed: {
    currentDocument() {
      return this.$store.getters['writing/getSelectedDocument'];
    }
  },
  methods: {

  },
  // updated() {
  //   const documents = this.$store.state.writing.documents;
  //   const documentId = this.$route.params.id;

  //   let document = documents.find(x => x.id === documentId);
  //   this.currentDocument = document;

  // },
  // mounted() {
  //   const documents = this.$store.state.writing.documents;
  //   const documentId = this.$route.params.id;

  //   let document = documents.find(x => x.id === documentId);
  //   this.currentDocument = document;

  // }
}
</script>