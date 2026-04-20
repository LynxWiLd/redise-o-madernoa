import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { Home } from "./pages/Home";
import { Catalog } from "./pages/Catalog";
import { ProductDetail } from "./pages/ProductDetail";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "catalogo", Component: Catalog },
      { path: "producto/:id", Component: ProductDetail },
      { path: "nosotros", Component: About },
      { path: "contacto", Component: Contact },
      { path: "*", Component: NotFound },
    ],
  },
]);
