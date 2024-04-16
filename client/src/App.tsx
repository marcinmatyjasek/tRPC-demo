import { Suspense, useState } from "react";
import { trpc } from "./trpc";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { httpBatchLink } from "@trpc/client";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { TodoList } from "@/components/todo-list";
import { CreateTodoItem } from "@/components/create-todo-item";

function App() {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClientState] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          url: "http://localhost:4000/trpc",
        }),
      ],
    })
  );

  return (
    <trpc.Provider client={trpcClientState} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <div className="base-grid max-w-[1440px] md:mx-auto min-h-screen flex justify-center items-center">
          <div className="grid grid-cols-2 gap-10">
            <CreateTodoItem />
            <Suspense fallback={<div>Loading...</div>}>
              <TodoList />
            </Suspense>
          </div>
        </div>

        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </trpc.Provider>
  );
}

export default App;
