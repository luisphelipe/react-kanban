import React, { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";

import KanbanColumn from "./KanbanColumn";
import initialState from "./initialState";

function KanbanBoard() {
  const [columns, setColumns] = useState(initialState);

  const handleDrop = result => {
    console.log(result);
    // TODO: handle data order update
  };

  return (
    <div id="kanban-board">
      <DragDropContext onDragEnd={handleDrop}>
        {columns.order.map(columnId => {
          return (
            <KanbanColumn column={columns.data[columnId]} key={columnId} />
          );
        })}
      </DragDropContext>
    </div>
  );
}

export default KanbanBoard;
