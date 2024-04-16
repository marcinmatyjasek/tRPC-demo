import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { UpdateTodoItemInput } from "@/models";
import { FC, useReducer } from "react";

interface EditTodoDialogProps {
  item: UpdateTodoItemInput;
  onSuccess?: () => void;
}

export const UpdateTodoDialog: FC<EditTodoDialogProps> = ({
  item,
  onSuccess,
}) => {
  const [updatedItem, setUpdatedItem] = useReducer(
    (state: UpdateTodoItemInput, newState: Partial<UpdateTodoItemInput>) => ({
      ...state,
      ...newState,
    }),
    item
  );

  // TODO: implement updateTodo mutation

  return (
    <DialogContent className="w-96 p-4">
      <DialogHeader>
        <DialogTitle className="mb-2">Edit item - {item.title}</DialogTitle>
        <DialogDescription className="flex flex-col gap-2 p -4">
          <Label htmlFor="todo-title">Title</Label>
          <Input
            id="todo-title"
            value={updatedItem.title}
            onChange={(e) =>
              setUpdatedItem({
                title: e.target.value,
              })
            }
          />
          <Label htmlFor="todo-description">Description</Label>
          <Input
            id="todo-description"
            value={updatedItem.content || ""}
            onChange={(e) =>
              setUpdatedItem({
                content: e.target.value,
              })
            }
          />
        </DialogDescription>
      </DialogHeader>
      <DialogFooter>
        <DialogClose asChild>
          <Button variant="outline">Cancel</Button>
        </DialogClose>

        <Button
          type="submit"
          onClick={() => {
            console.log("updateItem", updatedItem);
            onSuccess?.();
          }}
        >
          Save
        </Button>
      </DialogFooter>
    </DialogContent>
  );
};
