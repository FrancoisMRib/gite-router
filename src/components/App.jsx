// import { Header } from './Header';
// import { Footer } from './Footer';
import { LivreDor } from './pages/LivreDor';
import { Accueil } from './pages/Accueil';
import { DecReg } from './pages/DecouvRegion';
import { Reservation } from './pages/Reservation';
import { DecouvGite } from './pages/DecouvGite';
import { Contact } from './pages/Contact';
import { Localisation } from './pages/Localisation';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Bournazel } from './pages/Bournazel';
import { Cransac } from './pages/Cransac';
// import './App.css'
const router = createBrowserRouter([
  {
    path:"/",
    element: <Accueil/>
  },
  {
    path:"/gite",
    element: <DecouvGite/>
  },
  {
    path:"/region",
    element: <DecReg/>
  },
  {
    path:"/contact",
    element: <Contact/>
  },
  {
    path:"/localisation",
    element: <Localisation/>
  },{
    path:"/reservations",
    element: <Reservation/>
  },
  {
    path:"/livredor",
    element: <LivreDor/>
  },
  {
    path:"/cransac",
    element: <Cransac/>
  },
  {
    path:"/bournazel",
    element: <Bournazel/>
  }
])


export function App() {

  return (
        <RouterProvider router={router} />
  )
}
