import React, { useState } from "react";
import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import Modal from "styled-react-modal";

import Icon from "./Icon";
import Task from "./Task";

const Container = styled.div`
  box-sizing: border-box;
  padding-bottom: 1rem;
  min-height: 100%;
  width: ${props => props.columnWidth}%;
  color: ${props => props.theme.fontColor.primary};
`;

const HeaderWrapper = styled.div`
  background-color: ${props =>
    props.theme.backgroundColor.secondaryTransparent};
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  margin-bottom: 0.5rem;
  letter-spacing: 0.2rem;

  background-color: ${props => props.theme.backgroundColor.primaryTransparent};
`;

const HeaderTitle = styled.h1`
  font-size: 1.4rem;
  font-weight: normal;
`;

const ActionsWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ColumnDroppable = styled.div`
  height: 100%;
  margin: 0 0.1rem;
`;

const StyledModal = Modal.styled`
  height: auto;
  width: 30vw;
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0);
  align-items: center;
`;
const TaskInputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.backgroundColor.primary};
`;
const TitleInput = styled.input`
  padding: 0.3rem 0.9rem;
  font-size: 1.2rem;
  font-weigth: bolder;
  border: none;
  outline: none;
  color: ${props => props.theme.fontColor.primary};
  font-family: inherit;
  background-color: ${props =>
    props.theme.backgroundColor.secondaryTransparent};
`;

const DescriptionInput = styled.textarea`
  padding: 0.3rem 0.9rem 0.6rem;
  font-size: 1.1rem;
  overflow-wrap: break-word;
  background-color: inherit;
  border: none;
  outline: none;
  color: ${props => props.theme.fontColor.primary};
  font-family: inherit;
  resize: vertical;

  &::-webkit-scrollbar {
    width: 0.4rem;
    background-color: ${props => props.theme.backgroundColor.secondary};
  }

  &::-webkit-scrollbar-thumb {
    background: ${props => props.theme.fontColor.primary};
  }
`;

const Button = styled.button`
  background-color: ${props => props.theme.backgroundColor.primary};
  border: 2px solid ${props => props.theme.backgroundColor.secondary};
  color: ${props => props.theme.fontColor.primary};

  margin: 1rem 1rem;
  padding: 0.3rem 0.9rem;
  font-size: 1.1rem;
  outline: none;
  font-family: inherit;
  letter-spacing: 0.2rem;
  cursor: pointer;
`;
// border-radius: 15px;

function Column({
  column,
  columnWidth,
  hideColumn,
  createTask,
  editTask,
  deleteTask
}) {
  const [taskTitle, setTaskTitle] = useState(""),
    [taskContent, setTaskContent] = useState(""),
    [taskId, setTaskId] = useState(null),
    [modalIsOpen, setModalIsOpen] = useState(false);

  const handleModalClose = () => {
    setTaskTitle("");
    setTaskContent("");
    setTaskId(null);
    setModalIsOpen(false);
  };

  const handleModalSave = () => {
    if (taskId) {
      editTask(column.id, taskId, taskTitle, taskContent);
    } else {
      createTask(column.id, taskTitle, taskContent);
    }
    handleModalClose();
  };

  const openTaskEdit = task => {
    setTaskId(task.id);
    setTaskTitle(task.title);
    setTaskContent(task.content);
    setModalIsOpen(true);
  };

  return (
    <Container columnWidth={columnWidth}>
      <HeaderWrapper>
        <Header>
          <HeaderTitle>{`${column.title} ${column.tasks.length}`}</HeaderTitle>
          <ActionsWrapper>
            <Icon src="plus.png" onClick={() => setModalIsOpen(true)} />
            <Icon src="hide.png" onClick={hideColumn} />
          </ActionsWrapper>
        </Header>
      </HeaderWrapper>
      <Droppable droppableId={column.id}>
        {provided => (
          <ColumnDroppable
            className="kanban-column-droppable"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {column.tasks.map((task, index) => {
              return (
                <Task
                  task={task}
                  index={index}
                  openTaskEdit={openTaskEdit}
                  deleteTask={() => deleteTask(column.id, task.id)}
                  key={task.id}
                />
              );
            })}
            {provided.placeholder}
          </ColumnDroppable>
        )}
      </Droppable>

      <StyledModal
        isOpen={modalIsOpen}
        onRequestClose={handleModalClose}
        onEscapeKeydown={handleModalClose}
      >
        <TaskInputWrapper>
          <TitleInput
            autoFocus
            type="text"
            value={taskTitle}
            onChange={event => {
              setTaskTitle(event.target.value);
            }}
          />
          <DescriptionInput
            rows="7"
            onChange={event => {
              setTaskContent(event.target.value);
            }}
            value={taskContent}
          />
        </TaskInputWrapper>
        <ActionsWrapper>
          <Button onClick={handleModalClose}>Close</Button>
          <Button onClick={handleModalSave}>Save</Button>
        </ActionsWrapper>
      </StyledModal>
    </Container>
  );
}

export default Column;
