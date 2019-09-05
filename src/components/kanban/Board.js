import React, { useState, useEffect } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { ModalProvider } from "styled-react-modal";
import styled from "styled-components";

import Column from "./Column";
import initialState from "./initialState";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
`;

function Board() {
  const localStorage = window.localStorage;
  const [columns, setColumns] = useState(
    JSON.parse(localStorage.getItem("columnsState")) || initialState
    // initialState
  );
  const [hiddenColumns, setHiddenColumns] = useState([]);

  useEffect(() => {
    localStorage.setItem("columnsState", JSON.stringify(columns));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [columns]);

  const createTask = (columnId, title = "", content = "") => {
    if (!title) return;

    setColumns(oldColumns => {
      let newColumns = JSON.parse(JSON.stringify(oldColumns));
      let targetColumn = newColumns.find(c => c.id === columnId);

      let task = {
        id: `t${Date.now()}${Math.floor(Math.random() * 1000)}`,
        title,
        content
      };

      targetColumn.tasks.push(task);

      return newColumns;
    });
  };

  const editTask = (columnId, taskId, title = "", content = "") => {
    if (!title && !content) return;

    setColumns(oldColumns => {
      let newColumns = JSON.parse(JSON.stringify(oldColumns));
      let taskColumn = newColumns.find(c => c.id === columnId);
      let task = taskColumn.tasks.find(t => t.id === taskId);

      task.title = title;
      task.content = content;

      return newColumns;
    });
  };

  const deleteTask = (columnId, taskId) => {
    setColumns(oldColumns => {
      let newColumns = JSON.parse(JSON.stringify(oldColumns));
      let taskColumn = newColumns.find(c => c.id === columnId);
      let taskIndex = taskColumn.tasks.findIndex(t => t.id === taskId);

      taskColumn.tasks.splice(taskIndex, 1);

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

  const hideColumn = columnId => {
    setHiddenColumns(previousHiddenColumns => {
      let newHiddenColumns = previousHiddenColumns.slice();
      newHiddenColumns.push(columnId);
      return newHiddenColumns;
    });
  };

  return (
    <Container>
      <ModalProvider>
        <DragDropContext onDragEnd={handleDrop}>
          {columns.map(column => {
            return hiddenColumns.includes(column.id) ? (
              ""
            ) : (
              <Column
                column={column}
                createTask={createTask}
                editTask={editTask}
                deleteTask={deleteTask}
                hideColumn={() => hideColumn(column.id)}
                columnWidth={100 / (5 - hiddenColumns.length)}
                key={column.id}
              />
            );
          })}
        </DragDropContext>
      </ModalProvider>
    </Container>
  );
}

export default Board;
