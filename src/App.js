import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import SignIn from "./components/sign-in/sign-in.component";
import { Routes, Route } from "react-router-dom";

const Shop = () => {
  return <h1>I am the shop page</h1>
}

/*  <Route path='/' element={<Home />}>_________________
        <Route path="shop" element={<Shop />} />        |____ Estos son los hijos de la ruta padre con path "/", para que sean visibles, el componente "Home" debe tener declarado el elemento "<Outlet />"
        <Route path="test" element={<Test />} />________|
      </Route>*/

      /* <Route index element={<Home />} />  */ // El atributo "index" hace que se renderice el componente Home cuando sea exact path "/",
      // Es lo mismo que decir que a la url genérica sin path, su componente base a renderizar sea el que tiene index, que es igual a escribir index = {true}
      // Además en el path "/" renderizará a <Navigation /> y a < Home />
      // en el path "/shop" mostrará <Shop />
const App = () => {

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />  
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
}

export default App;
