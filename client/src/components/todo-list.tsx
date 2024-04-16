import { trpc } from "@/trpc";
import { TodoListItem } from "./todo-list-item";

export const TodoList = () => {
  const [todos] = trpc.todo.get.useSuspenseQuery();
  return (
    <div className="flex flex-col gap-4 w-96 border-2 border-slate-100 rounded-md p-4 shadow-md">
      {todos.map((todo) => (
        <TodoListItem key={todo.id} item={todo} />
      ))}
    </div>
  );
};
