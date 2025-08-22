"use client";

import { TodoType } from "@/zodTypes/todo.type";
import React from "react";

const Todo = ({ todoData }: { todoData: TodoType[] }) => {
  console.log("Todo Data:", todoData);
  return (
    <section>
      <div>
        <h1 className="text-2xl font-bold">Todo List</h1>
        {/* Todo list items will go here */}
      </div>
      <div>TODO FORM HERE</div>
    </section>
  );
};

export default Todo;
