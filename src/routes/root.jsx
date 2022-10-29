import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import ESAbout from "../components/About"
import ESErrorPage from "../components/ErrorPage"
import ESNews from "../components/News"
import ESPageLayout from "../components/PageLayout"
import ESProducts from "../components/Products"

const route = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"

      element={<ESPageLayout />}
      errorElement={<ESErrorPage />}
    >
      <Route index path="/sobre" element={<ESAbout />} />
      <Route path="/noticias" element={<ESNews />} />
      <Route path="/produtos" element={<ESProducts />} />
    </Route>
  )
)

const Root = () => {
  return (
    <RouterProvider router={route} />
  )
}

export default Root