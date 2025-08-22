import { TodoType } from "@/zodTypes/todo.type";
import React from "react";
import dayjs from "dayjs";

const TodoItem = ({ todo }: { todo: TodoType }) => {
  return (
    <div className="border p-4 mb-2">
      <h2 className="text-xl">{todo.title}</h2>
      <p>Status: {todo.status}</p>
      <p>Created At: {dayjs(todo.createdAt).format("MMM-DD-YYYY")}</p>
      <p>Updated At: {dayjs(todo.updatedAt).format("MMM-DD-YYYY")}</p>
    </div>
  );
};

export default TodoItem;
