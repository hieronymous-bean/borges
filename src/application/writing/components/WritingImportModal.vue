<template>
  <div class="w-screen h-screen absolute z-40 bg-black bg-opacity-30">
    <div class="flex flex-col absolute z-50 top-1/4 left-0 right-0 w-11/12 sm:w-5/6 lg:w-1/2 max-w-2xl max-h-2xl mx-auto">
      <div class="flex flex-row justify-between px-6 py-3 bg-darktwo border-b border-gray-300 rounded-tl-lg rounded-tr-lg">
        <div class="flex">
        <svg class="w-6 mr-5 fill-current text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M 5 2 C 3.3550302 2 2 3.3550302 2 5 L 2 17 C 2 18.64497 3.3550302 20 5 20 L 22 20 L 22 4 L 8 4 L 8 2 L 5 2 z M 5 4 L 6 4 L 6 14 L 5 14 C 4.6116523 14 4.3420139 14.278986 4 14.416016 L 4 5 C 4 4.4349698 4.4349698 4 5 4 z M 8 6 L 20 6 L 20 18 L 5 18 C 4.4349698 18 4 17.56503 4 17 C 4 16.43497 4.4349698 16 5 16 L 8 16 L 8 6 z M 14 9 L 15.292969 10.292969 L 14 11.585938 L 12 9.5859375 L 9.2929688 12.292969 L 10.707031 13.707031 L 12 12.414062 L 14 14.414062 L 16.707031 11.707031 L 18 13 L 18 9 L 14 9 z"></path></svg>
        <p class="font-semibold text-lg text-white">Import</p>
        </div>
        <svg @click="closeImportModal" class="w-6 h-6 cursor-pointer hover:shadow-sm fill-current text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </div>
      <div class="flex flex-col bg-greytwo">
        <div class="flex flex-row items-center justify-between bg-white border-r border-l rounded-sm">
          <div class="flex flex-row items-center w-full">
            
          </div>
        </div>
      </div>
      <div class="flex flex-row items-center justify-between px-6 py-3 bg-gray-50 border-gray-200 border-b border-r border-l rounded-bl-lg rounded-br-lg">
        <button class="px-4 py-2 text-white hover:underline text-sm font-normal bg-one">
          Import
        </button>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'WritingImportModal',
  data: () => ({
    importModalActive: false
  }),
  components: {

  },
  methods: {
    closeImportModal() {
      this.$emit('CloseImportModal');
    }
  },
  computed: {

  }
}
    
</script>