export default {
  template: `
    <div class="flex flex-col lg:flex-row">
    <div class="project-info lg:w-2/4 bg-gray-800 p-4 text-white flex-shrink-0 flex items-start justify-start">
        <h1 class="text-2xl font-bold">Tasks</h1>
    </div>
    <div class="project-participants-container lg:w-2/4 bg-gray-800 p-4 text-white flex items-end justify-end">
        <div class="project-participants mt-2">
            <span class="bg-gray-600 w-4 h-4 rounded-full inline-block mr-1"></span>
            <span class="bg-gray-600 w-4 h-4 rounded-full inline-block mr-1"></span>
            <span class="bg-gray-600 w-4 h-4 rounded-full inline-block mr-1"></span>
            <button data-modal-target="crud-modal" data-modal-toggle="crud-modal" class="bg-gray-600 w-10 h-10 rounded-full  mr-1">
                <i class="fa-solid fa-plus text-white"></i>
            </button>

            <!-- Main modal -->
            <div id="crud-modal" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div class="relative p-4 w-full max-w-md max-h-full">
                    <!-- Modal content -->
                    <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <!-- Modal header -->
                        <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                                Create New Task
                            </h3>
                            <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="crud-modal">
                                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                </svg>
                                <span class="sr-only">Close modal</span>
                            </button>
                        </div>
                        <!-- Modal body -->
                        <form class="p-4 md:p-5" @submit.prevent="addIssue">
                            <div class="grid gap-4 mb-4 grid-cols-2">
                                <p v-if="errors.length" class="text-red-500 p-4">
                                    <ul>
                                        <li v-for="error in errors">{{ error }}</li>
                                    </ul>
                                </p>                        
                                <div class="col-span-2">
                                    <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Task Name</label>
                                    <input type="text" name="name" v-model="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type task name" required="">
                                </div>
                                <div class="col-span-2 sm:col-span-1">
                                <label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tags</label>
                                <select id="category" v-model="tags" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                    <option selected="">Select tags</option>
                                    <option value="New">#New Feature</option>
                                    <option value="Fixed">#Bug Fixed</option>
                                    <option value="Request">#User Request</option>
                                    <option value="ChangeFlow">#Change Flow</option>
                                </select>
                                </div>
                                <div class="col-span-2 sm:col-span-1">
                                    <label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Projects</label>
                                    <select id="category" v-model="projects" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                        <option selected="">Select category</option>
                                        <option value="Food User">Food User</option>
                                        <option value="PMS">PMS</option>
                                        <option value="SMS">Student Management system</option>
                                        <option value="FDA">FDA</option>
                                    </select>
                                </div>
                                <div class="col-span-2">
                                    <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Description</label>
                                    <textarea id="description" v-model="description" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write product description here"></textarea>                    
                                </div>
                            </div>
                            <button type="submit" class="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                <svg class="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                                Add new task
                            </button>
                        </form>
                    </div>
                </div>
            </div> 
        </div>
    </div>
</div>
`,
data() {
    return {
      errors: [],
      name: '',
      tags: '',
      projects : '',
      description: ''
    }
},
methods: {
    addIssue() {
        if (this.name && this.tags && this.projects && this.description) {
            // Emit an event named 'add-issue' and pass data
            this.$emit('add-issue', {
                name: this.name,
                tags: this.tags,
                projects: this.projects,
                description: this.description,
            });
        
            // Clear the form fields
            this.name = '';
            this.tags = '';
            this.projects = '';
            this.description = '';
            return true;
        }else{
            this.errors = [];

            if (!this.name) {
              this.errors.push('Name required.');
            }
            if (!this.tags) {
              this.errors.push('Tags required.');
            }
    
            if (!this.projects) {
                this.errors.push('projects required.');
              }
    
            if (!this.description) {
                this.errors.push('Description required.');
            }

            return this.errors;
        }
      },
},

};
