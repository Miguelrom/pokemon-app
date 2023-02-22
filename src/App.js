import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./pages/About";
import Adoptions from "./pages/Adoptions";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";
import Pokemon from "./pages/Pokemon";
import Root from './pages/Root';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <p>Some error...</p>,
    children: [
      {index: true, element: <Home />, },
      {path: 'pokemon', element: <Pokemon />},
      {path: 'adoptions', element: <Adoptions />},
      {path: 'about', element: <About />},
      {path: 'checkout', element: <Checkout />},
    ],
  },
]);


function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
