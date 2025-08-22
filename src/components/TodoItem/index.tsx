import { TodoType } from "@/zodTypes/todo.type";
import React from "react";
import dayjs from "dayjs";
import { TodoUpdateData } from "../Todo";

const TodoItem = ({
  todo,
  onTodoClick,
  onCloseEdit,
}: {
  todo: TodoType;
  onTodoClick: (updateData: TodoUpdateData | undefined) => void;
  onCloseEdit?: () => void;
}) => {
  return (
    <div className="border p-4 mb-2">
      <h2 className="text-xl">{todo.title}</h2>
      <p>Status: {todo.status}</p>
      <p>Created At: {dayjs(todo.createdAt).format("MMM-DD-YYYY")}</p>
      <p>Updated At: {dayjs(todo.updatedAt).format("MMM-DD-YYYY")}</p>
      <div className="cursor-pointer" onClick={() => onTodoClick(todo)}>
        TEST ICON FOR EDIT MODE!
      </div>
      <div className="cursor-pointer" onClick={onCloseEdit}>
        TEST ICON FOR Close Edit MODE!
      </div>
    </div>
  );
};

export default TodoItem;
