import { useReducer } from "react";
import { Label } from "@radix-ui/react-label";
import { CreateTodoItemInput } from "@/models";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const DEFAULT_CREATE_TODO_ITEM_STATE: CreateTodoItemInput = {
  title: "",
  content: "",
};

export const CreateTodoItem = () => {
  const [newItem, setNewItem] = useReducer(
    (state: CreateTodoItemInput, newState: Partial<CreateTodoItemInput>) => ({
      ...state,
      ...newState,
    }),
    DEFAULT_CREATE_TODO_ITEM_STATE
  );

  // TODO: implement createTodo mutation

  return (
    <div className="flex flex-col gap-3">
      <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0">
        Add Todo Item
      </h2>
      <Label htmlFor="todo-title">Title</Label>
      <Input
        id="todo-title"
        value={newItem.title}
        onChange={(e) =>
          setNewItem({
            title: e.target.value,
          })
        }
      />
      <Label htmlFor="todo-content">Content</Label>
      <Input
        id="todo-content"
        value={newItem.content || ""}
        onChange={(e) =>
          setNewItem({
            content: e.target.value,
          })
        }
      />
      <Button onClick={() => console.log("Add todo", newItem)}>Add</Button>
    </div>
  );
};
