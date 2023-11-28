import TaskList from "./TaskList.js";
export default {
  props: {
    tasks: Array,
    create: String,
  },
  components: { TaskList },
  template: `
  <div class="task-column flex-1 m-2 relative overflow-hidden rounded">
    <div class="p-4">
      <h2 class="text-lg font-semibold uppercase text-white bg-green-600 p-4 rounded-t-lg">Ideas/tasks</h2>
    </div>
    <div class="p-4">
      <div class="bg-white rounded-lg shadow-md">
        <input type="text"
              placeholder="Add an issue"
              @keyup.enter="addIssue('tasks')"
              v-model="create.tasks"
              class="border border-t-0 bg-white rounded shadow-md w-full p-4 text-base font-light outline-none transition duration-300 focus:shadow-md focus:outline-none">
      </div>
    </div>
    <TaskList :data="tasks"></TaskList>
  </div>
    `,
  data() {
    return {
      newTask: "",
    };
  },

  methods: {
    addIssue: function (key) {
      if (!this.create[key]) return;
      this[key].push({
        name: this.create[key],
        estimate: "00:00:00",
        billed: "00:00:00",
        tracked: false,
        assigned: [
          {
            avatar:
              "https://upload.wikimedia.org/wikipedia/en/7/70/Shawn_Tok_Profile.jpg",
          },
          {
            avatar:
              "https://d.fastcompany.net/multisite_files/fastcompany/fc_files/profile/2219225-austin-carr-profile.jpg",
          },
        ],
      });
      this.create[key] = "";
    },
  },
};
