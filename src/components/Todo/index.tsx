"use client";

import React, { useState } from "react";
import TodoItem from "../TodoItem";
import CreateForm from "../TodoForm/CreateForm";
import { TodoType } from "@/zodTypes/todo.type";

export type TodoUpdateData = Omit<TodoType, "createdAt" | "updatedAt">;

const Todo = ({ todoData }: { todoData: TodoType[] }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updateTodo, setUpdateTodo] = useState<TodoUpdateData | undefined>({
    id: "",
    title: "",
    status: "pending",
  });

  const togglers = () => {
    const onEdit = (todoPayload: TodoUpdateData | undefined) => {
      if (!isEditing) setIsEditing(true);
      setUpdateTodo(todoPayload);
    };
    const onCloseEdit = () => {
      if (isEditing) setIsEditing(false);
      setUpdateTodo(undefined);
    };

    return { onEdit, onCloseEdit };
  };

  const todoClickHandler = (todoPayload: TodoUpdateData | undefined) => {
    if (todoPayload) {
      togglers().onEdit(todoPayload);
    }
  };

  const todoCloseHandler = () => {
    togglers().onCloseEdit();
  };

  return (
    <section className="w-full mx-auto p-2">
      <div className="overflow-y-auto max-h-[calc(100vh-200px)] [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        {todoData.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onTodoClick={(updateData) => todoClickHandler(updateData)}
            onCloseEdit={todoCloseHandler}
          />
        ))}
      </div>
      {isEditing ? (
        <h1>
          {updateTodo?.title}, {updateTodo?.status}
        </h1>
      ) : (
        <CreateForm />
      )}
    </section>
  );
};

export default Todo;
