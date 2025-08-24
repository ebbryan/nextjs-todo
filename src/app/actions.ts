import { endpoint } from "@/utils/axios";
import { TodoResponse, TodoType } from "@/zodTypes/todo.type";
import { AxiosError } from "axios";

export const getTodos = async (): Promise<TodoResponse> => {
  try {
    const response = await endpoint.get("/todos/get");
    return response.data as TodoResponse;
  } catch (error) {
    console.error("Error fetching todos:", error);
    throw error;
  }
};

export const createTodo = async (
  payload: Omit<TodoType, "id" | "createdAt" | "updatedAt">
) => {
  try {
    const response = await endpoint.post("/todos/create", payload);
    return response.data;
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      return {
        success: false,
        message: error.response?.data.message || "Failed to create todo",
      };
    }
    throw error;
  }
};

export const updateTodo = async (
  id: string,
  payload: Partial<Omit<TodoType, "id" | "createdAt" | "updatedAt">>
) => {
  try {
    const response = await endpoint.patch(`/todos/update/${id}`, payload);
    return response.data;
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      return {
        success: false,
        message: error.response?.data.message || "Failed to update todo",
      };
    }
    throw error;
  }
};
