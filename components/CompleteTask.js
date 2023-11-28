import TaskList from './TaskList.js';
export default {
    props: {
        approved : Array,
        create : String
      },
    components : {TaskList},
    template: `
    <div class="task-column flex-1 m-2 relative overflow-hidden bg-white rounded">
    <div class="p-4">
      <h2 class="text-lg font-semibold uppercase text-white bg-blue-600 p-4 rounded-t-lg">Completes</h2>
    </div>
    <div class="p-4">
      <div class="bg-white rounded-lg shadow-md">
        <input type="text"
              placeholder="Add a Complete"
              @keyup.enter="addIssue('tasks')"
              v-model="create.value"
              class="border border-t-0 bg-white rounded shadow-md w-full p-4 text-base font-light outline-none transition duration-300 focus:shadow-md focus:outline-none">
      </div>
    </div>
    <TaskList :data="approved"></TaskList>
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
          });
          this.create[key] = "";
        },
      },
  };
  