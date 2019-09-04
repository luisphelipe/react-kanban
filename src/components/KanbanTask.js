import React from "react";
import { Draggable } from "react-beautiful-dnd";

function KanbanTask({ task, index }) {
  return (
    <Draggable draggableId={task.id} index={index}>
      {provided => (
        <div
          className="kanban-task"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div>
            <div className="kanban-task-title">{task.title}</div>
            <div className="kanban-task-description">{task.content}</div>
          </div>
        </div>
      )}
    </Draggable>
  );
}

export default KanbanTask;
