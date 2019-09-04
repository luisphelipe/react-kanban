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
  const [taskCount, setTaskCount] = useState(columns.length);

  const createTask = columnId => {
    setColumns(oldColumns => {
      let newColumns = JSON.parse(JSON.stringify(oldColumns));
      let targetColumn = newColumns.find(c => c.id === columnId);

      let task = {
        id: `t${taskCount}`,
        title: "title",
        content: "content"
      };

      setTaskCount(previousTaskCount => previousTaskCount + 1);

      targetColumn.tasks.push(task);

      return newColumns;
    });
  };

  const handleDrop = ({ _, source, destination }) => {
    if (
      !destination ||
      (source.droppableId === destination.droppableId &&
        source.index === destination.index)
    )
      return;

    setColumns(oldColumns => {
      let newColumns = JSON.parse(JSON.stringify(oldColumns));

      let sourceColumn = newColumns.find(c => c.id === source.droppableId),
        destinationColumn = newColumns.find(
          c => c.id === destination.droppableId
        );

      let task = sourceColumn.tasks.splice(source.index, 1)[0];
      destinationColumn.tasks.splice(destination.index, 0, task);

      return newColumns;
    });
  };

  return (
    <KanbanContainer>
      <DragDropContext onDragEnd={handleDrop}>
        {columns.map(column => {
          return (
            <KanbanColumn
              column={column}
              createTask={createTask}
              key={column.id}
            />
          );
        })}
      </DragDropContext>
    </KanbanContainer>
  );
}

export default KanbanBoard;
