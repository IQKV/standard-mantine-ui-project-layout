import { StrictMode, useEffect } from "react";

import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { ModalsProvider } from "@mantine/modals";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { createRouter, RouterProvider } from "@tanstack/react-router";
import { I18nProvider } from "@lingui/react";
import { i18n } from "@lingui/core";

import { routeTree } from "@/routeTree.gen";
import { theme } from "./theme";
import { ErrorBoundary } from "@/shared/ui";

import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { staleTime: 1000 * 60, refetchOnWindowFocus: false },
    mutations: { retry: false },
  },
});

const router = createRouter({ routeTree, defaultPreload: "intent" });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export function App() {
  useEffect(() => {
    const loadLocale = async () => {
      const { dynamicActivateLocale, getClientLocale } = await import("@/shared/locales");
      await dynamicActivateLocale(getClientLocale());
    };
    loadLocale().catch(console.error);
  }, []);

  return (
    <StrictMode>
      <I18nProvider i18n={i18n}>
        <ErrorBoundary>
          <MantineProvider theme={theme}>
            <ModalsProvider>
              <Notifications />
              <QueryClientProvider client={queryClient}>
                <RouterProvider router={router} />
                <ReactQueryDevtools initialIsOpen={false} />
              </QueryClientProvider>
            </ModalsProvider>
          </MantineProvider>
        </ErrorBoundary>
      </I18nProvider>
    </StrictMode>
  );
}
