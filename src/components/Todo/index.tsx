"use client";

import React, { useState } from "react";
import TodoItem from "../TodoItem";
import CreateForm from "../TodoForm/CreateForm";
import { TodoType } from "@/zodTypes/todo.type";
import UpdateForm from "../TodoForm/UpdateForm";

export type TodoUpdateData = Omit<TodoType, "createdAt" | "updatedAt">;

interface TodoComponentProps {
  todoData: TodoType[];
  isSuccess: boolean;
}

const Todo = (props: TodoComponentProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updateTodo, setUpdateTodo] = useState<TodoUpdateData | undefined>({
    id: "",
    title: "",
    status: "pending",
  });
  const [activeTodoId, setActiveTodoId] = useState<string | undefined>("");

  const togglers = () => {
    const onEdit = (todoPayload: TodoUpdateData | undefined) => {
      if (todoPayload) {
        setIsEditing(true);
        setUpdateTodo(todoPayload);
        setActiveTodoId(todoPayload.id);
      }
    };
    const onCloseEdit = () => {
      setIsEditing(false);
      setUpdateTodo(undefined);
      setActiveTodoId("");
    };

    return { onEdit, onCloseEdit };
  };

  const todoClickHandler = (todoPayload: TodoUpdateData | undefined) => {
    if (todoPayload) {
      togglers().onEdit(todoPayload);
    }
  };

  //   if (!success || !data || data.length === 0) {
  //   return <div className="text-center">No todos available</div>;
  // }

  const todoCloseHandler = () => {
    togglers().onCloseEdit();
  };

  return (
    <section className="w-full mx-auto p-2 flex flex-col gap-4">
      <div className="flex flex-col gap-2 overflow-y-auto max-h-[calc(100vh-200px)] [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        {!props.isSuccess || !props.todoData || props.todoData.length === 0 ? (
          <div className="text-center flex flex-col items-center justify-center max-h-[calc(100vh-200px)]">
            <h1>No todos available</h1>
          </div>
        ) : (
          props.todoData.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              isEditing={isEditing}
              isActive={activeTodoId === todo.id}
              isDimmed={isEditing && activeTodoId !== todo.id}
              onTodoClick={(updateData) => todoClickHandler(updateData)}
            />
          ))
        )}
      </div>
      {isEditing ? (
        <UpdateForm
          todo={updateTodo}
          isEditing={isEditing}
          onTodoClose={todoCloseHandler}
        />
      ) : (
        <CreateForm />
      )}
    </section>
  );
};

export default Todo;
