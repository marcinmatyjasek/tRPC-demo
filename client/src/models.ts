import { RouterInputs, RouterOutputs } from "./trpc";

export type TodoItemList = RouterOutputs["todo"]["get"];
export type TodoItem = TodoItemList[number];
export type CreateTodoItemInput = RouterInputs["todo"]["create"];
export type UpdateTodoItemInput = RouterInputs["todo"]["update"];
