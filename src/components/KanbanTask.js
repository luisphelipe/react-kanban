import React from "react";

function KanbanTask({ task }) {
  return (
    <div className="kanban-task">
      <div className="kanban-task-title">{task.title}</div>
      <div className="kanban-task-description">{task.content}</div>
    </div>
  );
}

export default KanbanTask;
