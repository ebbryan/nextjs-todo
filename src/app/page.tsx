import Todo from "@/components/Todo";
import { getTodos } from "./actions";

export default async function Home() {
  const todos = await getTodos();
  const { data, success } = todos;

  if (!success || !data || data.length === 0) {
    return <div className="text-center">No todos available</div>;
  }

  return (
    <main>
      <h1 className="text-3xl font-bold text-center my-2">Todo App</h1>
      <p className="text-center">Manage your tasks efficiently</p>
      <Todo
        todoData={data.sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        )}
      />
    </main>
  );
}
