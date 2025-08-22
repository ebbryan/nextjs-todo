import Todo from "@/components/Todo";
import { getTodos } from "./actions";

export default async function Home() {
  const todos = await getTodos();
  const { data, success } = todos;

  if (!success || !data || data.length === 0) {
    return <div className="text-center">No todos available</div>;
  }

  return <Todo todoData={data} />;
}
