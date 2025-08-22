"use client";

import { todoSchema, TodoType } from "@/zodTypes/todo.type";
import React from "react";
import TodoItem from "../TodoItem";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Spinner from "../Spinner";

const Todo = ({ todoData }: { todoData: TodoType[] }) => {
  const form = useForm<z.infer<typeof todoSchema>>({
    resolver: zodResolver(todoSchema),
    defaultValues: {
      title: "",
      status: "pending",
    },
  });

  const onSubmit = async (payload: TodoType) => {
    console.log(payload);
    form.reset();
  };

  return (
    <section className="w-full mx-auto p-2">
      <div className="overflow-y-auto max-h-[calc(100vh-200px)] [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        {todoData.map((todo) => (
          <TodoItem todo={todo} key={todo.id} />
        ))}
      </div>
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
    </section>
  );
};

export default Todo;
