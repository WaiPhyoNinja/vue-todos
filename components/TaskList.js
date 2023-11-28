export default {
    props: {
      data : Array
    },
    template: `
    <ul id="tasks" class="p-4 task-inner-list">
        <li v-for="item in data" class="task-item p-4 mb-4 bg-white rounded-lg shadow-md border">
          <h1 class="text-lg font-semibold">{{item.name}}</h1>
          <span class="task-time text-sm">{{item.billed}} / {{item.estimate}}</span>
          <div id="clockdiv"></div>
          <ul class="assigned mt-4">
            <li v-for="dev in item.assigned" class="inline-block mr-2">
              <img :src="dev.avatar" alt="" class="w-10 h-10 rounded-full">
            </li>
          </ul>
          <button @click="!item.tracked ? trackTask(item) : stopTask(item)"
            class="track-task bg-transparent p-0 m-0 border-none outline-none hover:opacity-60">
            <i v-if="!item.tracked" class="material-icons">play_arrow</i>
            <i v-if="item.tracked" class="material-icons">pause</i>
          </button>
        </li>
    </ul>
      `,
    
  };
  