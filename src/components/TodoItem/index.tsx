import { TodoType } from "@/zodTypes/todo.type";
import React from "react";
import dayjs from "dayjs";
import { TodoUpdateData } from "../Todo";
import { CircleDashed, CircleCheck } from "lucide-react";
import { Card, CardContent, CardDescription, CardTitle } from "../ui/card";
import { Button } from "../ui/button";

const TodoItem = ({
  todo,
  isEditing,
  isActive,
  isDimmed,
  onTodoClick,
}: {
  todo: TodoType;
  isEditing: boolean;
  isActive: boolean;
  isDimmed: boolean;
  onTodoClick: (updateData: TodoUpdateData | undefined) => void;
}) => {
  return (
    <Card
      className={`transition-all duration-300 ${
        isActive ? "border-2 border-blue-500 shadow-lg" : ""
      } ${isDimmed ? "opacity-40" : ""}`}
    >
      <CardContent className="p-5">
        <div className="flex justify-between items-center mb-2">
          <CardTitle className="uppercase text-xl">{todo.title}</CardTitle>
          {todo.status === "pending" ? (
            <span className="flex items-center gap-2">
              <CircleDashed className="text-orange-500" />
              <p>Pending</p>
            </span>
          ) : (
            <span className="flex items-center gap-2">
              <CircleCheck className="text-green-500" />
              <p>Completed</p>
            </span>
          )}
        </div>
        <CardDescription className="flex justify-between items-center gap-2">
          <p className="text-sm text-gray-500 italic">
            Date Created: {dayjs(todo.createdAt).format("DD/MM/YYYY")}
          </p>
          <Button onClick={() => onTodoClick(todo)} disabled={isEditing}>
            Edit
          </Button>
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default TodoItem;
