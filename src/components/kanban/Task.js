import React from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";

import Icon from "./Icon.js";

const Container = styled.div`
  margin-bottom: 0.5rem;
  background-color: ${props => props.theme.backgroundColor.primary};
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  padding: 0.3rem 0.9rem;
  font-size: 1.2rem;
  font-weigth: bolder;
  overflow-wrap: break-word;

  background-color: ${props =>
    props.theme.backgroundColor.secondaryTransparent};
`;

const ActionsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

const Description = styled.div`
  padding: 0.3rem 0.9rem 0.6rem;
  font-size: 1.1rem;
  overflow-wrap: break-word;
  white-space: pre-line;
`;

function Task({ task, index, openTaskEdit, deleteTask }) {
  return (
    <Draggable draggableId={task.id} index={index}>
      {provided => (
        <Container
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Title>
            {task.title}{" "}
            <ActionsWrapper>
              <Icon src="edit.png" onClick={() => openTaskEdit(task)} />
              <Icon src="garbage.png" onClick={deleteTask} />
            </ActionsWrapper>
          </Title>
          {task.content ? <Description>{task.content}</Description> : ""}
        </Container>
      )}
    </Draggable>
  );
}

export default Task;
