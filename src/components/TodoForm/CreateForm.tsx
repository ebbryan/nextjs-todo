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
import { createTodo } from "@/app/actions";
import { useRouter } from "@bprogress/next/app";
import { zodResolver } from "@hookform/resolvers/zod";
import { todoSchema, TodoType } from "@/zodTypes/todo.type";

const CreateForm = () => {
  const router = useRouter();

  const form = useForm<z.infer<typeof todoSchema>>({
    resolver: zodResolver(todoSchema),
    defaultValues: {
      title: "",
      status: "pending",
    },
  });

  const onSubmit = async (
    payload: Omit<TodoType, "id" | "createdAt" | "updatedAt">
  ) => {
    const response = await createTodo(payload);
    if (!response.success) {
      form.setError("root", {
        type: "manual",
        message: response.message || "Failed to create todo",
      });
      return;
    }
    form.reset();
    router.refresh();
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid grid-cols-3 gap-2"
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem className="col-span-2">
              <FormControl>
                <Input {...field} placeholder="Enter Todo" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="col-span-1"
          disabled={form.formState.isSubmitting}
        >
          {form.formState.isSubmitting ? (
            <>
              <Spinner />
              <span className="sr-only">Loading...</span>
              Loading
            </>
          ) : (
            "Add Todo"
          )}
        </Button>

        {form.formState.errors.root && (
          <p className="mt-2 text-center text-red-500 col-span-3">
            {form.formState.errors.root.message}
          </p>
        )}
      </form>
    </Form>
  );
};

export default CreateForm;
