import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import ESAbout from "../components/About"
import ESErrorPage from "../components/ErrorPage"
import ESNews from "../components/News"
import ESPageLayout from "../components/PageLayout"
import ESAlbums from "../components/Albums"
// import '../App.css'

const route = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"

      element={<ESPageLayout />}
      errorElement={<ESErrorPage />}
    >
      <Route index path="/sobre" element={<ESAbout />} />
      <Route path="/noticias" element={<ESNews />} />
      <Route path="/albuns" element={<ESAlbums />} />
    </Route>
  )
)

const Root = () => {
  return (
    <RouterProvider router={route} />
  )
}

export default Root