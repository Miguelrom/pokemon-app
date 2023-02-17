import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from './pages/Root';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <p>Some error...</p>,
    children: [],
  },
]);


function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
