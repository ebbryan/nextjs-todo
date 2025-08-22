import { endpoint } from "@/utils/axios";
import { TodoResponse } from "@/zodTypes/todo.type";

export const getTodos = async (): Promise<TodoResponse> => {
  try {
    const response = await endpoint.get("/todos");
    return response.data as TodoResponse;
  } catch (error) {
    console.error("Error fetching todos:", error);
    throw error;
  }
};
