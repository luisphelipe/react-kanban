import React from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";

const Task = styled.div`
  margin: 0.5rem 0;
  background-color: #eee;
`;

const Title = styled.div`
  background-color: #ddd;
  padding: 0.3rem 0.9rem;
`;

const Description = styled.div`
  padding: 0.3rem 0.9rem;
`;

function KanbanTask({ task, index }) {
  return (
    <Draggable draggableId={task.id} index={index}>
      {provided => (
        <Task
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div>
            <Title>{task.title}</Title>
            <Description>{task.content}</Description>
          </div>
        </Task>
      )}
    </Draggable>
  );
}

export default KanbanTask;
