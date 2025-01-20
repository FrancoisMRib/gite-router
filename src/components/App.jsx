// import { Header } from './Header';
// import { Footer } from './Footer';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { useState } from 'react';
import { LivreDor } from './pages/LivreDor';
import { Accueil } from './pages/Accueil';
import { DecReg } from './pages/DecouvRegion';
import { Reservation } from './pages/Reservation';
import { DecouvGite } from './pages/DecouvGite';
import { Contact } from './pages/Contact';
import { Localisation } from './pages/Localisation';
import { Bournazel } from './pages/Bournazel';
import { Cransac } from './pages/Cransac';
import { Rodez } from './pages/Rodez';
import { Belcastel } from './pages/Belcastel';
import { Flagnac } from './pages/Flagnac';
import { Decazeville } from './pages/Decazeville';
import { Conques } from './pages/Conques';
import { Rocamadour } from './pages/Rocamadour';
import { Map } from './pages/Map_big';

import { Edit } from './pages/Edit';
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
    path:"/belcastel",
    element: <Belcastel/>
  },
  {
    path:"/rodez",
    element: <Rodez/>
  },
  {
    path:"/flagnac",
    element: <Flagnac/>
  },
  {
    path:"/map",
    element: <Map/>
  },
  {
    path:"/rocamadour",
    element: <Rocamadour/>
  },
  {
    path:"/decazeville",
    element: <Decazeville/>
  },
  {
    path:"/conques",
    element: <Conques/>
  },
  {
    path:"/mimi",
    element: <Edit/>
  },
  {
    path:"/bournazel",
    element: <Bournazel/>
  }
])


export function App() {

  //Partie rajoutée pour la fonctionnabilité du tableau
  // const [data, setData] = useState([
  //   { fname: "aaa", lname: "bbb" },
  //   { fname: "ccc", lname: "ddd" },
  //   { fname: "eee", lname: "fff" },
  // ]);

  return (
        <RouterProvider router={router} />
  )
}
