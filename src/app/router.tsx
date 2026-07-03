import { createBrowserRouter } from "react-router"

import { HomePage } from "@/pages/HomePage"
import { NotFoundPage } from "@/pages/NotFoundPage"
import { routes } from "@/lib/routes"

export const router = createBrowserRouter([
  {
    path: routes.home,
    element: <HomePage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
])
