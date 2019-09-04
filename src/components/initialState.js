export default {
  data: {
    backlog: {
      id: "backlog",
      title: "Backlog",
      tasks: {
        data: {
          "task-1": {
            id: "task-1",
            title: "First Task",
            content:
              "Nostrud aute ex eu ullamco in voluptate do excepteur exercitation."
          },
          "task-2": {
            id: "task-2",
            title: "Second Task",
            content: "Mollit et veniam velit dolor reprehenderit nisi commodo."
          }
        },
        order: ["task-1", "task-2"]
      }
    },
    wip: {
      id: "wip",
      title: "Work in Progress",
      tasks: {
        data: {
          "task-3": {
            id: "task-3",
            title: "Third Task",
            content: "Aliquip nulla sit minim sunt cillum nisi."
          }
        },
        order: ["task-3"]
      }
    }
  },
  order: ["backlog", "wip"]
};
