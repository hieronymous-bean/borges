<template>
  <div class="flex flex-col absolute z-50 top-1/4 left-0 right-0 w-11/12 sm:w-5/6 lg:w-1/2 max-w-2xl max-h-2xl mx-auto rounded-sm">
    <div class="flex flex-row justify-between px-6 py-3 bg-darktwo border-b border-gray-300 rounded-tl-lg rounded-tr-lg">
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
    <div class="flex flex-col bg-greytwo">
      <div class="flex flex-row items-center justify-between bg-white border-r border-l rounded-sm">
        <div class="flex flex-row items-center w-full">
          <table class="min-w-max w-full table-auto">
            <thead>
              <tr class="bg-greyone text-darkone uppercase text-xs">
                <th class="py-3 px-6 text-left">Title</th>
                <th class="py-3 px-6 text-left">Type</th>
                <th class="py-3 px-6 text-left">Access</th>
                <th class="py-3 px-6 text-left">Color</th>
                <th class="py-3 px-6 text-center">Icon</th>
              </tr>
            </thead>
            <tbody class="text-greyfour text-sm font-light">
              <tr class="border-b border-graytwo">
                <td class="py-3 px-6 text-left whitespace-nowrap">
                  <div class="flex items-center">
                    <input v-model="projectName" placeholder="Project Name" class="outline-none"/>
                  </div>
                </td>
              <td class="py-3 px-6 text-left">
                <span class="text-darkone text-xs">
                  <select type="text" name="projectType" v-model="projectType" class="w-full outline-none py-1 px-0 border-none appearance-none cursor-pointer" id="">
                    <option class="text-darkone" value="0">Fiction</option>
                    <option value="0">Non-Fiction</option>
                  </select>
                </span>
              </td>
              <td class="py-3 px-6 text-left">
                <span class="bg-white text-xs">Private</span>
              </td>
              <td class="py-3 px-6 text-left">
                <span class="bg-one text-white text-xs px-2 py-1 rounded-full">Primary</span>
              </td>
              <td class="py-3 px-6 text-left whitespace-nowrap">
                <div class="flex items-center">
                  <div class="mx-auto" v-html="iconSource">
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
      <button @click="createProject()" class="px-4 py-2 text-white hover:underline text-sm font-normal bg-one rounded-sm">
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
    iconSource: '<svg class="w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M 9.2773438 1.0527344 L 7.3828125 2 L 5 2 L 5 3 L 7 3 L 7 4 L 6 4 A 0.50005 0.50005 0 0 0 5.7226562 4.0839844 L 4.7675781 4.7207031 L 3.9746094 2.3417969 A 0.50005 0.50005 0 0 0 3.4746094 2 A 0.50005 0.50005 0 0 0 3.1464844 2.1464844 C 3.1464844 2.1464844 2.6124305 2.679987 2.0839844 3.4726562 C 1.5555382 4.2653256 1 5.3333333 1 6.5 C 1 7.6666667 1.5555382 8.7346744 2.0839844 9.5273438 C 2.6124305 10.320013 3.1464844 10.853516 3.1464844 10.853516 L 3.8535156 10.146484 C 3.8535156 10.146484 3.3875695 9.6799871 2.9160156 8.9726562 C 2.4444618 8.2653255 2 7.3333333 2 6.5 C 2 5.6666667 2.4444618 4.7346745 2.9160156 4.0273438 C 3.1167015 3.7263149 3.1512768 3.7237308 3.3144531 3.5273438 L 4.0253906 5.6582031 A 0.50005 0.50005 0 0 0 4.7773438 5.9160156 L 6.1523438 5 L 7 5 L 7 6 L 6 6 L 6 7 L 7 7 L 7 8 L 6 8 L 6 9 L 7 9 L 7 10 L 6 10 L 6 10.292969 L 5.0898438 11.203125 L 4.0527344 13.277344 L 4.9472656 13.722656 L 5.9101562 11.796875 L 6.3066406 11.400391 C 6.5805684 11.762387 7.0113806 12 7.5 12 C 7.9886194 12 8.4194316 11.762387 8.6933594 11.400391 L 9.0898438 11.796875 L 10.052734 13.722656 L 10.947266 13.277344 L 9.9101562 11.203125 L 9 10.292969 L 9 10 L 8 10 L 8 9 L 9 9 L 9 8 L 8 8 L 8 7 L 9 7 L 9 6 L 8 6 L 8 5 L 8.8476562 5 L 10.222656 5.9160156 A 0.50005 0.50005 0 0 0 10.974609 5.6582031 L 11.685547 3.5273438 C 11.848723 3.7237308 11.883299 3.726315 12.083984 4.0273438 C 12.555538 4.7346744 13 5.6666667 13 6.5 C 13 7.3333333 12.555538 8.2653256 12.083984 8.9726562 C 11.612431 9.679987 11.146484 10.146484 11.146484 10.146484 L 11.853516 10.853516 C 11.853516 10.853516 12.387569 10.320013 12.916016 9.5273438 C 13.444462 8.7346745 14 7.6666667 14 6.5 C 14 5.3333333 13.444462 4.2653255 12.916016 3.4726562 C 12.387569 2.6799871 11.853516 2.1464844 11.853516 2.1464844 A 0.50005 0.50005 0 0 0 11.492188 2 A 0.50005 0.50005 0 0 0 11.025391 2.3417969 L 10.232422 4.7207031 L 9.2773438 4.0839844 A 0.50005 0.50005 0 0 0 9 4 L 8 4 L 8 2.8085938 L 9.7226562 1.9472656 L 9.2773438 1.0527344 z"></path></svg>'
  }),
  components: {

  },
  methods: {
    createProject() {
      if (!this.projectName) return;

      const user = this.$store.getters["authentication/getUser"];
      const newProject = {
        name: this.projectName,
        type: this.projectType,
        color: "purple",
        icon: this.iconSource
      };
      this.$store.commit("application/projectCreate", newProject);

    },
    closeCreateNewProjectWindow() {
      this.$emit('CloseCreateProjectWindow');
    }
  },
  computed: {

  }
}
    
</script>