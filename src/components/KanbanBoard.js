import React, { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import styled from "styled-components";

import KanbanColumn from "./KanbanColumn";
import initialState from "./initialState";

const KanbanContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

function KanbanBoard() {
  const [columns, setColumns] = useState(initialState);

  const handleDrop = ({ draggableId, source, destination }) => {
    console.log(source);
    console.log(destination);

    if (
      !destination ||
      (source.droppableId === destination.droppableId &&
        source.index === destination.index)
    )
      return;

    setColumns(oldColumns => {
      let newColumns = JSON.parse(JSON.stringify(oldColumns));

      let sourceColumn = newColumns.data[source.droppableId],
        destinationColumn = newColumns.data[destination.droppableId];

      let task = JSON.parse(
        JSON.stringify(sourceColumn.tasks.data[draggableId])
      );

      delete sourceColumn.tasks.data[draggableId];
      sourceColumn.tasks.order.splice(source.index, 1);

      destinationColumn.tasks.data[task.id] = task;
      destinationColumn.tasks.order.splice(destination.index, 0, draggableId);

      return {
        data: {
          ...newColumns.data
        },
        order: oldColumns.order
      };
    });
  };

  return (
    <KanbanContainer>
      <DragDropContext onDragEnd={handleDrop}>
        {columns.order.map(columnId => {
          return (
            <KanbanColumn column={columns.data[columnId]} key={columnId} />
          );
        })}
      </DragDropContext>
    </KanbanContainer>
  );
}

export default KanbanBoard;
