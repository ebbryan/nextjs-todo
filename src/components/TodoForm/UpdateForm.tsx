import React from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import z from "zod";
import Spinner from "../Spinner";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import { updateTodo } from "@/app/actions";
import { useRouter } from "@bprogress/next/app";
import { zodResolver } from "@hookform/resolvers/zod";
import { todoSchema, TodoType } from "@/zodTypes/todo.type";
import { TodoUpdateData } from "../Todo";

const UpdateForm = ({
  todo,
  isEditing,
  onTodoClose,
}: {
  todo?: TodoUpdateData;
  isEditing: boolean;
  onTodoClose: () => void;
}) => {
  const router = useRouter();

  const form = useForm<z.infer<typeof todoSchema>>({
    resolver: zodResolver(todoSchema),
    defaultValues: {
      title: todo?.title || "",
      status: todo?.status || "pending",
    },
  });

  const onSubmit = async (
    payload: Omit<TodoType, "createdAt" | "updatedAt">
  ) => {
    const response = await updateTodo(todo?.id || "", payload);
    if (!response.success) {
      form.setError("root", {
        type: "manual",
        message: response.message || "Failed to create todo",
      });
      return;
    }
    onTodoClose();
    form.reset();
    router.refresh();
  };

  return (
    <Form {...form}>
      <form className={`grid grid-cols-3 gap-6`}>
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem className="col-span-2">
              <FormControl>
                <Input
                  {...field}
                  placeholder="Enter Todo"
                  className={`${
                    isEditing ? "border-2 border-blue-500 shadow-lg" : ""
                  }`}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-center items-center gap-1 col-span-1">
          <Button
            disabled={form.formState.isSubmitting}
            onClick={form.handleSubmit(onSubmit)}
          >
            {form.formState.isSubmitting ? (
              <>
                <Spinner />
                <span className="sr-only">Loading...</span>
                Loading
              </>
            ) : (
              "Update Todo"
            )}
          </Button>
          <Button type="button" variant={"outline"} onClick={onTodoClose}>
            Cancel
          </Button>
        </div>

        {form.formState.errors.root && (
          <p className="mt-2 text-center text-red-500 col-span-3">
            {form.formState.errors.root.message}
          </p>
        )}
      </form>
    </Form>
  );
};

export default UpdateForm;
