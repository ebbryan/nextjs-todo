import Todo from "@/components/Todo";
import { getTodos } from "./actions";

export default async function Home() {
  const todos = await getTodos();
  const { data, success } = todos;

  if (!success || !data || data.length === 0) {
    return <div className="text-center">No todos available</div>;
  }

  return (
    <main className="flex flex-col items-center justify-center max-w-xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center my-2">Todo App</h1>
      <p className="text-center">Manage your tasks efficiently</p>
      <Todo todoData={data} />
    </main>
  );
}
