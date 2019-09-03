import React from "react";
import KanbanTask from "./KanbanTask";

function KanbanColumn({ column }) {
  return (
    <div className="kanban-column">
      <h3>{column.title}</h3>
      {column.tasks.order.map(taskId => {
        return <KanbanTask task={column.tasks.data[taskId]} />;
      })}
    </div>
  );
}

export default KanbanColumn;
