<template>
  <div class="flex flex-col absolute top-1/4 left-0 right-0 w-11/12 sm:w-5/6 lg:w-1/2 max-w-2xl max-h-2xl mx-auto rounded-sm">
    <div class="flex flex-row justify-between px-6 py-3 bg-dark border-b border-gray-300 rounded-tl-lg rounded-tr-lg">
      <div class="flex">
      <svg class="w-6 mr-5 fill-current text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M 5 2 C 3.3550302 2 2 3.3550302 2 5 L 2 17 C 2 18.64497 3.3550302 20 5 20 L 22 20 L 22 4 L 8 4 L 8 2 L 5 2 z M 5 4 L 6 4 L 6 14 L 5 14 C 4.6116523 14 4.3420139 14.278986 4 14.416016 L 4 5 C 4 4.4349698 4.4349698 4 5 4 z M 8 6 L 20 6 L 20 18 L 5 18 C 4.4349698 18 4 17.56503 4 17 C 4 16.43497 4.4349698 16 5 16 L 8 16 L 8 6 z M 14 9 L 15.292969 10.292969 L 14 11.585938 L 12 9.5859375 L 9.2929688 12.292969 L 10.707031 13.707031 L 12 12.414062 L 14 14.414062 L 16.707031 11.707031 L 18 13 L 18 9 L 14 9 z"></path></svg>
      <p class="font-semibold text-lg text-white">Create New Project</p>
      </div>
      <svg @click="closeCreateNewProjectWindow" class="w-6 h-6 cursor-pointer hover:shadow-sm fill-current text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M6 18L18 6M6 6l12 12"
        ></path>
      </svg>
    </div>
    <div class="flex flex-col bg-gray-100">
      <div class="flex flex-row items-center justify-between bg-white border-r border-l rounded-sm">
        <div class="flex flex-row items-center w-full">
          <table class="min-w-max w-full table-auto">
            <thead>
              <tr class="bg-gray-100 text-dark uppercase text-xs">
                <th class="py-3 px-6 text-left">Title</th>
                <th class="py-3 px-6 text-left">Type</th>
                <th class="py-3 px-6 text-left">Access</th>
                <th class="py-3 px-6 text-left">Color</th>
                <th class="py-3 px-6 text-center">Icon</th>
              </tr>
            </thead>
            <tbody class="text-gray-600 text-sm font-light">
              <tr class="border-b border-gray-200">
                <td class="py-3 px-6 text-left whitespace-nowrap">
                  <div class="flex items-center">
                    <input v-model="projectName" placeholder="Project Name" class="outline-none"/>
                  </div>
                </td>
              <td class="py-3 px-6 text-left">
                <span class="bg-white text-xs">
                  <select type="text" name="projectType" v-model="projectType" class="w-full outline-none py-1 px-0 font-light bg-white border-none appearance-none cursor-pointer" id="">
                    <option value="0">Fiction</option>
                    <option value="0">Non-Fiction</option>
                  </select>
                </span>
              </td>
              <td class="py-3 px-6 text-left">
                <span class="bg-white text-xs">Private</span>
              </td>
              <td class="py-3 px-6 text-left">
                <span class="bg-primary text-white text-xs px-2 py-1 rounded-full">Primary</span>
              </td>
              <td class="py-3 px-6 text-left whitespace-nowrap">
                <div class="flex items-center">
                  <div class="mx-auto">
                    <img class="w-5" :src="this.iconSource"/>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        </div>
      </div>
    </div>
    <div class="flex flex-row items-center justify-between px-6 py-3 bg-gray-50 border-gray-200 border-b border-r border-l">
      <button @click="createProject()" class="px-4 py-2 text-white hover:underline text-sm font-normal bg-primary rounded-sm">
        Create Project 
      </button>
    </div>
  </div>
</template>


<script>
import { addNewProject } from "../utilities/ProjectUtilities.js";
export default {
  name: 'ApplicationCreateNewProject',
  data: () => ({
    iconSource: 'https://img.icons8.com/ios/50/000000/coffee--v1.png'
  }),
  components: {

  },
  methods: {
    createProject() {
      const user = this.$store.getters['authentication/getUser'];
      if (!this.projectName) return;
      const projectDetails = {
        name: this.projectName,
        type: this.projectType,
        color: "purple",
        icon: this.iconSource
      };
      addNewProject(user.uid, projectDetails).then(() => {
        this.$store.dispatch('application/getProjects');
      });
    },
    closeCreateNewProjectWindow() {
      this.$emit('CloseCreateProjectWindow');
    }
  },
  computed: {

  }
}
    
</script>