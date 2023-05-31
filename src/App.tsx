
import { ChakraProvider } from '@chakra-ui/react'
import './App.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path:'/about',
    element: <About/>
  }
]);

function App() {
  return (
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  )
}

export default App
