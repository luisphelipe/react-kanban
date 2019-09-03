import React, { useState } from "react";
import KanbanColumn from "./KanbanColumn";
import initialState from "./initialState";

function KanbanBoard() {
  const [columns, setColumns] = useState(initialState);

  return (
    <div id="kanban-board">
      {columns.order.map(columnId => {
        return <KanbanColumn column={columns.data[columnId]} />;
      })}
    </div>
  );
}

export default KanbanBoard;
