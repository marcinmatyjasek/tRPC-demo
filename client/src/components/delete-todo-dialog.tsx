import { FC } from "react";

import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface DeleteTodoDialogProps {
  itemId: number;
  onSuccess?: () => void;
}

export const DeleteTodoDialog: FC<DeleteTodoDialogProps> = ({
  itemId,
  onSuccess,
}) => {
  // TODO: Implement deleteTodo mutation

  return (
    <DialogContent className="w-96 p-4">
      <DialogHeader>
        <DialogTitle className="mb-2">Delete item</DialogTitle>
        <DialogDescription className="flex flex-col gap-2 p -4">
          Are you sure you want to delete this item?
        </DialogDescription>
      </DialogHeader>
      <DialogFooter>
        <DialogClose asChild>
          <Button variant="outline">Cancel</Button>
        </DialogClose>
        <Button
          variant="destructive"
          onClick={() => {
            console.log("delete todo", itemId);
            onSuccess?.();
          }}
        >
          Delete
        </Button>
      </DialogFooter>
    </DialogContent>
  );
};
