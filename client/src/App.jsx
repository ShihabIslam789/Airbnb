
import './App.css'
import {Route,Routes} from "react-router-dom";
import IndexPage from './pages/IndexPage';
function App() {
 
  return (
    <Routes>
      <Route path = "/" element= {<Layout />} >
        <Route index element = {<IndexPage />} /> 
        <Route path ="/Login" element={<LoginPage />} />
      </Route>
      
    </Routes>
    

  )
}

export default App
