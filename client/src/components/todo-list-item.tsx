import { FC, useState } from "react";
import { DialogTrigger } from "@radix-ui/react-dialog";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog } from "@/components/ui/dialog";
import { TodoItem } from "@/models";
import { UpdateTodoDialog } from "./update-todo-dialog";
import { DeleteTodoDialog } from "./delete-todo-dialog";
import { cn } from "@/lib/utils";

interface TodoListItemProps {
  item: TodoItem;
}

export const TodoListItem: FC<TodoListItemProps> = ({ item }) => {
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

  // TODO: Implement toggleIsCompleted mutation

  return (
    <Card className="p-4 flex items-center gap-2 cursor-pointer">
      <Checkbox
        checked={item.isCompleted}
        onCheckedChange={(value) => console.log("toggleIsCompleted", value)}
      />
      <div className={cn(item.isCompleted && "line-through")}>
        <p className="leading-7 line-clamp-1 font-semibold">{item.title}</p>
        <p className="opacity-70 leading-3 line-clamp-1 text-sm">
          {item.content}
        </p>
      </div>

      <div className="flex gap-1 ml-auto">
        <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
          <DialogTrigger asChild>
            <Button variant="default" size="xs">
              E
            </Button>
          </DialogTrigger>
          <UpdateTodoDialog
            onSuccess={() => setIsEditDialogOpen(false)}
            item={item}
          />
        </Dialog>

        <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
          <DialogTrigger asChild>
            <Button variant="destructive" size="xs">
              X
            </Button>
          </DialogTrigger>
          <DeleteTodoDialog
            onSuccess={() => setIsDeleteDialogOpen(false)}
            itemId={item.id}
          />
        </Dialog>
      </div>
    </Card>
  );
};
