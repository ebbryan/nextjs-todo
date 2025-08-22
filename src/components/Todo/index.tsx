"use client";

import { TodoType } from "@/zodTypes/todo.type";
import React from "react";

const Todo = ({ todoData }: { todoData: TodoType[] }) => {
  console.log("Todo Data:", todoData);
  return (
    <section>
      <div>
        <h1 className="text-2xl font-bold">Todo List</h1>
        <div className="overflow-y-auto max-h-[calc(100vh-200px)]">
          {todoData.map((todo) => (
            <div key={todo.id} className="border p-4 mb-2">
              <h2 className="text-xl">{todo.title}</h2>
              <p>Status: {todo.status}</p>
              <p>Created At: {new Date(todo.createdAt).toLocaleString()}</p>
              <p>Updated At: {new Date(todo.updatedAt).toLocaleString()}</p>
            </div>
          ))}
        </div>
      </div>
      <div>TODO FORM HERE</div>
    </section>
  );
};

export default Todo;
