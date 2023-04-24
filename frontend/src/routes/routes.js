//Routes.js
import { Route, Routes as RoutesDom } from "react-router-dom"
import Home from "../pages/Home/Home"
const Routes = () => {
  return (
      <RoutesDom>
        <Route index element={<Home />}/>
      </RoutesDom>
  )
}

export default Routes