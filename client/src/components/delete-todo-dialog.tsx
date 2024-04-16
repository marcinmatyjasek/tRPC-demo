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
import { trpc } from "@/trpc";

interface DeleteTodoDialogProps {
  itemId: number;
  onSuccess?: () => void;
}

export const DeleteTodoDialog: FC<DeleteTodoDialogProps> = ({
  itemId,
  onSuccess,
}) => {
  const trpcUtils = trpc.useUtils();
  const { mutate: deleteTodo } = trpc.todo.delete.useMutation({
    onSuccess: async () => {
      await trpcUtils.todo.get.invalidate();
      onSuccess?.();
    },
  });

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
        <Button variant="destructive" onClick={() => deleteTodo(itemId)}>
          Delete
        </Button>
      </DialogFooter>
    </DialogContent>
  );
};
