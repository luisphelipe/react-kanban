import React from "react";
import KanbanTask from "./KanbanTask";

function KanbanColumn({ category }) {
  return (
    <div>
      <h3>{category.title}</h3>
      {category.tasks.map(task => {
        return <KanbanTask task={task} />;
      })}
    </div>
  );
}

export default KanbanColumn;
