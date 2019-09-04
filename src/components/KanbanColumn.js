import React from "react";
import { Droppable } from "react-beautiful-dnd";
import KanbanTask from "./KanbanTask";

function KanbanColumn({ column }) {
  return (
    <div className="kanban-column">
      <h3>{column.title}</h3>
      <Droppable droppableId={column.id}>
        {provided => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {column.tasks.order.map((taskId, index) => {
              return (
                <KanbanTask
                  task={column.tasks.data[taskId]}
                  index={index}
                  key={taskId}
                />
              );
            })}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
}

export default KanbanColumn;
