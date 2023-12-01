import './App.css'
import {Route, Routes} from "react-router-dom";
import IndexPage from "./pages/IndexPage.jsx";
import LoginPage from "./pages/LoginPage";
import Layout from "./Layout";
import RegisterPage from "./pages/RegisterPage";
import axios from "axios";
import {UserContextProvider} from "./UserContext";
import ProfilePage from "./pages/ProfilePage.jsx";
import PlacesPage from "./pages/PlacesPage";
import PlacesFormPage from "./pages/PlacesFormPage";
import PlacePage from "./pages/PlacePage";

axios.defaults.baseURL = 'http://Localhost:4000';
axios.defaults.withcredentials = true;
function App() {
 
  return (
    <UserContextProvider>
    <Routes>
      <Route path = "/" element= {<Layout />} >
        <Route index element = {<IndexPage />} /> 
        <Route path ="/Login" element={<LoginPage />} />
        <Route path ="/register" element={<RegisterPage />} />
        <Route path="/account" element={<ProfilePage />} />
        <Route path="/account/places" element={<PlacesPage />} />
        <Route path="/account/places/new" element={<PlacesFormPage />} />
        <Route path="/account/places/:id" element={<PlacesFormPage />} />
        <Route path="/place/:id" element={<PlacePage />} />
      </Route>
    </Routes>
    </UserContextProvider>
    

  )
}

export default App
