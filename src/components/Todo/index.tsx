"use client";

import React from "react";
import TodoItem from "../TodoItem";
import CreateForm from "../TodoForm/CreateForm";
import { TodoType } from "@/zodTypes/todo.type";

const Todo = ({ todoData }: { todoData: TodoType[] }) => {
  return (
    <section className="w-full mx-auto p-2">
      <div className="overflow-y-auto max-h-[calc(100vh-200px)] [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        {todoData.map((todo) => (
          <TodoItem todo={todo} key={todo.id} />
        ))}
      </div>
      <CreateForm />
    </section>
  );
};

export default Todo;
