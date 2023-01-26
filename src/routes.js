import About from "./pages/About";
import MainPage from "./pages/MainPage";
import FactPage from "./pages/FactPage";

const routes = [
    {
        element: <MainPage />,
        path: '/'
    },
       
    {
        element: <About />,
        path: 'about'
    },
    {
        element: <FactPage />,
        path: ':factId'
    }, 
]

export default routes;