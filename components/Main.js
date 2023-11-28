import AddTask from "./AddTask.js";
import InProgressTask from "./InProgressTask.js";
import ReviewTask from "./ReviewTask.js";
import CompleteTask from './CompleteTask.js';
import Header from './Header.js'
export default {
  components: { AddTask, InProgressTask, ReviewTask , CompleteTask, Header},
  template: `
  <Header @add-issue="handleAddIssue"></Header>
  <div class="max-w-1200 mx-auto mt-20 flex flex-wrap">
    <AddTask :tasks="tasks" :create="tasks"  @add="addIssue">></AddTask>
    <InProgressTask :inprogress="inprogress" :create="inprogress" @add="addIssue"></InProgressTask>
    <ReviewTask :reviews="review" :create="review"></ReviewTask>
    <CompleteTask :approved="approved" :create="approved"></CompleteTask>
  </div>
    `,
  data() {
    return {
      create: {},
      tasks: [
        {
          name: "New sidebar design",
          estimate: "20:00:00",
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
        },
        {
          name: "Header design features",
          estimate: "20:00:00",
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
        },
      ],

      inprogress: [
        {
          name: "Login error",
          estimate: "20:00:00",
          billed: "04:10:00",
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
        },
      ],

      review: [
        {
          name: "Onboarding screens",
          estimate: "30:00:00",
          billed: "22:30:00",
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
        },
        {
          name: "Dashboard design",
          estimate: "30:00:00",
          billed: "22:30:00",
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
        },
      ],

      approved: [
        {
          name: "Account settings screen",
          estimate: "16:00:00",
          billed: "11:00:00",
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
        },
        {
          name: "Mobile layout",
          estimate: "16:00:00",
          billed: "11:00:00",
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
        },
        {
          name: "On scroll header layout",
          estimate: "16:00:00",
          billed: "11:00:00",
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
        },
      ],
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
    handleAddIssue(data) {
      console.log(data);
      
    },

    trackTask: function (item) {
      item.tracked = true;
    },
    stopTask: function (item) {
      item.tracked = false;
    },
  },
  // })

  // function onCreate() {
  //   $(document).ready(() => {
  //     dragula([
  //       document.getElementById('tasks'),
  //       document.getElementById('inprogress'),
  //       document.getElementById('review'),
  //       document.getElementById('approved')
  //     ])

  //     .on('drag', function(el) {
  //       el.classList.add('is-moving');
  //     })

  //     .on('dragend', function(el) {
  //       el.classList.remove('is-moving');
  //       window.setTimeout(function() {
  //         el.classList.add('is-moved');
  //         window.setTimeout(function() {
  //           el.classList.remove('is-moved');
  //         }, 600);
  //       }, 100);
  //     });
  //   });
};
