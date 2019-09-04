import React from "react";
import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import KanbanTask from "./KanbanTask";

const Column = styled.div`
  width: 100%;
  padding: 0 1rem;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
`;

const Button = styled.button`
  box-sizing: border-box;
  margin: auto 0;
`;

const ColumnDroppable = styled.div`
  height: 100%;
`;

function KanbanColumn({ column }) {
  return (
    <Column>
      <Header>
        <h3>{column.title}</h3>
        <Button>new</Button>
      </Header>
      <Droppable droppableId={column.id}>
        {provided => (
          <ColumnDroppable
            className="kanban-column-droppable"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
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
          </ColumnDroppable>
        )}
      </Droppable>
    </Column>
  );
}

export default KanbanColumn;
